import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { compose, graphql } from 'react-apollo';
import { Formik } from 'formik';
import { ModalContext, ModalConsumer } from '../../context';
import { GET_CUSTOMERS, UPDATE_CUSTOMER, DELETE_CUSTOMER } from '../../queries';
import history from '../../history';
import s from './Modal.css';


class Modal extends Component {
    static propTypes = {
        deleteCustomer: PropTypes.func.isRequired,
        updateCustomer: PropTypes.func.isRequired,
    }

    render() {
        const { updateCustomer, deleteCustomer } = this.props;
        return (
            <ModalConsumer>
                {({ name, close }) => (
                    name && (
                        <div className={s.modal} onClick={close}>
                            <div className={s.modalInner} onClick={e => e.stopPropagation()}>
                                <button type="button" className={s.close} onClick={close}>X</button>
                                { name === 'edit' && <Edit updateCustomer={updateCustomer} />}
                                { name === 'delete' && <Delete deleteCustomer={deleteCustomer} />}
                            </div>
                        </div>
                    )
                )}
            </ModalConsumer>
        );
    }
}

export class Edit extends Component {
    static propTypes = {
        updateCustomer: PropTypes.func.isRequired,
    }

    submit = (values) => {
        const { location: { pathname } } = history;
        const id = pathname.substring(1);
        const { updateCustomer } = this.props;

        console.log(values);
        // updateCustomer({
        //     variables: { id, values },
        // });
    };

    render() {
        return (
            <>
                <h1>Edit data</h1>
                <Formik
                    initialValues={{
                        name: '',
                        email: '',
                    }}
                    onSubmit={this.submit}
                >
                    {({ dirty,
                        values,
                        isSubmitting,
                        handleChange,
                        handleSubmit,
                    }) => (
                        <>
                            <form onSubmit={handleSubmit}>
                                <label htmlFor="name">
                                    Name
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="name"
                                        onChange={handleChange}
                                        value={values.name || ''}
                                    />
                                </label>
                                <label htmlFor="email">
                                    Email
                                    <input
                                        type="text"
                                        name="email"
                                        placeholder="email"
                                        onChange={handleChange}
                                        value={values.email || ''}
                                    />
                                </label>
                                <button disabled={!dirty || isSubmitting} type="submit">Save</button>
                            </form>
                        </>
                    )}
                </Formik>
            </>
        );
    }
}

export class Delete extends Component {
    static propTypes = {
        deleteCustomer: PropTypes.func.isRequired,
    }

    static contextType = ModalContext;

    delete = () => {
        const { close } = this.context;
        const { deleteCustomer } = this.props;
        const { location: { pathname } } = history;
        const id = pathname.substring(1);

        close();
        deleteCustomer({ variables: { id } });
    }

    cancel = () => {
        const { close } = this.context;
        close();
    }

    render() {
        return (
            <>
                <h1>Delete this item?</h1>
                <button type="submit" onClick={this.delete}>Delete</button>
                <button type="submit" onClick={this.cancel}>Cancel</button>
            </>
        );
    }
}

export default compose(
    graphql(DELETE_CUSTOMER, {
        name: 'deleteCustomer',
        options: {
            update: (cache, { data: { deleteCustomer: { id } } }) => {
                try {
                    const { customers } = cache.readQuery({ query: GET_CUSTOMERS });
                    cache.writeQuery({
                        query: GET_CUSTOMERS,
                        data: { customers: customers.filter(customer => customer.id !== id) },
                    });
                    history.push('/');
                } catch (err) {
                    console.log(err);
                }
            },
        },
    }),
    graphql(UPDATE_CUSTOMER, { name: 'updateCustomer' }),
)(Modal);

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { compose, graphql } from 'react-apollo';
import { Formik } from 'formik';
import { CREATE_CUSTOMER } from '../../queries';
import history from '../../history';
import Link from '../../components/link/Link.tsx';
import s from './Add.css';

class Add extends Component {
    static propTypes = {
        createCustomer: PropTypes.func.isRequired,
    };

    submit = (values, { resetForm }) => {
        const { createCustomer } = this.props;
        createCustomer({ variables: values });
        resetForm({});
        history.push('/');
    }

    render() {
        return (
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
                            <button disabled={!dirty || isSubmitting} type="submit">Submit</button>
                        </form>
                        <Link to="/">Back</Link>
                    </>
                )}
            </Formik>
        );
    }
}

export default compose(
    graphql(CREATE_CUSTOMER, { name: 'createCustomer' }),
)(Add);

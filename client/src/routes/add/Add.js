import React, { Component } from 'react';
import { compose, graphql } from 'react-apollo';
import { Formik } from 'formik';
import { CREATE_CUSTOMER } from '../../queries';
import s from './Add.css';

class Add extends Component {
    submit = (values) => {
        const { createCustomer } = this.props;
        createCustomer({ variables: values });
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
                    isSubmitting,
                    handleChange,
                    handleSubmit,
                }) => (
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="name">
                            Name
                            <input
                                type="text"
                                id="name"
                                placeholder="name"
                                onChange={handleChange}
                            />
                        </label>
                        <label htmlFor="email">
                            Email
                            <input
                                type="text"
                                id="email"
                                placeholder="email"
                                onChange={handleChange}
                            />
                        </label>
                        <button disabled={!dirty || isSubmitting} type="submit">Submit</button>
                    </form>
                )}
            </Formik>
        );
    }
}

export default compose(
    graphql(CREATE_CUSTOMER, { name: 'createCustomer' }),
)(Add);

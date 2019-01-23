import React, { Component } from 'react';
import { Formik } from 'formik';

class Add extends Component {
    submit = (values) => {
        console.log(values);
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
                    handleSubmit
                }) => (
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="name" id="name" style={{ display: 'block' }}>
                            Name
                        </label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            placeholder="name"
                            onChange={handleChange}
                        />
                        <label htmlFor="email" id="email" style={{ display: 'block' }}>
                            Email
                        </label>
                        <input
                            type="text"
                            name="email"
                            id="email"
                            placeholder="email"
                            onChange={handleChange}
                        />
                        <button disabled={!dirty || isSubmitting} type="submit" style={{ display: 'block' }}>Submit</button>
                    </form>
                )}
            </Formik>
        );
    }
}

export default Add;

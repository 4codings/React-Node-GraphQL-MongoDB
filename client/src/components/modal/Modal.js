import React, { Component } from 'react';
import { Formik } from 'formik';
import { ModalConsumer } from '../../context';
import s from './Modal.css';

class Modal extends Component {
    render() {
        return (
            <ModalConsumer>
                {({ name, close }) => (
                    name && (
                        <div className={s.modal} onClick={close}>
                            <div className={s.modalInner} onClick={e => e.stopPropagation()}>
                                <button type="button" className={s.close} onClick={close}>X</button>
                                { name === 'edit' && <Edit />}
                                { name === 'delete' && <Delete />}
                            </div>
                        </div>
                    )
                )}
            </ModalConsumer>
        );
    }
}

export class Edit extends Component {
    submit = () => {
        console.log('Saved');
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
    delete = () => {
        console.log('Deleted');
    }

    cancel = () => {
        console.log('Canceled');
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

export default Modal;

import React, { Component } from 'react';
import { ModalConsumer } from '../../context';
import s from './Modal.css';

class Modal extends Component {
    render() {
        return (
            <ModalConsumer>
                {({ name, close }) => (
                    name && (
                        <div className={s.modal}>
                            <div className={s.modalInner}>
                                <button type="button" className={s.close} onClick={() => close()}>X</button>
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

export const Edit = () => (
    <h1>Edit data</h1>
);

export const Delete = () => (
    <h1>Are you sure you want to delete this item?</h1>
);

export default Modal;

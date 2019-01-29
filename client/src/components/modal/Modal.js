import React, { Component } from 'react';
import { ModalConsumer } from '../../context';
import s from './Modal.css';

class Modal extends Component {
    render() {
        return (
            <ModalConsumer>
                {({ content: Content }) => (
                    Content && (
                        <div className={s.modal}>
                            <div className={s.modalInner}>
                                <Content />
                            </div>
                        </div>
                    )
                )}
            </ModalConsumer>
        );
    }
}

export default Modal;

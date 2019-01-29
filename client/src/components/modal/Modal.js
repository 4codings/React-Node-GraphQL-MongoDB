import React, { Component } from 'react';
import { ModalContext } from '../../context';

class Modal extends Component {
    render() {
        return (
            <ModalContext.Consumer>
                {({ component: Component, props, close }) => {
                    return (
                        Component ? <Component {...props} onClose={close} /> : null
                    );
                }}
            </ModalContext.Consumer>
        );
    }
}

export default Modal;

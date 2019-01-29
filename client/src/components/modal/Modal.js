import React, { Component } from 'react';
import { ModalContext } from '../../context';

class Modal extends Component {
    render() {
        return (
            <ModalContext.Consumer>
                {({ content, close }) => (
                    content && (
                        <>
                            <h1>{content}</h1>
                            <button type="button" onClick={() => close()}>Close</button>
                        </>
                    ))
                }
            </ModalContext.Consumer>
        );
    }
}

export default Modal;

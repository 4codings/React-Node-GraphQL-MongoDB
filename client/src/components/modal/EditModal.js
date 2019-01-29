import React, { Component } from 'react';
import { ModalConsumer } from '../../context';


class Modal extends Component {
    render() {
        return (
            <ModalConsumer>
                {({ close }) => (
                    <>
                        <h1>Edit data</h1>
                        <button type="button" onClick={() => close()}>Close modal</button>
                    </>
                )}
            </ModalConsumer>
        );
    }
}

export default Modal;

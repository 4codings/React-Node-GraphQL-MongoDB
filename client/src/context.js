import React, { Component, createContext } from 'react';
import PropTypes from 'prop-types';

export const ModalContext = createContext({
    component: null,
    props: {},
    showModal: () => {},
    hideModal: () => {},
});

export class ModalProvider extends Component {
    static propTypes = {
        children: PropTypes.node.isRequired,
    };

    state = {
        component: null,
        props: {},
    }

    showModal = (component, props = {}) => {
        this.setState({
            component,
            props,
        });
    };

    hideModal = () => {

    };

    render() {
        const { children } = this.props;
        const { component, props } = this.state;

        return (
            <ModalContext.Provider
                value={{
                    open: this.openModal,
                    close: this.closeModal,
                    component,
                    props,
                }}
            >
                {children}
            </ModalContext.Provider>
        );
    }
}

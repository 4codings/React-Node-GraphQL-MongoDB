import React, { Component, createContext } from 'react';
import PropTypes from 'prop-types';

export const ModalContext = createContext();

export class ModalProvider extends Component {
    static propTypes = {
        children: PropTypes.node.isRequired,
    };

    state = {
        name: '',
    }

    openModal = (name) => {
        this.setState({
            name,
        });
    };

    closeModal = () => {
        this.setState({
            name: '',
        });
    };

    render() {
        const { children } = this.props;
        const { name } = this.state;

        return (
            <ModalContext.Provider
                value={{
                    open: this.openModal,
                    close: this.closeModal,
                    name,
                }}
            >
                {children}
            </ModalContext.Provider>
        );
    }
}

export const ModalConsumer = ModalContext.Consumer;

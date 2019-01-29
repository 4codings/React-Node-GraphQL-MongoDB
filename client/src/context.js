import React, { Component, createContext } from 'react';
import PropTypes from 'prop-types';

export const ModalContext = createContext();

export class ModalProvider extends Component {
    static propTypes = {
        children: PropTypes.node.isRequired,
    };

    state = {
        content: null,
    }

    openModal = (content) => {
        this.setState({
            content,
        });
    };

    closeModal = () => {
        this.setState({
            content: null,
        });
    };

    render() {
        const { children } = this.props;
        const { content } = this.state;

        return (
            <ModalContext.Provider
                value={{
                    open: this.openModal,
                    close: this.closeModal,
                    content,
                }}
            >
                {children}
            </ModalContext.Provider>
        );
    }
}

import React, { Component } from 'react';
import history from '../../history';
import * as s from './Link.css';

export interface LinkProps {
  to: string;
  children: string;
}

class Link extends Component<LinkProps> {
    handleClick = (e) => {
        e.preventDefault();
        history.push({
            pathname: e.currentTarget.pathname,
        });
    }

    render() {
        const { to, children, ...otherProps } = this.props;

        return (
            <a href={to} onClick={this.handleClick} className={s.link} {...otherProps}>
                {children}
            </a>
        );
    }
}

export default Link;

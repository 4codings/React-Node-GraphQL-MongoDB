import React from 'react';
import Customers from './Customers';

const action = () => ({
    chunks: ['customers'],
    title: 'Customers',
    component: (
        <Customers />
    ),
});

export default action;

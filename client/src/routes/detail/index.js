import React from 'react';
import Detail from './Detail';

const action = () => ({
    chunks: ['detail'],
    title: 'Detail',
    component: (
        <Detail />
    ),
});

export default action;

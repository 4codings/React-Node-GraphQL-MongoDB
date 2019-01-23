import React from 'react';
import Add from './Add';

const action = () => ({
    chunks: ['add'],
    title: 'Add',
    component: (
        <Add />
    ),
});

export default action;

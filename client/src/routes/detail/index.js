import React from 'react';
import Detail from './Detail';

const action = ({ params }) => ({
    chunks: ['detail'],
    title: 'Detail',
    component: (
        <Detail id={params.id} />
    ),
});

export default action;

import React from 'react';
import renderer from 'react-test-renderer';
import Link from './Link.tsx';

it('renders correctly', () => {
    const tree = renderer
        .create(<Link to="/">Click here</Link>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});

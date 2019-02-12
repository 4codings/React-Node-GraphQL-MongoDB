import React from 'react';
import renderer from 'react-test-renderer';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Link from './Link.tsx';

configure({ adapter: new Adapter() });

it('renders correctly', () => {
    const tree = renderer
        .create(<Link to="/">Click here</Link>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});

it('expects "to" prop to be "/home"', () => {
    const wrapper = mount(<Link to="/home">Click here</Link>);
    expect((wrapper).prop('to')).toEqual('/home');
});

it('expects "children" prop to be "Click here"', () => {
    const wrapper = mount(<Link to="/home">Click here</Link>);
    expect((wrapper).prop('children')).toEqual('Click here');
});

it('renders an anchor element', () => {
    const wrapper = mount(<Link to="/">Click here</Link>);
    expect(wrapper.find('a')).toHaveLength(1);
});

it('calls onClick on click event', () => {
    const wrapper = mount(<Link to="/">Click here</Link>);
    const spy = jest.spyOn(wrapper.instance(), 'handleClick');

    wrapper.instance().forceUpdate();
    wrapper.find('a').simulate('click');
    expect(spy).toHaveBeenCalledTimes(1);
});

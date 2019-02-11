import React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

beforeEach(() => {
    jest.resetModules();
});

const ModalWithContext = (context) => {
    jest.doMock('../../context', () => ({
        ModalContext: {
            Consumer: props => props.children(context),
        },
    }));
    return require('./Modal');
};

it('should return stuff', () => {
    const Modal = ModalWithContext({ name: 'edit', close: jest.fn() });
    const wrapper = mount(<Modal />);
    expect(wrapper).toMatchSnapshot();
});

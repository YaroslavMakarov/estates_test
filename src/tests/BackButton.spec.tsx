import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';

import BackButton from '../components/BackButton';

describe('BackButton component', () => {
    const wrapper = mount(<MemoryRouter><BackButton /></MemoryRouter>);

    it('get BackButton snapShot', () => {
        expect(wrapper.debug()).toMatchSnapshot();
    })
});
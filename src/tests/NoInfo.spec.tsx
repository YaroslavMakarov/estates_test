import React from 'react';
import { shallow } from 'enzyme';
import { Container } from 'react-bootstrap';

import NoInfo from '../components/NoInfo';

describe('NoInfio component', () => {
    const wrapper = shallow(<NoInfo />).find(Container);
    it('get NoInfo snapShot', () => {
        expect(wrapper.debug()).toMatchSnapshot();
    });  
});
import React from 'react';
import { render } from '@testing-library/react';

import NoInfo from '../components/NoInfo';

describe('BackButton component', () => {
    const wrapper = render(<NoInfo />);

    it('get NoInfo snapshot', () => {
        expect(wrapper.baseElement).toMatchSnapshot();
    });
});
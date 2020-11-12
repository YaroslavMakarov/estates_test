import React from 'react';
import { render } from '@testing-library/react';

import BackButton from '../components/BackButton';

describe('BackButton component', () => {
    const wrapper = render(<BackButton />);

    it('get BackButton snapshot', () => {
        expect(wrapper.baseElement).toMatchSnapshot();
    });
});
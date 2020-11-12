import React from 'react';
import { render, RenderResult, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import Estate from '../components/Estate';
import { estatesMock } from '../mocks/estatesMock';

describe('Estate component', () => {
    let wrapper: RenderResult;
    const estate: Estate = estatesMock.estates.estates[0];

    beforeEach(() => {
        wrapper = render(    
            <MemoryRouter>
                <Estate estate={estate} />
            </MemoryRouter>    
        );
    });

    it('get snapshot Estate', () => {
        expect(wrapper.baseElement).toMatchSnapshot();
    });

    it('check Link attr', () => {
        expect(screen.getByTestId('estate')).toHaveAttribute('href', `/info/${estate.id}`);
    });

    it('check Img attr', () => {
        expect(screen.getByAltText('main img')).toHaveAttribute('src', `${estate.preview_img}`);
    });

    it('check Estate name', () => {
        expect(screen.getByText(`Name: ${estate.title}`)).toBeTruthy();
    });

    it('check Estate pricce', () => {
        expect(screen.getByText(`Price: ${estate.price}$`)).toBeTruthy();
    });

    it('check Estate address', () => {
        expect(screen.getByText(`Address: ${estate.address.street}, ${estate.address.number}`)).toBeTruthy();
    });
});
import React from 'react';
import { render, RenderResult, screen } from '@testing-library/react';

import EstateInfoCarousel from '../components/EstateInfoCarousel';
import { estatesMock } from '../mocks/estatesMock';

describe('EstateInfoCarousel component', () => {
    let wrapper: RenderResult;
    const photos = estatesMock.estates.estates[0].detailed_photos

    beforeEach(() => {
        wrapper = render(
            <EstateInfoCarousel photos={photos}/>
        );
    });

    it('get EstateInfoCarousel snapshot', () => {
        expect(wrapper.baseElement).toMatchSnapshot();
    });

    it('check slides count', () => {
        expect(screen.getAllByAltText('slide')).toHaveLength(3);
    });

    it('check Img src attr', () => {
        const slides = screen.getAllByAltText('slide');

        slides.forEach((node, index) => {
            expect(node).toHaveAttribute('src', `${photos[index]}`)
        });
    });
});

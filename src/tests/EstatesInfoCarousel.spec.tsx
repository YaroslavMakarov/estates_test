import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { CarouselItem } from 'react-bootstrap';

import EstateInfoCarousel from '../components/EstateInfoCarousel';
import { estatesMock } from '../mocks/estatesMock';
import { Img } from '../styled/estateStyles';

describe('test EstateInfoCarousel', () => {
    let wrapper: ShallowWrapper;
    const photos = estatesMock.estates.estates[0].detailed_photos;

    beforeEach(() => {
        wrapper = shallow(<EstateInfoCarousel photos={photos} />);
    });

    it('get snapShot EstateInfoCarousel', () => {
        expect(wrapper.debug()).toMatchSnapshot();
    });

    it('get CarouselItem count', () => {
        const item = wrapper.find(CarouselItem);
        expect(item).toHaveLength(3);
    });

    it('check Img src attr', () => {
        const carouselImg = wrapper.find(Img);
                
        carouselImg.forEach((img, index) => {
            expect(img.prop('src')).toBe(`${photos[index]}`);
        });
    });

});
import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

import { estatesMock } from '../mocks/estatesMock';
import Estate from '../components/Estate';
import { EstateContainer, Img, EstateDescription } from '../styled/estateStyles';

describe('Estate component', () => {
    let component: ShallowWrapper;
    const estate = estatesMock.estates.estates[0];
    beforeEach(() => {
        component = shallow(<Estate estate={estate} />);
    });

    it('get snapShot Estate', () => {
        expect(component.debug()).toMatchSnapshot();
    })

    it('get Link attr', () => {
        const estateLink = component.find(EstateContainer);
        expect(estateLink.prop('to')).toBe(`/info/${estate.id}`);
    })

    it('get Img attr', () => {
        const estateLink = component.find(Img);
        expect(estateLink.prop('src')).toBe(`${estate.preview_img}`);
    })

    it('repeating test for EstateDescription', () => {
        component.find(EstateDescription).forEach((node, index) => {
            const nodeNames = ['Name', 'Price', 'Address'];
            switch(index) {
                case 0: expect(node.text()).toBe(`${nodeNames[index]}: ${estate.title}`);
                break;
                case 1: expect(node.text()).toBe(`${nodeNames[index]}: ${estate.price}$`);
                break;
                case 2: expect(node.text()).toBe(`${nodeNames[index]}: ${estate.address.street}, ${estate.address.number}`);
                break;
            }                
        });
    });
})
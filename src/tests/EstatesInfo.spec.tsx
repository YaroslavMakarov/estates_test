import React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import { Provider } from 'react-redux';
import { MemoryRouter, Route } from 'react-router-dom';
import * as ReactRedux from 'react-redux';
import configureStore from 'redux-mock-store';

import EstatesInfo from '../components/EstatesInfo';
import EstateInfoCarousel from '../components/EstateInfoCarousel';
import { Img, EstateDescription } from '../styled/estateStyles';
import { estatesMock } from '../mocks/estatesMock';

const mockStore = configureStore();

describe('EstateInfo component', () =>{
    let wrapper: ReactWrapper;
    let useSelector: jest.SpyInstance<unknown, [selector: (state: unknown) => unknown, equalityFn?: ((left: unknown, right: unknown) => boolean) | undefined]>;
    const mockedStore = mockStore(estatesMock);

    beforeEach(() => {
        useSelector = jest.spyOn(ReactRedux, 'useSelector')
            .mockImplementation(f => f(mockedStore.getState()));
        console.log(useSelector);
    });    
        
    describe('without info EstateInfo component', () => {
        beforeEach(() => {wrapper = mount(
            <Provider store={mockedStore}>
                <MemoryRouter initialEntries={['/info/3']}>
                    <Route path='/info/:id' component={EstatesInfo} />
                </MemoryRouter>
            </Provider>
        )});

        it('shoud get snapShot estates info without estates', () => {                
            expect(wrapper.debug()).toMatchSnapshot();
        });
    });
    
    describe('with info EstateInfo component', () => {
        let info: Estate;
        beforeEach(() => {
            info = estatesMock.estates.estates[0];
            wrapper = mount(
                <Provider store={mockedStore}>
                    <MemoryRouter initialEntries={['/info/1']}>
                        <Route path='/info/:id' component={EstatesInfo} />
                    </MemoryRouter>
                </Provider>
        )});

        it('shoud get snapShot estates info without estates', () => {                
            expect(wrapper.debug()).toMatchSnapshot();
        });

        it('chek Img attr', () => {
            const img = wrapper.find(Img).at(0);
            
            expect(img.prop('src')).toBe(`${info.preview_img}`);
        });

        it('check text EstateDescription', () => {
            wrapper.find(EstateDescription).forEach((node, index) => {
                const nodeNames = ['Name', 'Price', 'Address', 'Seller', 'Description'];
                switch(index) {
                    case 0: expect(node.text()).toBe(`${nodeNames[index]}: ${info.title}`);
                    break;
                    case 1: expect(node.text()).toBe(`${nodeNames[index]}: ${info.price}$`);
                    break;
                    case 2: expect(node.text()).toBe(`${nodeNames[index]}: ${info.address.street}, ${info.address.number}`);
                    break;
                    case 3: expect(node.text()).toBe(`${nodeNames[index]}: ${info.seller}`);
                    break;
                    case 4: expect(node.text()).toBe(`${nodeNames[index]}: ${info.description}`);
                    break;
                }                
            });
        });
    });
});
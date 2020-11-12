import React from 'react';
import { render, RenderResult, screen } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

import EstatesInfo from '../components/EstatesInfo';
import { estatesMock } from '../mocks/estatesMock';
const mockStore = configureStore();

describe('EstateInfo component', () => {
    let wrapper: RenderResult;
    let estate: Estate;
    const mockedStore = mockStore(estatesMock);

    describe('EstateInfo without info', () => {
        beforeEach(() => {
            wrapper = render(  
                <Provider store={mockedStore}>
                    <MemoryRouter initialEntries={["/info/3"]}>
                        <Route path="/info/:id" component={EstatesInfo} />
                    </MemoryRouter>
                </Provider>    
            );
        });

        it('get snapShot estates info without estates', () => {
            expect(wrapper.baseElement).toMatchSnapshot();
        });
    });

    describe('EstateInfo with info', () => {
        beforeEach(() => {
            estate = estatesMock.estates.estates[0];

            wrapper = render(  
                <Provider store={mockedStore}>
                    <MemoryRouter initialEntries={["/info/1"]}>
                        <Route path="/info/:id" component={EstatesInfo} />
                    </MemoryRouter>
                </Provider>    
            );
        });

        it('get snapShot estates info without estates', () => {
            expect(wrapper.baseElement).toMatchSnapshot();
        });

        it('check Img attr', () => {
            expect(screen.getByAltText('main img')).toHaveAttribute('src', `${estate.preview_img}`);
        });

        it('check EstateInfo name', () => {
            expect(screen.getByText(`Name: ${estate.title}`)).toBeTruthy();
        });
    
        it('check EstateInfo pricce', () => {
            expect(screen.getByText(`Price: ${estate.price}$`)).toBeTruthy();
        });
    
        it('check EstateInfo address', () => {
            expect(screen.getByText(`Address: ${estate.address.street}, ${estate.address.number}`)).toBeTruthy();
        });

        it('check EstateInfo saller', () => {
            expect(screen.getByText(`Seller: ${estate.seller}`)).toBeTruthy();
        });
    
        it('check EstateInfo description', () => {
            expect(screen.getByText(`Description: ${estate.description}`)).toBeTruthy();
        });
    });
    
});
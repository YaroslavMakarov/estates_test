import React from 'react';
import { render, RenderResult, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';

import EstatesList from '../components/EstatesList';
import { estatesMock } from '../mocks/estatesMock';

const mockStore = configureStore();

describe('EstatesList component', () => {
    const store = mockStore(estatesMock);
    let wrapper: RenderResult;

    beforeEach(() => {
        wrapper = render(    
            <Provider store={store}>
                <MemoryRouter>
                    <EstatesList />
                </MemoryRouter>    
            </Provider>
        );
    });

    it('get snapshot EstatesList', () => {
        expect(wrapper.baseElement).toMatchSnapshot();
    });

    it('get Estate count', () => {
        expect(screen.getAllByTestId('estate')).toHaveLength(2);
    });
});

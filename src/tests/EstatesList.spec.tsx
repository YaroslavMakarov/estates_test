import React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import * as ReactRedux from 'react-redux';
import configureStore from 'redux-mock-store';

import EstatesList from '../components/EstatesList';
import { estatesMock } from '../mocks/estatesMock';


const mockStore = configureStore();

describe("EstateList component", () => {
    let wrapper: ReactWrapper;
    const mockedStore = mockStore(estatesMock);
    let useSelector: jest.SpyInstance<unknown, [selector: (state: unknown) => unknown, equalityFn?: ((left: unknown, right: unknown) => boolean) | undefined]>;

    beforeEach(() => {
        useSelector = jest.spyOn(ReactRedux, 'useSelector')
            .mockImplementation(f => f(mockedStore.getState()));
          
        wrapper = mount(
            <Provider store={mockedStore}>
                <MemoryRouter>
                    <EstatesList />
                </MemoryRouter>
            </Provider>
        );
    });

    it("shoud get snapShot estates list", () => {        
        expect(wrapper.debug()).toMatchSnapshot();
    });

    it("shoud find all Estate component", () => {
        const component = wrapper.find('Estate');
        expect(component.length).toBe(1);
    });
});
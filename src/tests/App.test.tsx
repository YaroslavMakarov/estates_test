import React, { Dispatch } from 'react';
import { render, RenderResult } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { Action } from 'redux';
import * as ReactRedux from 'react-redux';
import configureStore from 'redux-mock-store';

import App from '../App';
import { estatesMock } from '../mocks/estatesMock';
import { FETCH_ESTATES } from '../redux/estates';


const mockStore = configureStore();

describe('App component', () => {
    const store = mockStore(estatesMock);
    let wrapper: RenderResult;
    let useDispatch: jest.SpyInstance<Dispatch<Action<any>>, []>;
    const mockActionCreator = jest.fn();
    const mockDispatch = () => {
        useDispatch.mockReturnValue(mockActionCreator);
    }
    useDispatch = jest.spyOn(ReactRedux, 'useDispatch');

    beforeEach(() => {
        mockDispatch();
        wrapper = render(    
            <Provider store={store}>
                <MemoryRouter>
                    <App />
                </MemoryRouter>    
            </Provider>
        );
    });

    it('get snapshot App component', () => {
        expect(wrapper.baseElement).toMatchSnapshot();
    });

    it('shoud mock dispatch', () => {
        expect(mockActionCreator).toHaveBeenCalledWith({type: FETCH_ESTATES});
    });
});


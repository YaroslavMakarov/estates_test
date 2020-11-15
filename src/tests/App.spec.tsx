import React, { DependencyList, EffectCallback } from 'react';
import { mount, ReactWrapper } from 'enzyme';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import * as ReactRedux from 'react-redux';
import { Action, Dispatch } from 'redux';
import configureStore from 'redux-mock-store';

import App from '../App';

import { estatesMock } from '../mocks/estatesMock';
import { FETCH_ESTATES } from '../redux/estates';

const mockStore = configureStore();

describe('Info component', () => {
    const store = mockStore(estatesMock);

    let useEffect: jest.SpyInstance<void, [effect: EffectCallback, deps?: DependencyList | undefined]>;
    let useDispatch: jest.SpyInstance<Dispatch<Action<any>>, []>;
    let wrapper: ReactWrapper;
    const mockActionCreator = jest.fn();
    const mockUseEffect = () => {
        useEffect.mockImplementationOnce(f => f());
      };
    const mockDispatch = () => {
        useDispatch.mockReturnValue(mockActionCreator);
    }  
    beforeEach(() => {
        useEffect = jest.spyOn(React, 'useEffect');
        useDispatch = jest.spyOn(ReactRedux, 'useDispatch');
        mockUseEffect();
        mockDispatch();

        wrapper = mount(    
            <Provider store={store}>
                <MemoryRouter>
                    <App />
                </MemoryRouter>    
            </Provider>
        );       
    });

    it('shoud render Info component', () => {        
        expect(wrapper.debug()).toMatchSnapshot();
    });

    it('shoud call componentDidMount once', () => {        
        expect(useEffect).toHaveBeenCalledTimes(1);
    });

    it('shoud mock dispatch', () => {
        expect(mockActionCreator).toHaveBeenCalledWith({type: FETCH_ESTATES});
    });
});

import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

import App from '../App';

import { estatesMock } from '../mocks/estatesMock';

describe("App component", () => {
    const mockStore = configureStore();
    let store;

    it("Shoud render App component", () => {
        store = mockStore(estatesMock);
        const component = shallow(
            <Provider store={store}>    
                <App />
            </Provider>
        ).dive();
        const app = component.find("AppWrapper");
        expect(app.length).toBe(1);
        console.log(component.debug());
    });
});

// describe("Estates component", () => {
//     it("render Estates wrapper", () => {
//         const component = shallow(<Estates />);
//         const wrapper = component.find("EstatesWrapper");
//         expect(wrapper.length).toBe(1);
//         console.log(wrapper.debug());
//     });
// });

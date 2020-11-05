// eslint-disable-next-line
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({ adapter: new Adapter() });

// Fail tests on any warning
console.error = (message: string) => {
  throw new Error(message)
};
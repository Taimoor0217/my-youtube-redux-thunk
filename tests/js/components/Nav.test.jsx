import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Nav } from '../../../src/js/components/Nav';

Enzyme.configure({ adapter: new Adapter() });

describe('testing Nav component', () => {
  const getVideos = jest.fn();
  const wrapper = shallow(<Nav getVideos={getVideos} />);
  it('renders the Nav component', () => {
    expect(wrapper).toMatchSnapshot();
  });
  it('passing on the getVideos function', () => {
    expect(getVideos.mock.calls.length).toBe(0);
  });
});
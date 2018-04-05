import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Nav } from '../../../src/js/components/Nav';

Enzyme.configure({ adapter: new Adapter() });

describe('Nav Component', () => {
  let getVideos, wrapper;

  beforeEach(() => {
    getVideos = jest.fn();
    wrapper = shallow(<Nav getVideos={getVideos} />);
  });

  it('renders', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('passes on getVideos', () => {
    expect(getVideos.mock.calls.length).toBe(0);
  });
});
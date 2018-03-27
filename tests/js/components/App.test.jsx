import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { App } from '../../../src/js/components/App';

Enzyme.configure({ adapter: new Adapter() });

describe('testing App component', () => {
  const getVideos = jest.fn();
  const wrapper = shallow(<App getVideos={getVideos} />);
  it('renders the App component', () => {
    expect(wrapper).toMatchSnapshot();
  });
  it('tests that getVideos run with correct args', () => {
    expect(getVideos.mock.calls[0]).toEqual(['javascript', true]);
  });
});
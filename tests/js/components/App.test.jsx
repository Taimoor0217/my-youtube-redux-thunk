import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { App } from '../../../src/js/components/App';

Enzyme.configure({ adapter: new Adapter() });

describe('App Component', () => {
  let getVideos, wrapper;

  beforeEach(() => {
    getVideos = jest.fn();
    wrapper = shallow(<App getVideos={getVideos} />);
  });

  it('renders', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should run getVideos with correct args', () => {
    expect(getVideos.mock.calls[0]).toEqual(['javascript', true]);
  });
});
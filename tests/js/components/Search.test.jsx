import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Search from '../../../src/js/components/Search';

Enzyme.configure({ adapter: new Adapter() });

describe('testing Search component', () => {
  const getVideos = jest.fn();
  const wrapper = shallow(<Search getVideos={getVideos} />);
  it('renders the App component', () => {
    expect(wrapper).toMatchSnapshot();
  });
  it('runs the getVideos function with correct args', () => {
    wrapper.find('input').simulate('change', {target:{value: 'java'}});
    expect(getVideos.mock.calls[0]).toEqual(['java']);
  });
});
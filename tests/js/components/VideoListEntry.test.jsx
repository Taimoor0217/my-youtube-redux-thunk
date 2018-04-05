import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { VideoList } from '../../../src/js/components/VideoList';

Enzyme.configure({ adapter: new Adapter() });

describe('VideoListEntry Component', () => {
  const videoList = [{}, {}];
  const selectVideo = jest.fn();
  it('renders the VideoList component', () => {
    const isLoading = false;
    const error = null;
    const wrapper = shallow(<VideoList selectVideo={selectVideo} videoList={videoList} isLoading={isLoading} error={error} />);
    expect(wrapper).toMatchSnapshot();
  });
  it('renders the Loading message', () => {
    const isLoading = true;
    const error = null;
    const wrapper = shallow(<VideoList selectVideo={selectVideo} videoList={videoList} isLoading={isLoading} error={error} />);
    expect(wrapper).toMatchSnapshot();
  });
  it('renders the Error message', () => {
    const isLoading = false;
    const error = { message: 'Error while Loading videos' };
    const wrapper = shallow(<VideoList selectVideo={selectVideo} videoList={videoList} isLoading={isLoading} error={error} />);
    expect(wrapper).toMatchSnapshot();
  });
  it('passes on the selecVideo', () => {
    const selectVideo = jest.fn();
    expect(selectVideo.mock.calls.length).toBe(0);
  });
});
import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import VideoListEntry from '../../../src/js/components/VideoListEntry';

Enzyme.configure({ adapter: new Adapter() });

describe('VideoListEntry Component', () => {
  let handleSelectedVideo, wrapper;
  const video = {
    snippet: {
      title: 'some title',
      description: 'some description',
      thumbnails: {
        default: {
          url: 'something'
        }
      }
    }
  };

  beforeEach(() => {
    handleSelectedVideo = jest.fn();
    wrapper = shallow(
      <VideoListEntry
        handleSelectedVideo={handleSelectedVideo}
        video={video}
      />
    );
  });

  it('renders', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('runs handleSelectedVideo on click handler', () => {
    wrapper.find('.media-heading').simulate('click');
    expect(handleSelectedVideo.mock.calls[0]).toEqual([video]);
  });
});
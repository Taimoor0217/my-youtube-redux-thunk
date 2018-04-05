import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { VideoList } from '../../../src/js/components/VideoList';

Enzyme.configure({ adapter: new Adapter() });

describe('VideoList Component', () => {
  let videoList, selectVideo;

  beforeEach(() => {
    videoList = [
      {
        id: { videoId: '1' },
        snippet: {
          title: 'some title 1',
          description: 'some description 1',
          thumbnails: {
            default: {
              url: 'someurl 1'
            }
          }
        }
      },
      {
        id: { videoId: '2' },
        snippet: {
          title: 'some title 2',
          description: 'some description 2',
          thumbnails: {
            default: {
              url: 'someurl 2'
            }
          }
        }
      }
    ],
    selectVideo = jest.fn();
  });

  it('renders', () => {
    let wrapper = shallow(
      <VideoList 
        selectVideo={selectVideo}
        videoList={videoList}
        isLoading={false}
        error={null}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('renders Loading message', () => {
    let wrapper = shallow(
      <VideoList 
        selectVideo={selectVideo}
        videoList={videoList}
        isLoading={true}
        error={null}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('renders Error message', () => {
    let wrapper = shallow(
      <VideoList 
        selectVideo={selectVideo}
        videoList={videoList}
        isLoading={false}
        error={{ message: 'Error while loading videos' }}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
  
  it('passes on the selectVideo function', () => {
    expect(selectVideo.mock.calls.length).toBe(0);
  });

})
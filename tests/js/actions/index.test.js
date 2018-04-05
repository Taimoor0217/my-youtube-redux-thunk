import YOUTUBE_KEY from '../../../src/js/config/youtubekey';
import * as types from '../../../src/js/constants';
import * as actions from '../../../src/js/actions';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('Actions', () => {
  let store, video, videos, error, query, initial;

  beforeEach(() => {
    store = mockStore({});
  });

  describe('selectVideo', () => {
    beforeEach(() => {
      video = {};
      store.dispatch(actions.selectVideo(video));
    });
    it('should have correct length', () => {
      expect(store.getActions().length).toBe(1);
    });
    it('should dispatch correct type', () => {
      expect(store.getActions()[0].type).toBe(actions.selectVideo(video).type);
    });
    it('should dispatch correct payload', () => {
      expect(store.getActions()[0].type).toBe(actions.selectVideo(video).type);
    });
  });

  describe('fetchVideosAttempt', () => {
    beforeEach(() => {
      store.dispatch(actions.fetchVideosAttempt());
    });
    it('should have correct length', () => {
      expect(store.getActions().length).toBe(1);
    });
    it('should dispatch correct type', () => {
      expect(store.getActions()[0].type).toBe(actions.fetchVideosAttempt().type);
    });
  });

  describe('fetchVideosSuccess', () => {
    beforeEach(() => {
      videos = [{}];
      store.dispatch(actions.fetchVideosSuccess(videos));
    });
    it('should have correct length', () => {
      expect(store.getActions().length).toBe(1);
    });
    it('should dispatch correct type', () => {
      expect(store.getActions()[0].type).toBe(actions.fetchVideosSuccess().type);
    });
    it('should dispatch correct payload', () => {
      expect(store.getActions()[0].payload).toEqual(videos);
    });
  });

  describe('fetchVideosFail', () => {
    beforeEach(() => {
      error = { message: 'Error loading' };
      store.dispatch(actions.fetchVideosFail(error));
    });
    it('should have correct length', () => {
      expect(store.getActions().length).toBe(1);
    });
    it('should dispatch correct type', () => {
      expect(store.getActions()[0].type).toBe(actions.fetchVideosFail().type);
    });
    it('should dispatch correct payload', () => {
      expect(store.getActions()[0].payload).toEqual(error);
    });
  });

  describe('getVideos', () => {
    afterEach(() => {
      fetchMock.restore();
    });

    describe('with args for startup', () => {
      beforeEach(() => {
        query = 'java';
        initial = true;
      });

      it('tests success', () => {
        fetchMock.mock('*', { items: [{}] });
        return store.dispatch(actions.getVideos(query, initial)).then(() => {
          expect(store.getActions().length).toBe(3);
          expect(store.getActions()[0].type).toBe(actions.fetchVideosAttempt().type);
          expect(store.getActions()[1].type).toBe(actions.fetchVideosSuccess().type);
        });
      });
      it('tests failure', () => {
        fetchMock.mock('*', { throws: { message: 'API failure' } });
        return store.dispatch(actions.getVideos(query, initial)).then(() => {
          expect(store.getActions().length).toBe(2);
          expect(store.getActions()[0].type).toBe(actions.fetchVideosAttempt().type);
          expect(store.getActions()[1].type).toBe(actions.fetchVideosFail().type);
          expect(store.getActions()[1].payload).toEqual({ message: 'API failure' });
        });
      });
    });

    describe('with args for updating', () => {
      beforeEach(() => {
        query = 'java';
      });

      it('tests success', () => {
        fetchMock.mock('*', { items: [{}] });
        return store.dispatch(actions.getVideos(query)).then(() => {
          expect(store.getActions().length).toBe(2);
          expect(store.getActions()[0].type).toBe(actions.fetchVideosAttempt().type);
          expect(store.getActions()[1].type).toBe(actions.fetchVideosSuccess().type);
          expect(store.getActions()[1].payload).toEqual({ items: [{}] });
        });
      });
      it('tests failure', () => {
        fetchMock.mock('*', { throws: { message: 'API failure' } });
        return store.dispatch(actions.getVideos(query)).then(() => {
          expect(store.getActions().length).toBe(2);
          expect(store.getActions()[0].type).toBe(actions.fetchVideosAttempt().type);
          expect(store.getActions()[1].type).toBe(actions.fetchVideosFail().type);
          expect(store.getActions()[1].payload).toEqual({ message: 'API failure' });
        });
      });
    });
  });
});
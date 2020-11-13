import { createStore } from 'vuex';
import mentorsModule from './modules/mentors/index';

const store = createStore({
  modules: {
    mentors: mentorsModule
  },
  state() {
    return {
      userId: 'm3'
    };
  },
  getters: {
    userId(state) {
      return state.userId;
    }
  }
});

export default store;

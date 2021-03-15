export default {
  setUser(state, payload) {
    state.token = payload.token;
    state.userId = payload.userId;
    state.loggedOut = false;
  },
  loggedOut(state) {
    state.loggedOut = true;
  },
};

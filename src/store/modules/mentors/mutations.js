export default {
  addNewMentor(state, payload) {
    state.mentors.push(payload);
  },
  fetchMentors(state, payload) {
    state.mentors = payload;
  }
};

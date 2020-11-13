export default {
  addNewMentor(context, payload) {
    const mentorData = {
      id: 'm3',
      firstName: payload.first,
      lastName: payload.last,
      description: payload.desc,
      areas: payload.areas
    };
    context.commit('addNewMentor', mentorData);
  }
};

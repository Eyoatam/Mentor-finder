export default {
  addRequest(context, payload) {
    const newRequest = {
      id: new Date().toISOString(),
      mentorId: payload.mentorId,
      userEmail: payload.userEmail,
      message: payload.message
    };
    context.commit('addRequest', newRequest);
  }
};

export default {
  async addRequest(context, payload) {
    const newRequest = {
      userEmail: payload.userEmail,
      message: payload.message
    };
    const response = await fetch(
      `https://mentor-finder-9fb3b.firebaseio.com/requests/${payload.mentorId}.json`,
      {
        method: 'POST',
        body: JSON.stringify(newRequest)
      }
    );

    const responseData = await response.json();

    newRequest.id = responseData.name;
    newRequest.mentorId = payload.mentorId;

    if (!response.ok) {
      const error = new Error(
        responseData.message || 'Failed to send request!'
      );
      throw error;
    }
  },
  async loadRequests(context) {
    const mentorId = context.rootGetters.userId;
    const token = context.rootGetters.token;
    const response = await fetch(
      `https://mentor-finder-9fb3b.firebaseio.com/requests/${mentorId}.json?auth=` +
        token
    );
    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(responseData.message || 'Failed to fetch!');
      throw error;
    }

    const requests = [];
    for (const id in responseData) {
      const request = {
        id: id,
        mentorId: mentorId,
        userEmail: responseData[id].userEmail,
        message: responseData[id].message
      };
      requests.push(request);
    }
    context.commit('fetchRequests', requests);
  }
};

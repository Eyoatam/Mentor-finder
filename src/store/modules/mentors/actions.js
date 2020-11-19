export default {
  async addNewMentor(context, payload) {
    const userId = context.rootGetters.userId;
    const mentorData = {
      firstName: payload.first,
      lastName: payload.last,
      description: payload.desc,
      areas: payload.areas
    };

    const token = context.rootGetters.token;
    const response = await fetch(
      `https://mentor-finder-9fb3b.firebaseio.com/mentors/${userId}.json?auth=` +
        token,
      {
        method: 'PUT',
        body: JSON.stringify(mentorData)
      }
    );

    const responseData = await response.json();
    if (!response.ok) {
      const error = new Error(
        responseData.message || 'Failed to Fetch, Please Try Again Later'
      );
      throw error;
    }

    context.commit('addNewMentor', {
      ...mentorData,
      id: userId
    });
  },
  async loadMentors(context, payload) {
    if (!payload.forceRefresh && !context.getters.updateMentors) {
      return;
    }
    const response = await fetch(
      `https://mentor-finder-9fb3b.firebaseio.com/mentors.json`
    );
    const responseData = await response.json();
    if (!response.ok) {
      const error = new Error(
        responseData.message || 'Whoops! Something Went Wrong, Please Try Again'
      );
      throw error;
    }
    const mentors = [];
    for (const id in responseData) {
      const mentor = {
        id: id,
        firstName: responseData[id].firstName,
        lastName: responseData[id].lastName,
        description: responseData[id].description,
        areas: responseData[id].areas
      };
      mentors.push(mentor);
    }
    context.commit('fetchMentors', mentors);
    context.commit('setTimestamp');
  }
};

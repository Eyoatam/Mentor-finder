export default {
  async addNewMentor(context, payload) {
    const userId = context.rootGetters.userId;
    const mentorData = {
      firstName: payload.first,
      lastName: payload.last,
      description: payload.desc,
      areas: payload.areas
    };

    const response = await fetch(
      `https://mentor-finder-9fb3b.firebaseio.com/mentors/${userId}.jso`,
      {
        method: 'PUT',
        body: JSON.stringify(mentorData)
      }
    );

    if (!response.ok) {
      /**
       * @typedef PRODUCT
       * @property {string} name.required - Products's name
       * @property {string} vendor.required - Products's vendor
       * @property {number} quantity.required - Products's quantity
       * @property {number} price_per_item.required - Products's price per item
       * @property {date} expiring_date - Products's expiring date
       * @property {file} file - Products's image
       */
    }
    //  const responseData = await response.json();

    context.commit('addNewMentor', {
      ...mentorData,
      id: userId
    });
  },
  async loadMentors(context) {
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
  }
};

import mutations from './mutations';
import actions from './actions';
import getters from './getters';

export default {
  namespaced: true,
  state() {
    return {
      mentors: [
        {
          id: 'm1',
          firstName: 'John',
          lastName: 'Doe',
          areas: ['spiritual', 'motivational', 'life'],
          description:
            "I'm John and I've worked as a freelance web developer for years. Let me help you become a developer as well!",
          hourlyRate: 30
        },
        {
          id: 'm2',
          firstName: 'Jane',
          lastName: 'Smith',
          areas: ['life', 'spiritual'],
          description:
            'I am Jane and as a senior developer in a big tech company, I can help you get your first job or progress in your current role.',
          hourlyRate: 30
        }
      ]
    };
  },
  mutations,
  getters,
  actions
};

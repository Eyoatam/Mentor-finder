import { createStore } from "vuex";
import mentorsModule from "./modules/mentors/index";
import requestsModule from "./modules/requests/index";
import AuthModule from "./modules/auth/index";

const store = createStore({
  modules: {
    mentors: mentorsModule,
    requests: requestsModule,
    auth: AuthModule,
  },
});

export default store;

import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "./counter-slice";
import authRedcuer from "./auth-slice";

const store = configureStore({
  reducer: { counter: counterReducer, auth: authRedcuer },
});

export default store;

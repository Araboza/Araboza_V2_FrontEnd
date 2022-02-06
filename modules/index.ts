import { combineReducers } from "redux";
import notice from "./notice";

const rootReducer = combineReducers({
  notice,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;

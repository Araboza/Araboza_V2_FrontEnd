import { combineReducers } from "redux";
import notice from "./notice";
import editPopup from "./editPopup";

const rootReducer = combineReducers({
  notice,
  editPopup,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;

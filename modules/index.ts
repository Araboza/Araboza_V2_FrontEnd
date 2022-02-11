import { combineReducers } from "redux";
import notice from "./notice";
import editPopup from "./editPopup";
import mobileNavbar from "./mobileNavbar";

const rootReducer = combineReducers({
  notice,
  editPopup,
  mobileNavbar,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;

import { combineReducers } from "redux";
import navMenu from "./nav/reducer";
import contactForm from "./contactForm/reducer";

export default combineReducers({
  nav: navMenu,
  form: contactForm
});

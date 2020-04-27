import constants from "../constants";

const initialState = {
  data: {},
};

const contactForm = (state = initialState, action) => {
  switch (action.type) {
    case constants.SAVE_FORM_DATA:
      return {
        ...state,
        data: action.payload,
      };
    case constants.CLEAR_FORM_DATA:
      return {
        ...state,
        data: {},
      };
    default:
      return {
        ...state,
      };
  }
};
export default contactForm;

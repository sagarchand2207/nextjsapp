import constants from "./constants";

//Get Menu Items
export function requestMenuList(payload) {
  return {
    type: constants.REQUEST_MENU_LIST,
    payload
  };
}

export function successMenuList(payload) {
  return {
    type: constants.SUCCESS_MENU_LIST,
    payload
  };
}

export function errorMenuList(payload) {
  return {
    type: constants.ERROR_MENU_LIST,
    payload
  };
}

//Save And Clear Form Data

export function saveForm(payload) {
  return {
    type: constants.SAVE_FORM_DATA,
    payload
  };
}

export function clearForm(payload) {
  return {
    type: constants.CLEAR_FORM_DATA,
    payload
  };
}

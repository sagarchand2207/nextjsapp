import constants from "../constants";

const initialState = {
  isLoading: false,
  isError: false,
  isSuccess: false,
  data: [],
};

const navMenu = (state = initialState, action) => {
  switch (action.type) {
    case constants.REQUEST_MENU_LIST:
      return {
        ...state,
        isLoading: true,
        isError: false,
        isSuccess: false,
        data: [],
      };
    case constants.SUCCESS_MENU_LIST:
      return {
        ...state,
        isLoading: false,
        isError: false,
        isSuccess: true,
        data: action.payload.map((dat, i) => {
          return {
            name: dat.name,
            iconUrl: dat.icon_url,
            subMenu: dat.brands_name.split(","),
            subMenuHref: dat.brands_slug.split(","),
            url: dat.slug
          };
        }),
      };
    case constants.ERROR_MENU_LIST:
      return {
        ...state,
        isLoading: false,
        isError: true,
        isSuccess: false,
        data: [],
      };
    default:
      return {
        ...state,
      };
  }
};
export default navMenu;

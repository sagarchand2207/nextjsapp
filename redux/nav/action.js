import * as actions from "../actions";
import axiosCall from "../../services";
import { call, put } from "redux-saga/effects";

export function* requestMenuItems(action) {
  try {
    const response = yield call(
      axiosCall,
      "GET",
      '/home/categories',
      ""
    );
    if (response) {
      yield put(actions.successMenuList(response.data.data));
    }
  } catch (e) {
    yield put(actions.errorMenuList());
  }
}

import {takeLatest, all} from 'redux-saga/effects';
import constants from './constants';
import { requestMenuItems } from './nav/action';

function* watchActions(){
    yield takeLatest(constants.REQUEST_MENU_LIST, requestMenuItems)
}

export default function* rootSaga(){
    yield all([watchActions()])
}
import { all, takeLatest, select, call, put } from 'redux-saga/effects';
import { database } from '../../../../config/firebase';

import { WeatherData } from '../../../models/Weather';
import { IState } from '../..';
import { ActionTypes } from './type';
import { getMaxMinFailure, getMaxMinRequest, getMaxMinSuccess } from './actions';

function* getAllWeatherLogs() {
  const response = (yield database.ref('logs').once('value'));
  const res = response ? response.val() : null

  const data: WeatherData[] = [];

  if (res) {
    Object.keys(res).forEach((key, index) => (
      data.push(res[key].data)
    ));

    yield put(getMaxMinSuccess(data));
  } else {
    yield put(getMaxMinFailure());
  }
};

export default all([
  takeLatest(ActionTypes.getMaxMinRequest, getAllWeatherLogs)
]);
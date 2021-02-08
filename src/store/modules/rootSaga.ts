import { all } from 'redux-saga/effects';

import overview from './overview/sagas';

export default function* rootSaga() {
  return yield all([
    overview,
  ])
}
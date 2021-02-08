import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';

import { IMaxTempState } from './modules/temp_max/type';
import { IMinTempState } from './modules/temp_min/type';
import { IOverviewState } from './modules/overview/type';

export interface IState {
  temp_max: IMaxTempState;
  temp_min: IMinTempState;
  overview: IOverviewState;
}

const sagaMiddleWare = createSagaMiddleware();

const middleware = [sagaMiddleWare];

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(...middleware)
  )
);

sagaMiddleWare.run(rootSaga);

export default store;
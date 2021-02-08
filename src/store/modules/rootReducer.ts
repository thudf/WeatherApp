import { combineReducers } from "redux";

import temp_max from './temp_max/reducer';
import temp_min from './temp_min/reducer';
import overview from './overview/reducer';

export default combineReducers({
  temp_max,
  temp_min,
  overview,
});

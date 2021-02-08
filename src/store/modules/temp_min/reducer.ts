import { Reducer } from "redux";
import produce from 'immer';
import { ActionTypes, IMinTempState } from "./type";

const INITIAL_STATE: IMinTempState = {
  city: '',
  temp_min: 0,
};

const tempMin: Reducer<IMinTempState> = (state = INITIAL_STATE, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case ActionTypes.verifyMinTemp: {
        const { temp } = action.payload;

        if (draft.temp_min === 0) {
          draft.city = temp.city;
          draft.temp_min = temp.temp_min;
        } else if (draft.temp_min > temp.temp_min) {
          draft.city = temp.city;
          draft.temp_min = temp.temp_min;
        }

        break;
      }
      default: {
        return draft;
      }
    }
  });
}

export default tempMin;
import { Reducer } from "redux";
import produce from 'immer';
import { ActionTypes, IMaxTempState } from "./type";

const INITIAL_STATE: IMaxTempState = {
  city: '',
  temp_max: 0,
};

const tempMax: Reducer<IMaxTempState> = (state = INITIAL_STATE, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case ActionTypes.verifyMaxTemp: {
        const { temp } = action.payload;

        if (draft.temp_max === 0) {
          draft.city = temp.city;
          draft.temp_max = temp.temp_max;
        } else if (draft.temp_max < temp.temp_max) {
          draft.city = temp.city;
          draft.temp_max = temp.temp_max;
        }

        break;
      }
      default: {
        return draft;
      }
    }
  });
}

export default tempMax;
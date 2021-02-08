import { Reducer } from "redux";
import produce from 'immer';
import { ActionTypes, IOverviewState, ITemp } from "./type";
import { WeatherData } from '../../../models/Weather';

const INITIAL_STATE: IOverviewState = {
  loading: true,
  failureMessage: '',
  temp_max: {} as ITemp,
  temp_min: {} as ITemp,
};

const overview: Reducer<IOverviewState> = (state = INITIAL_STATE, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case ActionTypes.getMaxMinSuccess: {
        const { data }: { data: WeatherData[] } = action.payload;

        let max: number;
        let city_max: string;
        let min: number;
        let city_min: string;

        data.forEach((item, index) => {
          if (index === 0) {
            city_max = item.name;
            max = item.main.temp_max;
          } else {
            city_max = item.main.temp_max > max ? item.name : city_max;
            max = item.main.temp_max > max ? item.main.temp_max : max;
          }
        });

        data.forEach((item, index) => {
          if (index === 0) {
            city_min = item.name;
            min = item.main.temp_min;
          } else {
            min = item.main.temp_min < min ? item.main.temp_min : min;
            city_min = item.main.temp_min < min ? item.name : city_min;
          }
        });

        console.log(city_max);
        console.log(max);
        console.log(city_min);
        console.log(min);

        draft.loading = false;
        draft.failureMessage = '';
        draft.temp_max = {
          local: city_max,
          temp: max,
        };
        draft.temp_min = {
          local: city_min,
          temp: min,
        }

        break;
      }
      case ActionTypes.getMaxMinFailure: {
        draft.loading = false;
        draft.temp_max = {} as ITemp;
        draft.temp_min = {} as ITemp;
        draft.failureMessage = 'Não foi possível verificar máximas e mínimas!'

        break;
      }
      default: {
        return draft;
      }
    }
  });
}

export default overview;
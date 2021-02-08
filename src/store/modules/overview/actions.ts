import { ActionTypes } from './type';
import { WeatherData } from '../../../models/Weather';

export function getMaxMinRequest() {
  return {
    type: ActionTypes.getMaxMinRequest,
    payload: {}
  }
}

export function getMaxMinSuccess(data: WeatherData[]) {
  return {
    type: ActionTypes.getMaxMinSuccess,
    payload: {
      data,
    }
  }
}

export function getMaxMinFailure() {
  return {
    type: ActionTypes.getMaxMinFailure,
    payload: {}
  }
}

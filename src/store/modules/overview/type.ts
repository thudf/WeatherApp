export enum ActionTypes {
  getMaxMinRequest = 'GET_MAX_MIN_REQUEST',
  getMaxMinSuccess = 'GET_MAX_MIN_SUCCESS',
  getMaxMinFailure = 'GET_MAX_MIN_FAILURE',
}

export interface ITemp {
  local: string;
  temp: number;
}

export interface IOverviewState {
  loading: boolean;
  failureMessage: string;
  temp_max: ITemp;
  temp_min: ITemp;
}
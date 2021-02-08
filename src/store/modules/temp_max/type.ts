export enum ActionTypes {
  verifyMaxTemp = 'VERIFY_MAX_TEMP',
}

export interface IMaxTemp {
  city: string;
  temp_max: number
}

export interface IMaxTempState {
  city: string;
  temp_max: number;
}
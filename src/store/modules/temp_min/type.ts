export enum ActionTypes {
  verifyMinTemp = 'VERIFY_MIN_TEMP',
}

export interface IMinTemp {
  city: string;
  temp_min: number
}

export interface IMinTempState {
  city: string;
  temp_min: number;
}
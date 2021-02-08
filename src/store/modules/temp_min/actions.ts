import { ActionTypes, IMinTemp } from "./type";

export function verifyMinTemp(temp: IMinTemp) {
  return {
    type: ActionTypes.verifyMinTemp,
    payload: {
      temp,
    }
  }
}

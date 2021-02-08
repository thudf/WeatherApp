import { ActionTypes, IMaxTemp } from "./type";

export function verifyMaxTemp(temp: IMaxTemp) {
  return {
    type: ActionTypes.verifyMaxTemp,
    payload: {
      temp,
    }
  }
}

import * as ActionTypes from "./actionTypes";

export const GET_FETCHED_LIST = (list) => ({
  type: ActionTypes.GET_FETCHED_LIST,
  payload: list,
});
export const GET_ROVER = (name) => ({
  type: ActionTypes.GET_ROVER,
  payload: name,
});
export const GET_CAMERA = (name) => ({
  type: ActionTypes.GET_CAMERA,
  payload: name,
});
export const GET_SOL = (number) => ({
  type: ActionTypes.GET_SOL,
  payload: number,
});
export const GET_DATE = (date) => ({
  type: ActionTypes.GET_DATE,
  payload: date,
});
export const GET_PAGE = (page) => ({
  type: ActionTypes.GET_PAGE,
  payload: page,
});
/*export const GET_STATUS = status =>({
    type: ActionTypes.CHANGE_STATUS,
    payload: status
})*/

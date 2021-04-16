import {
  GET_FETCHED_LIST,
  GET_ROVER,
  GET_CAMERA,
  GET_SOL,
  GET_PAGE,
  GET_DATE,
} from "./actionTypes";

let initialSate = {
  list: [],
  rover: "",
  camera: "",
  sol: "",
  date: "",
  page: 1,
};
export const Reducer = (state = initialSate, action) => {
  switch (action.type) {
    case GET_FETCHED_LIST:
      return { ...state, list: action.payload };
    case GET_ROVER:
      return { ...state, rover: action.payload };
    case GET_CAMERA:
      return { ...state, camera: action.payload };
    case GET_SOL:
      return { ...state, sol: action.payload };
    case GET_PAGE:
      return { ...state, page: action.payload };
    case GET_DATE:
      return { ...state, date: action.payload };
    default:
      return state;
  }
};

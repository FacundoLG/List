import { SET_USER } from "../types";
/* eslint-disable import/no-anonymous-default-export */

export default (state, { type, payload }) => {
  switch (type) {
    case SET_USER:
      return { ...state, user: payload };

    default:
      return state;
  }
};

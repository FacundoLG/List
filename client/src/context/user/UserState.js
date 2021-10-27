import React, { useReducer } from "react";
import UserReducer from "./UserReducer";

const UserState = () => {
  const initialState = {
    user: {
      username: null,
      tkn: null,
    },
  };

  const [state, dispatch] = useReducer(UserReducer, initialState);

  const setUser = () => {};

  const getUser = () => {};
};

export default UserState;

import React, { useReducer } from "react";
import { UserContext } from "./UserContex";
import UserReducer from "./UserReducer";

const UserState = ({ children }) => {
  const initialState = {
    user: {
      username: null,
      tkn: null,
    },
  };

  const [state, dispatch] = useReducer(UserReducer, initialState);

  const setUser = (data) => {
    dispatch({
      type: "SET_USER",
      payload: data,
    });
  };

  return (
    <UserContext.Provider value={{ user: state.user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserState;

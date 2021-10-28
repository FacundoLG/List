import React, { useReducer } from "react";
import { UserContext } from "./UserContex";
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

  return(
    <UserContext.Provider value={ UserState,getUser} >

    </UserContext.Provider>
  )
};

export default UserState;

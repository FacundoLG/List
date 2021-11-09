import React, { useContext, useEffect, useState } from "react";
import { BsFillArrowDownRightSquareFill } from "react-icons/bs";
import { UserContext } from "../context/user/UserContex";
const useFetch = (URL, method, data) => {
  const { user } = useContext(UserContext);
  const [response, setResponse] = useState(null);

  const getData = async () => {
    try {
      const res = await fetch(URL, {
        method,
        headers: {
          "Content-Type": "application/json",
          Authorization: `bearer ${user.token}`,
        },
        body: JSON.stringify(data),
      });
      const results = await res.json();
      setResponse(results);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getData();
  }, [URL]);

  return [response, getData];
};

export default useFetch;

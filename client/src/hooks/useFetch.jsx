import React, { useContext, useEffect, useState } from "react";
import { BsFillArrowDownRightSquareFill } from "react-icons/bs";
import { UserContext } from "../context/user/UserContex";
const useFetch = (URL, method, data) => {
  const { user } = useContext(UserContext);
  const [response, setResponse] = useState(null);
  const [fetchManager, setFetchManager] = useState(false);
  const doFetch = () => {
    setFetchManager(!fetchManager);
  };

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(URL, {
        method,
        headers: {
          "Content-Type": "application/json",
          Authorization: `bearer ${user.token}`,
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.error) throw new Error(data.error);
          return data;
        })
        .catch((err) => {
          return err;
        });

      return res;
    };

    setResponse(fetchData());
  }, [fetchManager, URL, user.token]);

  return [response, doFetch];
};

export default useFetch;

import React, { useEffect, useState } from "react";
import axios from "axios";

export const useDashboard = () => {
  const [creditData, setCreditData] = useState({});

  useEffect(() => {
    let url = "http://localhost:3001/creditAccount";

    axios
      .get(url)
      .then((response) => {

        let res = {...response}
        res
        setCreditData(response?.data?.credit);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return {
    creditData,
  };
};

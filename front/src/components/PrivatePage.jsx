import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

const PrivatePage = () => {
  const history = useHistory();

  useEffect(() => {
    const token = localStorage.getItem("USER_TOKEN");
    if (!token) {
      history.push("/");
    }
  });

  return <div>It works !</div>;
};

export default PrivatePage;

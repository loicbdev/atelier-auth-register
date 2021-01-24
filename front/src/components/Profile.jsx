import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import AuthService from "../services/AuthService";

const Profile = () => {
  const history = useHistory();

  useEffect(async () => {
    const token = localStorage.getItem("USER_TOKEN");
    if (!token) {
      history.push("/");
    } else {
      try {
        const result = await AuthService.profile();
        alert(result);
      } catch (error) {
        // history.push("/");
        console.log(error);
      }
    }
  });

  return <div>It works!</div>;
};

export default Profile;

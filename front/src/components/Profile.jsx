import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import AuthService from "../services/AuthService";

const Profile = () => {
  const history = useHistory();
  const [content, setContent] = useState("");

  useEffect(async () => {
    const token = localStorage.getItem("USER_TOKEN");
    if (!token) {
      history.push("/");
    } else {
      try {
        const result = await AuthService.profile();
        setContent(result);
      } catch (error) {
        // history.push("/");
        console.log(error);
      }
    }
  });

  return <div>{content}</div>;
};

export default Profile;

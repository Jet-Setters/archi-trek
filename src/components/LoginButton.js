import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import './Profile.css';

const LoginButton = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    !isAuthenticated && (
      <button id = "button" onClick={() => loginWithRedirect()}>
        Log In
      </button>
    )
  )
};

export default LoginButton;
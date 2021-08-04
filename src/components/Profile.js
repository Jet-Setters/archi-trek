import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import './Profile.css';



const Profile = () => {
  const { user, isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
      <div className = "profile">
        {/* <img src={user.picture} alt={user.name} /> */}
        <h5>Name: {user.name}</h5>
        {/* <p>Email: {user.email}</p> */}
      </div>
    )
   
  );
};

export default Profile;
import React, { useContext, useEffect } from "react";
// import CreateIcon from "@material-ui/icons/Create";
// // import { LinearProgress } from "@material-ui/core";
// import { Divider } from "@material-ui/core";
// import {
//   ContainerOrderHistory,
//   Orders,
//   TitleProfile,
//   ContainerProfile,
//   ContainerProfileEdit,
//   BoxUser,
//   BoxAddress,
//   Icon,
//   User,
// } from "./styled";
import GlobalStateContext from "../../Global/GlobalStateContext";
import ProfileCard from "../../components/ProfileCard/ProfileCard";

const ProfilePage = () => {
  const { states, setters, requests } = useContext(GlobalStateContext);
  const user = states.user
  const address = states.address
  console.log("requests", requests.getFullAddress());

  useEffect(() => {
    requests.getProfile()
    console.log("requests", requests.getProfile());
    requests.getFullAddress()
    
  }, []);

  return (
    <div>
    <ProfileCard 
    user={user}
    address={address}
    />
    </div>
  );
};

export default ProfilePage;

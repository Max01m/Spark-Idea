import React from "react";
import Header from "../../components/Header/Header";
import { Avatar } from '@mui/material';

const Profile = () => {
  return (
    <div>
      <Header />
      <div className='wrapperProfile' >
        <div>
          <h3>Профиль</h3>
          <div><Avatar sx={{width:'10vw', height:"12vh"}} /> </div>
          <div></div>
          <div></div>
        </div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Profile;

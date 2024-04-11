import React, { useContext } from "react";
import "./styles.css";
import userImg from "../../assets/Ellipse 114@2x.png";
import camera from "../../assets/Group 1585.svg";
import UserContext from "../../context/users/UserContext";
const Profile = () => {
    const {user} = useContext(UserContext);
  return (
    <div className="profile">
      <div className="user__details-cnt">
        <div className="user__img-cnt">
          <div className="user__img">
            <img src={userImg} alt="user" />
          </div>
          <div className="camera__cnt">
            <img src={camera} alt="camera" />
          </div>
        </div>
        <div className="user__details">
          <h1>{user.name}</h1>
          <p>{user.email}</p>
        </div>
      </div>
      <div className="profile__body">
        <p>
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
          Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat,
          Sed Diam
        </p>
        <hr className="dotted"/>
      </div>
    </div>
  );
};

export default Profile;

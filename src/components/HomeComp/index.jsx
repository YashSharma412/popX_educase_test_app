import React from "react";
import "./styles.css";
import Button from "../Button";
import {useNavigate} from "react-router-dom"

const HomeComp = () => {
  const navigate = useNavigate();
  function handleNav(str){
    navigate(`/${str}`);
  }
  return (
    <div className="home">
      <div className="home__header">
        <h1 className="text heading">Welcome to PopX</h1>
        <p className="text article">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        </p>
      </div>
      <div className="btns__container">
        <Button onClick={()=>handleNav("create")} className={"btn active"}>Create Account</Button>
        <Button onClick={()=>handleNav("signin")} className={"btn"}>Already Registered? Login</Button>
      </div>
    </div>
  );
};

export default HomeComp;

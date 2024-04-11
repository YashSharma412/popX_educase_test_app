import React, { useContext, useState } from "react";
import "./styles.css";
import Button from "../Button";
import FormFields from "../FormFields";
import {toast} from "react-toastify"
import UserContext from "../../context/users/UserContext";
import { useNavigate } from "react-router-dom";
import vaidateLoginData from "../../functions/vaidateLoginData";

const SignInForm = () => {
  const navigate = useNavigate();
  const {handleLoginOfUser} = useContext(UserContext)
  const [ loginUser, setLoginUser] = useState({
    email: "marry@gmail.com",
    password: "marrydoe",
  })

  async function handleSignIn(event) {
    event.preventDefault();
    console.log("sign in clicked");
    console.log(loginUser);
    try{
      await vaidateLoginData(loginUser);
      await handleLoginOfUser(loginUser);
      toast.success("Login Successful")
      navigate("/profile");
    } catch (err){
      toast.error(err)
    }
  }


  return (
    <div className="signIn">
      <div className="signIn__main">
        <div className="signIn__header">
          <h1 className="heading text">Signin to your PopX account</h1>
          <p className="text article">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
        </div>
        <form onSubmit={handleSignIn} className="signIn__form">
          <div className="signIn__form-body">
            <FormFields 
              placeholder="Email Address" 
              label="Email Address"
              type="email"
              id="emailL"
              name="emailL"
              value={loginUser.email}
              onChange={(e) => setLoginUser({ ...loginUser, email: e.target.value })}
              required
            />
            
            <FormFields 
              placeholder="Password" 
              label="Password"
              type="password"
              id="passwordL"
              name="passwordL"
              value={loginUser.password}
              onChange={(e) => setLoginUser({ ...loginUser, password: e.target.value })}
              required
              isPassword
            />

          </div>
          <div className="submit__cnt">
            <Button type={"submit"} className={"btn passive"}>
              Login
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignInForm;

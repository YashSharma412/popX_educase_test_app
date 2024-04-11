import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import UserContext from "../../context/users/UserContext";
import Button from "../Button";
import "./styles.css";
import FormFields from "../FormFields";
import validateSignInData from "../../functions/validateSignInData";

const CreateForm = () => {
  const navigate = useNavigate();
  const { user, addAndSetAUser } = useContext(UserContext);
  const [signUpData, setSignUpData] = useState(() => {
    return {
      name: "Marry Doe",
      mobNum: "1234567890",
      email: "marry@gmail.com",
      password: "marrydoe",
      confirmPassword: "marrydoe",
      company: "",
      Agency: "unset",
    };
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await validateSignInData(signUpData);
      const res = await addAndSetAUser(signUpData);
      if (!res) {
        toast.error("User already exists with that email");
        return;
      }
      toast.success("Account created successfully");
      setSignUpData({
        name: "",
        mobNum: "",
        email: "",
        password: "",
        confirmPassword: "",
        company: "",
        Agency: "unset",
      });
      navigate("/signin");
    } catch (error) {
      toast.error(error);
    }
  };

  function handleRoleChange(event) {
    // console.log(event.target.value);
    setSignUpData({ ...signUpData, Agency: event.target.value });
  }

  return (
    <div className="createForm">
      <div className="form__main">
        <div className="Form__header">
          <h1 className="heading text">Create your PopX account</h1>
        </div>
        <form onSubmit={handleSubmit} className="form">
          <div className="form__body">
            <FormFields
              placeholder="Full Name"
              label="Full Name"
              type="text"
              id="nameC"
              name="name"
              value={signUpData.name}
              onChange={(e) =>
                setSignUpData({ ...signUpData, name: e.target.value })
              }
              required
            />
            <FormFields
              placeholder="Phone number"
              label="Phone number"
              type="number"
              id="mobNumC"
              name="mobNum"
              value={signUpData.mobNum}
              onChange={(e) =>
                setSignUpData({ ...signUpData, mobNum: e.target.value })
              }
              required
            />
            <FormFields
              placeholder="Email address"
              label="Email address"
              type="email"
              id="emailC"
              name="email"
              value={signUpData.email}
              onChange={(e) =>
                setSignUpData({ ...signUpData, email: e.target.value })
              }
              required
            />
            <FormFields
              placeholder="Password"
              label="Password"
              type="password"
              id="passwordC"
              name="password"
              value={signUpData.password}
              onChange={(e) =>
                setSignUpData({ ...signUpData, password: e.target.value })
              }
              required
              isPassword
            />
            <FormFields
              placeholder="Confirm Password"
              label="Confirm Password"
              type="password"
              id="passwordCnfC"
              name="passwordCnfC"
              value={signUpData.confirmPassword}
              onChange={(e) =>
                setSignUpData({
                  ...signUpData,
                  confirmPassword: e.target.value,
                })
              }
              required
              isPassword
            />
            <FormFields
              placeholder="Company name"
              label="Company name"
              type="text"
              id="companyC"
              name="email"
              value={signUpData.company}
              onChange={(e) =>
                setSignUpData({ ...signUpData, company: e.target.value })
              }
            />
            <div className="input-container">
              <span className="role__label starlabel">
                <label htmlFor="role">Are you an Agency?</label>
              </span>
              <div className="roleSelect">
                <label className="radio_label">
                  <input
                    type="radio"
                    name="role"
                    value={true}
                    onChange={handleRoleChange}
                    required
                  />
                  <span className="radio__span"> Yes </span>
                </label>
                <label className="radio_label">
                  <input
                    type="radio"
                    name="role"
                    value={false}
                    onChange={handleRoleChange}
                  />
                  <span className="radio__span"> No </span>
                </label>
              </div>
            </div>
          </div>
          <div className="submit__cnt">
            <Button type={"submit"} className={"btn active"}>
              Create Account
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateForm;

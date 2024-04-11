import React, { useState } from 'react';
import "./styles.css";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";
const FormFields = ({required=false, type, id, placeholder, value, onChange, label, isPassword=false, name}) => {
    const [passwordVisible, setpasswordVisible] = useState(false);
  return (
    <div className={`form__group ${required?"starlabel":""}`}>
        <input 
            type={isPassword && passwordVisible ? "text" : type} 
            id={id}
            className="form__input"
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            required={required?true:false}
            name={name}
        />
        <label htmlFor={id} className="form__label">{label}</label>
        {
          isPassword && (
            <div className='password__eye_cont' onClick={()=>setpasswordVisible(!passwordVisible)}>
              {
              passwordVisible ? 
              <FaEye /> : 
              <FaEyeSlash />
              }
            </div>
          )  
        }
        
    </div>
  )
}

export default FormFields
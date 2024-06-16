import React from "react";
import "./input.css";
const Input = ({type, name, value,onBlur, onChange}) =>{
    return(
        <>
            <input data-testid="input" onChange={onChange} onBlur={onBlur} type={type} name={name} value={value} className="input"/>
        </>
    );
};
export default Input;
import React, {useState} from "react";
import {Input} from "../../ui";
import "./signUpForm.css";

const SignUpForm = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [usernameDirty, setUsernameDirty] = useState(false);
    const [emailDirty, setEmailDirty] = useState(false);
    const [passwordDirty, setPasswordDirty] = useState(false);
    const [usernameError, setUsernameError] = useState('wrong username');
    const [emailError, setEmailError] = useState('wrong email');
    const [passwordError, setPasswordError] = useState('wrong password');

    const blurHandler = (e) => {
        switch (e.target.name){
            case 'username':
                setUsernameDirty(true);
                break;
            case 'email':
                setEmailDirty(true);
                break;
            case 'password':
                setPasswordDirty(true);
                break;
        }
    };
    const emailHandler = (e) =>{
        setEmail(e.target.value);
        const re =/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if(!re.test(String(e.target.value).toLowerCase())){
            setEmailError("not correct email!");
        }else{
            setEmailError("");
        }
    };

    return (
        <form action="/" method="POST" className="sign-up__form">
            <label htmlFor="username">Username:</label>
            {(usernameDirty && usernameError) && <div style={{color: "red"}}>{usernameError}</div>}
            <Input onBlur={e => blurHandler(e)} type="text" name="username"/>

            <label htmlFor="email">Email:</label>
            {(emailDirty && emailError) && <div style={{color: "red"}}>{emailError}</div>}
            <Input onChange={e => emailHandler(e)} onBlur={e => blurHandler(e)} type="email" name="email"/>

            <label htmlFor="c">Password:</label>
            {(passwordDirty && passwordError) && <div style={{color: "red"}}>{passwordError}</div>}
            <Input onBlur={e => blurHandler(e)} type="password" name="password"/>

            <button type="submit" className="sign-up__button">Submit</button>
        </form>
    );
};

export default SignUpForm;
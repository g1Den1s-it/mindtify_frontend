import React, {useEffect, useState} from "react";
import {Input} from "../../ui";
import "./signUpForm.css";
import postRegistrationRequest from "./api/postRegistrationRequest";
import { useNavigate } from "react-router-dom";
import {useDispatch} from "react-redux";
import {setUser} from "../../states/user/userSlice";
import postLoginRequest from "./api/postLoginRequest";

const SignUpForm = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [usernameDirty, setUsernameDirty] = useState(false);
    const [emailDirty, setEmailDirty] = useState(false);
    const [passwordDirty, setPasswordDirty] = useState(false);
    const [usernameError, setUsernameError] = useState('Username is required');
    const [emailError, setEmailError] = useState('Email is required');
    const [passwordError, setPasswordError] = useState('Password is required');
    const [isValidForm, setIsValidForm] = useState(false);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if(usernameError || passwordError || emailError){
            setIsValidForm(false);
        }else{
            setIsValidForm(true);
        }
    }, [usernameError, passwordError, emailError]);

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

    const usernameHandler = (e) => {
        setUsername(e.target.value);
        if (e.target.value.length < 8){
            setUsernameError("Username must be at least 8 characters long");
            if (e.target.value === ''){
                setUsernameError("Username is required");
            }
        }else{
            setUsernameError('');
        }
    };

    const passwordHandler = (e) => {
        setPassword(e.target.value);
        if (e.target.value.length < 10){
            setPasswordError("Password must be at least 10 characters long");
            if(e.target.value === ''){
                setPasswordError("Password is required");
            }
        }else{
            setPasswordError('');
        }
    };

    const submitHandler = async (e) => {
        e.preventDefault();
        if(isValidForm){
            await postRegistrationRequest(
                JSON.stringify({
                    "username": username,
                    "email": email,
                    "password": password
                })
            );
            const response = await postLoginRequest(
                JSON.stringify({
                    "username": username,
                    "password": password
                })
            );

            dispatch(
                setUser(
                    {
                        "username": username,
                        "email": email,
                        "image": response.data.user.image,
                        "refresh": response.data.refresh,
                        "access": response.data.access,
                    }
                )
            );
        }
        navigate("/");
    };

    return (
        <form className="sign-up__form">
            <label htmlFor="username">Username:</label>
            {(usernameDirty && usernameError) && <div style={{color: "red"}}>{usernameError}</div>}
            <Input onChange={e => usernameHandler(e)} onBlur={e => blurHandler(e)} type="text" name="username"/>

            <label htmlFor="email">Email:</label>
            {(emailDirty && emailError) && <div style={{color: "red"}}>{emailError}</div>}
            <Input onChange={e => emailHandler(e)} onBlur={e => blurHandler(e)} type="email" name="email"/>

            <label htmlFor="c">Password:</label>
            {(passwordDirty && passwordError) && <div style={{color: "red"}}>{passwordError}</div>}
            <Input onChange={e => passwordHandler(e)} onBlur={e => blurHandler(e)} type="password" name="password"/>

            <button onClick={e => submitHandler(e)} disabled={!isValidForm} type="submit" className="sign-up__button">Submit</button>
        </form>
    );
};

export default SignUpForm;
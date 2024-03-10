import "./loginForm.css";
import React, {useEffect, useState} from "react";
import {Input} from "../../ui";
import {setUser} from "../../states/user/userSlice";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import postLoginRequest from "../signUpForm/api/postLoginRequest";
import loginRequest from "./api/loginRequest";

const LoginForm = () =>{
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [usernameDirty, setUsernameDirty] = useState(false);
    const [passwordDirty, setPasswordDirty] = useState(false);
    const [usernameError, setUsernameError] = useState('Username is required');
    const [passwordError, setPasswordError] = useState('Password is required');
    const [isValidForm, setIsValidForm] = useState(false);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if(usernameError || passwordError){
            setIsValidForm(false);
        }else{
            setIsValidForm(true);
        }
    }, [usernameError, passwordError]);


    const blurHandler = (e) => {
        switch (e.target.name){
            case 'username':
                setUsernameDirty(true);
                break;
            case 'password':
                setPasswordDirty(true);
                break;
        }
    };
    const passwordHandler = (e) => {
        setPassword(e.target.value);
        if(e.target.value === ''){
            setPasswordError("Password is required");
        }else{
            setPasswordError('');
        }
    };
    const usernameHandler = (e) => {
        setUsername(e.target.value);
        if (e.target.value === ''){
            setUsernameError("Username is required");
        }else{
            setUsernameError('');
        }
    };

    const submitHandler = async (e) => {
        e.preventDefault();
        if(isValidForm){
            const response = await loginRequest(
                JSON.stringify({
                    "username": username,
                    "password": password
                })
            ).then(res => {
                dispatch(
                    setUser(
                        {
                            "username": username,
                            "image": res.data.user.image,
                            "refresh": res.data.refresh,
                            "access": res.data.access,
                        })
                );
            }).catch(e => {
                setUsernameError("Incorrect username");
                setPasswordError("Incorrect password");
            })
        }
        if (isValidForm){
            navigate("/");
        }
    };

    return (
        <form className="sign-in__form">
            <label htmlFor="username">Username:</label>
            {(usernameDirty && usernameError) && <div style={{color: "red"}}>{usernameError}</div>}
            <Input onChange={e => usernameHandler(e)} onBlur={e => blurHandler(e)} type="text" name="username"/>

            <label htmlFor="password">Password:</label>
            {(passwordDirty && passwordError) && <div style={{color: "red"}}>{passwordError}</div>}
            <Input onChange={e => passwordHandler(e)} onBlur={e => blurHandler(e)} type="password" name="password"/>

            <button onClick={e => submitHandler(e)} disabled={!isValidForm} type="submit" className="sign-up__button">Submit</button>
        </form>
    );
};

export default LoginForm;
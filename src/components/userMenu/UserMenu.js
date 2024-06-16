import {useEffect, useState} from "react";
import React from "react";
import "./UserMenu.css";
import {Link, useLocation} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {deleteUser} from "../../states/user/userSlice";

const UserMenu = () => {
    const defaultUserImage = "/default/user.png";
    const user = useSelector(state => state.user);
    const [userData, setUserData] = useState({});
    const dispatch = useDispatch();

    useEffect(() => {
        if(user && user.user){
            setUserData(user.user);
        }
    }, [user]);


    const activeHandler = (e) => {
        const userNav = document.querySelector(".user-nav");
        const userMenu = document.querySelector(".login");
        const body = document.querySelector("body");

        e.target.classList.toggle("active");
        userMenu?.classList.toggle("active");
        userNav?.classList.toggle("active");
        body.classList.toggle("lock");
    }

    const mouseEnterHandler = () => {
        const userNav = document.querySelector(".user-nav");
        userNav.classList.add("open");
    }
    const mouseLeaveHandler = () => {
        const userNav = document.querySelector(".user-nav");
        userNav.classList.remove("open");
    }

    const logOutHandler = () => {
        dispatch(deleteUser());
        window.location.reload();
    }

    return(
    <div data-testid="user-menu" className="user-menu">
        <div data-testid="burger" className="user-menu-burger" onClick={activeHandler}>
            <span></span>
        </div>
        {Object.keys(userData).length !== 0
            ?
            <div className="user" onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler}>
                <div className="user-username" >{userData.username}</div>
                <img className="user-image" src={userData.image === '' ? defaultUserImage : userData.image} alt="user"/>
                <nav data-testid="nav" className="user-nav">
                    <ul>
                        <li>
                            <Link to="/profile/">Profile</Link>
                        </li>
                        <li>
                            <Link to="/settings/">Settings</Link>
                        </li>
                        <li>
                            <a className="user-log_out" onClick={logOutHandler}>Log out</a>
                        </li>
                    </ul>
                </nav>
            </div>
            :
            <div className="login">
                <ul>
                    <li>
                        <Link className="login-button" to="/login/">sign in</Link>
                    </li>
                    <li>
                        <Link className="login-button" to="/sign-up/">sign up</Link>
                    </li>
                </ul>
            </div>
        }
    </div>
    );
}
export default UserMenu;
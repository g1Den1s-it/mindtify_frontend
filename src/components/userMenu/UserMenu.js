import {useState} from "react";
import React from "react";
import "./UserMenu.css";
import {Link} from "react-router-dom";

const UserMenu = () => {
    const defaultUserImage = "/default/user.png";
    const [isAuth, setIsAuth] = useState(false);
    const [user, isUser] = useState({user: {image: '', username: 'some_username'}});

    const activeHandler = (e) => {
        const userNav = document.querySelector(".user-nav");
        const userMenu = document.querySelector(".login");
        const body = document.querySelector("body");

        e.target.classList.toggle("active");
        userMenu?.classList.toggle("active");
        userNav?.classList.toggle("active");
        body.classList.toggle("lock");
    }

    const openHandlerUser = (e) => {
        const userPointer = document.querySelector(".user-pointer");
        const userNav = document.querySelector(".user-nav");

        userNav.classList.toggle("open");
        userPointer.classList.toggle("open");
    }

    return(
    <div data-testid="user-menu" className="user-menu">
        <div data-testid="burger" className="user-menu-burger" onClick={activeHandler}>
            <span></span>
        </div>
        {isAuth
            ?
            <div className="user">
                <img className="user-image" src={user.user.image === '' ? defaultUserImage : user.image}
                     alt="user"/>
                <div data-testid="wrapper" className="user-wrapper" onClick={openHandlerUser}>
                    <span className="user-username">{user.user.username}</span>
                    <div data-testid="pointer" className="user-pointer"></div>
                </div>
                <nav data-testid="nav" className="user-nav">
                    <ul>
                        <li>
                            <Link to="/log-out/">Log out</Link>
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
import {useState} from "react";
import "./UserMenu.css";

const UserMenu = () => {
    const defaultUserImage = "/default/user.png";
    const [isAuth, setIsAuth] = useState(true);
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
    <div className="user-menu">
        <div className="user-menu-burger" onClick={activeHandler}>
            <span></span>
        </div>
        {isAuth
            ?
            <div className="user">
                <img className="user-image" src={user.user.image === '' ? defaultUserImage : user.image}
                     alt="user"/>
                <div className="user-wrapper" onClick={openHandlerUser}>
                    <span className="user-username">{user.user.username}</span>
                    <div className="user-pointer"></div>
                </div>
                <nav className="user-nav">
                    <ul>
                        <li>
                            <a href="">Log out</a>
                        </li>
                    </ul>
                </nav>

            </div>
            :
            <div className="login">
                <ul>
                    <li>
                        <a className="login-button" href="/sign-in/">sign in</a>
                    </li>
                    <li>
                        <a className="login-button" href="/sign-up/">sign up</a>
                    </li>
                </ul>
            </div>
        }
    </div>
    );
}
export default UserMenu;
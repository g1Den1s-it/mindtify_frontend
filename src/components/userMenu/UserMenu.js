import {useState} from "react";
import "./UserMenu.css";

const UserMenu = () => {
    const [isAuth, setIsAuth] = useState(false);
    const [user, isUser] = useState({user: {image: '', username: ''}});

    const activeHandler = (e) => {
        const userMenu = document.querySelector(".login");
        const body = document.querySelector("body");

        e.target.classList.toggle("active");
        userMenu.classList.toggle("active");
        body.classList.toggle("lock");
    }

    return(
    <div className="user-menu">
        <div className="user-menu-burger" onClick={activeHandler}>
            <span></span>
        </div>
        {isAuth
            ?
            <div>
                <img src={user.image} alt="user"/>
                <p>{user.username}</p>
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
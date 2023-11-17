import {useState} from "react";
import "./UserMenu.css";
const UserMenu = () => {
    let isAuth = false;
    const [user, isUser] = useState({user: {image: '', username: ''}})
    if(!isAuth){
        return(
            <div className="login">
                <a className="login-button" href="/sign-in/">sign in</a>
                <a className="login-button" href="/sign-up/">sign up</a>
            </div>
        );
    }else {
        return(
            <div>
                <img src={user.image} alt="user image"/>
                <p>{user.username}</p>
            </div>
        );
    }
}
export default UserMenu;
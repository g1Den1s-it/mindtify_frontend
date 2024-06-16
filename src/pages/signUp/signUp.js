import "./signUp.css"
import {SignUpForm} from "../../modules";
import {Logo} from "../../ui";
import {Link, useLocation} from "react-router-dom";

const SignUp = () =>{
    const loginImage = "/login/login.png";
    const location = useLocation();
    return(
        <div className="sign-up">
            <div className="sign-up__holder">
                <div className="sign-up__holder_wrapper">
                    <Logo url="/">Mindtify</Logo>
                    <img className="sign-up__img" src={loginImage}/>
                </div>
            </div>
            <div className="sign-up__wrapper">
                <div className="sign-up__logo">
                    <Logo url="/">Mindtify</Logo>
                </div>
                <div className="page-link">
                    <Link className={`page-link_a ${location.pathname === "/sign-up/" ? "current-page": ""}`} to="/sign-up/">Sign up</Link>
                    <Link className={`page-link_a ${location.pathname === "/login/" ? "current-page": ""}`} to="/login/">Sign in</Link>
                </div>
                <SignUpForm/>
            </div>
        </div>
    );
}
export default SignUp;
import "./signUp.css"
import {SignUpForm} from "../../modules";
import {Logo} from "../../ui";

const SignUp = () =>{
    const loginImage = "/login/login.png";

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
                <SignUpForm/>
            </div>
        </div>
    );
}
export default SignUp;
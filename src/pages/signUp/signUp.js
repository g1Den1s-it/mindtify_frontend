import "./signUp.css"
import {SignUpForm} from "../../modules";

const SignUp = () =>{
    return(
        <div className="sign-up">
            <div className="sign-up__container">
                <SignUpForm />
                <div className="decoration"></div>
            </div>
        </div>
    );
}
export default SignUp;
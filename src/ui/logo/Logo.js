import './Logo.css'
import React from "react";
import {Link} from "react-router-dom";

const Logo = (props) => {
    return(
        <Link to={props.url} data-testid="logo" className="logo">Mindtify</Link>
    );
}
export default Logo;
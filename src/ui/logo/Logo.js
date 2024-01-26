import './Logo.css'
import React from "react";

const Logo = (props) => {
    return(
        <a href={props.url} className="logo">Mindtify</a>
    );
}
export default Logo;
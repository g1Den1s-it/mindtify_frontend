import './Logo.css'
import React from "react";

const Logo = (props) => {
    return(
        <a href={props.url} data-testid="logo" className="logo">Mindtify</a>
    );
}
export default Logo;
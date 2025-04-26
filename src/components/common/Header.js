import React from "react";
import {NavLink} from "react-router-dom";
import logo from "./logo.png";

const Header = () => {
    return (
        <nav>
            <NavLink to="/jutoma.com"><img src={logo} alt='logo'/></NavLink>
        </nav>
    );
};

export default Header;

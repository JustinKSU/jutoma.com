import React from "react";
import {NavLink} from "react-router-dom";
import logo from "./logo.png";

const Header = () => {
    return (
        <nav>
            <NavLink to="/jutoma.com"><img src={logo} width='64px' height='64px' alt='logo'/></NavLink>
        </nav>
    );
};

export default Header;

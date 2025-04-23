import React from "react";
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <nav>
            <NavLink to="/jutoma.com"><img src='/favicon.ico' alt='logo'/></NavLink>
        </nav>
    );
};

export default Header;

import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
    return (
        <nav className="nav-header">
            <NavLink
                to="/"
                className={({ isActive }) =>
                    isActive ? "nav-header__nav-link active" : "nav-header__nav-link"
                }
            >
                Accueil
            </NavLink>
            <NavLink
                to="/about"
                className={({ isActive }) =>
                    isActive ? "nav-header__nav-link active" : "nav-header__nav-link"
                }
            >
                À Propos
            </NavLink>
        </nav>
    );
};

export default Nav;

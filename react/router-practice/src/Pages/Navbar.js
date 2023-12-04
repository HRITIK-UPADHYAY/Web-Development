import React from "react";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            {/* <Link to="/"> Home </Link>
            <Link to="/blog"> Blog </Link>
            <Link to="/about"> About </Link>
            <Link to="/contact"> Contact </Link> */}

            <NavLink to="/"> Home </NavLink>
            <NavLink to="/blog"> Blog </NavLink>
            <NavLink to="/about"> About </NavLink>
            <NavLink to="/contact"> Contact </NavLink>

            {/* <a href="/"> Home </a>
            <a href="/about"> About </a>
            <a href="/blog"> Blog </a>
            <a href="/contact"> Contact </a> */}
        </div>
    )
}

export default Navbar;
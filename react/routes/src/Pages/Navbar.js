import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="navbar">
            <NavLink to="/"> Home </NavLink>
            <NavLink to="/about"> About </NavLink>
            <NavLink to="/blog"> Blog </NavLink>
            <NavLink to="/contact"> Contact </NavLink>

            {/* if we used NavLink instead of Link then it will add a extra attribute(class="active") to the tag. */}
        </div>
    )
}

export default Navbar;




{/* <a href="/"> Home </a>
            <a href="/about"> About </a>
            <a href="/blog"> Blog </a>
            <a href="/contact"> Contact </a> */}
//never use a tag inside react because it will load the page again not render the page. 
//instead of a tag use Link and NavLink provided by react.
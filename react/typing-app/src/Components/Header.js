import React from "react";

const Header = () => {
    return (
        <div className="header">
            <div className="brandName"> 
                <h1> TypeCat </h1>
                <span class="material-icons"> keyboard </span>
            </div>
            <div className="profileLogo"> 
                <span class="material-icons"> account_circle </span>
            </div>
        </div>
    )
}

export default Header;
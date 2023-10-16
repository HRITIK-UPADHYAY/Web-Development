import React from "react";

const Section = ({heading, description}) => {
    return (
        <div className="section"> 
            <h1> {heading} </h1>
            <p> {description} </p>
        </div>
    )
}

export default Section;
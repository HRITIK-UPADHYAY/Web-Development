import React from "react";

const Hello = ({updateName}) => {
    return (
        <div> 
            <input type="text" onChange={e => updateName(e.target.value)}/>
        </div>
    )
}

export default Hello;
import React, { useState } from "react";
import "./style.js"

const Body = ({hBody}) => {

    const [stateBody, setStateBody] = useState(false)

    const buttonClick = () => {
        console.log(stateBody);
        setStateBody(!stateBody);
    }

    return (
    <div className="body">
        {stateBody && <p> {hBody} </p>}
        <button className="button" onClick={buttonClick}> 
            Нажми на меня! 
        </button>
    </div>
    );
};

export default Body;
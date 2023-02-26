import React from "react";
import './SquareStyle.css';

const Square=({id, className,state }) => {

    // console.log("props>>"props.id,props.Name)
return<div className={`square-container ${className} ${
    state==='X' ? "x-color" : "y-color"} `} 
    id={id}>

    {state}
    </div>;

}
export default Square;

//`square-container ${className}`=="square-container border-right-bottom"
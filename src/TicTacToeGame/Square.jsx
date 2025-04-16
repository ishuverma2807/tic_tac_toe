import React from "react";

const Square = (props) => {
    return(
        <div
            onClick={props.onClick}
         style={{
            border: "2px solid black",
            height: "130px",
            width:"100%",
            display:"flex",
            justifyContent:"center",
            cursor:"pointer",
            borderRadius:"8px",
            }}
            className="square"
        >
            <h5>{props.value}</h5>
        </div>
    );
};

export default Square;
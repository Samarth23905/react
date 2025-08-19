import React from "react";

function Inputs(props) {
    return (
        <input
            id={props.name}
            name={props.name}
            type={props.type}
            placeholder={props.placeholder}
            required={props.required}
        />
    );
}

export default Inputs;
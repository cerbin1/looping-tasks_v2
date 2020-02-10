import React from "react";


const Element = (props) => {

    return <div>
        <p style={{color: props.isClicked ? 'green' : 'red'}}
           onClick={() => props.setElementClicked(props.index)}>{props.name}</p>
    </div>;
};

export default Element;

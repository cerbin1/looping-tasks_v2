import React from "react";


const Element = (props) => {

    return <div>
        <button className={props.isClicked ? 'btn btn-block btn-success' : 'btn btn-block btn-danger'}
                onClick={() => props.setElementClicked(props.index)}>{props.name}</button>
    </div>;
};

export default Element;

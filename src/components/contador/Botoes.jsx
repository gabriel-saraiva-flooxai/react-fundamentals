import React from "react";

export default props => {
    return (
        <div>
            <button className="BtnMenos" onClick={props.setDec}>-</button>
            <button className="BtnMais" onClick={props.setInc}>+</button>
        </div>
    )
}
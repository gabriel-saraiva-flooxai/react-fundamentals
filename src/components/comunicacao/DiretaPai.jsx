import React from "react";
import DiretaFilho from "./DiretaFilho";

export default props => {
    return (
        <div>
            <DiretaFilho nome="Maycon" idade={37} laele={false} />
            <DiretaFilho nome="Ricardo" idade={24} laele={true} />
        </div>
    )
}
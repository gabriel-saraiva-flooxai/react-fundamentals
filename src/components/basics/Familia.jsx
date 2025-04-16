import React from "react";
import FamiliaMembro from "./FamiliaMembro";

export default props => {

    return (
        <div>
            <FamiliaMembro nome="Roberval" sobrenome={props.sobrenome} />
            <FamiliaMembro nome="Arthur" sobrenome {...props} />
            <FamiliaMembro nome="Julhão" sobrenome="Balestrin" />
        </div>
    )

}
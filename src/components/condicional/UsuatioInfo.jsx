import React from "react";
import If, {Else} from "./If"

export default props => {
    const usuario = props.usuario || {}
    return (
        <div>
            <If test={usuario && usuario.nome}>
                Parabéns <strong>{ usuario.nome }</strong>!
                <Else>
                    Parabéns <strong>Parça</strong>!
                </Else>
            </If>
        </div>
    )
}
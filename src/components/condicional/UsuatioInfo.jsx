import React from "react";
import If from "./If"

export default props => {
    const usuario = props.usuario || {}
    return (
        <div>
            <If test={usuario && usuario.nome}>
                Parabéns <strong>{ usuario.nome }</strong>!
            </If>
            <If test={!usuario || !usuario.nome}>
                Parabéns <strong>Parça</strong>!
            </If>
        </div>
    )
}
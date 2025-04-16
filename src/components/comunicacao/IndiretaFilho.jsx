import React from "react";

export default props => {
    const gerarIdade = () => parseInt(Math.random() * (55)) + 15
    const gerarLaele = () => Math.random() > 0.5 
    return (
        <div>
            <div>Filho indireto</div>
            <button onClick={
                function (e) {
                    props.quandoClicar('JP', gerarIdade(), gerarLaele())}
            }>
                Fornecer Informações
            </button>
        </div>
    )
}
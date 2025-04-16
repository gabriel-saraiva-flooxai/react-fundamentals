import React, { useState } from "react";
import IndiretaFilho from "./IndiretaFilho";

export default props => {
    const [nome, setNome] = useState('?')
    const [idade, setIdade] = useState(0)
    const [laele, setLaele] = useState(false)

    function fornecerInformacoes(nome, idade, laele) {
        setNome(nome)
        setIdade(idade)
        setLaele(laele)
    }

    return (
        <div>
            <div>
                <span>{nome} </span>
                <span>{idade}</span>
                <span> {laele ? 'Ele goxta' : 'Rapazz'}</span>
            </div>
            <IndiretaFilho quandoClicar={fornecerInformacoes}></IndiretaFilho>
        </div>
    )
}
import React from "react"

export default function WithParameter(props) {
    const rounded = Math.ceil(props.nota)
    const status = rounded >= 7 ? 'aprovado' : 'reprovado'

    return (
        <div>
            <h2>{ props.titulo }</h2>
            <p>
                A nota do aluno: 
                <strong> { props.aluno } </strong>
                é
                <strong> { rounded } </strong>
                e está
                <strong> { status } </strong>
            </p>
        </div>    
    )

};
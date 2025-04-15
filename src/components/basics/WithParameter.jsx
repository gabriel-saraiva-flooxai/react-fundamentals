import React from "react"

export default function WithParameter(props) {
    const status = props.nota >= 7 ? 'aprovado' : 'reprovado'

    return (
        <div>
            <h2>{ props.titulo }</h2>
            <p>
                A nota do aluno: 
                <strong> { props.aluno } </strong>
                 é 
                <strong> { props.nota } </strong>
                e está
                <strong> { status } </strong>
            </p>
        </div>    
    )

}
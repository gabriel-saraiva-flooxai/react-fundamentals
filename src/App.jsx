import React from "react";

import Random from "./components/basics/Random";
import Fragment from "./components/basics/Fragment";
import WithParameter from "./components/basics/WithParameter";
import First from "./components/basics/First";

export default _ =>

    <div id="app">
        <h1>Fundamentos React</h1>
        <Random min={1} max={60} />
        <Fragment />
        <WithParameter
            titulo='Situação do Aluno'
            aluno='Saraiva'
            nota={6.5}
        />
        <First></First>
    </div>
import React from "react";

import Card from "./components/layout/Card";
import Random from "./components/basics/Random";
import Fragment from "./components/basics/Fragment";
import WithParameter from "./components/basics/WithParameter";
import First from "./components/basics/First";

export default _ =>

    <div id="app">
        <h1>Fundamentos React</h1>

        <Card titulo="#04 - Ramdom">
            <Random min={1} max={60} />
        </Card>

        <Card titulo="#03 - Fragment">
        <Fragment />
        </Card>

        <Card titulo="#02 - With Parameter">
        <WithParameter
            titulo='Situação do Aluno'
            aluno='Saraiva'
            nota={6.5}
        />
        </Card>

        <Card titulo="#01 - First">
            <First></First>
        </Card>

    </div>
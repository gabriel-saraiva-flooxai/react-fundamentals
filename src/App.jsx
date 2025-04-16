import './App.css';
import React from "react";

import Card from "./components/layout/Card";
import Random from "./components/basics/Random";
import Fragment from "./components/basics/Fragment";
import WithParameter from "./components/basics/WithParameter";
import First from "./components/basics/First";

export default _ =>

    <div className="App">
        <h1>Fundamentos React</h1>

        <div className='Cards'>
        <Card titulo="#04 - Ramdom" color="#080">
            <Random min={1} max={60} />
        </Card>

        <Card titulo="#03 - Fragment" color="#080">
        <Fragment />
        </Card>

        <Card titulo="#02 - With Parameter" color="#080">
        <WithParameter
            titulo='Situação do Aluno'
            aluno='Saraiva'
            nota={6.5}
        />
        </Card>

        <Card titulo="#01 - First" color="#080">
            <First></First>
        </Card>
        </div>

    </div>
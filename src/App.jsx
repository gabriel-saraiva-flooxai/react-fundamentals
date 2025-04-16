import './App.css';
import React from "react";

import Card from "./components/layout/Card";

import Familia from './components/basics/Familia';
import Random from "./components/basics/Random";
import Fragment from "./components/basics/Fragment";
import WithParameter from "./components/basics/WithParameter";
import First from "./components/basics/First";

export default _ =>

    <div className="App">

        <h1>Fundamentos React</h1>

        <div className='Cards'>

        <Card titulo="#05 - Children components" color="#080">
            <Familia sobrenome="Diniz" />
        </Card>

        <Card titulo="#04 - Ramdom" color="#080">
            <Random min={1} max={60} />
        </Card>

        <Card titulo="#03 - Fragment" color="#080">
        <Fragment />
        </Card>

        <Card titulo="#02 - With Parameter" color="#321">
        <WithParameter
            titulo='Situação do Aluno'
            aluno='Saraiva'
            nota={6.5}
        />
        </Card>

        <Card titulo="#01 - First" color="#123">
            <First></First>
        </Card>
        </div>

    </div>
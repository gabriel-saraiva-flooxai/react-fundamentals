import './App.css';
import React from "react";

import Card from "./components/layout/Card";

import Mega from './components/mega/Mega';
import Contador from './components/contador/Contador';
import Input from './components/formulario/Input';
import IndiretaPai from './components/comunicacao/IndiretaPai';
import DiretaPai from './components/comunicacao/DiretaPai';
import UsuatioInfo from './components/condicional/UsuatioInfo';
import ParOuImpar from './components/condicional/ParOuImpar';
import TabelaProdutos from './components/repeticao/TabelaProdutos';
import ListaAlunos from './components/repeticao/ListaAlunos';
import Familia from './components/basics/Familia';
import FamiliaMembro from './components/basics/FamiliaMembro';
import Random from "./components/basics/Random";
import Fragment from "./components/basics/Fragment";
import WithParameter from "./components/basics/WithParameter";
import First from "./components/basics/First";

export default () => (
    <div className="App">
        <h1>Fundamentos React</h1>
        <div className='Cards'>

            <Card titulo="#13 - Mega" color="#317d25">
                <Mega qtde={6}/>
            </Card>

            <Card titulo="#12 - Counter" color="#fc7f03">
                <Contador numeroInicial={0}></Contador>
            </Card>

            <Card titulo="#11 - Controlled Component" color="#4b538b">
                <Input></Input>
            </Card>

            <Card titulo="#10 - Indirect Communication" color="#ea0063">
                <IndiretaPai></IndiretaPai>
            </Card>

            <Card titulo="#09 - Direct Communication" color="#001449">
                <DiretaPai></DiretaPai>
            </Card>

            <Card titulo="#08 - Conditional Renderization" color="#000">
                <ParOuImpar numero={23}></ParOuImpar>
                <UsuatioInfo usuario={{ nome: 'Guedes' }} />
                <UsuatioInfo usuario={{}} />
                <UsuatioInfo />
            </Card>

            <Card titulo="#07 - Chalenge Repetition" color="#888">
                <TabelaProdutos></TabelaProdutos>
            </Card>

            <Card titulo="#06 - Repetition" color="#800">
                <ListaAlunos></ListaAlunos>
            </Card>

            <Card titulo="#05 - Children components" color="#008">
                <Familia sobrenome="Diniz">
                    <FamiliaMembro nome="Roberval" />
                    <FamiliaMembro nome="Arthur" />
                    <FamiliaMembro nome="Julhão" />
                </Familia>
            </Card>

            <Card titulo="#04 - Random" color="#080">
                <Random min={1} max={60} />
            </Card>

            <Card titulo="#03 - Fragment" color="#088">
                <Fragment />
            </Card>

            <Card titulo="#02 - With Parameter" color="#880">
                <WithParameter
                    titulo='Situação do Aluno'
                    aluno='Saraiva'
                    nota={6.5}
                />
            </Card>

            <Card titulo="#01 - First" color="#808">
                <First />
            </Card>
        </div>
    </div>
);
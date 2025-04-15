import "./index.css";
import {createRoot} from 'react-dom/client';

import First from "./components/basics/First";
import WithParameter from "./components/basics/WithParameter";
import Fragment from "./components/basics/Fragment";

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
    <div id="app">

        <First></First>
        <WithParameter
            titulo='Situação do Aluno'
            aluno='Saraiva'
            nota='6.5' />
        <Fragment />

    </div>
);

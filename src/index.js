import "./index.css";
import {createRoot} from 'react-dom/client';

import First from "./components/basics/First";
import WithParameter from "./components/basics/WithParameter";

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
    <div id="app">
        <First></First>
        <WithParameter
            titulo='Situação do Aluno'
            aluno='Saraiva'
            nota={8.7}
            status
        />
        
    </div>
);

import "./index.css";
import {createRoot} from 'react-dom/client';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
    <div>
        <strong>Olá React!</strong>
    </div>
);

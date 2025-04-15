import "./index.css";
import {createRoot} from 'react-dom/client';
import First from "./components/basics/First.js";

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);


root.render(
    <div>
        <First></First>
    </div>
);

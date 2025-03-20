import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {GlomalStyle} from "./styles/Global.styled.tsx";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <GlomalStyle/>
        <App/>
    </StrictMode>,
)

import {Routes, Route } from 'react-router-dom'
import { Home } from './Pages/Home'
export function Router(){
    return(
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/moveis" element={<Home />}/>
        </Routes>
    )
}
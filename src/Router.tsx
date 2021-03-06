import {Routes, Route} from 'react-router-dom'
import { Home } from './Pages/Home'
export function Router(){


    return(
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/moveis" element={<Home />}/>
            <Route path="/moveis/:slug" element={<Home />}/>
            <Route path="/moveis/:slug/:slugImgPlus" element={<Home />}/>
        </Routes>
    )
}
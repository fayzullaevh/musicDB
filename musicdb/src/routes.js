import React from 'react'
import { BrowserRouter} from 'react-router-dom'
import {Routes, Route} from 'react-router'
import Header from './components/header'
import Home from './components/Home'

const RoutesComponent = () => (
    <BrowserRouter>
        <Header/>
        <Routes>
            <Route path="/" element={<Home/>}/>
        </Routes>
    </BrowserRouter>
)

export default RoutesComponent
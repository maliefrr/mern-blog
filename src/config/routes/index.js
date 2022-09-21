import React from 'react'
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import {Login,Home,Signup} from '../../pages'


const PageRoute = () => {
    return (
    <Router>
        <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/' element={<Home />}/>
            <Route path='/signup' element={<Signup />} />
        </Routes>
    </Router>
    )
}

export default PageRoute

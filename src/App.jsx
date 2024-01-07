import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';

const App = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false)
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home isAuthenticated={isAuthenticated} />} />
            <Route path='/login' element={<Login setIsAuthenticated={setIsAuthenticated} />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App

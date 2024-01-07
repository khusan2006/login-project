import React, { useEffect } from 'react'
import {useNavigate } from 'react-router-dom'

const Home = ({isAuthenticated}) => {
    const navigate = useNavigate()
    useEffect(() => {
        if(!isAuthenticated) navigate('/login') 
    },[isAuthenticated, navigate])

  return (
    <div>
      Homepage
    </div>
  )
}

export default Home

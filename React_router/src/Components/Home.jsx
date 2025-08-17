import React from 'react'
import { Outlet } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate=useNavigate()
  return (
    <div>
      This is my Homepage
    </div>
  )
}

export default Home
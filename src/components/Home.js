import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='w-screen min-h-screen grid place-content-center border-2 gap-20'>
        <p className='text-2xl'>Welcome to the Home Page</p>
      <div className='flex gap-10 text-xl underline text-blue-700'>
        <Link to={'/form'}>Form</Link>
        <Link to={'/ecommerce'}>E-commerce</Link>
        <Link to={'/api'}>Api</Link>
      </div>
    </div>
  )
}

export default Home

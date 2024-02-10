import React from 'react'
import { Link } from 'react-router-dom'


export default function Products() {
  return (
    <div>
      <h1>Products page   <Link className='underline' to="/dashboard">Go to Home</Link></h1>
    </div>
  )
}

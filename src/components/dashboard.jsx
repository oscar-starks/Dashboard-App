import React from 'react'
import { Link } from 'react-router-dom'

export default function Dashboard() {
  return (
    <div>
      <h1>
        <p>this is the dashboard  <Link className='underline' to="/products">Go to Products</Link></p>
      </h1> 
    </div>
  )
}

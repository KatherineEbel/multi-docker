import React from 'react'
import { Link } from 'react-router-dom'

export default () => {
  return (
    <div>
      <p>I'm the other page!</p>
      <Link to="/">Go back home</Link>
    </div>
  )
}

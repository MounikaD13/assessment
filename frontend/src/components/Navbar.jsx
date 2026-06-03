import React from 'react'
import { Link } from "react-router-dom"

export default function Navbar() {
  return (
   <nav className="bg-gray-300 p-3">
      <div className="flex gap-6 text-lg">
        
        <Link to="/" className="hover:text-blue-700">
          Filter
        </Link>
        <Link to="/todo" className="hover:text-blue-700">
          Todo
        </Link>
        <Link to="/recap" className="hover:text-blue-700">
          Recap
        </Link>
        <Link to="/userform" className="hover:text-blue-700">
        User_Form
        </Link>
        <Link to='/deboun' className="hover:text-blue-700">
        Debouncing
        </Link>
      </div>
    </nav>
  )
}

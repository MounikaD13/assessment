import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Filter from './pages/Filter'
import Todo from './pages/Todo'
import Recap from './pages/Recap'
import UserForm from './pages/UserForm'
import Deboun from './pages/Deboun'
export default function App() {
  return (
   <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Filter />} />
          <Route path="/todo" element={<Todo />} />
          <Route path="/recap" element={<Recap />} />
          <Route path='/userform' element={<UserForm/>}/>
          <Route path='/deboun' element={<Deboun/>}/>
        </Routes>
    </BrowserRouter>
  )
}

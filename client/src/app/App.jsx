import React from 'react'
import { Link, Route, Routes, Outlet } from "react-router-dom";
import MainPage from '../page/mainPage/MainPage';
import AsksList from '../page/AskList/AskList';
import ErrorPage from '../page/ErrorPage/ErrorPage';
import './App.css'

export default function App() {
  return (
    <div>

      <Routes>
       
          <Route path="/asks/:id" element={<AsksList />} />
          <Route path="/" element={<MainPage />} /> 
          <Route path='*' element={<ErrorPage />} />
       
      </Routes>

      <div><Outlet /></div>
    </div>
  )
}

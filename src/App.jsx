import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { HashRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import ProductMarked from './pages/ProductMarked'
import Login from './pages/Login'
import Purchases from './pages/Purchases'
import Navbar from './components/Navbar'
import LoadingScreen from './components/LoadingScreen'
import { useSelector } from 'react-redux'
import ProtectedRoutes from './components/ProtectedRoutes'

function App() {
  
  const isLoading = useSelector(state => state.isLoading)

  return (
    <HashRouter>
      <Navbar/>
      {isLoading && <LoadingScreen/>}
      <Routes>
        <Route path='/'element={<Home />}/>
        <Route path='/product/:id'element={<ProductMarked />}/>
        <Route element={<ProtectedRoutes />}>
         <Route path='/purchases' element={<Purchases />}/>
        </Route>
        <Route path='/login'element={<Login />}/>
      </Routes>
    </HashRouter>
  )
}

export default App

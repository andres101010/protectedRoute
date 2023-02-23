import { useState } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Administracion from './pages/Administracion'
import InformacionGeneral from './pages/InformacionGeneral'
import PaginaPrincipal from './pages/PaginaPprincipal'
import Portafolio from './pages/Portafolio'
import Usuarios from './pages/Usuarios'
import CustomizedMenus from './component/Nav'
import ProtectedRoute from './component/ProtectedRoute'

function App() {
  const [isAllowed, setIsallowed] = useState(false)
  const handleLogin = ()=>{
    setIsallowed(true)
  }
  const handleLogaut = ()=>{
    setIsallowed(false)
  }
  


  return (
    <div className="App">
      
        <BrowserRouter>
        <CustomizedMenus />
        
           <Routes>
           <Route path='/' element={<Navigate to={"/paginaPrincipal"}/>}></Route>
            <Route path='/paginaPrincipal' element={<PaginaPrincipal handleLogin={handleLogin} handleLogaut={handleLogaut}/>}></Route>
            <Route path='/portafolio' element={
               <ProtectedRoute isAllowed={isAllowed}>
                 <Portafolio />
               </ProtectedRoute>}> 
            </Route>

            <Route path='/usuarios' element={<Usuarios />}></Route>
            <Route path='/administracion' element={<Administracion />}></Route>
            <Route path='/informacionGeneral' element={<InformacionGeneral />}></Route>
           </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App

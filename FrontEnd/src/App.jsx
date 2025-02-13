
import './App.css'
import './index.css'
import { Link, Route, Routes } from 'react-router-dom'
import { NavBar } from './components/NavBar'
import { About } from './components/About'
import { Login } from './components/Login'
import { Proyects } from './components/Proyects'
import { Palabritas } from './components/Palabritas'
import { Start } from './components/Start'

function App() {


  return (
    <>      
      <NavBar></NavBar>

      <Routes>      
        <Route path='/' element={<Palabritas/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Proyects' element={<Proyects/>}/>    
        <Route path='/About' element={<About/>}/>            
      </Routes>
      
    </>
  )
}

export default App

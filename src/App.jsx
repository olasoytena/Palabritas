
import './App.css'
import './index.css'
import { Link, Route, Routes } from 'react-router-dom'
import { NavBar } from './components/NavBar'
import { Abount } from './components/Abount'
import { Login } from './components/Login'
import { Proyects } from './components/Proyects'
import { Start } from './components/Start'

function App() {


  return (
    <>      
      <NavBar></NavBar>

      <Routes>      
        <Route path='/' element={<Start/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Proyects' element={<Proyects/>}/>    
        <Route path='/Abount' element={<Abount/>}/>    
      </Routes>
      
    </>
  )
}

export default App

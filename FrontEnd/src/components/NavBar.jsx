
import { Link } from "react-router-dom"

export const NavBar = () => {
    return (
        <nav className='menu'>
            <Link to='/'> Inicio</Link>    
            <Link to='/Login'> Login</Link>        
            <Link to='/Proyects'> Proyects</Link>                             
            <Link to='/About'> About</Link>   
        </nav>
        
    )
}
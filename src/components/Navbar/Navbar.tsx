import { useState } from 'react';

import logo from '../../assets/logo.png';
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import './navbar.css'

const Menu = () => (
  <ul>
    <li><a href='/webshop'>Inicio</a></li>
    <li><a href='/webshop/store'>Tienda</a></li>
    <li><a href='/about'>Nuestra empresa</a></li>
    <li><a href='/contact'>Contáctanos</a></li>
  </ul>
) 

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className='shop__navbar'>
      <div className='shop__navbar-links'>
        <div className='shop__navbar-links_logo'>
          <a href='/webshop'><img src={logo} alt='logo' /></a>          
        </div>
        <div className='shop__navbar-links_container'>
          <Menu />
        </div>
      </div>  

      <div className='shop__navbar-sign'>
        <a href='/'>Iniciar Sesión</a>
        <button >Registrarse</button>
      </div> 
      <div className='shop__navbar-menu'>
        {toggleMenu
        ? <RiCloseLine color='fff' size={27} onClick={()=>setToggleMenu(false)}/>
        : <RiMenu3Line color='fff' size={27} onClick={()=>setToggleMenu(true)}/>
        }  
        {toggleMenu &&(
          <div className='shop__navbar-menu_container scale-up-tr'>
            <div className='shop__navbar-menu_container-links'>
              <Menu />                      
              <div className='shop__navbar-menu_container-links-sign'>
                <a href='/'>Iniciar Sesión</a>
                <button >Registrarse</button>
              </div>
            </div>
          </div>  
        )}     
      </div>
    </nav>
    
  )
}

export default Navbar
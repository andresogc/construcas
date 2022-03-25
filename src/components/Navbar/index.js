import React,{useState,useEffect} from 'react';
import {FaBars} from 'react-icons/fa';
import { IconContext } from "react-icons/lib";
import { FaWhatsapp } from 'react-icons/fa';
import { Nav,NavbarContainer,NavLogo,MobileIcon,NavMenu,NavItem,NavLinks,NavBtn,SocialIconLink/* NavBtnLink */ } from "./navbarElements";
import { animateScroll as scroll } from 'react-scroll';

const Navbar = ({toggle}) => {

  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = ()=>{
    if(window.scrollY >= 80){
      setScrollNav(true);
    }else{
      setScrollNav(false);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', changeNav);
  }, [])
  
  const toggleHome = ()=>{
    scroll.scrollToTop();
  }

  return (
    <>
     <IconContext.Provider value={{color:'#fff'}}>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo to='/' onClick={toggleHome}>Construcas</NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars/>
          </MobileIcon>
          <NavMenu>
           {/*  <NavItem>
              <NavLinks to="about" smooth={true} duration={500} spy={true} exact={true} offset={-80} >Sobre mi</NavLinks>
            </NavItem> */}
            <NavItem>
              <NavLinks to="discover" smooth={true} duration={500} spy={true} exact={true} offset={-80}>Servicios</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="services" smooth={true} duration={500} spy={true} exact={true} offset={-80}>Proyectos</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="signup" smooth={true} duration={500} spy={true} exact={true} offset={-80}>Contacto</NavLinks>
            </NavItem>
            <NavItem>
              <SocialIconLink href="https://wa.me/573175758227" target="_blank" aria-label="Whatsapp"><FaWhatsapp/>  +57 317 575 82 27 </SocialIconLink>
            </NavItem>
          </NavMenu>
          <NavBtn>
           {/*  <NavBtnLink to="/signin">Sign In</NavBtnLink> */}
          </NavBtn>
        </NavbarContainer>
      </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;

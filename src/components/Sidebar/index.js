import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

import { SidebarContainer,Icon,CloseIcon,SidebarWrapper,SidebarMenu,SidebarLink,SocialIconLink/* ,SideBtnWrap,SidebarRoute */  } from "./SidebarElements";

const Sidebar = ({isOpen,toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
            <CloseIcon/>
        </Icon>
        <SidebarWrapper>
            <SidebarMenu>
                {/* <SidebarLink to="about" onClick={toggle} >About</SidebarLink> */}
                <SidebarLink to="discover" onClick={toggle}>Servicios</SidebarLink>
                <SidebarLink to="services" onClick={toggle}>Proyectos</SidebarLink>
                <SidebarLink to="signup" onClick={toggle}>Contacto</SidebarLink>
               {/*  <SidebarLink to="https://wa.me/573175758227" onClick={toggle}><FaWhatsapp/>  +57 301 245 84 44</SidebarLink> */}
                <SocialIconLink href="https://wa.me/573175758227" target="_blank" aria-label="Whatsapp"><FaWhatsapp/>  +57 301 245 84 44 </SocialIconLink>
            </SidebarMenu>
           {/*  <SideBtnWrap>
                <SidebarRoute to="/signin">Sign In</SidebarRoute>
            </SideBtnWrap> */}
        </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;

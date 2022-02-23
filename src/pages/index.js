import React,{useState} from 'react';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import {homeObjOne,homeObjTwo,homeObjThree} from '../components/InfoSection/Data';
import Navbar from '../components/Navbar';
import Services from '../components/Services';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';

function Home() {

  const [isOpen, setIsOpen] = useState(false);

  //funcion para mostrar u ocultar el sidebar(menu), esta varibale es leida en sidebarelements en donde estan los estilos y alli muestra u oculta el contenido segun el valor de isOpen
  const toggle = ()=>{
    setIsOpen(!isOpen);
  }

  return (
    <>
        <Sidebar isOpen={isOpen} toggle={toggle}/>
        <Navbar toggle={toggle}/>
        <HeroSection />
        <InfoSection {...homeObjOne}/>
        <InfoSection {...homeObjTwo}/>
        <Services/>
        <InfoSection {...homeObjThree}/>
        <Footer />
    </>
  );
}

export default Home;

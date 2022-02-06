import React,{useState} from 'react';
import HeroSection from '../components/HeroSection';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

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
    </>
  );
}

export default Home;

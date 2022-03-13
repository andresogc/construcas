import React from 'react';
/* import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel'; */
/* import Icon1 from '../../images/svg-1.svg';
import Icon2 from '../../images/svg-3.svg';
import Icon3 from '../../images/svg-5.svg'; */

import Icon1 from '../../images/trabajos/image1.jpeg';
import Icon2 from '../../images/trabajos/image2.jpeg';
import Icon3 from '../../images/trabajos/image3.jpeg';


import { ServicesContainer,ServicesH1,ServicesWrapper,ServicesCard,ServicesIcon,ServicesH2,ServicesP } from "./servicesElements";

const Services = () => {
  return (
    <ServicesContainer id="services">
        <ServicesH1> Proyectos</ServicesH1>
        <ServicesWrapper>
            <ServicesCard>
                <ServicesIcon src={Icon1}/>
                <ServicesH2>Remodelación de casas</ServicesH2>
                <ServicesP>Mejora de ambiente con diseños vivos y vanguardistas.</ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon2}/>
                <ServicesH2>Reformas locativas</ServicesH2>
                <ServicesP>Acabados y texturizados modernos.</ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon3}/>
                <ServicesH2>Remodelaciones</ServicesH2>
                <ServicesP>Hacemos todo tipo de remodelaciones en apartamentos, oficinas, edificios..</ServicesP>
            </ServicesCard>
        </ServicesWrapper>
       
    </ServicesContainer>
  )
}

export default Services
import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Icon1 from '../../images/trabajos/image1.jpeg';
import Icon2 from '../../images/trabajos/image2.jpeg';
import Icon3 from '../../images/trabajos/image3.jpeg';
import Icon4 from '../../images/trabajos/image4.jpeg';
import Icon5 from '../../images/trabajos/image5.jpeg';
import Icon6 from '../../images/trabajos/image6.jpeg';
import Icon7 from '../../images/trabajos/image7.jpeg';
import Icon8 from '../../images/trabajos/image8.jpeg';
import Icon9 from '../../images/trabajos/image9.jpeg';
import Icon10 from '../../images/trabajos/image10.jpeg';
import Icon11 from '../../images/trabajos/image11.jpeg';
import Icon12 from '../../images/trabajos/image12.jpeg';
import Icon13 from '../../images/trabajos/image13.jpeg';
import Icon14 from '../../images/trabajos/image14.jpeg';
import Icon15 from '../../images/trabajos/image15.jpeg';
import Icon16 from '../../images/trabajos/image16.jpeg';
import Icon17 from '../../images/trabajos/image17.jpeg';
import Icon18 from '../../images/trabajos/image18.jpeg';
import Icon19 from '../../images/trabajos/image19.jpeg';
import Icon20 from '../../images/trabajos/image20.jpeg';
import Icon21 from '../../images/trabajos/image21.jpeg';
import Icon22 from '../../images/trabajos/image22.jpeg';
import Icon23 from '../../images/trabajos/image23.jpeg';
import Icon24 from '../../images/trabajos/image24.jpeg';
import Icon25 from '../../images/trabajos/image25.jpeg';
import Icon26 from '../../images/trabajos/image26.jpeg';
import Icon27 from '../../images/trabajos/image27.jpeg';
import Icon28 from '../../images/trabajos/image28.jpeg';
import Icon29 from '../../images/trabajos/image29.jpeg';
import Icon30 from '../../images/trabajos/image30.jpeg';
import Icon31 from '../../images/trabajos/image31.jpeg';
import Icon32 from '../../images/trabajos/image32.jpeg';
import Icon33 from '../../images/trabajos/image33.jpeg';
import Icon34 from '../../images/trabajos/image34.jpeg';
import Icon35 from '../../images/trabajos/image35.jpeg';
import Icon36 from '../../images/trabajos/image36.jpeg';
import Icon37 from '../../images/trabajos/image37.jpeg';
import Icon38 from '../../images/trabajos/image38.jpeg';
import Icon39 from '../../images/trabajos/image39.jpeg';
import Icon40 from '../../images/trabajos/image40.jpeg';
import Icon41 from '../../images/trabajos/image41.jpeg';
import Icon42 from '../../images/trabajos/image42.jpeg';
import Icon43 from '../../images/trabajos/image43.jpeg';
import Icon44 from '../../images/trabajos/image44.jpeg';
import Icon45 from '../../images/trabajos/image45.jpeg';
import Icon46 from '../../images/trabajos/image46.jpeg';
import Icon47 from '../../images/trabajos/image47.jpeg';
import Icon48 from '../../images/trabajos/image48.jpeg';
import Icon49 from '../../images/trabajos/image49.jpeg';
import Icon50 from '../../images/trabajos/image50.jpeg';


import { ServicesContainer,ServicesH1,ServicesWrapper,ServicesCard,ServicesIcon,ServicesH2,ServicesP } from "./servicesElements";


const Services = () => {
    
  return (
    <ServicesContainer id="services">
        <ServicesH1> Proyectos</ServicesH1>
        <ServicesWrapper>
            <ServicesCard>
                <Carousel autoPlay={true} infiniteLoop={true} showIndicators={false} >
                    <ServicesIcon src={Icon1}/>
                    <ServicesIcon src={Icon15}/>
                    <ServicesIcon src={Icon22}/>
                    <ServicesIcon src={Icon27}/>
                    <ServicesIcon src={Icon30}/>
                    <ServicesIcon src={Icon32}/>
                    <ServicesIcon src={Icon33}/>
                    <ServicesIcon src={Icon34}/>
                    <ServicesIcon src={Icon39}/>
                    <ServicesIcon src={Icon40}/>
                    <ServicesIcon src={Icon41}/>
                    <ServicesIcon src={Icon42}/>
                    <ServicesIcon src={Icon45}/>
                    <ServicesIcon src={Icon46}/>
                    <ServicesIcon src={Icon48}/>
                </Carousel>
                <ServicesH2>Remodelación de casas</ServicesH2>
                <ServicesP>Mejora de ambiente con diseños vivos y vanguardistas.</ServicesP>
            </ServicesCard>
            <ServicesCard>
                <Carousel autoPlay={true} infiniteLoop={true} showIndicators={false}>
                    <ServicesIcon src={Icon2}/>
                    <ServicesIcon src={Icon18}/>
                    <ServicesIcon src={Icon20}/>
                    <ServicesIcon src={Icon25}/>
                    <ServicesIcon src={Icon26}/>
                    <ServicesIcon src={Icon28}/>
                    <ServicesIcon src={Icon29}/>
                    <ServicesIcon src={Icon31}/>
                    <ServicesIcon src={Icon34}/>
                    <ServicesIcon src={Icon37}/>
                    <ServicesIcon src={Icon43}/>
                    <ServicesIcon src={Icon34}/>
                    <ServicesIcon src={Icon44}/>
                    <ServicesIcon src={Icon47}/>
                    <ServicesIcon src={Icon49}/>
                    <ServicesIcon src={Icon50}/>
                </Carousel>
                <ServicesH2>Reformas locativas</ServicesH2>
                <ServicesP>Acabados y texturizados modernos.</ServicesP>
            </ServicesCard>
            <ServicesCard>
                <Carousel autoPlay={true} infiniteLoop={true} showIndicators={false}>
                    <ServicesIcon src={Icon3}/>
                    <ServicesIcon src={Icon4}/>
                    <ServicesIcon src={Icon5}/>
                    <ServicesIcon src={Icon6}/>
                    <ServicesIcon src={Icon7}/>
                    <ServicesIcon src={Icon8}/>
                    <ServicesIcon src={Icon9}/>
                    <ServicesIcon src={Icon10}/>
                    <ServicesIcon src={Icon11}/>
                    <ServicesIcon src={Icon12}/>
                    <ServicesIcon src={Icon13}/>
                    <ServicesIcon src={Icon14}/>
                    <ServicesIcon src={Icon16}/>
                    <ServicesIcon src={Icon17}/>
                    <ServicesIcon src={Icon19}/>
                    <ServicesIcon src={Icon21}/>
                    <ServicesIcon src={Icon23}/>
                    <ServicesIcon src={Icon24}/>
                    <ServicesIcon src={Icon35}/>
                    <ServicesIcon src={Icon36}/>
                    <ServicesIcon src={Icon38}/>
                </Carousel>
                <ServicesH2>Remodelaciones</ServicesH2>
                <ServicesP>Hacemos todo tipo de remodelaciones en apartamentos, oficinas, edificios..</ServicesP>
            </ServicesCard>
        </ServicesWrapper>
       
    </ServicesContainer>
  )
}

export default Services
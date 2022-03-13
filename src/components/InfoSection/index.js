import React from 'react';
import emailjs from '@emailjs/browser';
import { Button } from '../ButtonElements';
import { InfoContainer, InfoWrapper, InfoRow, Column1, Column2, TextWrapper, TopLine, Heading, SubTitle, BtnWrap , ImgWrap, Img,FormWrap,/* Icon, */FormContent,Form, FormH1, FormLabel, FormInput ,FormTextArea,FormButton/* ,Text */ } from './infoElements';

const InfoSection = ({lightBg,id,imgStart,topLine,lightText,headline,darkText,description,buttonLabel,img,alt, primary,dark,dark2,li,li2,li3,li4,li5,li6,contact,setImg}) => {
    
    const sendEmail = (e)=>{
        e.preventDefault();

        emailjs.sendForm('service_4eo9jzk', 'template_0lplc6l', e.target, 'MbfNmJ2RjJqLZqhPG')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
    }
    
    return (
        <>
            <InfoContainer lightBg={lightBg} id={id}>
                <InfoWrapper>
                    <InfoRow imgStart={imgStart}>
                        <Column1>
                            <TextWrapper>
                                <TopLine>{topLine}</TopLine>
                                <Heading lightText={lightText}>{headline}</Heading>
                                {!contact ?
                                    <SubTitle darkText={darkText}>{description}</SubTitle>
                                    :
                                    <FormWrap>
                                        {/* <Icon to="/">Dolla</Icon> */}
                                        <FormContent>
                                            <Form  onSubmit={sendEmail}>
                                                <FormInput type='hidden' name="subject" value="Daniel un cliente solicita asesoria, contactalo en breve!" required/>
                                                <FormH1>Enviar un mensaje</FormH1>
                                                <FormLabel htmlFor='for'>Nombre</FormLabel>
                                                <FormInput type='text' name="name" required/>
                                                <FormLabel htmlFor='for'>Teléfono</FormLabel>
                                                <FormInput type='number' name="phone" max="9999999999"/>
                                                <FormLabel htmlFor='for'>Email</FormLabel>
                                                <FormInput type='email' name="email" required/>
                                                <FormLabel htmlFor='for'>Mensaje</FormLabel>
                                                <FormTextArea type='text' name="message" required />
                                                <FormButton type='submit'>Enviar mensaje</FormButton>
                                               {/*  <Text>Forgot password</Text> */}
                                            </Form>
                                        </FormContent>
                                    </FormWrap>
                                }

                                {li ? 
                                <>
                                <SubTitle darkText={darkText}> - {li2}</SubTitle>
                                <SubTitle darkText={darkText}> - {li3}</SubTitle>
                                <SubTitle darkText={darkText}> - {li4}</SubTitle>
                                <SubTitle darkText={darkText}> - {li5}</SubTitle>
                                <SubTitle darkText={darkText}> - {li6}</SubTitle>
                                </>
                                :""}
                              
                            </TextWrapper>
                        </Column1>
                       
                        <Column2>
                            <ImgWrap>
                                <Img  src={img} alt={alt}/>
                            </ImgWrap>
                            <BtnWrap>
                                    <Button to="Home" smooth={true} duration={500} spy={true} exact="true" offset={-80} primary={primary ? 1:0} dark={dark ? 1:0} dark2={dark2 ? 1:0} >{buttonLabel}</Button>
                                </BtnWrap>
                        </Column2>
                        
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    )
}

export default InfoSection;
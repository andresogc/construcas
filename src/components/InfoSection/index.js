import React from 'react'
import { Button } from '../ButtonElements';
import { InfoContainer, InfoWrapper, InfoRow, Column1, Column2, TextWrapper, TopLine, Heading, SubTitle, BtnWrap , ImgWrap, Img } from './infoElements';

const InfoSection = ({lightBg,id,imgStart,topLine,lightText,headline,darkText,description,buttonLabel,img,alt, primary,dark,dark2,li,li2,li3,li4,li5,li6}) => {
    return (
        <>
            <InfoContainer lightBg={lightBg} id={id}>
                <InfoWrapper>
                    <InfoRow imgStart={imgStart}>
                        <Column1>
                            <TextWrapper>
                                <TopLine>{topLine}</TopLine>
                                


                                <Heading lightText={lightText}>{headline}</Heading>
                                <SubTitle darkText={darkText}>{description}</SubTitle>
                                {li ? 
                                <>
                                <SubTitle darkText={darkText}> - {li2}</SubTitle>
                                <SubTitle darkText={darkText}> - {li3}</SubTitle>
                                <SubTitle darkText={darkText}> - {li4}</SubTitle>
                                <SubTitle darkText={darkText}> - {li5}</SubTitle>
                                <SubTitle darkText={darkText}> - {li6}</SubTitle>
                                </>
                                :""}
                                <BtnWrap>
                                    <Button to="Home" smooth={true} duration={500} spy={true} exact="true" offset={-80} primary={primary ? 1:0} dark={dark ? 1:0} dark2={dark2 ? 1:0} >{buttonLabel}</Button>
                                </BtnWrap>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img  src={img} alt={alt}/>
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    )
}

export default InfoSection;
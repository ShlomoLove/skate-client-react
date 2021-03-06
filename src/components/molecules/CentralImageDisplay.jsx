import React from 'react'
import styled, { keyframes } from 'styled-components'
import ensoPlainWhite from '../../images/enso_plain_white.png'

const rotate = keyframes `
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

const StyledImageContainer = styled.div` 
  display: flex; 
  margin: 0;
  width: 100%;
  height: auto; 
  max-width: 1100px; 
  height: 52vw;  
  align-items: center; 
  justify-content: center;
  background: linear-gradient(80deg, rgba(119,33,46, .7), rgba(255,0,0,.1) 70%),
  linear-gradient(70deg, rgba(119,33,46, .5), rgba(0,0,255,.2) 60%), url('https://skateparks.s3-us-west-2.amazonaws.com/skate_home_image.jpg');
  background-size: cover; 
  z-index: 1;
  position: relative;
  
  @media(min-width: 1100px) {
    height: 570px;
    border-radius: 8px;
    margin-bottom: 5px;
  }
`

const StyledHomeImage = styled.img`
  object-fit: contain;
  position: relative; 
  width: 100%;
  height: auto;
  z-index: -1;     
`

const StyledEnsoWhite = styled.img `
  z-index: 5; 
  width: 42vw;
  position: absolute;
  animation: ${rotate} 10s linear infinite;
  @media(min-width: 1100px) {
    width: 450px; 
  } 
`

const StyledText = styled.div`
  font-size: 3vw; 
  font-family: 'Gotu', sans-serif;
  color: white;
  text-align: center;
  @media (min-width: 1100px) {
    font-size: 32px; 
  } 
`

const StyledTextContainerLeft = styled.div `
  z-index: 5;
  position: absolute;
  left: 1vw;
  width: 35%; 
  heigth: auto;
  align-self: start;
  padding-top: 1vw; 
  vertical-align: top;       
`

const StyledTextContainerRight = styled.div `
  z-index: 5;
  position: absolute;
  right: 1vw;
  width: 35%; 
  heigth: auto;
  align-self: flex-end;
  padding-bottom: 1vw;  
  vertical-align: bottom;      
`

const CentralImageDisplay = props => {
  return (
  <StyledImageContainer>
    <StyledTextContainerLeft>
      <StyledText>Letting the Mind Go</StyledText>
    </StyledTextContainerLeft>
    <StyledEnsoWhite src={ensoPlainWhite}/>
    <StyledTextContainerRight>
      <StyledText>Letting the Body Flow</StyledText>
    </StyledTextContainerRight>
  </StyledImageContainer>
  )
}

export default CentralImageDisplay

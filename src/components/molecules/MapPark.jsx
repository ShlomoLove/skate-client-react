import React, {useState, useEffect} from 'react'
import ReactMapGL, { Marker, Popup } from "react-map-gl"
import useWindowSize from '../atoms/UseWindowSize'
import styled from 'styled-components'
import mapPin from '../../images/Enso-Map-Pin.png'

const MapContainer = styled.div`
  border: solid rgb(119, 33, 46);
  margin-top: 3vw; 
  width: 85vw;
  height: 50vw;
  @media(min-width: 1100px) {
    width: 860px; 
    height: 550px; 
    margin-top: 35px; 
  } 
`

const SkateImage = styled.img `
  height: 2.5vw; 
  width: auto;
  
  &:hover{
    cursor: pointer;
    height: 3.25vw;  
  }

  @media (min-width: 1100px) {
    height: 30px;
    width: auto;
  }
`

const PopupName = styled.h3`
  font-family: 'Dosis', sans-serif;
  font-weight: 400; 
  font-size: 2.25vw;
  
  @media(min-width: 1100px){
    font-size: 24px;
  }
`

const PopupDetails = styled.p`
  font-family: 'Dosis', sans-serif; 
  font-weight: 200;
  font-size: 2vw;
  
  @media(min-width: 1100px) {
    font-size: 20px; 
  }
`

const PopupContainer = styled.div`
  width: 300px; 
`

const MapPark = props => {
  const windowSize = useWindowSize()
  const { name, address, geolong, geolat, id } = props
  const pinLong = parseFloat(geolong)
  const pinLat = parseFloat(geolat)
  const viewIt = {latitude: pinLat,
                longitude: pinLong,
                zoom: 15,
                width: '100%',
                height: '100%'
              }
              
  const [viewport, setViewport] = useState (viewIt)

  const [selectedPark, setPark] = useState(false)

  useEffect(() => {
    const listener = (e) => {
      if (e.key === 'Escape') {
        setPark(false)
      }
    }
    window.addEventListener('keydown', listener)
    return () => {
      window.removeEventListener('keydown', listener)
    }
  }, [])

  useEffect(() => {
    const resizeIt = () => {
      setViewport(viewport)
    }
    window.addEventListener('resize', resizeIt)
    return () => {
      window.removeEventListener('resize', resizeIt)
    }
  }, [])

  return (
    <MapContainer>
      <ReactMapGL
      {...viewport}
      mapboxApiAccessToken={process.env.MAP_API}
      mapStyle="mapbox://styles/snassau/ck93a8k5q0fkm1iqlo1s2wsmo"
      onViewportChange={view => {
        setViewport(view)
      }}
      >
        <Marker
          key={id}
          longitude={pinLong}
          latitude={pinLat}
          >
            <SkateImage 
            src={mapPin}
            onClick={e=> {
              e.preventDefault()
              setPark(true)
            }}/>
          </Marker>

          {selectedPark ? (
            <Popup
            latitude={pinLat}
            longitude={pinLong}
            onClose={() => {
              setPark(false)
            }}
            >
              <PopupContainer>
                <PopupName>{name}</PopupName>
                <PopupDetails>{address.street}, {address.city}</PopupDetails>
              </PopupContainer>
            </Popup>
          ) : null}
      </ReactMapGL>
    </MapContainer>
  )
}

export default MapPark


import React, { useEffect,useState } from 'react';



export const App = () => {

   let url = '';

   const [ubicacion, setUbicacion] = useState('')

  useEffect(() => {
    getCoordenadas();
  },)

  const getCoordenadas = () => {
     //watchPosition
     navigator.geolocation.getCurrentPosition(position => {
      const { latitude, longitude } = position.coords;
      url = 'https://maps.googleapis.com/maps/api/geocode/json?latlng=' + latitude + ',' + longitude + '&key=AIzaSyDvS3_rBwM7RJYjDOnPzquTpJVlskDs7nI';
      console.log(latitude,longitude)
      getUbicacion(url);
    });
    
  }

  const getUbicacion = async(endpoint) => {
    const resp = await fetch(endpoint);
    const {results} = await resp.json();
    console.log(results[0].formatted_address)
    setUbicacion(results[0].formatted_address)
  }

 

  return (
    <div>
      <h1>Hola Jenny</h1>
      {
        ubicacion
      }
    </div>
  )
}
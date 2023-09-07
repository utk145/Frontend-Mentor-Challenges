import { useEffect, useState } from 'react'
import Details from './Details'
import MapRes from './MapRes';
import Search from './Search'

function App() {


  const [coordinates, setcoordinates] = useState({});

  const [apiRes, setApiRes] = useState({
    ipAdd: "",
    loc: "",
    timeZone: "",
    isp: ""
  });

  const apiData = async (ipAddress = '') => {
    try {
      const response = await fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=${import.meta.env.VITE_API_KEY}&ipAddress=${ipAddress}`);
      const data = await response.json();
      console.log(data);
      setApiRes({
        ipAdd: data.ip,
        loc: `${data.location.city}, ${data.location.country} ${data.location.postalCode != "" ? "," + data.location.postalCode : ""}`,
        timeZone: `UTC ` + data.location.timezone,
        isp: data.isp
      });
      setcoordinates({ lat: data.location.lat, lng: data.location.lng });

    } catch (error) {
      console.log(error.message);
    }
  }


  useEffect(() => {
    apiData()
  }, [])


  return (
    <div className='flex flex-col h-screen relative'>
      <Search apiRes={apiRes} apiData={apiData} />
      <Details apiRes={apiRes} coordinates={coordinates} />
      <MapRes coordinates={coordinates} />
    </div>
  )
}

export default App

import { useEffect, useState } from 'react'
import './App.css'
import Form from './pages/form'
import WeatherDisplay from './pages/WeatherDisplay'


const API_KEY = '13fee6b66218a021a32d5ae545503994'


function App() {
  const [weather, setWeather] = useState({})

  async function getWeather(zipcode) {
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${zipcode},us&appid=${API_KEY}&units=metric`)

      if(response.ok) {
        const data = await response.json()
        setWeather(data)
        console.log(data)
      }
      else {
        setWeather({})
      }
    } catch (e) {
      console.log(e)
    }
  }

    useEffect(()=>{
      getWeather('60601')
    }, [])

  return (
    <>
      <h1>The Weather App</h1>
      <h2>United States</h2>
      <Form weatherSearch={getWeather} />
      <WeatherDisplay weather={weather}/>
    </>
  )
}

export default App
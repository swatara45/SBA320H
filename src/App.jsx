import { useEffect, useState } from 'react'
import './App.css'
import Form from './pages/form'
import WeatherDisplay from './pages/WeatherDisplay'
import axios from 'axios'
import Nav from './components/Nav'
import NotFound from './pages/NotFound'
import { Routes, Route } from 'react-router-dom';
import AuthPage from './pages/Authpage'

const API_KEY = '13fee6b66218a021a32d5ae545503994';

function App() {
  const [weather, setWeather] = useState({});

  //Makes an async call to the OpenWeatherMap API using the provided ZIP code.
  //For temperature in Celsius use units=metric
  async function getWeather(zipcode) {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?zip=${zipcode},us&appid=${API_KEY}&units=metric`   
      );

      const data = response.data;
      setWeather(data);
      console.log(data);
    } catch (e) {
      console.error('Error fetching weather:', e);
      setWeather({});
    }
  }

  useEffect(() => {
    getWeather('60601');
  }, []);

    return (
    <>
      <Nav />
      <Routes>
        <Route
          path="/WeatherDisplay"
          element={
            <>
              <h1>The Weather App</h1>
              <h2>United States</h2>
              <Form weatherSearch={getWeather} />
              <WeatherDisplay weather={weather} />
            </>
          }
        />
        <Route path="*" element={<NotFound />} />
        <Route path="/auth" element={<AuthPage />} /> 
      </Routes>
    </>
  );
}

export default App;
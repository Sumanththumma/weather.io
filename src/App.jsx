import React from 'react'
import SearchBar from './Components/SearchBar'
import Stats from './Components/Stats'
import CurrentStats from './Components/CurrentStats'
import Forecast from './Components/Forecast'
import UseGeolocation from './Components/Subcomponents/UseGeolocation'
const App = () => {
  const {location, error} = UseGeolocation();
  console.log(location, error);
  return (
    <>
      <div className='flex flex-col items-center justify-start w-full h-screen bg-gray-950'>
        <SearchBar />
        <Stats />
        <CurrentStats />
        <Forecast />
      </div>
    </>
  )
}

export default App
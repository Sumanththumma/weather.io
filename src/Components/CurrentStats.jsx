import React from 'react'

const CurrentStats = () => {
  return (
    <div className='w-11/12 flex flex-col px-3 py-2 bg-gray-800 text-white mt-2 rounded-md'>
        <div className='w-full text-center'>Feels Like 36 &deg; C</div>
        <div>
            <h3>UV Index: </h3>
            <h3>Pollen: </h3>
            <h3>Humidity:</h3>
            <h3>Wind: </h3>
        </div>
    </div>
  )
}

export default CurrentStats
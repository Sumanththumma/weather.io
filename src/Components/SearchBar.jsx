import React from 'react'
import { RiSearchLine } from '@remixicon/react'
const SearchBar = () => {
  return (
    <div className='flex gap-2 items-center justify-between bg-gray-800 placeholder:text-gray-400 text-white w-11/12 rounded-md'>
        <input className='focus:outline-0 px-3 py-2 w-3/4' type="search" name="" id="" placeholder='Enter your location'  />
        <i className='mr-3'><RiSearchLine width={16} /></i>
    </div>
  )
}

export default SearchBar
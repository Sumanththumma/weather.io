import React, { useEffect, useState } from 'react'

const UseGeolocation = () => {
    const [location,setLocation] = useState({lat: null, long: null});
    const [error,setError] = useState(null);
    useEffect(()=>{
        if(!navigator.geolocation){
            setError("Geolocation fetching is not available in your browser");
            console.log(error);
        }
        return{
        }
        navigator.geolocation.getCurrentPosition((position)=>{
            setLocation({
                lat: position.coords.latitude,
                long: position.coords.longitude
            }),
            (error)=>{
                setError(error.msg)
            }
        });
    },[])
     return { location,error }
}

export default UseGeolocation
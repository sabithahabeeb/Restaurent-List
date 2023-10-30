import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

function View() {
    const {id} =  useParams()
    const { allRestaurants, loading, error } = useSelector((state) => state.restuarantSlice)
    const [restaurent,setRestaurent] = useState({})

    useEffect(()=>{
        setRestaurent(allRestaurants?.find(item=>item.id==id))

    },[])
    console.log(restaurent);
   
  return (
    <div>View</div>
  )
}

export default View
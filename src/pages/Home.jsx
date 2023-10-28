import React, { useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import RestCard from '../Components/RestCard'
import { useDispatch, useSelector } from 'react-redux'
import { fetchResturents } from '../redux/restuarantSlice'

function Home() {
  const allRest = useSelector((state) => state.restuarantSlice.allRestaurants)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchResturents())

  },[])
  return (
    <>
      <Row className='mt-5'>
        {
          allRest.length>0?allRest.map(restaurent=>(
<Col className=' px-5 py-3' sm={12} md={6} lg={4} xl={3} >
            <RestCard restaurent={restaurent} />
          </Col>
          )):null
          }
      </Row>
    </>
  )
}

export default Home
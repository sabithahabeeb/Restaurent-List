import React, { useEffect } from 'react'
import { Col, Row, Spinner } from 'react-bootstrap'
import RestCard from '../Components/RestCard'
import { useDispatch, useSelector } from 'react-redux'
import { fetchResturents } from '../redux/restuarantSlice'

function Home() {
  const { allRestaurants, loading, error } = useSelector((state) => state.restuarantSlice)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchResturents())
  }, [])
  return (
    <>

      <div className='d-flex justify-content-center align-items-center w-100 mt-2'>
        {
          loading && <div> <Spinner animation="border" variant="info" /> <span className='ms-2'> Loading....</span></div>
        }
      </div>

      <div className='d-flex justify-content-center align-items-center w-100 mt-2'>
        {
          !loading && error ? <div>  <span className='fw-bolder text-danger'> {error}</span></div> : null
        }
      </div>

      <Row className='mt-3'>
        {
          !loading && allRestaurants?.length > 0 ? allRestaurants?.map(restaurent => (
            <Col className=' px-5 py-3' sm={12} md={6} lg={4} xl={3} >
              <RestCard restaurent={restaurent} />
            </Col>
          )) : <span className='text-danger fw-bolder mb-3 d-flex justify-content-center align-items-center w-100 mt-2'>No restaurents are Available</span>
        }
      </Row>
    </>
  )
}

export default Home
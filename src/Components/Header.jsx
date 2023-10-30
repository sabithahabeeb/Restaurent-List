import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { searchRestaurent } from '../redux/restuarantSlice'

function Header() {
  const dispatch = useDispatch()
  return (
    <>
     <Navbar className="bg-dark">
        <Container>
          <Navbar.Brand>
       <Link to={'/'} style={{textDecoration:'none',color:'white'}} className='fw-bolder'>   <i className="fa-solid fa-mug-hot me-2"></i>De Cafe</Link>
            
          </Navbar.Brand>
          <div className="d-flex ms-auto align-items-center">
            <input onChange={(e)=>dispatch(searchRestaurent(e.target.value))} type="text" className='form-control'  placeholder='Search Restaurent' />
            <i className="fa-solid fa-search" style={{marginLeft:'-30px'}}></i>
          </div>
        </Container>
      </Navbar>

    </>
  )
}

export default Header
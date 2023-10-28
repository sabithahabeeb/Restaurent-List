import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <>
     <Navbar className="bg-dark">
        <Container>
          <Navbar.Brand>
       <Link to={'/'} style={{textDecoration:'none',color:'white'}} className='fw-bolder'>   <i className="fa-solid fa-mug-hot me-2"></i>De Cafe</Link>
            
          </Navbar.Brand>
        </Container>
      </Navbar>

    </>
  )
}

export default Header
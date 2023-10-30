import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function RestCard({restaurent}) {
  return (
    <>
   <Link to={`/view/${restaurent?.id}`} style={{textDecoration:'none'}}>
       <Card >
        <Card.Img style={{height:'250px'}} className='rounded p-2' variant="top" src={restaurent?.photograph} />
        <Card.Body>
          <Card.Title>{restaurent?.name}</Card.Title>
          <Card.Text>
            <p> Cusine : {restaurent?.cuisine_type} </p>
            <p>{restaurent?.neighborhood}</p>
          </Card.Text>
        </Card.Body>
      </Card>
  
   </Link>
    </>
  )
}

export default RestCard
import React from 'react'
import { Card } from 'react-bootstrap'

function RestCard({restaurent}) {
  return (
    <>
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

    </>
  )
}

export default RestCard
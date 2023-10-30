import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Fade, ListGroup, Modal, Row } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

function View() {
    const {id} =  useParams()
    const { allRestaurants, loading, error } = useSelector((state) => state.restuarantSlice)
    const [restaurent,setRestaurent] = useState({})

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [open, setOpen] = useState(false);


    useEffect(()=>{
        setRestaurent(allRestaurants?.find(item=>item.id==id))

    },[])
    console.log(restaurent);
   
  return (
    <>
    <Row className='mt-5 m-3'>
      <Col sm={12} md={6} lg={4} hl={3}>
      <img height={'650px'} src="https://images.unsplash.com/photo-1604382355076-af4b0eb60143?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1534&q=80" alt="" />
      </Col>
      <Col >
      <Card  >
      <Card.Body>
        <Card.Title className='fs-1 text-white pt-2 text'>Emily</Card.Title>
        <Card.Subtitle className="mb-2 text-white p-2 ">Brooklyn</Card.Subtitle>
        <ListGroup variant="flush">
        <ListGroup.Item className='pt-3'>Cusine : Pizza</ListGroup.Item>
        <ListGroup.Item className='pt-3 mt-3'>Address : 919 Fulton St, Brooklyn, NY 11238</ListGroup.Item>
        
      </ListGroup>
        
      </Card.Body>
    </Card>
  <div className='d-flex flex-column '>
      <Button onClick={handleShow}  className='mt-3'  style={{color:'black',background:'gray',width:'150px'}} variant="secondary">Operating Hours</Button>{' '}
      <Button
       onClick={() => setOpen(!open)}
       aria-controls="view"
       aria-expanded={open}
      className='mt-3'  style={{color:'black',background:'gray',width:'250px'}} variant="secondary">Click here to view the reviews</Button>{' '}
       <Fade in={open}>
        <div id="view" className='pt-5 pb-4'>
       <h6>Steph:(October 26, 2016)</h6>
       <p>Rating : 4</p>

       <p>Five star food, two star atmosphere. I would definitely get takeout from this place - but dont think I have the energy to deal with the hipster ridiculousness again. By the time we left the wait was two hours long.</p>

       <h6>Steve:(October 26, 2016)</h6>
       <p>Rating :  4.5</p>

       <p>This cozy Clinton Hill restaurant excels at both straightforward and unusual wood-fired pizzas. If you want a taste of the latter, consider ordering the Emily, which is topped with mozzarella, pistachios, truffled sottocenere cheese, and honey. The menu includes salads and a handful of starters, as well as a burger that some meat connoisseurs consider to be among the best in the city.
         </p>

         <h6>Sam:(October 26, 2016)</h6>
       <p>Rating :  3.5</p>

       <p>5 star atmosphere as it is very cozy with great staff. 5 star food as their Emmy burger is outrageously good. and its on a pretzel bun.. Too juicy for its own good and downright addicting. Also try the Colony pizza. Many others looked like worth competitors, but the Colony really found its way to my heart. when you start with a great crust, top it with top notch cheese and sauce, you've got a winner. But, if you go a step further and add the salty from the pepperoni, the sweet from the honey, and the spicy from the chili oil.... your mouth is confused and happy at the same time.
         </p>
        </div>
      </Fade>
  </div>

      </Col>
    </Row>


    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className='text-white pb-3'>Operating Hours</Modal.Title>
        </Modal.Header>
        <Modal.Body className='text-white ps-3'>Monday : 5.30 pm - 11.00 pm</Modal.Body>
        <Modal.Body className='text-white ps-3'>Tuesday : 5.30 pm - 11.00 pm</Modal.Body>
        <Modal.Body className='text-white ps-3'>Wednesday : 5.30 pm - 11.00 pm</Modal.Body>
        <Modal.Body className='text-white ps-3'>Thuersday : 5.30 pm - 11.00 pm</Modal.Body>
        <Modal.Body className='text-white ps-3'>Friday : 5.30 pm - 11.00 pm</Modal.Body>
        <Modal.Body className='text-white ps-3'>Saturday : 5.30 pm - 11.00 pm</Modal.Body>
        <Modal.Body className='text-white ps-3'>Sunday : 12.00 pm - 3.00 pm,5.30 pm - 11.00 pm</Modal.Body>

        
      </Modal>

     
    </>
  )
}

export default View
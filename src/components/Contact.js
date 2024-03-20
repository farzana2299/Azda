import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Footer from './Footer'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
function Contact() {
  return (
    <div>
      <div className='lan1 mb-5'>
        <div className='lan2'>
          <Row>
            <Col lg={3} md={3} sm={3} xs={3} className='pt-3'>
              <Link to={'/'} style={{ textDecoration: 'none' }}>
                <h1 style={{ color: 'darkgreen' }}>AZDA</h1>
              </Link>
            </Col>
            <Col lg={6} md={6} sm={6} xs={6}>
              <Row className='text-white pt-4'>
                <Col lg={3} md={3} sm={3} xs={3}>
                  <Link to={'/portfolio'} style={{ textDecoration: 'none', color: 'white' }}>
                    <div>
                      <h6>Portfolio</h6>
                    </div>
                  </Link>
                </Col>
                <Col lg={3} md={3} sm={3} xs={3}>
                  <Link to={'/pricing'} style={{ textDecoration: 'none', color: 'white' }}>
                    <div style={{ position: 'relative', left: '62%' }}>
                      <h6>Price</h6>
                    </div>
                  </Link>
                </Col>
                <Col lg={3} md={3} sm={3} xs={3}>
                  <Link to={'/faq'} style={{ textDecoration: 'none', color: 'white' }}>
                    <div style={{ position: 'relative', left: '20%' }}>
                      <h6>FAQ</h6>
                    </div>
                  </Link>
                </Col>
                <Col lg={3} md={3} sm={3} xs={3}>
                  <Link to={'/about'} style={{ textDecoration: 'none', color: 'white' }}>
                    <div style={{ position: 'relative', right: '28%' }}>
                      <h6>About Us</h6>
                    </div>
                  </Link>
                </Col>
              </Row>
            </Col>
            <Col lg={3} md={3} sm={3} xs={3} className='pt-4'>
              <Link to={'/contact'} style={{ textDecoration: 'none' }}>
                <div className='butn1' style={{ position: 'relative', right: '10%' }}>
                  <button type="button" class="btn btn-outline-light">Contact Us</button>
                </div>
              </Link>
            </Col>
          </Row>
        </div>

        <div className='pt-5'>
          <Row>
            <Col lg={12} md={12} sm={12} xs={12} className='text-white'>
              <h1>Nedrivning af vægge</h1>
            </Col>
          </Row>
        </div>
        <div style={{ fontSize: '30px', color: 'white' }} className='pt-5 lan3'>
          <p>Descriprotor </p>
          <p>Descriprotor </p>
        </div>
        <div className=' text-primary butn2' >
          <button type="button" class="btn btn-light"> Contact Us </button>
        </div>
        {/* message  */}
        <div className='lan4'>
          <div className='pt-4'>
            <h6 className='text-white'>Text Us</h6>
            <div>
              <i class="fa-solid fa-message text-white"></i>
            </div>
          </div>
        </div>
      </div>


      <h3 className='text-success'>HAVE QUESTIONS?</h3>
      <Row>
        <Col lg={12} md={12} sm={12} xs={12}>
          <p className='text center'>Feel free to get in touch and contact us at any time!</p>
        </Col>
      </Row>

      <div className='w-75 container pb-5 pt-5'>
        <Row>
          <Col lg={6} md={6} sm={6} xs={6}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>FIRST NAME</Form.Label>
              <Form.Control type="text" placeholder="FIRST NAME" style={{borderColor:'green'}}/>
            </Form.Group>
          </Col>
          <Col lg={6} md={6} sm={6} xs={6}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>LAST NAME</Form.Label>
              <Form.Control type="text" placeholder="LAST NAME"  style={{borderColor:'green'}}/>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col lg={6} md={6} sm={6} xs={6}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>EMAIL</Form.Label>
              <Form.Control type="email" placeholder="name@example.com"  style={{borderColor:'green'}}/>
            </Form.Group>
          </Col>
          <Col lg={6} md={6} sm={6} xs={6}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>PHONE NUMBER</Form.Label>
              <Form.Control type="text" placeholder="12 34 56 78 90"  style={{borderColor:'green'}}/>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col lg={12} md={12} sm={12} xs={12}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label className='text-start'>TEXT US</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder='Text' style={{borderColor:'green'}}/>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col lg={12} md={12} sm={12} xs={12}>
            <Form.Group controlId="formFile" className="mb-3">
              <Form.Label>UPLOAD FILE</Form.Label>
              <Form.Control type="file"   style={{borderColor:'green'}}/>
            </Form.Group>
          </Col>
        </Row>
        <Button variant="success" size="lg">
          SEND
        </Button>{' '}
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Contact
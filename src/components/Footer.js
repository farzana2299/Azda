import React from 'react'
import { Col, Row } from 'react-bootstrap'

function Footer() {
  return (
    <div>
         <div className='ft1 pt-5'>
                <Row>
                    <Col lg={3} md={3} sm={3} xs={3} className='ms-5 '>
                        <h4><u>Azda</u></h4>
                        <p>Clarity gives you the blocks snd compontnts you need to create a truly professional website.</p>
                        <Row className='  text-start' style={{ position: 'relative', left: '25%' }}>
                            <Col lg={3} md={3} sm={3} xs={3} >
                                <i class="fa-brands fa-facebook-f"></i>
                            </Col>
                            <Col lg={3} md={3} sm={3} xs={3} >
                                <i class="fa-brands fa-instagram"></i>
                            </Col>
                            <Col lg={3} md={3} sm={3} xs={3} >
                                <i class="fa-brands fa-twitter"></i>
                            </Col>
                            <Col lg={3} md={3} sm={3} xs={3} >
                                <i class="fa-brands fa-youtube"></i>
                            </Col>
                        </Row>
                    </Col>
                    <Col lg={3} md={3} sm={3} xs={3} >
                        <div className='text-start' style={{ position: 'relative', left: '40%' }}>
                            <h5>Company</h5>
                            <p>Portfolio</p>
                            <p>price</p>
                            <p>About Us</p>
                            <p>FAQ</p>
                        </div>
                    </Col>
                    <Col lg={3} md={3} sm={3} xs={3} >
                        <div className='text-start' style={{ position: 'relative', left: '40%' }}>
                            <h5>Help</h5>
                            <p>Contact Us</p>
                            <p>Terms & Conditions</p>
                            <p>Privacy Policy</p>

                        </div>
                    </Col>
                    <Col lg={3} md={3} sm={3} xs={3} >

                    </Col>
                </Row>
                <Row className='pt-4'>
                    <Col lg={12} md={12} sm={12} xs={12} className='w-75 container'>
                        <p>We are liability insured with if. With an insurance sum up to 10 million.</p>
                    </Col>
                </Row>
                <hr />
                <Row>
                    <Col lg={12} md={12} sm={12} xs={12} className=' container'>
                        <p><i class="fa-regular fa-copyright"></i> Copyrighting 2024, All rights reserved by Azda.</p>
                    </Col>
                </Row>
            </div>
    </div>
  )
}

export default Footer
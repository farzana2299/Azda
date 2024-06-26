import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Footer from './Footer';
import { Link } from 'react-router-dom';

function Pricing() {
  return (
    <div>
      <div className='lan2'>
                <Row>
                    <Col lg={3} md={3} sm={3} xs={3} className='pt-3'>
                        <Link to={'/'} style={{ textDecoration: 'none' }}>
                            <h1 style={{color:'rgba(1, 103, 84, 1)'}}><u>Azda</u></h1>
                        </Link>
                    </Col>
                    <Col lg={6} md={6} sm={6} xs={6}>
                        <Row className='text-white pt-4'>
                            <Col lg={3} md={3} sm={3} xs={3}>
                                <Link to={'/portfolio'} style={{ textDecoration: 'none', color: 'black' }}>
                                    <div>
                                        <h6>Portfolio</h6>
                                    </div>
                                </Link>
                            </Col>
                            <Col lg={3} md={3} sm={3} xs={3}>
                                <Link to={'/pricing'} style={{ textDecoration: 'none', color: 'black' }}>

                                    <div style={{ position: 'relative', left: '62%' }}>
                                        <h6>Price</h6>
                                    </div>
                                </Link>
                            </Col>
                            <Col lg={3} md={3} sm={3} xs={3}>
                                <Link to={'/faq'} style={{ textDecoration: 'none', color: 'black' }}>

                                    <div style={{ position: 'relative', left: '20%' }}>
                                        <h6>FAQ</h6>
                                    </div>
                                </Link>
                            </Col>
                            <Col lg={3} md={3} sm={3} xs={3}>
                                <Link to={'/about'} style={{ textDecoration: 'none', color: 'black' }}>
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
                                <button type="button" class="btn btn-light">Contact Us</button>
                            </div>
                        </Link>
                    </Col>
                </Row>
            </div>
            <div className='container' style={{ width: '42%' }}>
                <h3 className=' pb-5'style={{color:'rgba(1, 103, 84, 1)'}}>FIND OUT MORE ABOUT OUR PRICING PLANS</h3>
                <div className='faq1 mb-3'>
                        <Row>
                            <Col lg={8} md={8} sm={8} xs={8}>
                                <h5 className='text-start ms-3 mt-3 mb-3'>Price 1</h5>
                            </Col>
                            <Col lg={4} md={4} sm={4} xs={4}>
                                <i class="fa-solid fa-minus text-end  mt-4 mb-3"></i>
                            </Col>
                        </Row>
                    </div>
                    <p>text text texttext text text text text text text text text text text text text text</p>
                    <h4 className=' text-start' style={{color:'rgba(1, 103, 84, 1)'}}>200 €</h4>
                {[2, 3, 4, 5, 6, 7,8].map((index) => (
                    <div className='faq1 mb-3'>
                        <Row>
                            <Col lg={8} md={8} sm={8} xs={8}>
                                <h5 className='text-start ms-3 mt-3 mb-3'>Price {index}</h5>
                            </Col>
                            <Col lg={4} md={4} sm={4} xs={4}>
                                <i class="fa-solid fa-plus text-end  mt-4 mb-3"></i>
                            </Col>
                        </Row>
                    </div>
                ))}
                <div className='mb-5'>
                <Button style={{backgroundColor:'rgba(1, 103, 84, 1)'}} size="lg">
                    Show More
                </Button>
                </div>
                
            </div>

            <Footer></Footer>
    </div>
  )
}

export default Pricing
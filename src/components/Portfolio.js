import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Footer from './Footer'
import Button from 'react-bootstrap/Button';
function Portfolio() {
    return (
        <div>
            <div className='lan1 mb-5'>
                <div className='lan2'>
                    <Row>
                        <Col lg={3} md={3} sm={3} xs={3} className='pt-3'>
                            <Link to={'/'} style={{ textDecoration:'none'}}>
                            <h1 style={{color:'rgba(1, 103, 84, 1)'}}><u>Azda</u></h1>
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
                        <Link to={'/contact'} style={{textDecoration:'none'}}>
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
                <div className='land4 pb-1'>
                    <div style={{ width: '100%', height: '100%' }}>
                        <h6 style={{ color: 'rgba(1, 103, 84, 1)' }}>Text Us Now</h6>
                    </div>
                    <div className='lan4'>
                        <div className='pt-3'>
                            <div>
                                <i class="fa-solid fa-message text-white"></i>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <h3 style={{color:'rgba(1, 103, 84, 1)'}}>Azda - rådgivende ingeniør</h3>
            <Row className='mb-5'>
                <Col lg={12} md={12} sm={12} xs={12}>
                    <div className='w-50 container'>
                        <p>Vi laver statiske beregninger ved nedrivning af bærende vægge, tilbygninger, nyopførte ejendomme og boliger.</p>
                    </div>
                </Col>
            </Row>
            <div className='container w-75 mb-5'>
                {[1, 2, 3, 4, 5].map((index) => (
                    <div className='mb-5 ' style={{ width: '100%', height: '100%', borderRadius: '10px', border: '1px solid rgb(8, 176, 142)' }}>
                        <Row>
                            <Col lg={4} md={4} sm={4} xs={4}>
                                <div className='port1'>

                                </div>
                            </Col>
                            <Col lg={8} md={8} sm={8} xs={8}>
                                <div className='ps-5 mt-4 text-start port11' >
                                    <h5>NAME OF THE PROJECT (2-3 WORDS)</h5>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque dictum dolor sed interdum fermentum. Pellentesque nec ipsum eget quam iaculis.</p>
                                </div>
                            </Col>
                        </Row>
                    </div>
                ))}

                <div>
                    <Button style={{backgroundColor:'rgba(1, 103, 84, 1)'}}>Show More</Button>{' '}
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default Portfolio

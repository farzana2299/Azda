import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Footer from './Footer';
import { Link } from 'react-router-dom';

function Landing() {
    
    return (
        <div>
            <div className='lan1'>
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

            {/* text div  */}
            <div className='mb-5'>
                <Row>
                    <Col lg={12} md={12} sm={12} xs={12}>
                        <div className='pt-5 pb-5 lan5 container w-75'>
                            <h3>Azda - Rådgivende ingeniør</h3>
                            <div className=''>
                                <p style={{ fontSize: '20px' }}>Vi laver statiske beregninger ved nedrivning af bærende vægge, tilbygninger, nyopførte ejendomme og boliger. Vi er rådgivende ingeniører der hjælper dig i mål!</p>
                            </div>

                        </div>
                    </Col>
                </Row>
            </div>
            <div className='mb-5'>
                <h3 className='text-center text-success'>SKAL DU BRUGE STATISKE BEREGNINGER?</h3>
            </div>


            <div className='container w-75 madiv pb-5'>
                <Row>
                    <Col lg={6} md={6} sm={6} xs={6}>
                        <div className='firdiv'></div>
                    </Col>
                    <Col lg={6} md={6} sm={6} xs={6}>
                        <div className='secdiv pb-4 pt-4 ps-2'>
                            <h4>Nedrivning af vægge</h4>
                            <div className='w-75 container'>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum nihil vero consequatur rem dicta!</p>
                                <Button variant="success" size="sm">Show More</Button>{' '}
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>

            <div className='container w-75 madiv pb-5'>
                <Row>
                    <Col lg={6} md={6} sm={6} xs={6}>
                        <div className='firdiv'></div>
                    </Col>
                    <Col lg={6} md={6} sm={6} xs={6}>
                        <div className='secdiv pb-4 pt-4 ps-2'>
                            <h4>Nedrivning af vægge</h4>
                            <div className='w-75 container'>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum nihil vero consequatur rem dicta!</p>
                                <Button variant="success" size="sm">Show More</Button>{' '}
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>

            <div className='container w-75 madiv pb-5'>
                <Row>
                    <Col lg={6} md={6} sm={6} xs={6}>
                        <div className='thfirdiv pb-4 pt-4 ps-2'>
                            <h4>Nedrivning af vægge</h4>
                            <div className='w-75 container'>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum nihil vero consequatur rem dicta!</p>
                                <Button variant="success" size="sm">Show More</Button>{' '}
                            </div>
                        </div>

                    </Col>
                    <Col lg={6} md={6} sm={6} xs={6}>
                        <div className='thsecdiv'>

                        </div>
                    </Col>
                </Row>
            </div>

            <h4 className='text-success pb-5'>GLADE KUNDER  DET BEDSTE </h4>

            <div className='mainmsg pb-5 '>
                <Row>
                    <Col lg={3} md={3} sm={6} xs={6} className=' pt-5 pb-5'>
                        <div className='msg container w-75 '>
                            <div className='pt-5 ps-4 pe-4'>
                                <i class="fa-solid fa-quote-left text-success"></i>
                                <h5 className='text-success'>Text</h5>
                            </div>
                        </div>
                        <Row>
                            <Col lg={4} md={4} sm={4} xs={4} className='text-end'>
                                <img src="https://i.postimg.cc/wjnP3Lb5/download-removebg-preview-1.png" 
                                style={{width:'50%',height:'50%'}} alt="" />
                            </Col>
                            <Col lg={8} md={8} sm={8} xs={8} className='text-start'>
                                <h6>Name</h6>
                                <p>What this video</p>
                            </Col>
                        </Row>
                    </Col>
                    <Col lg={3} md={3} sm={6} xs={6} className=' pt-5 pb-5'>
                    <div className='msg container w-75 '>
                            <div className='pt-5 ps-4 pe-4'>
                                <i class="fa-solid fa-quote-left text-success"></i>
                                <h5 className='text-success'>Text</h5>
                            </div>
                        </div>
                        <Row>
                            <Col lg={4} md={4} sm={4} xs={4} className='text-end'>
                                <img src="https://i.postimg.cc/wjnP3Lb5/download-removebg-preview-1.png" 
                                style={{width:'50%',height:'50%'}} alt="" />
                            </Col>
                            <Col lg={8} md={8} sm={8} xs={8} className='text-start'>
                                <h6>Name</h6>
                                <p>What this video</p>
                            </Col>
                        </Row>
                    </Col>
                    <Col lg={3} md={3} sm={6} xs={6}  className=' pt-5 pb-5'>
                    <div className='msg container w-75 '>
                            <div className='pt-5 ps-4 pe-4'>
                                <i class="fa-solid fa-quote-left text-success"></i>
                                <h5 className='text-success'>Text</h5>
                            </div>
                        </div>
                        <Row>
                            <Col lg={4} md={4} sm={4} xs={4} className='text-end'>
                                <img src="https://i.postimg.cc/wjnP3Lb5/download-removebg-preview-1.png" 
                                style={{width:'50%',height:'50%'}} alt="" />
                            </Col>
                            <Col lg={8} md={8} sm={8} xs={8} className='text-start'>
                                <h6>Name</h6>
                                <p>What this video</p>
                            </Col>
                        </Row>
                    </Col>
                    <Col lg={3} md={3} sm={6} xs={6} className=' pt-5  pb-5'>
                    <div className='msg container w-75 '>
                            <div className='pt-5 ps-4 pe-4'>
                                <i class="fa-solid fa-quote-left text-success"></i>
                                <h5 className='text-success'>Text</h5>
                            </div>
                        </div>
                        <Row>
                            <Col lg={4} md={4} sm={4} xs={4} className='text-end'>
                                <img src="https://i.postimg.cc/wjnP3Lb5/download-removebg-preview-1.png" 
                                style={{width:'50%',height:'50%'}} alt="" />
                            </Col>
                            <Col lg={8} md={8} sm={8} xs={8} className='text-start'>
                                <h6>Name</h6>
                                <p>What this video</p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                
            </div>
           
            <div className='pb-5 pt-5'>
                <Row>
                    <Col lg={12} md={12} sm={12} xs={12}>
                        <h3 className='text-success'>HVAD KAN VI ELLERS GORE FOR DIG</h3>
                        <div className='container w-50'>
                            <p>Skal du bruge en geotekniker, VVS ingeniør eller en ekspert indenfor parameterisk design og 3D modellering, så hjælper vi dig i mål</p>
                        </div>
                    </Col>
                </Row>
            </div>
            <div className='container w-75'>
                <Row>
                    <Col lg={8} md={8} sm={8} xs={8} className='colimg1 mb-5 '>

                    </Col>
                    <Col lg={4} md={4} sm={4} xs={4} className='colimg1 mb-5 '>

                    </Col>
                </Row>
            </div>

            <div className='container w-75 mb-5'>
                <Row>
                    <Col lg={4} md={4} sm={4} xs={4} className='colimg2 mb-5 '>

                    </Col>
                    <Col lg={8} md={8} sm={8} xs={8} className='colimg2 mb-5 pe-5 '>

                    </Col>

                </Row>
            </div>
            <h3 className='text-success'>TIDLIGERE PROJEKTER</h3>
            <div className='w-50 container pb-5'>
                <p>Se nogle af de tidligere projekter som Azda har udført</p>
            </div>
            <div className='len7 mb-5'>
                <Row>
                    <Col lg={1} md={1} sm={1} xs={1}>
                        <div className='c1 container' style={{ position: 'relative', top: '20%', left: '10%' }}></div>
                    </Col>
                    <Col lg={2} md={2} sm={2} xs={2} >
                        <div className='c2 container' style={{ position: 'relative', top: '10%' }}></div>
                    </Col>
                    <Col lg={6} md={6} sm={6} xs={6} >
                        <div className='c3 container'></div>
                    </Col>
                    <Col lg={2} md={2} sm={2} xs={2}>
                        <div className='c4 container' style={{ position: 'relative', top: '10%' }}></div>
                    </Col>
                    <Col lg={1} md={1} sm={1} xs={1}>
                        <div className='c5 container' style={{ position: 'relative', top: '20%', right: '22%' }}></div>
                    </Col>
                </Row>
            </div>

            <h3 className='text-success'>HAVAD GOR VI HERFRA?</h3>
            <div className='pb-5'>
                <Row>
                    <Col lg={3} md={3} sm={3} xs={3}>
                        <div className='container ms-2 pe-2 me-5 mn'>
                            <h6>Step1 create</h6>
                            <p>lorem wert</p>
                        </div>
                    </Col>
                    <Col lg={3} md={3} sm={3} xs={3}>
                        <div className='container ps-2 pe-2 mn mn1'>

                        </div>
                    </Col>
                    <Col lg={3} md={3} sm={3} xs={3}>
                        <div className='container ps-2 pe-2 mn'>
                            <h6>Step1 create</h6>
                            <p>lorem wert</p>
                        </div>
                    </Col>
                    <Col lg={3} md={3} sm={3} xs={3}>
                        <div className='container ps-2 pe-2 mn mn2'>

                        </div>
                    </Col>
                </Row>
            </div>
            <div className='pb-5'>
                <h3 className='text-success'>HAVE QUESTIONS?</h3>
                <Row>
                    <Col lg={12} md={12} sm={12} xs={12} className='container' style={{ width: '30%' }}>
                        <p>Feel free to get in touch and contact us at any time!</p>
                        <div className='container w-75 text-start'>
                            <p><i class="fa-solid fa-location-dot"></i> Karadžičova 6, 821 08 Bratislava SK – Slovakia</p>
                            <p><i class="fa-solid fa-phone"></i> 12 34 45  67</p>
                            <p><i class="fa-solid fa-envelope"></i> email@gmail.com</p>
                        </div>

                    </Col>
                </Row>
            </div>
            {/* footer  */}
            <Footer></Footer>
        </div>
    )
}

export default Landing
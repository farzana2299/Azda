import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Footer from './Footer';
import { Link } from 'react-router-dom';
function About() {
  return (
    <div>
      <div className='about1'>
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
              <h1>OM OS</h1>
            </Col>
          </Row>
        </div>
        <div style={{ color: 'white', position: 'relative', left: '2%' }} className='pt-5 lan3 w-50 ps-5'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, fuga! Commodi, sunt, provident  aut impedit. </p>

        </div>

      </div>
      <div className='w-75 container pb-5 pt-5' style={{ borderRadius: '10px' }}>
        <iframe width="60%" height="100%" src="https://www.youtube.com/embed/TyskcLbCkqE" title="SPIDER-MAN HOMECOMING Best Action Scenes 4K ᴴᴰ"
          frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
      <div className='w-75 container pb-5'>
        <h3 className='text-success'> VORES VIRKSOMHEDS VAERDIER</h3>
        <div className='w-50 container'>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus cursus mi eu leo consequat, sed luctus leo dictum. Aliquam egestas.</p>
        </div>
      </div>

      <div className='about2 mb-5'>
        <Row className='pt-3 pb-3'>
          <Col lg={3} md={3} sm={3} xs={3} >
            <i class="fa-solid fa-folder-plus fa-2x text-success"></i>
            <h5>Ledelse</h5>
            <p className='w-50 container'>Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
          </Col>
          <Col lg={3} md={3} sm={3} xs={3} >
            <i class="fa-solid fa-toolbox fa-2x text-success"></i>
            <h5>Ledelse</h5>
            <p className='w-50 container'>Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
          </Col>
          <Col lg={3} md={3} sm={3} xs={3} >
            <i class="fa-solid fa-calendar-days fa-2x text-success"></i>
            <h5>Ledelse</h5>
            <p className='w-50 container'>Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
          </Col>
          <Col lg={3} md={3} sm={3} xs={3} >
            <i class="fa-regular fa-handshake fa-2x text-success text-start"></i>
            <h5>Ledelse</h5>
            <p className='w-50 container text-start'>Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
          </Col>
        </Row>
      </div>
      <div className='w-25 container mb-5'>
        <p>Vi laver statiske beregninger ved nedrivning af bærende vægge, tilbygninger, nyopførte ejendomme og boliger. Vi er rådgivende ingeniører der hjælper dig i mål!</p>
      <div style={{width:'30%',position:'relative',left:'75%',color:'green'}}>
        <p>Direktør Azda Mehdi</p>
      </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default About
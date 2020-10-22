import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown, Container, Row, Col, InputGroup, FormControl, Carousel } from 'react-bootstrap';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import {
  MDBContainer,
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBIcon
} from 'mdbreact';


import 'react-slideshow-image/dist/styles.css'
import './App.css';

import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import content from './content.js';

const Slideshow = () => {
  return (
    <div style={{ paddingTop: "20px" }}>
      <Carousel>
        <Carousel.Item>
          <div style={{ height: "400px", width: "100%" }}>
            <img src="//stuffycare.com/wp-content/uploads/2020/06/Paw-2-Paw-Pet-Service.png" alt="" style={{}} />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div style={{ width: "100%", height: "400px", backgroundImage: "url(//stuffycare.com/wp-content/uploads/2020/05/Banner-1.jpeg)", backgroundSize: "cover" }}></div>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

const NavigationBar = () => {
  return (
    <div>
      <Navbar bg="white" expand="lg" id="top-navigation">
        <Navbar.Brand href="#home">StuffyCare</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/">BOOK A SERVICE</Nav.Link>
            <Nav.Link as={Link} to="/">SHOP NOW</Nav.Link>
            <Nav.Link as={Link} to="/">CHAT WITH EXPERTS</Nav.Link>
            <Nav.Link as={Link} to="/">BE A PROVIDER</Nav.Link>
          </Nav>
          <Nav className="ml-auto">
            <Nav.Link as={Link} to="/">LOG IN</Nav.Link>
            <Nav.Link as={Link} to="/">REGISTER</Nav.Link>
            <Nav.Link as={Link} to="/">CART</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

const CategorySection = () => {
  return (
    <div>
      <h2 style={{ marginTop: "100px", paddingLeft: "40px", marginBottom: "50px", marginLeft: "auto", marginRight: "auto", fontColor: "#F79862", fontWeight: "800" }}>
        OFFERS ON PRODUCTS FOR YOU
      </h2>
      <div style={{ height: "auto", width: "1100px", margin: "auto" }}>
        <Swiper
          spaceBetween={50}
          slidesPerView={4}
          navigation
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
        >
          <SwiperSlide style={{ border: "grey 0.5px solid" }}>
            <div style={{ width: '226.67px', marginBottom: "40px" }}>
              <div style={{ textAlign: "center", overflow: "hidden", position: "relative" }}>
                <a href="#">
                  <img width="291" height="300" src="https://stuffycare.com/wp-content/uploads/2020/06/51B93JKbP0L-291x300.jpg" alt="" />
                </a>
                <p>CATEGORY</p>
                <h4>PRODUCT TITLE</h4>
                <div className="price-box">Rs. 380</div>
                <button className="cartBtn">ADD TO CART</button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide style={{ border: "grey 0.5px solid" }}>
            <div style={{ width: '226.67px', marginBottom: "40px" }}>
              <div style={{ textAlign: "center", overflow: "hidden", position: "relative" }}>
                <a href="#">
                  <img width="291" height="300" src="https://stuffycare.com/wp-content/uploads/2020/06/51B93JKbP0L-291x300.jpg" alt="" />
                </a>
                <p>CATEGORY</p>
                <h4>PRODUCT TITLE</h4>
                <div className="price-box">Rs. 380</div>
                <button className="cartBtn">ADD TO CART</button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide style={{ border: "grey 0.5px solid" }}>
            <div style={{ width: '226.67px', marginBottom: "40px" }}>
              <div style={{ textAlign: "center", overflow: "hidden", position: "relative" }}>
                <a href="#">
                  <img width="291" height="300" src="https://stuffycare.com/wp-content/uploads/2020/06/51B93JKbP0L-291x300.jpg" alt="" />
                </a>
                <p>CATEGORY</p>
                <h4>PRODUCT TITLE</h4>
                <div className="price-box">Rs. 380</div>
                <button className="cartBtn">ADD TO CART</button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide style={{ border: "grey 0.5px solid" }}>
            <div style={{ width: '226.67px', marginBottom: "40px" }}>
              <div style={{ textAlign: "center", overflow: "hidden", position: "relative" }}>
                <a href="#">
                  <img width="291" height="300" src="https://stuffycare.com/wp-content/uploads/2020/06/51B93JKbP0L-291x300.jpg" alt="" />
                </a>
                <p>CATEGORY</p>
                <h4>PRODUCT TITLE</h4>
                <div className="price-box">Rs. 380</div>
                <button className="cartBtn">ADD TO CART</button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide style={{ border: "grey 0.5px solid" }}>
            <div style={{ width: '226.67px', marginBottom: "40px" }}>
              <div style={{ textAlign: "center", overflow: "hidden", position: "relative" }}>
                <a href="#">
                  <img width="291" height="300" src="https://stuffycare.com/wp-content/uploads/2020/06/51B93JKbP0L-291x300.jpg" alt="" />
                </a>
                <p>CATEGORY</p>
                <h4>PRODUCT TITLE</h4>
                <div className="price-box">Rs. 380</div>
                <button className="cartBtn">ADD TO CART</button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide style={{ border: "grey 0.5px solid" }}>
            <div style={{ width: '226.67px', marginBottom: "40px" }}>
              <div style={{ textAlign: "center", overflow: "hidden", position: "relative" }}>
                <a href="#">
                  <img width="291" height="300" src="https://stuffycare.com/wp-content/uploads/2020/06/51B93JKbP0L-291x300.jpg" alt="" />
                </a>
                <p>CATEGORY</p>
                <h4>PRODUCT TITLE</h4>
                <div className="price-box">Rs. 380</div>
                <button className="cartBtn">ADD TO CART</button>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}

const ShippingArea = () => {
  return (
    <Container fluid="md">
      <Row className="justify-content-md-center shipping_row">
        <Col lg={3} md={6}>
          <div className="single_shipping_col1">
            <div>
              <h3>
                HEALTH CARE
              </h3>
            </div>
          </div>
        </Col>
        <Col lg={3} md={6}>
          <div className="single_shipping_col1">
            <div>
              <h3>
                Content
              </h3>
            </div>
          </div>
        </Col>
        <Col lg={3} md={6}>
          <div className="single_shipping_col1">
            <div>
              <h3>
                Content
              </h3>
            </div>
          </div>
        </Col>
        <Col lg={3} md={6}>
          <div className="single_shipping_col1">
            <div>
              <h3>
                Content
              </h3>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const OffersSection = (props) => {
  return (
    <div id="offersSection" style={{ borderBottom: "grey 0.5px solid", height: "auto", width: "1200px", marginLeft: "auto", marginRight: "auto", marginTop: "50px", marginBottom: "50px", paddingTop: "30px", paddingBottom: "30px" }}>
      <h3 style={{ paddingLeft: "40px", fontWeight: "800" }}>{props.heading}</h3>
      <p style={{ paddingLeft: "40px", fontWeight: "400" }}>{props.description}</p>
      <Swiper
        spaceBetween={10}
        slidesPerView={4}
        navigation
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
        style={{ backgroundColor: "white" }}
      >
        <SwiperSlide>
          <a>
            <img width="200" height="200" src="https://stuffycare.com/wp-content/uploads/2020/05/Health-Care.png" style={{ backgroundColor: "transparent" }} />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a>
            <img width="200" height="200" src="https://stuffycare.com/wp-content/uploads/2020/05/Food-Bowl.png" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a>
            <img width="200" height="200" src="https://stuffycare.com/wp-content/uploads/2020/05/Pet-Food-1.png" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a>
            <img width="200" height="200" src="https://stuffycare.com/wp-content/uploads/2020/05/Health-Treats.png" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a>
            <img width="200" height="200" src="https://stuffycare.com/wp-content/uploads/2020/05/DailySupplyment.png" />
          </a>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

const BannerArea = () => {
  return (
    <div style={{ borderBottom: "0.5px solid grey", paddingBottom: "60px", width: "1200px", margin: "auto" }}>
      <div style={{ width: "100%", height: "400px", justifyContent: "center" }}>
        <a style={{ width: "100%", height: "400px", justifyContent: "center" }}>
        <img style={{ width: "100%", height: "100%" }} src="https://vetpracticemag.com.au/wp-content/uploads/2018/09/pet_care_products-1024x889.jpg" alt="" />
        </a>
      </div>
    </div>
  )
}

const ProductArea = () => {
  return (
    <div>
      <Container fluid="md">
        <Row className="justify-content-md-center">
          <Col >
            <div className="product_header">
              <div className="section_title">
                <h2>
                  NEW ARRIVALS
                </h2>
              </div>
              <div className="product_tab_button">
                <ul className="Nav">
                  <li>
                    <a className="active" data-toggle="tab" href="#">DOG FOOD</a>
                  </li>
                  <li>
                    <a className="active" data-toggle="tab" href="#">CAT FOOD</a>
                  </li>
                  <li>
                    <a className="active" data-toggle="tab" href="#">LEASH</a>
                  </li>
                </ul>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

const CategoryBar = () => {
  return (
    <div>
      <Navbar expand="lg" id="categoryBar">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <InputGroup className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text id="inputGroup-sizing-default">Location</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
              />
            </InputGroup>
            <NavDropdown title="SERVICES" id="basic-nav-dropdown" renderMenuOnMount={true}>
              <NavDropdown.Item href="#action/3.1">SERVICE 1</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">SERVICE 2</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">SERVICE 3</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">SERVICE 4</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">SERVICE 5</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

const BoxIt = () => {
  return (
    <div style={{ width: "100%", margin: "auto" }}>
      <div className="boxit" style={{ backgroundColor: "#ff792c", marginLeft: "-32px", marginRight: "-32px", paddingLeft: "32px", paddingRight: "32px", height: "350px" }}>
        <div style={{ height: "40px" }}>

        </div>
        <div style={{ marginBottom: "30px", width: "300px", marginLeft: "120px", float: "left", display: "block" }}>
          <h2 style={{ color: "white" }}>
            GIVE YOUR DOG EXACTLY WHAT THEY WANT
          </h2>
          <p style={{ color: "white" }}>GET THE STUFFYBOX! DELIVERED TO YOU EVERY MONTHS FOR YOUR PETS.</p>
          <button style={{ border: "1px white solid", borderRadius: "3px", backgroundColor: "transparent", color: "white", fontWeight: "1000" }}>BOX IT! FOR ME</button>
        </div>
        <div style={{float: "right", height: "350px", width: "400px", marginLeft: "100px"}}>
          <img src={require('./images/boxit.jpg')}/>
        </div>
        <div style={{ height: "50px" }}>

        </div>
      </div>
    </div>
  )
}

const BlogSection = () => {
  return (
    <div style={{ padding: "80px" }}>
      <div style={{ borderTop: "grey 1px solid" }}>
        <div style={{ marginTop: "30px", marginBottom: "30px", marginLeft: "auto", marginRight: "auto" }}>
          <div style={{ marginTop: "20px" }}>
            <div style={{ verticalAlign: "top", display: "inline-block" }}>
              <div style={{ width: "360px", padding: "20px" }}>
                <h3 style={{ fontWeight: "700", fontSize: "30px" }}>
                  READ TOP ARTICLES FROM HEALTH EXPERTS
                </h3>
                <div style={{ marginTop: "5px" }}>
                  Health articles that keep you informed about good health practices and achieve your goals.
                </div>
                <button style={{ backgroundColor: "#ff792c", fontWeight: "800", display: "inline-block", marginTop: "30px", paddingTop: "15px", paddingBottom: "15px", paddingLeft: "30px", paddingRight: "30px", border: "none" }} className="btn btn-primary">
                  SEE ALL ARTICLES
                </button>
              </div>
            </div>
            <div style={{ verticalAlign: "top", display: "inline-block", marginRight: "10px", marginLeft: "10px", float: "right" }}>
              <div style={{ width: "280px" }}>
                <div style={{ width: "280px", height: "280px" }}>
                  <a href="#">
                    <span>
                      <img src="https://stuffycare.com/wp-content/uploads/2020/06/Baby-Taylor-Finn.jpg" style={{ borderRadius: "4px", verticalAlign: "bottom", width: "100%", height: "100%", objectFit: "cover" }} />
                    </span>
                  </a>
                </div>
              </div>
            </div>
            <div style={{ verticalAlign: "top", display: "inline-block", marginRight: "10px", marginLeft: "10px", float: "right" }}>
              <div style={{ width: "280px" }}>
                <a href="#">
                  <span>
                    <img src="https://stuffycare.com/wp-content/uploads/2020/06/Baby-Taylor-Finn-1.jpg" style={{ borderRadius: "4px", verticalAlign: "bottom", width: "100%", height: "100%", objectFit: "cover" }} />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const TestimonialSection = () => {
  return (
    <div style={{ marginTop: "60px", backgroundColor: "#ff792c", color: "white", paddingTop: "40px", paddingBottom: "60px" }}>
      <h3 style={{ textAlign: "center", marginBottom: "30px", fontWeight: "800" }}>TESTIMONIALS</h3>
      <Carousel>
        <Carousel.Item>
          <div style={{ margin: "auto", width: "800px", textAlign: "center" }}>
            <img src="https://stuffycare.com/wp-content/uploads/2017/11/cat-11-150x150.png" style={{ borderRadius: "50%" }} />
            <h4 style={{ fontWeight: "560", fontSize: "20px" }}>CUSTOMER</h4>
            <div style={{ fontStyle: "italic" }}>
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </div>
            <div style={{ marginTop: "20px", fontWeight: "560" }}>
              CUSTOMER
            </div>
            <div style={{ marginTop: "1px" }}>
              PET OWNER
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div style={{ margin: "auto", width: "800px", textAlign: "center" }}>
            <img src="https://stuffycare.com/wp-content/uploads/2017/11/cat-11-150x150.png" style={{ borderRadius: "50%" }} />
            <h4 style={{ fontWeight: "600" }}>CUSTOMER</h4>
            <div style={{ fontStyle: "italic" }}>
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </div>
            <div style={{ marginTop: "20px", fontWeight: "560" }}>
              CUSTOMER
            </div>
            <div style={{ marginTop: "1px" }}>
              PET OWNER
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

const FooterSection = () => {
  return (
    <footer>
      <div style={{ backgroundColor: "#383838", textAlign: "left", color: "white" }}>
        <div style={{ margin: "auto", maxWidth: "1264px", paddingLeft: "32px", paddingRight: "32px" }}>
          <div style={{ paddingTop: "20px", paddingBottom: "20px" }}>
            <div style={{ position: "relative", height: "396px" }}>
              <Container fluid="md">
                <Row>
                  <Col>
                    <div style={{}}>
                      <h4 style={{ fontSize: "20px", borderBottom: "1px solid orange" }}>QUICK LINKS</h4>
                      <div>
                        <ul style={{ listStyleType: "none" }}>
                          <li>HOME</li>
                          <li>ABOUT US</li>
                          <li>FOR PROVIDERS</li>
                          <li>SHOP</li>
                          <li>FAQs</li>
                        </ul>
                      </div>
                    </div>
                  </Col>
                  <Col>
                    <div style={{}}>
                      <h4 style={{ fontSize: "20px", borderBottom: "1px solid orange" }}>
                        LIKE US ON INSTAGRAM
                      </h4>
                      <div>
                        <a href="#">@stuffy_care</a>
                      </div>
                    </div>
                  </Col>
                  <Col>
                    <div style={{}}>
                      <h4 style={{ fontSize: "20px", borderBottom: "1px solid orange" }}>
                        LIKE US ON FACEBOOK
                      </h4>
                      <div>
                        <a href="#">FACEBOOK HANDLE</a>
                      </div>
                    </div>
                  </Col>
                  <Col>
                    <div style={{}}>
                      <h4 style={{ fontSize: "20px", borderBottom: "1px solid orange" }}>
                        QUICK CONTACT
                      </h4>
                      <div>
                        <input style={{ backgroundColor: "#383838", border: "1px solid black", borderRadius: "3px", marginBottom: "10px" }} placeholder="Your Name*"></input>
                        <input style={{ backgroundColor: "#383838", border: "1px solid black", borderRadius: "3px", marginBottom: "10px" }} placeholder="Your Email Id*"></input>
                        <input style={{ backgroundColor: "#383838", border: "1px solid black", borderRadius: "3px", marginBottom: "10px" }} placeholder="Your Mobile No.*"></input>
                        <input style={{ backgroundColor: "#383838", border: "1px solid black", borderRadius: "3px", marginBottom: "10px" }} placeholder="Subject*"></input>
                        <input style={{ backgroundColor: "#383838", border: "1px solid black", borderRadius: "3px", marginBottom: "10px" }} placeholder="Your Message*"></input>
                        <br />
                        <button style={{ backgroundColor: "yellow" }}>Send</button>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

const Home = () => {

  return (
    <div>
      <NavigationBar />
      <Slideshow />
      <OffersSection heading="TOP DEALS AND OFFERS" description="HAND-PICKED DEALS FOR HEALTHIER PETS." />
      <BannerArea />
      <OffersSection heading="FIND VETS AND OTHER SERVICES" description="FREE HOME SAMPLE COLLECTION FOR ALL HEALTH CHECKUPS." />
      <BoxIt />
      <CategorySection />
      <BlogSection />
      <TestimonialSection />
      <FooterSection />
    </div>
  )
}

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;

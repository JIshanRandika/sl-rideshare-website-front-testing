// components/NavbarComponent.js

"use client"
import '@/app/styles/NavbarComponent.scss'

import { useState } from 'react';
import Link from "next/link";
import {Navbar, Container, Nav, NavDropdown,Form,Offcanvas} from 'react-bootstrap';
import {Colors} from '../constants/colors'
import Image from "next/image";
// import '../constants/styles.css'

const NavbarComponent = () => {
    const [isActive, setActive] = useState('home');
    const handleClick = (param) => {
        console.log(`Link clicked with param: ${param}`);
        setActive(param);
    }
    // @ts-ignore
    // @ts-ignore
    return (
        <>
            <div style={{width: "100%", position: "sticky", top: 0, zIndex: 2, padding: 0}}>

                {['sm'].map((expand) => (

                    <Navbar className="navbar" expand={expand} >
                        <Container fluid>
                            <Navbar.Brand href="/">

                                    <Image src="/navLogo.png"
                                           width={150}
                                           height={50}
                                           style={{padding:10, backgroundColor: "white", borderRadius:10}}/>

                            </Navbar.Brand>
                            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                            <Navbar.Offcanvas style={{background:Colors.colorA}}
                                              id={`offcanvasNavbar-expand-${expand}`}
                                              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                                              placement="end"
                            >
                                <Offcanvas.Header closeButton>
                                    <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                        <Image src="/navLogo.png"
                                               width={150}
                                               height={50}
                                               style={{padding:10, backgroundColor: "white", borderRadius:10}}/>
                                    </Offcanvas.Title>
                                </Offcanvas.Header>
                                <Offcanvas.Body>
                                    <Nav className="justify-content-end flex-grow-1 pe-3 homeBtn">
                                        <Nav.Link style={{fontWeight:"bold"}} >
                                            <Link onClick={() => handleClick('home')} href="/" style={{textDecoration:'none',color:isActive=='home'?'gray':'white'}}>
                                                Home
                                            </Link>
                                        </Nav.Link>
                                        <Nav.Link style={{fontWeight:"bold"}}>
                                            <Link onClick={() => handleClick('about')}  href="/blog"  style={{textDecoration:'none',color:isActive=='about'?'gray':'white'}}>
                                                About Us
                                            </Link>
                                        </Nav.Link>
                                        <Nav.Link style={{fontWeight:"bold"}}>
                                            <Link onClick={() => handleClick('about')}  href="/blog"  style={{textDecoration:'none',color:isActive=='about'?'gray':'white'}}>
                                                Feedbacks
                                            </Link>
                                        </Nav.Link>
                                        <Nav.Link style={{fontWeight:"bold"}}>
                                            <Link onClick={() => handleClick('about')}  href="/blog"  style={{textDecoration:'none',color:isActive=='about'?'gray':'white'}}>
                                                Rejections
                                            </Link>
                                        </Nav.Link>
                                        <Nav.Link style={{fontWeight:"bold"}}>
                                            <Link onClick={() => handleClick('about')}  href="/blog"  style={{textDecoration:'none',color:isActive=='about'?'gray':'white'}}>
                                                Tutorial
                                            </Link>
                                        </Nav.Link>
                                        <Nav.Link style={{fontWeight:"bold"}}>
                                            <Link onClick={() => handleClick('about')}  href="/blog"  style={{textDecoration:'none',color:isActive=='about'?'gray':'white'}}>
                                                FAQ
                                            </Link>
                                        </Nav.Link>
                                        <Nav.Link style={{fontWeight:"bold"}}>
                                            <Link onClick={() => handleClick('about')}  href="/blog"  style={{textDecoration:'none',color:isActive=='about'?'gray':'white'}}>
                                                Contact Us
                                            </Link>
                                        </Nav.Link>
                                    </Nav>

                                </Offcanvas.Body>
                            </Navbar.Offcanvas>
                        </Container>
                    </Navbar>
                ))}
            </div>
        </>



    );
};

export default NavbarComponent;

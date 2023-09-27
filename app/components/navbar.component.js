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
    const [isActive, setActive] = useState('');
    const handleClick = (param) => {
        console.log(`Link clicked with param: ${param}`);
        setActive(param);
    }
    // @ts-ignore
    // @ts-ignore
    return (
        <>
            <div style={{width: "100%", position: "fixed", top: 0, zIndex: 2, padding: 0}}>

                {['sm'].map((expand) => (

                    <Navbar  key={expand} className="navbar" expand={expand} >
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
                                        <Link href="/">
                                            <button
                                                onClick={() => handleClick('home')}
                                                style={{
                                                    backgroundColor: Colors.colorA,
                                                    border: "none",
                                                    color: isActive === 'home' ? 'gray' : 'white',
                                                    fontWeight:'bold',
                                                    paddingRight:15
                                                }}
                                            >
                                                    Home
                                            </button>
                                        </Link>
                                        <Link href="/#about">
                                            <button
                                                onClick={() => handleClick('about')}
                                                style={{
                                                    backgroundColor: Colors.colorA,
                                                    border: "none",
                                                    color: isActive === 'about' ? 'gray' : 'white',
                                                    fontWeight:'bold',
                                                    paddingRight:15
                                                }}
                                            >
                                                About Us
                                            </button>
                                        </Link>

                                        {/*<Link href="/#feedbacks ">*/}
                                        {/*    <button*/}
                                        {/*        onClick={() => handleClick('feedbacks')}*/}
                                        {/*        style={{*/}
                                        {/*            backgroundColor: Colors.colorA,*/}
                                        {/*            border: "none",*/}
                                        {/*            color: isActive === 'feedbacks' ? 'gray' : 'white',*/}
                                        {/*            fontWeight:'bold',*/}
                                        {/*            paddingRight:15*/}
                                        {/*        }}*/}
                                        {/*    >*/}
                                        {/*        Feedbacks*/}
                                        {/*    </button>*/}
                                        {/*</Link>*/}
                                        <Link href="/rejections">
                                            <button
                                                onClick={() => handleClick('rejections')}
                                                style={{
                                                    backgroundColor: Colors.colorA,
                                                    border: "none",
                                                    color: isActive === 'rejections' ? 'gray' : 'white',
                                                    fontWeight:'bold',
                                                    paddingRight:15
                                                }}
                                            >
                                                Rejections
                                            </button>
                                        </Link>
                                        {/*<Link href="/blog">*/}
                                        {/*    <button*/}
                                        {/*        onClick={() => handleClick('tutorial')}*/}
                                        {/*        style={{*/}
                                        {/*            backgroundColor: Colors.colorA,*/}
                                        {/*            border: "none",*/}
                                        {/*            color: isActive === 'tutorial' ? 'gray' : 'white',*/}
                                        {/*            fontWeight:'bold',*/}
                                        {/*            paddingRight:15*/}
                                        {/*        }}*/}
                                        {/*    >*/}
                                        {/*        Tutorial*/}
                                        {/*    </button>*/}
                                        {/*</Link>*/}
                                        <Link href="/#faq">
                                            <button
                                                onClick={() => handleClick('faq')}
                                                style={{
                                                    backgroundColor: Colors.colorA,
                                                    border: "none",
                                                    color: isActive === 'faq' ? 'gray' : 'white',
                                                    fontWeight:'bold',
                                                    paddingRight:15
                                                }}
                                            >
                                                FAQ
                                            </button>
                                        </Link>
                                        <Link href="/contactUs">
                                            <button
                                                onClick={() => handleClick('contact')}
                                                style={{
                                                    backgroundColor: Colors.colorA,
                                                    border: "none",
                                                    color: isActive === 'contact' ? 'gray' : 'white',
                                                    fontWeight:'bold',
                                                    paddingRight:15
                                                }}
                                            >
                                                Contact Us
                                            </button>
                                        </Link>

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

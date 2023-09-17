"use client"
import React, {Component} from 'react';
import {Col, Container, Row} from "reactstrap";
import Image from "next/image";


export default class FooterComponent extends Component {
    render() {

        return (

            <div style={{position: 'relative', bottom: 0, width: '100%',}}>
                <div style={{
                    backgroundColor: '#000000',
                }}>
                    <Row>
                        <Col md="3" xs="12" style={{display:"flex", justifyContent:"center"}}>
                            <Container style={{display:"flex", justifyContent:"center", padding:10}}>
                                <a style={{
                                    fontSize: 10,
                                    // fontWeight: 'bold',
                                    color: 'white',
                                }}>
                                    T & C
                                </a>
                                <a style={{
                                    fontSize: 10,
                                    // fontWeight: 'bold',
                                    marginLeft:10,
                                    color: 'white',
                                }}>
                                    Privacy Policy
                                </a>
                            </Container>
                        </Col>
                        <Col md="6" xs="12" style={{display:"flex", justifyContent:'center'}}>
                            <Container style={{display:"flex", justifyContent:"center"}}>
                                <div style={{
                                    fontSize: 10,
                                    // fontWeight: 'bold',
                                    color: 'white',
                                }}>
                                    @ Copyright 2023 SL Rideshare – All rights reserved.<br/>
                                </div>
                            </Container>
                        </Col>

                        <Col md="3" xs="12" style={{display:"flex", justifyContent:"center"}}>
                            <Container style={{ display:"flex", justifyContent:'center', padding:15 }}>
                                <Row style={{display:"flex", justifyContent:'center'}}>
                                    <Col md="4" xs="4" style={{display:"flex", justifyContent:'center'}}>
                                        <a target='_blank' href="#">
                                            <Image src="/FB.png"
                                                   width={30}
                                                   height={30}
                                            />
                                        </a>
                                    </Col>
                                    <Col md="4" xs="4" style={{display:"flex", justifyContent:'center'}}>
                                        <a target='_blank' href="#">
                                            <Image src="/Insta.png"
                                                   width={30}
                                                   height={30}
                                            />
                                        </a>

                                    </Col>
                                    <Col md="4" xs="4" style={{display:"flex", justifyContent:'center'}}>
                                        <a target='_blank' href="#">
                                            <Image src="/youTube.png"
                                                   width={30}
                                                   height={30}
                                            />
                                        </a>

                                    </Col>
                                </Row>
                            </Container>

                        </Col>

                    </Row>
                </div>
            </div>

        );
    }
}

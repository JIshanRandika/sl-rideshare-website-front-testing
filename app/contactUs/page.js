"use client"
import {Col, Container, Input, Row} from "reactstrap";
import React, {useEffect, useRef, useState} from "react";
import emailjs from '@emailjs/browser';
import AOS from "aos";
import {Colors} from "../constants/colors";
import Image from "next/image";

function ContactUS() {
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [email, setEmail] = useState();
    const [message, setMessage] = useState();

    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_ssukhwj', 'template_qhmcy1c', form.current, '7MrlGMYEZLNd8QmBc')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        setFirstName(() => "");
        setLastName(() => "");
        setEmail(() => "");
        setMessage(() => "");
    }
    useEffect(()=>{
        AOS.init({
            duration: 2000,
        })
    },[])

    return (


        <div className="ContactUS">
            <div data-aos="fade-up" data-aos-offset="100" style={{marginTop: 80, marginBottom: 50}}>
                <Row style={{margin: 0}}>
                    <Col md="6" xs="12">
                        <Row>
                            <Container style={{paddingLeft: '15%', paddingRight: '15%'}}>
                                <div style={{
                                    fontSize: '6vw',
                                    fontWeight: 'bold'}}>
                                    Contact us
                                </div>
                            </Container>
                        </Row>
                        <Row>
                            <Container style={{paddingLeft: '15%', paddingRight: '15%'}}>
                                <div style={{
                                    fontSize: 18,
                                    textAlign: 'justify',
                                    wordSpacing: 3,
                                    paddingTop: 30,
                                    // fontWeight:'bold'
                                }}>
                                    Need to get in touch with us? Either fill out the form with your questions and
                                    others
                                </div>

                            </Container>

                        </Row>
                        <Row>
                            <Container style={{
                                paddingLeft: '15%',
                                paddingRight: '15%',
                                justifyContent: 'center',
                                display: 'inline-flex'
                            }}>

                                <div style={{paddingTop: 50}}>
                                    <Image src="/contactUs.png"
                                           width={250}
                                           height={250}
                                    />
                                </div>

                            </Container>
                        </Row>

                    </Col>
                    <Col md="6" xs="12">
                        <Container style={{paddingRight: '15%', paddingLeft: '15%'}}>
                            <form ref={form} onSubmit={sendEmail}>
                                <Row>
                                    <Col md="6" xs="12"
                                         style={{paddingRight: 20}}
                                    >
                                        <Row>
                                            <label style={{padding: 0}}>
                                                First name
                                            </label>
                                        </Row>
                                        <Row>
                                            <input value={firstName} style={{
                                                backgroundColor: '#D9D9D9',
                                                border: 'none',
                                                borderRadius: 5,
                                                padding: 5
                                            }} type="text" name="from_name"/>
                                        </Row>
                                    </Col>
                                    <Col md="6" xs="12"
                                         style={{paddingRight: 20}}
                                    >
                                        <Row>
                                            <label style={{padding: 0}}>
                                                Last name
                                            </label>
                                        </Row>
                                        <Row>
                                            <input value={lastName} style={{
                                                backgroundColor: '#D9D9D9',
                                                border: 'none',
                                                borderRadius: 5,
                                                padding: 5
                                            }} type="text" name="lastName"/>
                                        </Row>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md="12" xs="12" style={{marginTop: 10, paddingRight: 20}}>
                                        <Row>
                                            <label style={{padding: 0}}>
                                                Email
                                            </label>
                                        </Row>
                                        <Row>
                                            <input value={email} style={{
                                                backgroundColor: '#D9D9D9',
                                                border: 'none',
                                                borderRadius: 5,
                                                padding: 5
                                            }} type="Email" name="reply_to"/>
                                        </Row>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md="12" xs="12" style={{marginTop: 10, paddingRight: 20}}>
                                        <Row>
                                            <label style={{padding: 0}}>
                                                What can we help you with?
                                            </label>
                                        </Row>
                                        <Row>
                                            <textarea value={message} style={{
                                                backgroundColor: '#D9D9D9',
                                                border: 'none',
                                                borderRadius: 5,
                                                padding: 5
                                            }} name="message"/>
                                        </Row>
                                    </Col>
                                </Row>

                                <Row>
                                    <Container style={{justifyContent: 'center', display: 'inline-flex'}}>
                                        <input
                                            style={{
                                                marginTop: 50,
                                                marginBottom: 50,
                                                backgroundColor: Colors.colorA,
                                                border:'none',
                                                color: 'white',
                                                width: '100%',
                                                textAlign: 'center',
                                                padding: 10,
                                                fontWeight: 'bold',
                                                fontSize: 20,
                                                borderRadius: 50
                                            }}
                                            type="submit" value="Submit"/>
                                    </Container>

                                </Row>

                            </form>

                        </Container>
                        <Container style={{paddingLeft: '15%', paddingRight: '15%', display:'block'}}>
                            <div style={{
                                fontSize: 18,
                                textAlign: 'justify',
                                wordSpacing: 3,
                                paddingTop: 30,
                                display: "flex",
                                alignItems: "flex-start"
                                // fontWeight:'bold'
                            }}>
                                <Image src="/email.png"
                                       width={35}
                                       height={35}
                                       style={{marginRight:20}}
                                />
                                slrideshare.info@gmail.com
                            </div>
                            <div style={{
                                fontSize: 18,
                                textAlign: 'justify',
                                wordSpacing: 3,
                                paddingTop: 5,
                                display: "flex",
                                alignItems: "flex-start"
                                // fontWeight:'bold'
                            }}>
                                <Image src="/call.png"
                                       width={35}
                                       height={35}
                                       style={{marginRight:20}}
                                />
                                +94 71 57 57 700
                            </div>
                            <div style={{
                                fontSize: 18,
                                textAlign: 'justify',
                                wordSpacing: 3,
                                paddingTop: 5,
                                display: "flex",
                                alignItems: "flex-start"
                                // fontWeight:'bold'
                            }}>
                                <Image src="/address.png"
                                       width={35}
                                       height={35}
                                       style={{marginRight:20}}
                                />
                                "Thilaka", Samagi Mawatha, Duwa Temple Road, Kalutara South
                            </div>
                        </Container>
                    </Col>

                </Row>

            </div>



        </div>
    );
}

export default ContactUS;

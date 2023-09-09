"use client"
import Image from 'next/image'
import styles from './page.module.css'
import '@/app/styles/mock.scss'

import {UncontrolledCarousel, Row, Col, Container} from "reactstrap";
import {Colors} from "./constants/colors";
const items = [
  {
    src: 'https://media.istockphoto.com/id/1313437793/photo/epic-aerial-view-of-night-scene-of-victoria-harbour-hong-kong.webp?b=1&s=170667a&w=0&k=20&c=z1KG3afS3nfOmwahauSiz3vXXOqPYz49DIivUwibMxM=',
    altText: "Slide 1",
    // caption: "",
    // header: "",
    // key: "1",
  },
  {
    src: 'https://media.istockphoto.com/id/1313437793/photo/epic-aerial-view-of-night-scene-of-victoria-harbour-hong-kong.webp?b=1&s=170667a&w=0&k=20&c=z1KG3afS3nfOmwahauSiz3vXXOqPYz49DIivUwibMxM=',
    altText: "Slide 2",
    // caption: "",
    // header: "",
    // key: "2",
  },
  {
    src: 'https://media.istockphoto.com/id/1313437793/photo/epic-aerial-view-of-night-scene-of-victoria-harbour-hong-kong.webp?b=1&s=170667a&w=0&k=20&c=z1KG3afS3nfOmwahauSiz3vXXOqPYz49DIivUwibMxM=',
    altText: "Slide 3",
    // caption: "",
    // header: "",
    // key: "3",
  },
];
export default function Home() {
  return (
      <>
        <Row>
          <Col  md="12" xs="12" className="mx-auto">
            <UncontrolledCarousel items={items} />
          </Col>
        </Row>
        <Row style={{marginTop:20}}>
          <Col  md="12" xs="12" className="mx-auto">
            <div className="text-center d-flex justify-content-center" style={{color:Colors.colorA,fontSize:40, fontWeight:"bold", marginTop:40, marginBottom:10}}>
              What is SL Rideshare?
            </div>
          </Col>
        </Row>
        <Row style={{paddingLeft:100, paddingRight:100, paddingTop:30}}>
            <Col md="6" xs="12" className="mx-auto" style={{display:"flex",alignItems:"center", justifyContent:"center"}}>
              <div style={{fontSize:18}}>
                The Institute of Electrical and Electronics Engineers (IEEE) is the world largest technical professional organization dedicated to technological advancement. IEEE student branch of Sabaragamuwa University of Sri Lanka was established in 2016 with the major goal of inheriting and retaining a high number of members and to engage in many community services thereby serving humanity for tomorrow.
                The Institute of Electrical and Electronics Engineers (IEEE) is the world largest technical professional organization dedicated to technological advancement. IEEE student branch of Sabaragamuwa University of Sri Lanka was established in 2016 with the major goal of inheriting and retaining a high number of members and to engage in many community services thereby serving humanity for tomorrow.
              </div>
            </Col>
            <Col md="6" xs="12" className="mx-auto">
              {/*//laptop view*/}
                <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
                    <iframe
                        title="YouTube Video"
                        src="https://www.youtube.com/embed/YOUR_VIDEO_ID_HERE"
                        frameBorder="0"
                        allowFullScreen
                        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                    ></iframe>
                </div>
            </Col>
        </Row>
          <Row style={{marginTop:20}}>
              <Col  md="12" xs="12" className="mx-auto">
                  <div className="text-center d-flex justify-content-center" style={{color:Colors.colorA,fontSize:40, fontWeight:"bold", marginTop:40, marginBottom:10}}>
                      You can
                  </div>
              </Col>
          </Row>
          <Row style={{paddingLeft:100, paddingRight:100, paddingTop:30}}>
              <Col md="4" xs="12" className="mx-auto" >
                  <Row style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
                      <div style={{backgroundColor:Colors.colorA, width:150, height:150, borderRadius:100, display:"flex", justifyContent:"center", alignItems:"center"}}>
                          <Image src="/schedule.png"
                                 width={80}
                                 height={80}
                          />
                      </div>
                  </Row>
                  <Row style={{display:"flex", justifyContent:"center", alignItems:"center", marginTop:10}}>
                      <div style={{textAlign:"center", fontWeight:"bold", fontSize:20}}>Schedule</div>
                  </Row>
              </Col>
              <Col md="4" xs="12" className="mx-auto" >
                  <Row style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
                      <div style={{backgroundColor:Colors.colorA, width:150, height:150, borderRadius:100, display:"flex", justifyContent:"center", alignItems:"center"}}>
                          <Image src="/live.png"
                                 width={80}
                                 height={80}

                          />
                      </div>
                  </Row>
                  <Row style={{display:"flex", justifyContent:"center", alignItems:"center", marginTop:10}}>
                      <div style={{textAlign:"center", fontWeight:"bold", fontSize:20}}>Live</div>
                  </Row>
              </Col>
              <Col md="4" xs="12" className="mx-auto" >
                  <Row style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
                      <div style={{backgroundColor:Colors.colorA, width:150, height:150, borderRadius:100, display:"flex", justifyContent:"center", alignItems:"center"}}>
                          <Image src="/hire.png"
                                 width={80}
                                 height={80}
                          />

                      </div>
                  </Row>
                  <Row style={{display:"flex", justifyContent:"center", alignItems:"center", marginTop:10}}>
                      <div style={{textAlign:"center", fontWeight:"bold", fontSize:20}}>Hire</div>
                  </Row>
              </Col>
          </Row>
          <Row style={{marginTop:20}}>
              <Col  md="12" xs="12" className="mx-auto">
                  <div className="text-center d-flex justify-content-center" style={{color:Colors.colorA,fontSize:40, fontWeight:"bold", marginTop:40, marginBottom:10}}>
                      Download Now
                  </div>
              </Col>
          </Row>
          <Row style={{paddingLeft:100, paddingRight:100, paddingTop:30}}>
              <Col md="8" xs="12" className="mx-auto" style={{display:"flex", justifyContent:"center"}}>
                  <Image src="/mock.png"
                         width={700} // Initial width
                         height={440} // Initial height
                         className="responsive-image"
                  />
              </Col>
              <Col md="4" xs="12" className="mx-auto" style={{display:"flex", justifyContent:"center",alignItems:"center"}}>
                  <div>
                      <Row>
                          <button style={{
                              border: "none",
                              // paddingBottom: 10,
                              backgroundColor: '&apos;',
                              // marginBottom: 50,
                              borderRadius: 30,
                              webkitBoxShadow: "9px 12px 45px -5px #000000",
                              boxShadow: "9px 12px 45px -8px #000000"
                          }}>
                              <Image src="/googlePlay.png"
                                     width={260}
                                     height={90}
                              />
                          </button>
                      </Row>
                      <Row>
                          <button style={{
                              border: "none",
                              // paddingBottom: 10,
                              backgroundColor: '&apos;',
                              marginTop: 30,
                              borderRadius: 30,
                              webkitBoxShadow: "9px 12px 45px -5px #000000",
                              boxShadow: "9px 12px 45px -8px #000000"
                          }}>
                              <Image src="/appStore.png"
                                     width={260}
                                     height={90}
                              />
                          </button>
                      </Row>
                      <Row>
                          <button style={{
                              border: "none",
                              // paddingBottom: 10,
                              backgroundColor: '&apos;',
                              marginTop: 30,
                              marginBottom: 30,
                              borderRadius: 30,
                              webkitBoxShadow: "9px 12px 45px -5px #000000",
                              boxShadow: "9px 12px 45px -8px #000000"
                          }}>
                              <Image src="/appGallery.png"
                                     width={260}
                                     height={90}
                              />
                          </button>
                      </Row>
                  </div>

              </Col>
          </Row>
          <Row style={{backgroundColor:'black', height:100}}>

          </Row>

      </>


  )
}

"use client"
import Image from 'next/image'
import styles from './page.module.css'
import '@/app/styles/mock.scss'
import { useState } from 'react';
import Faq from "react-faq-component";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

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

const data = {
    title: " ",
    rows: [
        {
            title: "Lorem ipsum dolor sit amet,",
            content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed tempor sem. Aenean vel turpis feugiat,
              ultricies metus at, consequat velit. Curabitur est nibh, varius in tellus nec, mattis pulvinar metus.
              In maximus cursus lorem, nec laoreet velit eleifend vel. Ut aliquet mauris tortor, sed egestas libero interdum vitae.
              Fusce sed commodo purus, at tempus turpis.`,
        },
        {
            title: "Nunc maximus, magna at ultricies elementum",
            content:
                "Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam, vitae convallis ex tortor sed dolor.",
        },
        {
            title: "Curabitur laoreet, mauris vel blandit fringilla",
            content: `Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc, ac sagittis leo elit vel lorem.
            Fusce tempor lacus ut libero posuere viverra. Nunc velit dolor, tincidunt at varius vel, laoreet vel quam.
            Sed dolor urna, lobortis in arcu auctor, tincidunt mattis ante. Vivamus venenatis ultricies nibh in volutpat.
            Cras eu metus quis leo vestibulum feugiat nec sagittis lacus.Mauris vulputate arcu sed massa euismod dignissim. `,
        },
        {
            title: "What is the package version",
            content: <p>current version is 1.2.1</p>,
        },
    ],
};

// const styles = {
    // bgColor: 'white',
    // titleTextColor: "blue",
    // rowTitleColor: "blue",
    // rowContentColor: 'grey',
    // arrowColor: "red",
// };

const config = {
    // animate: true,
    // arrowIcon: "V",
    // tabFocus: true
};


export default function Home() {

    const [currentLanguage, setCurrentLanguage] = useState('english'); // Default to English

    const handleLanguageChange = (language) => {
        setCurrentLanguage(language);
    };

    // Define video IDs for each language
    const videoIds = {
        sinhala: 'frUyLWSi0pE',
        tamil: 'IJQUSW9CXL8',
        english: 'VDBcq8pvxnk',
    };

  return (
      <>
        <Row>
          <Col  md="12" xs="12" className="mx-auto">
            <UncontrolledCarousel items={items} />
          </Col>
        </Row>
        <Row id='about' style={{marginTop:20, scrollMarginTop:76}}>
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

                <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
                    <iframe
                        title="YouTube Video"
                        src={`https://www.youtube.com/embed/${videoIds[currentLanguage]}`}
                        frameBorder="0"
                        allowFullScreen
                        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                    ></iframe>
                </div>
                <div style={{display:"flex", justifyContent:"center"}} className="language-buttons">
                    <button style={{backgroundColor:Colors.colorA, border:"none", margin:20, color:"white", padding:10,borderRadius:10}} onClick={() => handleLanguageChange('sinhala')}>Sinhala</button>
                    <button style={{backgroundColor:Colors.colorA, border:"none", margin:20, color:"white", padding:10,borderRadius:10}} onClick={() => handleLanguageChange('tamil')}>Tamil</button>
                    <button style={{backgroundColor:Colors.colorA, border:"none", margin:20, color:"white", padding:10,borderRadius:10}} onClick={() => handleLanguageChange('english')}>English</button>
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
                  <Row style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
                      <div style={{textAlign:"center", fontSize:12}}>The Institute of Electrical and Electronics Engineers (IEEE) is the world largest technical professional organization dedicated to technological advancement.</div>
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
                  <Row style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
                      <div style={{textAlign:"center", fontSize:12}}>The Institute of Electrical and Electronics Engineers (IEEE) is the world largest technical professional organization dedicated to technological advancement.</div>
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
                  <Row style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
                      <div style={{textAlign:"center", fontSize:12}}>The Institute of Electrical and Electronics Engineers (IEEE) is the world largest technical professional organization dedicated to technological advancement.</div>
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
          <Row id='faq' style={{marginTop:20, scrollMarginTop:76}}>
              <Col  md="12" xs="12" className="mx-auto">
                  <div className="text-center d-flex justify-content-center" style={{color:Colors.colorA,fontSize:40, fontWeight:"bold", marginTop:40, marginBottom:10}}>
                      Frequently Asked Questions
                  </div>
              </Col>
          </Row>
          <Row style={{paddingLeft:100, paddingRight:100, paddingTop:30}}>
              <div>
                  <Faq
                      data={data}
                      styles={styles}
                      config={config}
                  />
              </div>
          </Row>
          <Row id='feedbacks' style={{marginTop:20, scrollMarginTop:76}}>
              <Col  md="12" xs="12" className="mx-auto">
                  <div className="text-center d-flex justify-content-center" style={{color:Colors.colorA,fontSize:40, fontWeight:"bold", marginTop:40, marginBottom:10}}>
                      Feedbacks
                  </div>
              </Col>
          </Row>
          <Row style={{paddingLeft:100, paddingRight:100, paddingTop:30}}>
              <VerticalTimeline>

                  <VerticalTimelineElement
                      className="vertical-timeline-element--work"
                      dateClassName='dateClz'
                      date={
                          <div>
                              <h3 className="vertical-timeline-element-title">Web Designer</h3>
                              <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
                              <p>
                                  User Experience, Visual Design
                              </p>
                          </div>
                      }
                      iconStyle={{ background: Colors.colorA, borderColor: '#fff', width:50, height:50}}
                      icon={
                          <div style={{display:"flex", justifyContent:"center", alignItems:"center", alignContent:"center", height:'100%'}}>
                              <Image src="/feedback.png"
                              width={40}
                              height={40}
                              />
                          </div>
                          }
                  >
                      <div style={{height:250}}>
                          <iframe
                              title="YouTube Video"
                              src="https://www.youtube.com/embed/Tmblfb-9Hq8"
                              frameBorder="0"
                              allowFullScreen
                              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                          ></iframe>
                      </div>

                  </VerticalTimelineElement>
                  <VerticalTimelineElement
                      className="vertical-timeline-element--work"
                      dateClassName='dateClz'
                      date={
                          <div>
                              <h3 className="vertical-timeline-element-title">Web Designer</h3>
                              <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
                              <p>
                                  User Experience, Visual Design
                              </p>
                          </div>
                      }
                      iconStyle={{ background: Colors.colorA, borderColor: '#fff', width:50, height:50}}
                      icon={
                          <div style={{display:"flex", justifyContent:"center", alignItems:"center", alignContent:"center", height:'100%'}}>
                              <Image src="/feedback.png"
                                     width={40}
                                     height={40}
                              />
                          </div>
                      }
                  >
                      <div style={{height:250}}>
                          <iframe
                              title="YouTube Video"
                              src="https://www.youtube.com/embed/Tmblfb-9Hq8"
                              frameBorder="0"
                              allowFullScreen
                              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                          ></iframe>
                      </div>

                  </VerticalTimelineElement>

                  <VerticalTimelineElement
                      className="vertical-timeline-element--work"
                      dateClassName='dateClz'
                      date={
                          <div>
                              <h3 className="vertical-timeline-element-title">Web Designer</h3>
                              <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
                              <p>
                                  User Experience, Visual Design
                              </p>
                          </div>
                      }
                      iconStyle={{ background: Colors.colorA, borderColor: '#fff', width:50, height:50}}
                      icon={
                          <div style={{display:"flex", justifyContent:"center", alignItems:"center", alignContent:"center", height:'100%'}}>
                              <Image src="/feedback.png"
                                     width={40}
                                     height={40}
                              />
                          </div>
                      }
                  >
                      <div style={{height:250}}>
                          <iframe
                              title="YouTube Video"
                              src="https://www.youtube.com/embed/Tmblfb-9Hq8"
                              frameBorder="0"
                              allowFullScreen
                              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                          ></iframe>
                      </div>

                  </VerticalTimelineElement>
                  {/*<VerticalTimelineElement*/}
                  {/*    iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}*/}
                  {/*    // icon={<StarIcon />}*/}
                  {/*/>*/}
              </VerticalTimeline>
          </Row>
          {/*<Row style={{paddingLeft:100, paddingRight:100, paddingTop:100, marginTop:20, backgroundColor:"black"}}>*/}
          {/*</Row>*/}

      </>


  )
}

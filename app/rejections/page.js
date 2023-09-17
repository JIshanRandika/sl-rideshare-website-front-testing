"use client"
import React, {useEffect} from 'react';
import { MDBDataTable } from 'mdbreact';
import {Col, Row} from "reactstrap";
import {Colors} from "../constants/colors";
import AOS from "aos";

const DatatablePage = () => {
    const rejectedPassengerData = {
        columns: [
            {
                label: 'Name',
                field: 'name',
                sort: 'asc',
                // width: 150
            },
            {
                label: 'NIC',
                field: 'nic',
                sort: 'asc',
                // width: 270
            },
            {
                label: 'Address',
                field: 'address',
                sort: 'asc',
                // width: 200
            },
            {
                label: 'Reason',
                field: 'reason',
                sort: 'asc',
                // width: 100
            }
        ],
        rows: [


            {
                name: 'Donna Snider',
                nic: 'Customer Support',
                address: 'New York',
                reason: '27'
            }
        ]
    };

    const rejectedVehiclesData = {
        columns: [
            {
                label: 'Vehicle Number',
                field: 'vehicle_number',
                sort: 'asc',
                // width: 150
            },
            {
                label: 'Engine Number',
                field: 'engine_number',
                sort: 'asc',
                // width: 270
            },
            {
                label: 'Chassis Number',
                field: 'chassis_number',
                sort: 'asc',
                // width: 200
            },
            {
                label: 'Owner NIC',
                field: 'ownerNic',
                sort: 'asc',
                // width: 100
            }
        ],
        rows: [


            {
                vehicle_number: 'Donna Snider',
                engine_number: 'Customer Support',
                chassis_number: 'New York',
                ownerNic: '27'
            }
        ]
    };

    useEffect(()=>{
        AOS.init({
            duration: 2000,
        })
    },[])

    return (
        <>
            <Row style={{marginTop:20, scrollMarginTop:76}}>
                <Col  md="12" xs="12" className="mx-auto">
                    <div data-aos="fade-up" data-aos-offset="100" className="text-center d-flex justify-content-center" style={{color:Colors.colorA,fontSize:40, fontWeight:"bold", marginTop:40, marginBottom:10}}>
                        Rejected Passengers & Drivers
                    </div>
                </Col>
            </Row>
            <Row data-aos="fade-up" data-aos-offset="100" style={{paddingLeft:100, paddingRight:100, paddingTop:30}}>
                <MDBDataTable
                    striped
                    bordered
                    small
                    data={rejectedPassengerData}
                />
            </Row>
            <Row style={{marginTop:10, scrollMarginTop:76}}>
                <Col  md="12" xs="12" className="mx-auto">
                    <div data-aos="fade-up" data-aos-offset="100" className="text-center d-flex justify-content-center" style={{color:Colors.colorA,fontSize:40, fontWeight:"bold", marginTop:40, marginBottom:10}}>
                        Rejected Vehicles
                    </div>
                </Col>
            </Row>
            <Row data-aos="fade-up" data-aos-offset="100" style={{paddingLeft:100, paddingRight:100, paddingTop:30}}>
                <MDBDataTable
                    striped
                    bordered
                    small
                    data={rejectedVehiclesData}
                />
            </Row>


        </>

    );
}

export default DatatablePage;

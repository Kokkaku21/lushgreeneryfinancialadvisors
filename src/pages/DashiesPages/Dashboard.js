import React, { useState } from 'react';
import Title from '../../components/title'
import NavBar from '../../components/header'
import { Row, Col, Container } from 'react-bootstrap'
import DashieCards from './DashieCards';


function Dashie() {
    return (
        <div>
            <Title title="Home" />
            <NavBar />
            <div class="ui container">
                <h1 class="welcome">Welcome Anon!</h1>
                <div class="ui container">

                    <h3>Customers</h3>
                    <div class="ui divider"></div>
                    <Row>
                        <Col sm={8}>
                            <div class="ui cards">
                               <DashieCards />
                               <DashieCards />
                               <DashieCards />
                               <DashieCards />
                            </div>
                        </Col>
                        <Col>
                            <div class="ui card">
                                <div class="content">
                                    <div class="header">Announcements</div>
                                </div>
                                <div class="content">
                                    <h4 class="ui sub header">No Announcements so far</h4>

                                </div>
                                
                            </div>
                        </Col>
                    </Row>



                </div>
            </div>

        </div>
    )
}

export default Dashie;
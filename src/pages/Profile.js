import React, { useState } from "react";
import Title from "../components/title";
import NavBar from "../components/header"
import { Link } from "react-router-dom";
import { Image, Button } from "semantic-ui-react"
import { Modal } from "react-bootstrap";



function Profile() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
        <div>
            <Title title="Profile" />
            <NavBar />
            <div class="ui container">
                <h1 class="welcome">Profile</h1>
                <div class="ui segment">
                    <div class="ui container center aligned">
                        <h2 class="ui header">CharlesLeg</h2>
                        <p></p>
                        <Image src='/images/moustache.jpg' size='medium' rounded centered />
                        <p></p>
                        <Button class="ui button" onClick={handleShow}>Change Photo</Button>
                    </div>
                    <div class="ui divider"></div>
                    <div class="ui container center aligned">
                        <h4 class="ui header">User Details</h4>
                        <div class="ui text container left aligned">
                            <p>Name: Charles LeClerc</p>
                            <p>Username: CharlesLeg</p>
                            <p>Organisation: Organisation A</p>
                            <p>Email: charles.19@organisationA.com</p>
                            <p></p>
                        </div>

                        <Button class="ui button" as={Link} to="/settingprofile">Change Details</Button>
                    </div>

                    <div class="ui divider"></div>

                    <div class="ui container center aligned">
                        <h4 class="ui header">Contact Details</h4>
                        <div class="ui text container left aligned">
                            <p>Contact Type(s): WhatsApp, Telegram</p>
                            <p>Contact Number(WhatsApp/Mobile): 9999 9999</p>
                            <p>Telegram Username: teleuser5</p>
                            <p>Zoom ID: N/A</p>
                            <p></p>
                        </div>

                        <p></p>
                        <Button class="ui button" as={Link} to="/contacts">Change Contact</Button>
                    </div>



                </div>

            </div>
            <Modal show={show} onHide={handleClose} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>Upload Image Here!</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p></p>
                    Upload your desired image or change your current one if you don't like it.
                    <p></p>
                    <div class="ui container center aligned">
                    <Button primary>Upload new Image</Button>
                    </div>
                    <strong>This is just a static website, you cannot insert pictures yet</strong>
                    <p></p>
                </Modal.Body>
                <Modal.Footer>
                    <Button secondary onClick={handleClose}>
                        Don't change
                    </Button>
                    <Button primary onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
            




        </div >
    )
}
export default Profile;
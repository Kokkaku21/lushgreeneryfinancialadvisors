import React, { useState } from "react";
import Title from "../components/title";
import NavBar from "../components/header"
import { Form, Button } from "semantic-ui-react"
import { Modal } from "react-bootstrap"
import {Link} from "react-router-dom"


function SettingsProfile() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
        <div>
            <Title title="Change Profile" />
            <NavBar />
            <div class="ui container">
                <h1 class="welcome">Change Profile</h1>
            </div>
            <div class="ui container raised segment">
                <Form class="ui form">
                    <Form.Field>
                        <label>Change Email</label>
                        <input type="text" name="email" placeholder="jamesjohan@gmail.com"></input>
                    </Form.Field>
                    <div class="two fields">
                        <Form.Field required>
                            <label>Update Password</label>
                            <input type="password" name="password" placeholder="Password"></input>
                        </Form.Field>
                        <Form.Field required>
                            <label>Confirm Password</label>
                            <input type="password" name="password" placeholder="Password"></input>
                        </Form.Field>
                    </div>
                    <Button color="green" onClick={handleShow}>Update Profile</Button>
                </Form>
            </div>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Wait!</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                   Do you want to update your profile now?
                </Modal.Body>
                <Modal.Footer>
                    <Button color="red" onClick={handleClose}>
                        No
                    </Button>
                    <Button primary as={Link} to="/settingsuccess">Yes! Proceed</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}
export default SettingsProfile;
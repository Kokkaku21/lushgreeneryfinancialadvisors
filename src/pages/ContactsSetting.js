import React, { useState } from "react";
import Title from "../components/title";
import NavBar from "../components/header"
import { Dropdown, Form, Label, Button } from "semantic-ui-react"
import { Modal } from "react-bootstrap";
import {Link} from "react-router-dom"

const contacts = [
    {
        key: 'WhatsApp',
        text: 'WhatsApp',
        value: 'WhatsApp'
    },
    {
        key: 'Zoom',
        text: 'Zoom',
        value: 'Zoom'
    },
    {
        key: 'Telegram',
        text: 'Telegram',
        value: 'Telegram'
    },
    {
        key: 'Mobile',
        text: 'Mobile',
        value: 'Mobile'
    },
]


function ContactSettings() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            <Title title="Change Contacts" />
            <NavBar />
            <div class="ui container">
                <h1 class="welcome">Change Contacts</h1>
            </div>
            <div class="ui container raised segment">
                <Form class="ui large form">
                    <Form.Field>
                        <label>Add New Contact Type Here</label>
                        <Form.Dropdown
                            selection
                            multiple
                            options={contacts}
                        />
                    </Form.Field>

                    <Form.Field>
                        <label>Add/Update Contact Details</label>
                        <div class="inline fields">
                            <Form.Field>

                                <label>Contact Details(Mobile/WhatsApp)</label>
                                <Form.Input type="text" placeholder="xxxxxxxx" />
                            </Form.Field>
                            <Form.Field>
                                <label>Contact Details(Telegram Only)</label>
                                <Form.Input type="text" />
                            </Form.Field>
                            <Form.Field>
                                <label>Zoom ID</label>
                                <Form.Input type="text" />
                            </Form.Field>
                        </div>
                    </Form.Field>
                    <Form.Field>
                        <label>Delete Contact Type</label>
                        <Form.Dropdown
                            selection
                            multiple
                            options={contacts}
                        />
                    </Form.Field>

                    <Button color="green" onClick={handleShow}>Update Contact</Button>
                </Form>
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
                        Do you want to update your contacts now?
                    </Modal.Body>
                    <Modal.Footer>
                        <Button color="red" onClick={handleClose}>
                            No
                        </Button>
                        <Button primary as={Link} to="/settingsuccess">Yes! Proceed</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </div>
    )
}
export default ContactSettings;
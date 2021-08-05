import React, { useState } from 'react';
import Title from '../../components/title';
import Headers from '../../components/header'
import { Button } from 'semantic-ui-react';
import { Modal } from "react-bootstrap";

function VisitorItems() {
    const [buttonChange, setButtonChange] = useState(false);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);




    const resolveButton = (
        <div class="extra">
            <Button.Group>
                <Button color="green" onClick={handleShow}>Resolved</Button>
                <Button.Or />
                <Button color="red" onClick={() => setButtonChange(false)} >Not Resolved</Button>
            </Button.Group>

        </div>

    )
    const acceptButton = (
        <div class="extra">
            <Button color="green" onClick={() => setButtonChange(true)}>Accept</Button>
        </div>
    )

    return (
        <div class="item">
            <div class="content">
                <i class="user icon"></i>
                <div class="header">Koyuki</div>
                <div class="description">
                    <p>Koyuki has requested for Insurance A Policy B</p>
                    <p>Prefered contact type: WhatsApp, Zoom, Telegram</p>
                    <p>Email: Koyuki@gmail.com</p>
                    <p>Contact Details: 9999 9999, teleuser9</p>
                </div>

                {buttonChange ? resolveButton : acceptButton}

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
                    Are you sure this customer's request has been resolved?
                </Modal.Body>
                <Modal.Footer>
                    <Button color="red" onClick={handleClose}>
                        No
                    </Button>
                    <Button primary onClick={handleClose}>Yes! Proceed</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default VisitorItems;
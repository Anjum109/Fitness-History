import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Toast from 'react-bootstrap/Toast';
import './AutohideExample.css'

const AutohideExample = () => {
    const [show, setShow] = useState(false);

    return (
        <Row className='toast-structure'>
            <Col xs={6}>
                <Button className='Toast-btn' onClick={() => setShow(true)}>Activity Completed</Button>
            </Col>
            <Col xs={6}>
                <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>

                    <Toast.Body className='toast-body'>Successfully Record Your Exercise Information.</Toast.Body>
                </Toast>
            </Col>

        </Row>
    );
}

export default AutohideExample;
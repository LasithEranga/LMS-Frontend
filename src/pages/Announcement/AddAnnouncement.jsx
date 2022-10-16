import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import InputGroup from "../../components/InputGroup";

function Announcement() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Announcement
      </Button>
      <div className="shadow-sm d-flex justify-content-center align-items-center col-12 ">
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Announcement</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <textarea className='form-control' id="add_announcement" name="add_announcement" placeholder='Add Announcement here...'></textarea>
        
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Add Announcement
          </Button>
        </Modal.Footer>
      </Modal>
      </div>
    </>
  );
}

export default Announcement
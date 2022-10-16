import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import InputGroup from "../../components/InputGroup";
 
function Announcement() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Announcement
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Announcement</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <InputGroup
            label={""}
            id="annon_content"
            type="text"
            name="annon_content"
            value={announ_body}
            onchange={onChangeHandler}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Announce
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

render(<Announcement />);
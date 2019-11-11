import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { MdDelete } from 'react-icons/md';
import './modal.css';

const ModalD = (props) => {
  const {
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="danger" onClick={toggle}><MdDelete/></Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Borrar Elemento</ModalHeader>
        <ModalBody>
          ¿Estás seguro de borrar este elemento?
        </ModalBody>
        <ModalFooter>
          <Button className="aceptarB" onClick={toggle}>Aceptar</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ModalD;
import React from 'react';
import { Modal, Button, Alert } from 'react-bootstrap';

const DeleteModal = ({ showModal, cancelDelete, confirmDelete, entityType, errorMessage, entityNameToDelete }) => {
  let entityName;
  switch (entityType) {
    case 'departments':
      entityName = 'department';
      break;
    case 'roles':
      entityName = 'role';
      break;
    case 'employees':
      entityName = 'employee';
      break;
    case 'managers':
      entityName = 'manager';
      break;
    default:
      entityName = 'item';
  }

  return (
    <Modal show={showModal} onHide={cancelDelete}>
      <Modal.Header closeButton>
        <Modal.Title>Confirm Delete</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {errorMessage && <Alert variant="danger" className='mb-0'>{errorMessage}</Alert>}
        {!errorMessage && (
          <div>
            <p>Are you sure you want to delete the following {entityName}?</p>
            <ul className='mb-0'>
              {Array.isArray(entityNameToDelete) ? (
                entityNameToDelete.map((item, index) => (
                  <li key={index}>{item}</li>
                ))
              ) : (
                <li>{entityNameToDelete}</li>
              )}
            </ul>
          </div>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={cancelDelete}>Cancel</Button>
        <Button 
          variant="danger" 
          onClick={confirmDelete} 
          disabled={errorMessage && errorMessage.props.children[1].props.children.length > 0}>
          Delete
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default DeleteModal;

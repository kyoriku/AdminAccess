import React from 'react';
import { Modal, Button, Alert } from 'react-bootstrap';

const ErrorModal = ({ errorMessage, closeModal, entityType, entityAction }) => {
  let entityTypeName;
  switch (entityType) {
    case 'departments':
      entityTypeName = 'department';
      break;
    case 'roles':
      entityTypeName = 'role';
      break;
    case 'employees':
      entityTypeName = 'employee';
      break;
    case 'managers':
      entityTypeName = 'manager';
      break;
    default:
      entityTypeName = 'item';
  }

  let entityActionMessage;
  switch (entityAction) {
    case 'add':
      entityActionMessage = 'adding';
      break;
    case 'edit':
      entityActionMessage = 'editing';
      break;
    default:
      entityActionMessage = 'modifying';
  }

  // Create a user-friendly error message
  const userFriendlyMessage = (() => {
    if (errorMessage.includes('404')) {
      return `It looks like there were no changes made while trying to edit the ${entityTypeName}. Please modify the information before saving.`;
    } else if (errorMessage.includes('400')) {
      return `Please fill out all required fields before ${entityActionMessage} the ${entityTypeName}.`;
    }
    return `An error occurred while ${entityActionMessage} the ${entityTypeName}. Please try again later.`;
  })();

  return (
    <Modal show={!!errorMessage} onHide={closeModal}>
      <Modal.Header closeButton>
        <Modal.Title>Error</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Alert variant="danger" className="mb-0">
          <p className="mb-0">{userFriendlyMessage}</p>
        </Alert>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={closeModal}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ErrorModal;

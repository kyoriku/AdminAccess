import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CSVLink } from "react-csv";
import axios from 'axios';
import Auth from '../utils/auth';
import DeleteModal from '../components/DeleteModal';
import LoadingSpinner from '../components/LoadingSpinner';

function ManagerList() {
  const [managers, setManagers] = useState([]);
  const [records, setRecords] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deleteId, setDeleteId] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    getAllManagers();
  }, []);

  const getAllManagers = async () => {
    try {
      const response = await axios.get('/api/managers');
      setManagers(response.data);
      setRecords(response.data);
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching managers:', error);
      setIsLoading(false);
    }
  };

  const Filter = (event) => {
    setManagers(records.filter(manager =>
      manager.first_name.toLowerCase().includes(event.target.value.toLowerCase()) ||
      manager.last_name.toLowerCase().includes(event.target.value.toLowerCase()) ||
      manager.email.toLowerCase().includes(event.target.value.toLowerCase()) ||
      manager.role.title.toLowerCase().includes(event.target.value.toLowerCase())
    ));
  };

  const deleteManager = async (deleteId) => {
    try {
      await axios.delete(`/api/managers/${deleteId}`);
      setManagers(managers => managers.filter(manager => manager.id !== deleteId));
      setShowDeleteModal(false);
    } catch (error) {
      console.error('Error deleting manager:', error);
      setErrorMessage('Failed to delete manager. Please try again later.');
    }
  };

  const handleAction = (action, id = null) => {
    if (!Auth.loggedIn()) {
      const loginLink = document.querySelector('button.btn.btn-outline-primary');
      if (loginLink) {
        loginLink.click();
      } else {
        console.error('Login link not found');
        navigate('/login');
      }
      return;
    }

    if (action === 'add') {
      navigate('/managers/add');
    } else if (action === 'edit' && id) {
      navigate(`/managers/${id}`);
    } else if (action === 'delete' && id) {
      setDeleteId(id);
      setShowDeleteModal(true);
    }
  };

  const confirmDelete = async () => {
    await deleteManager(deleteId);
  };

  const cancelDelete = () => {
    setShowDeleteModal(false);
    setErrorMessage('');
  };

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className='px-3 mt-3 mb-5'>
      <div className='d-flex justify-content-between'>
        <button onClick={() => handleAction('add')} className='btn btn-success'>Add Manager</button>
        <h2 className='m-0'>Managers</h2>
        <CSVLink className='btn btn-dark' data={managers}>Export To CSV</CSVLink>
      </div>
      <div className='mt-3 card'>
        <input
          type="text"
          className='form-control search'
          placeholder='Type to Search'
          onChange={Filter}
          id='searchInput'
        />
        <table className='table table-bordered table-hover'>
          <thead className='thead table-primary'>
            <tr>
              <th>Manager ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Role Title</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {managers.length === 0 ? (
              <tr>
                <td colSpan='6'>No managers found</td>
              </tr>
            ) : (
              managers.map((manager) => (
                <tr key={manager.id}>
                  <td>{manager.id}</td>
                  <td>{manager.first_name}</td>
                  <td>{manager.last_name}</td>
                  <td>{manager.email}</td>
                  <td>{manager.role.title}</td>
                  <td>
                    <button onClick={() => handleAction('edit', manager.id)} className='btn btn-info btn-sm me-2'>Edit</button>
                    <button onClick={() => handleAction('delete', manager.id)} className='btn btn-warning btn-sm'>Delete</button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
      <DeleteModal
        showModal={showDeleteModal}
        setShowModal={setShowDeleteModal}
        errorMessage={errorMessage}
        setErrorMessage={setErrorMessage}
        cancelDelete={cancelDelete}
        confirmDelete={confirmDelete}
        entityType='managers'
        entityNameToDelete={`${managers.find(manager => manager.id === deleteId)?.first_name} ${managers.find(manager => manager.id === deleteId)?.last_name}`}
      />
    </div>
  );
}

export default ManagerList;
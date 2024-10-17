import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CSVLink } from "react-csv";
import axios from 'axios';
import Auth from '../utils/auth';
import DeleteModal from '../components/DeleteModal';
import LoadingSpinner from '../components/LoadingSpinner';

function RoleList() {
  const [roles, setRoles] = useState([]);
  const [records, setRecords] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deleteId, setDeleteId] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    getAllRoles();
  }, []);

  const getAllRoles = async () => {
    try {
      const response = await axios.get('/api/roles');
      setRoles(response.data);
      setRecords(response.data);
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching roles:', error);
      setIsLoading(false);
    }
  };

  const Filter = (event) => {
    setRoles(records.filter(role =>
      role.title.toLowerCase().includes(event.target.value.toLowerCase()) ||
      role.department.name.toLowerCase().includes(event.target.value.toLowerCase())
    ));
  };

  const getSingleRole = async (roleId) => {
    try {
      const response = await axios.get(`/api/roles/${roleId}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching role:', error);
      throw error;
    }
  };

  const deleteRole = async (deleteId) => {
    try {
      await axios.delete(`/api/roles/${deleteId}`);
      setRoles(roles => roles.filter(role => role.id !== deleteId));
      setShowDeleteModal(false);
    } catch (error) {
      console.error('Error deleting role:', error);
      setErrorMessage('Failed to delete role. Please try again later.');
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
      navigate('/roles/add');
    } else if (action === 'edit' && id) {
      navigate(`/roles/${id}`);
    } else if (action === 'delete' && id) {
      setDeleteId(id);
      setShowDeleteModal(true);
    }
  };

  const confirmDelete = async () => {
    try {
      const role = await getSingleRole(deleteId);
      const associatedEmployees = role.employees.map(employee => `${employee.first_name} ${employee.last_name}`);
      
      if (associatedEmployees.length > 0) {
        setShowDeleteModal(true);
        
        // Determine the correct pluralization of "employee"
        const employeeText = associatedEmployees.length === 1 ? 'employee' : 'employees';
  
        setErrorMessage(
          <div>
            <p>{`Cannot delete ${role.title} role. Please reassign or remove any associated ${employeeText} first:`}</p>
            <ul className='mb-0'>
              {associatedEmployees.map((employee, index) => (
                <li key={index}>{employee}</li>
              ))}
            </ul>
          </div>
        );
      } else {
        await deleteRole(deleteId);
      }
    } catch (error) {
      console.error('Error during delete operation:', error);
      setShowDeleteModal(true);
      setErrorMessage('Failed to fetch role details. Please try again later.');
    }
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
        <button onClick={() => handleAction('add')} className='btn btn-success'>Add Role</button>
        <h2 className='m-0'>Roles</h2>
        <CSVLink className='btn btn-dark' data={roles}>Export To CSV</CSVLink>
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
              <th>Role ID</th>
              <th>Role Title</th>
              <th>Department Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {roles.length === 0 ? (
              <tr>
                <td colSpan='4'>No roles found</td>
              </tr>
            ) : (
              roles.map((role) => (
                <tr key={role.id}>
                  <td>{role.id}</td>
                  <td>{role.title}</td>
                  <td>{role.department.name}</td>
                  <td>
                    <button onClick={() => handleAction('edit', role.id)} className='btn btn-info btn-sm me-2'>Edit</button>
                    <button onClick={() => handleAction('delete', role.id)} className='btn btn-warning btn-sm'>Delete</button>
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
        entityType='roles'
        entityNameToDelete={roles.find(role => role.id === deleteId)?.title}
      />
    </div>
  );
}

export default RoleList;
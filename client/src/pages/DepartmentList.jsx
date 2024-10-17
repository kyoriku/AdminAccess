import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CSVLink } from "react-csv";
import axios from 'axios';
import Auth from '../utils/auth';
import DeleteModal from '../components/DeleteModal';
import LoadingSpinner from '../components/LoadingSpinner';

function DepartmentList() {
  const [departments, setDepartments] = useState([]);
  const [records, setRecords] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deleteId, setDeleteId] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    getAllDepartments();
  }, []);

  const getAllDepartments = async () => {
    try {
      const response = await axios.get('/api/departments');
      setDepartments(response.data);
      setRecords(response.data);
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching all departments:', error);
      setIsLoading(false);
    }
  };

  const Filter = (event) => {
    setDepartments(records.filter(department =>
      department.name.toLowerCase().includes(event.target.value.toLowerCase())
    ));
  };

  const getSingleDepartment = async (deleteId) => {
    try {
      const response = await axios.get(`/api/departments/${deleteId}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching individual department:', error);
    }
  };

  const deleteDepartment = async (deleteId) => {
    try {
      await axios.delete(`/api/departments/${deleteId}`);
      setDepartments(departments => departments.filter(department => department.id !== deleteId));
      setShowDeleteModal(false);
    } catch (error) {
      console.error('Error deleting department:', error);
    }
  };

  const handleAction = (action, id = null) => {
    if (!Auth.loggedIn()) {
      // Trigger the login modal in the navbar
      const loginLink = document.querySelector('button.btn.btn-outline-primary');
      if (loginLink) {
        loginLink.click();
      } else {
        console.error('Login link not found');
        // Might want to add a fallback here, such as redirecting to the login page
        // navigate('/login');
      }
      return;
    }

    if (action === 'add') {
      navigate('/departments/add');
    } else if (action === 'edit' && id) {
      navigate(`/departments/${id}`);
    } else if (action === 'delete' && id) {
      setDeleteId(id);
      setShowDeleteModal(true);
    }
  };

  const confirmDelete = async () => {
    try {
      const department = await getSingleDepartment(deleteId);
      const associatedRoles = department.roles.map(role => role.title);

      if (associatedRoles.length > 0) {
        setShowDeleteModal(true);

        // Determine the correct pluralization of "role"
        const roleText = associatedRoles.length === 1 ? 'role' : 'roles';

        setErrorMessage(
          <div>
            <p>{`Cannot delete ${department.name} department. Please reassign or remove any associated ${roleText} first:`}</p>
            <ul className='mb-0'>
              {associatedRoles.map((role, index) => (
                <li key={index}>{role}</li>
              ))}
            </ul>
          </div>
        );
      } else {
        await deleteDepartment(deleteId);
      }
    } catch (error) {
      console.error('Error during delete operation:', error);
      setShowDeleteModal(true);
      setErrorMessage(error.message);
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
      {/* <div className='d-flex justify-content-center'>
        <h2 className='m-0'>Departments</h2>
      </div> */}
      <div className='d-flex justify-content-between'>
        <button onClick={() => handleAction('add')} className='btn btn-success'>Add Department</button>
        <h2 className='m-0'>Departments</h2>
        <CSVLink className='btn btn-dark' data={departments}>Export To CSV</CSVLink>
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
              <th>Department ID</th>
              <th>Department Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {departments.length === 0 ? (
              <tr>
                <td colSpan="3">No departments found.</td>
              </tr>
            ) : (
              departments.map((department) => (
                <tr key={department.id}>
                  <td>{department.id}</td>
                  <td>{department.name}</td>
                  <td>
                    <button onClick={() => handleAction('edit', department.id)} className='btn btn-info btn-sm me-2'>Edit</button>
                    <button onClick={() => handleAction('delete', department.id)} className='btn btn-warning btn-sm'>Delete</button>
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
        entityType='departments'
        entityNameToDelete={departments.find(department => department.id === deleteId)?.name}
      />
    </div>
  );
}

export default DepartmentList;
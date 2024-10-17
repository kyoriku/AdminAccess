import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CSVLink } from "react-csv";
import axios from 'axios';
import Auth from '../utils/auth';
import DeleteModal from '../components/DeleteModal';
import LoadingSpinner from '../components/LoadingSpinner';

function EmployeeList() {
  const [employees, setEmployees] = useState([]);
  const [records, setRecords] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deleteId, setDeleteId] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    getAllEmployees();
  }, []);

  const getAllEmployees = async () => {
    try {
      const response = await axios.get('/api/employees');
      setEmployees(response.data);
      setRecords(response.data);
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching all employees:', error);
      setIsLoading(false);
    }
  };

  const Filter = (event) => {
    setEmployees(records.filter(employee =>
      employee.first_name.toLowerCase().includes(event.target.value.toLowerCase()) ||
      employee.last_name.toLowerCase().includes(event.target.value.toLowerCase()) ||
      employee.email.toLowerCase().includes(event.target.value.toLowerCase()) ||
      employee.role.title.toLowerCase().includes(event.target.value.toLowerCase())
    ));
  };

  const deleteEmployee = async (deleteId) => {
    try {
      await axios.delete(`/api/employees/${deleteId}`);
      setEmployees(employees => employees.filter(employee => employee.id !== deleteId));
      setShowDeleteModal(false);
    } catch (error) {
      console.error('Error deleting employee:', error);
      setErrorMessage('Error deleting employee. Please try again.');
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
        // Fallback: redirect to login page
        navigate('/login');
      }
      return;
    }

    if (action === 'add') {
      navigate('/employees/add');
    } else if (action === 'edit' && id) {
      navigate(`/employees/${id}`);
    } else if (action === 'delete' && id) {
      setDeleteId(id);
      setShowDeleteModal(true);
    }
  };

  const confirmDelete = async () => {
    await deleteEmployee(deleteId);
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
        <button onClick={() => handleAction('add')} className='btn btn-success'>Add Employee</button>
        <h2 className='m-0'>Employees</h2>
        <CSVLink className='btn btn-dark' data={employees}>Export To CSV</CSVLink>
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
              <th>Employee ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Role Title</th>
              <th>Salary</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {employees.length === 0 ? (
              <tr>
                <td colSpan="7">No employees found.</td>
              </tr>
            ) : (
              employees.map((employee) => (
                <tr key={employee.id}>
                  <td>{employee.id}</td>
                  <td>{employee.first_name}</td>
                  <td>{employee.last_name}</td>
                  <td>{employee.email}</td>
                  <td>{employee.role.title}</td>
                  <td>{employee.salary}</td>
                  <td>
                    <button onClick={() => handleAction('edit', employee.id)} className='btn btn-info btn-sm me-2'>Edit</button>
                    <button onClick={() => handleAction('delete', employee.id)} className='btn btn-warning btn-sm'>Delete</button>
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
        entityType='employees'
        entityNameToDelete={employees.find(employee => employee.id === deleteId)?.first_name + ' ' + employees.find(employee => employee.id === deleteId)?.last_name}
      />
    </div>
  );
}

export default EmployeeList;
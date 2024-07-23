import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    workEmail: '',
    password: '',
    organizationName: '',
    organizationSize: '',
    industry: ''
  });

  const [students, setStudents] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStudents([...students, formData]);
    setFormData({
      firstName: '',
      lastName: '',
      workEmail: '',
      password: '',
      organizationName: '',
      organizationSize: '',
      industry: ''
    });
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              className="form-control"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              className="form-control"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="workEmail">Work Email</label>
          <input
            type="email"
            className="form-control"
            id="workEmail"
            name="workEmail"
            value={formData.workEmail}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="organizationName">Organization Name</label>
          <input
            type="text"
            className="form-control"
            id="organizationName"
            name="organizationName"
            value={formData.organizationName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="organizationSize">Organization Size</label>
          <input
            type="text"
            className="form-control"
            id="organizationSize"
            name="organizationSize"
            value={formData.organizationSize}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="industry">Industry</label>
          <input
            type="text"
            className="form-control"
            id="industry"
            name="industry"
            value={formData.industry}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Register</button>
      </form>

      <h3 className="mt-5">Registered Students</h3>
      <ul className="list-group">
        {students.map((student, index) => (
          <li key={index} className="list-group-item">
            {student.firstName} {student.lastName} - {student.workEmail} - {student.organizationName} - {student.organizationSize} - {student.industry}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RegistrationForm;

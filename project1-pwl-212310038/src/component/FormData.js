import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Modal from 'react-bootstrap/Modal';

function FormData() {
  const [birthdate, setBirthdate] = useState(null);
  const [firstName, setFirstName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [lastName, setLastName] = useState('');
  const [npm, setNpm] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [age, setAge] = useState('');

  const handleDateChange = date => {
    setBirthdate(date);
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (birthdate) {
      const today = new Date();
      const birthDate = new Date(birthdate);
      const diff = today - birthDate;
      const ageInYears = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
      setAge(`${ageInYears}th`);
    }

    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <h1 style={{ textAlign: 'center',backgroundColor: 'cyan', padding: '20px' }}>Registration Form</h1>
      <Form onSubmit={handleSubmit}>

      <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>NPM</Form.Label>
          <Form.Control
            type="text"
            pattern="[0-9]*"
            inputMode="numeric"
            maxLength="10"
            placeholder="Masukan Npm"
            required
            value={npm}
            onChange={e => setNpm(e.target.value)}
          />
        </Form.Group>
        
        <Form.Group className="mb-3" controlId="formBasicFirstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={e => setFirstName(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicMiddleName">
          <Form.Label>Middle Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Middle Name"
            value={middleName}
            onChange={e => setMiddleName(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicLastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={e => setLastName(e.target.value)}
            required
          />
        </Form.Group>



        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Birtdate</Form.Label>
          <DatePicker
            selected={birthdate}
            onChange={handleDateChange}
            dateFormat="yyyy-MM-dd"
            placeholderText="YYYY-MM-DD"
            className="form-control"
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit" >
          Submit
        </Button>
      </Form>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Submitted Information</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>NPM: {npm}</p>
          <p>Fullname: {firstName} {middleName && middleName + ' '} {lastName}</p>
          <p>Age: {age}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default FormData;
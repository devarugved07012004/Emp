
import React, { useState } from 'react';

const SubmitDetailsForm = (props) => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    typeOfExpense: '',
    amount: '',
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    props.submitForm(formData);
  };
  return (
    <>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous" />

      <div className="container">
        <div className="my-3 mx-5 mt-4">
          <h1 className="pb-2">SUBMIT DETAILS</h1>
          <form action="/submit" onSubmit={handleSubmit} method="POST" required>
            <div className="form-group">
              <label>Employee Name</label>
              <input type="text" className="form-control" id="getname" name="empname" placeholder="Full name" onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label>Employee Phone Number</label>
              <input type="tel" className="form-control" id="getphone" name="empphone" placeholder="123456789" onChange={handleChange} pattern="[0-9]{10}" required />
            </div>
            <div className="form-group">
              <label>Type of Expense</label>
              <input type="text" className="form-control" id="getexp" name="typeofexp" placeholder="Type of expense(Travel or Telecom)" onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label>Amount of Expense</label>
              <input type="number" className="form-control" id="getexp" name="amount" placeholder="Enter value" onChange={handleChange} required />
            </div>
            <button type="submit" className="btn btn-primary" >Submit</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default SubmitDetailsForm;

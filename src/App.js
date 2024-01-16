import React, { useState, useEffect } from 'react';
import Start from './Start'
import Footer from './Footer'
import Data from './Data'
import SubmitDetailsForm  from './SubmitDetailsForm'
import axios from 'axios';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom'

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:3000/data'); // Replace with your API endpoint
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  const submitForm = async (formData) => {
    try {
      await axios.post('http://localhost:3000/', formData); // Replace with your API endpoint
      fetchData();
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };


  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Start/>} />
        <Route path='/submit' element={<SubmitDetailsForm submitForm={submitForm}  />} />
        <Route path='/data' element={<Data data={data}/>} />
      </Routes>
    </Router>
    
    <Footer/>
    
    
    </>
  );
}

export default App;

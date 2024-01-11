import "./../css/reporterror.css";
import Bottomnav from "./bottomnav";
import React, { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom'; 
import axios from 'axios';

const Reporterror = ({ data, onDataUpdate }) => {
  const [newItem, setNewItem] = useState(data || { name: '', description: '' });

  const navigate = useNavigate(); 

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewItem((prevItem) => ({ ...prevItem, [name]: value }));
  };

  const handleAddItem = async () => {
    try {
      const existingData = JSON.parse(localStorage.getItem('items')) || [];
      const updatedData = [...existingData, newItem];
      localStorage.setItem('items', JSON.stringify(updatedData));

      console.log('Item added successfully');
      console.log(updatedData);
      onDataUpdate(updatedData);
      navigate("/");
    } catch (error) {
      console.error('Error adding item:', error);
    }
  };

  return (
    <div>
      <h2>Add Item</h2>
      <label>Name: <input type="text" name="name" value={newItem.name} onChange={handleInputChange} /></label>
      <label>Description: <input type="text" name="description" value={newItem.description} onChange={handleInputChange} /></label> {/* Updated property name */}
      <button onClick={handleAddItem}>Add Item</button>
    </div>
  );
};

export default Reporterror;

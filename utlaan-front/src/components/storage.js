import React, { useState, useEffect } from "react";
import './../css/storage.css';
import axios from "axios";

export default function Storage() {
    const [Data, setData] = useState([]);
    const [searchQuery, setSearchQuery] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3001/getStorageData")
          .then(response => {
            setData(response.data);
            console.log(Data);
          })
          .catch(error => console.log(error));
    }, []);

    const search_params = Object.keys(Object.assign({}, ...Data));

    function search(Data) {
        return Data.filter((Data) =>
          search_params.some((param) =>
            Data[param].toString().toLowerCase().includes(searchQuery)
          )
        );
    }

  return (
    <div className="container">
    <div className='Header'>
      <input
        className='SearchBar'
        type="search"
        placeholder="Search..."
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </div>
    <table>
      <thead>
        <tr>
          <td>equipmentID</td>
          <td>equipmentModel</td> 
          <td>equipmentType</td>
          <td>status</td>
        </tr>
      </thead>
      <tbody>
        {search(Data).map((equipment) => (
          <tr key={equipment.equipmentID}>
            <td>{equipment.equipmentID}</td>
            <td>{equipment.equipmentModel}</td>
            <td>{equipment.equipmentType}</td>
            <td>tfdfthgf</td>
          </tr>
        ))}
      </tbody>
    </table> 
  </div>
  );
}
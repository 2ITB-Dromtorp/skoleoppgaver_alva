import React, { useEffect, useState } from "react";
import './../header.css';
import axios from 'axios';

export default function List() {
  const [Data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/getCharacterData")
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
            <td>ID</td>
            <td>Character</td>
            <td>Sexuality</td>
            <td>User</td>
          </tr>
        </thead>
        <tbody>
          {search(Data).map((data) => (
            <tr key={data.ID}>
              <td>{data.ID}</td>
              <td>{data.Char}</td>
              <td>{data.Att}</td>
              <td>{data.User}</td>
            </tr>
          ))}
        </tbody>
      </table> 
    </div>
  );
}

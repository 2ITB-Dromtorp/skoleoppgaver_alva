import React, { useEffect, useState } from "react";
import './../header.css';
import axios from 'axios';

export default function List() {
  const [Data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/")
      .then(response => {
        setData(response.data);
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="container">
      <div className='Header'>
        <input
          className='SearchBar'
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      <div className="list-container">
        <ul>
          <div className='resultContainer'>
            {searchResults.map((result, index) => (
              <li key={result.id} onClick={() => handleClickItem(index)}>
                <div className='result'>
                  <img
                    src={result.thumbnail}
                    alt={result.Title}
                    style={{ width: '11vw', height: '11vw', cursor: 'pointer' }}
                  />
                  <div className='resultDescription'>
                    <p className='resultTitle'>{result.Title}</p>
                    <br />
                    <p className='resultDisplayName'>{result.DisplayName}</p>
                  </div>
                </div>
              </li>
            ))}
          </div>
        </ul>
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
                    {Data.map(data => (
                        <tr key={data.ID}>
                            <td>{data.ID}</td>
                            <td>{data.Character}</td>
                            <td>{data.Sexuality}</td>
                            <td>{data.User}</td>
                        </tr>
                    ))}
                </tbody>
            </table> 
    </div>
  );
}

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './../styles/navigation.css'

function Navigation() {
    const [searchTerm, setSearchTerm] = useState('');

    const [message, setMessage] = useState("");

    useEffect(() => {
        fetch("http://localhost:3001/message")
        .then((res) => {
            if (!res.ok) {
                throw new Error(`Network response was not ok: ${res.statusText}`);
            }
            return res.json();
        })
        .then((data) => setMessage(data.message))
        .catch((error) => console.error('Fetch error:', error));
      }, []);

return (
<div className='topnav'>
    <input
        className='menu'
        type='button'
        alt='menu'
        src=''
    />
    <input
        className='SearchBar'
        type="text"
        placeholder="Search..."
        value={searchTerm}
    />
    <input
        className='language'
        type='button'
        alt='toggle language'
    />
    <input
        className='account'
        type='button'
        alt='go to account'
    />
</div>
);
}

export default Navigation;
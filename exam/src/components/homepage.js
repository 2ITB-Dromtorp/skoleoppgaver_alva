import React, { useState, useEffect } from 'react';
import Bottomnav from './bottomnav';
import axios from 'axios';
import { IoClose } from 'react-icons/io5';
import './../css/homepage.css';

const Homepage = ({ data }) => {
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [tickets, setTickets] = useState(data.tickets || []);
  const [newTicket, setNewTicket] = useState({
    id: 0,
    name: '',
    email: '',
    tlf: '',
    dato: '',
    description: '',
    status: 'Ikke ferdig',
  });

  const togglePopup = () => {
    setPopupOpen(!isPopupOpen);
  };

  const Popup = ({ onClose }) => {
    let ErrorMes = '';

    const change = (field, value) => {
      setNewTicket((prevTicket) => ({
        ...prevTicket,
        [field]: value,
      }));
    };

    const reportIn = () => {
      const nySak = {
        ...newTicket,
        id: newTicket.id + 1,
      };

      if (nySak.name.length === 0 || nySak.email.length === 0 || nySak.tlf.length === 0 || nySak.dato.length === 0) {
        console.log('Fill in all fields');
      } else {
        setTickets([...tickets, nySak]);
        setNewTicket({
          id: newTicket.id + 1,
          name: '',
          email: '',
          tlf: '',
          dato: '',
          description: '',
          status: 'Ikke ferdig',
        });
        console.log(tickets);
        console.log(nySak);
        setPopupOpen(!isPopupOpen);
      }
    };

    return (
      <div className="popup">
        <div className="popup-content">
          <button className="closeButton" onClick={onClose}>
            <IoClose />
          </button>
          <h2>Rapporter problem</h2>
          <label>
            Sak: <br />
            <input type='text' value={newTicket.name} onChange={(e) => change('name', e.target.value)} />
          </label>
          <br />
          <label>
            Beskrivelse av sak: <br />
            <input type='text' value={newTicket.description} onChange={(e) => change('description', e.target.value)} />
          </label>
          <br />
          <label>
            Epost: <br />
            <input type='email' value={newTicket.email} onChange={(e) => change('email', e.target.value)} />
          </label>
          <br />
          <label>
            Tlf: <br />
            <input type='tlf' value={newTicket.tlf} onChange={(e) => change('tlf', e.target.value)} />
          </label>
          <br />
          <label>
            Dato: <br />
            <input type='date' value={newTicket.dato} onChange={(e) => change('dato', e.target.value)} />
          </label>
          <br />
          <p> {ErrorMes} </p>
          <button onClick={reportIn}>Raporter</button>
        </div>
      </div>
    );
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Ikke ferdig':
        return 'red';
      case 'Ferdig':
        return 'green';
      default:
        return 'gray';
    }
  };

  const toggleStatus = (ticket) => {
    const index = tickets.findIndex((t) => t.id === ticket.id);
    const updatedTicket = {
      ...ticket,
      status: ticket.status === 'Ikke ferdig' ? 'Ferdig' : 'Ikke ferdig',
    };
    const updatedTickets = [...tickets.slice(0, index), updatedTicket, ...tickets.slice(index + 1)];
    setTickets(updatedTickets);
  };

  useEffect(() => {
    console.log('Updated tickets:', tickets);
  }, [tickets]);

  return (
    <div>
      <div className="topnav">
        <div className="report-error">
          <button className="report-button" value="Rapporter Feil" onClick={togglePopup}>
            Rapporter Feil
          </button>
        </div>
      </div>
      <div className="column">
        <ul>
          <div className="tickets">
            {tickets.map((ticket) => (
              <div className="ticket" key={ticket.id}>
                <p>{ticket.dato}</p>
                <h2>{ticket.name}</h2>
                <p>{ticket.description}</p>
                <p>{ticket.email}</p>
                <p>{ticket.tlf}</p>
                <p
                  className='statusIndicator'
                  style={{ backgroundColor: getStatusColor(ticket.status) }}
                  onClick={() => toggleStatus(ticket)}
                >
                  {ticket.status}
                </p>
              </div>
            ))}
          </div>
        </ul>
      </div>
      <Bottomnav />
      {isPopupOpen && <Popup onClose={togglePopup} />}
    </div>
  );
};

export default Homepage;

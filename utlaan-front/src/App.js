import './App.css';
import React, { useState, useEffect } from "react";
import Login from './components/login';
import Storage from './components/storage';
import Requests from './components/requests';
import MakeRequests from './components/makeRequests';
import MyRequests from './components/myRequests';
import TopNav from './components/TopNav';

export default function App() {
  const [userID, setUserID] = useState(null);
  const [userType, setUserType] = useState(null);
  const [content, setContent] = useState(<Storage />);

//<Login usertype={userType} setUserType={setUserType} userID={userID} setUserID={setUserID}

  function placeContentStorage() {
    setContent(<Storage />);
  }
      
  function placeContentRequests() {
    setContent(<Requests />); 
  }

  function placeContentMakeRequests() {
    setContent(<MakeRequests />); 
  }

  function placeContentMyRequests() {
    setContent(<MyRequests />); 
  }
      
  return (
    <div>
      <TopNav onStorageClick={placeContentStorage} onRequestsClick={placeContentRequests} onMakeRequestsClick={placeContentMakeRequests} onMyRequestsClick={placeContentMyRequests} />
      {content}
    </div>
  );
};

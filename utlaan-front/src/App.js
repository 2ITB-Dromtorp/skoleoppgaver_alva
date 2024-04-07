import './App.css';
import { BrowserRouter as Router, Link, Routes } from 'react-router-dom';
import React, { useState, useEffect } from "react";
import { Route } from 'react-router-dom';
import Login from './components/login';
import Storage from './components/storage';
import Requests from './components/requests';
import MakeRequests from './components/makeRequests';
import MyRequests from './components/myRequests';
import TeacherTopNav from './components/teacherTopNav';
import StudentTopNav from './components/studentTopNav';

export default function App() {

  const [userType, setUserType] = useState('none')
  const [content, setContent] = useState(<Login usertype={userType} setUserType={setUserType} />);

  useEffect(() => {
    if (userType == 'Teacher') {
      setContent(<TeacherTopNav
        onStorageClick={placeContentStorage}
        onRequestsClick={placeContentRequests} 
      />)
    } if (userType == 'Student') {
      setContent(<StudentTopNav
        onMakeRequestClick={placeContentMakeRequests}
        onMyRequestsClick={placeContentMyRequests}
      />)
    } else {
      setContent(null)
    }
  }, [userType])

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

  function placeContentTopNav() {
    if (userType == 'Teacher') {
      setContent(<TeacherTopNav
        onStorageClick={placeContentStorage}
        onRequestsClick={placeContentRequests} 
      />)
    } if (userType == 'Student') {
      setContent(<StudentTopNav
        onMakeRequestClick={placeContentMakeRequests}
        onMyRequestsClick={placeContentMyRequests}
      />)
    } else {
      setContent(null)
    }
  }
      
  return (
    <div>
      {placeContentTopNav()}
        {content}
    </div>
  );
};
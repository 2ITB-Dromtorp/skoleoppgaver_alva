import './App.css';
import React, { useState, useEffect } from "react";
import Login from './components/login';
import Storage from './components/storage';
import Requests from './components/requests';
import MakeRequests from './components/makeRequests';
import MyRequests from './components/myRequests';
import TeacherTopNav from './components/teacherTopNav';
import StudentTopNav from './components/studentTopNav';

export default function App() {
  const [userID, setUserID] = useState(null);
  const [userType, setUserType] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [content, setContent] = useState(<Login usertype={userType} setUserType={setUserType} userID={userID} setUserID={setUserID} />);

  useEffect(() => {
    if (userID && userType) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [userID, userType]);

  useEffect(() => {
    if (isLoggedIn) {
      if (userType === 'Teacher') {
        setContent(
          <>
            <TeacherTopNav
              onStorageClick={placeContentStorage}
              onRequestsClick={placeContentRequests} 
            />
            {content}
          </>
        );
      } else if (userType === 'Student') {
        setContent(
          <>
            <StudentTopNav
              onMakeRequestClick={placeContentMakeRequests}
              onMyRequestsClick={placeContentMyRequests}
            />
            {content}
          </>
        );
      }
    }
  }, [isLoggedIn, userType]);

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
      {content}
    </div>
  );
};

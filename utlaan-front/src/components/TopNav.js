import React, { useState, useEffect } from "react";
import './../css/storage.css';
import axios from "axios";
import './../css/header.css';
import Dromtorplogo from './../data/e8ea2.dromtorp_s_h.svg';

export default function TopNav(onMakeRequestClick, onMyRequestsClick, onRequestsClick, onStorageClick) {
    <div className="TopNav-Container">
        <img src={Dromtorplogo}>
        </img>
        <div className="TopNav-Button" onClick={onMakeRequestClick}>
            <p>Request Equipment</p>
        </div>
        <div className="TopNav-Button" onClick={onMyRequestsClick}>
            <p>My Requests</p>
        </div>
    </div>
}
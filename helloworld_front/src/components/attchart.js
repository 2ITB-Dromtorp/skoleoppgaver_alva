import { PieChart } from 'react-minimal-pie-chart';
import React, { useEffect, useState } from "react";
import axios from 'axios';

export default function Attchart() {
    const [Data, setData] = useState([]);

        useEffect(() => {
          axios.get("http://localhost:3001/getCharacterData")
            .then(response => {
              setData(response.data);
              console.log(Data);
      
            })
            .catch(error => console.log(error));
        }, []);
      
        return (
          <div className="container">
            
          </div>
        );
      
}
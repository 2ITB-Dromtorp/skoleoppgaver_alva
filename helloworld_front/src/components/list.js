import { useEffect, useState } from "react";
import './header.css';
import axios from 'axios';

export default function List() {
    const [Data, setData] = useState([]);

    useEffect(() => {

        axios
        .get("http://localhost:3001/")
        .then(response => {
            setData(response.data);
            console.log(Data)
        })
        .catch(error => console.log(error));

}, []);


    return (
        <div className="container">
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
    )
}
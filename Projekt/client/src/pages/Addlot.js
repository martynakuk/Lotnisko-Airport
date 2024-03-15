import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Addlot.css';

const Addlot = () => {
    const [lot,setLot] = useState({
        Skad:"",
        Dokad:"",
        DataRozp:"", 
        DataZak:"",
    });

    const navigate = useNavigate();
    const handleChange = (e) => {
        setLot((prev) => ({...prev, [e.target.name]: e.target.value}));
    }
    const handleClick = async e =>{
        e.preventDefault()
        try {
            await axios.post("http://localhost:8800/lot",lot)
            navigate("/")
        } catch(err){
            console.log(err)
        }
    }

    console.log(lot);
    return (
        <div className='form'> 
        <h1>Dodaj nowy lot</h1>
        <input type="text" placeholder='Skad' onChange={handleChange} name="Skad"/>
        <input type="text" placeholder='Dokad'  onChange={handleChange} name = "Dokad"/>
        <input type="date" placeholder='DataRozp' onChange={handleChange} name = "DataRozp"/>
        <input type="date" placeholder='DataZak' onChange={handleChange} name = "DataZak"/>
        <button onClick={handleClick}>Dodaj lot</button>
         </div>
    );
};

export default Addlot
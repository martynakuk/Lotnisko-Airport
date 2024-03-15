import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
const Updatelot = () => {
    const [lot,setLot] = useState({
        Skad:"",
        Dokad:"",
        DataRozp:"", 
        DataZak:"",
    });

    const navigate = useNavigate();
    const location = useLocation()

    const LotId = location.pathname.split("/")[2];

    const handleChange = (e) => {
        setLot((prev) => ({...prev, [e.target.name]: e.target.value}));
    }
    const handleClick = async e =>{
        e.preventDefault()
        try {
            await axios.put("http://localhost:8800/lot/"+ LotId,lot)
            navigate("/")
        } catch(err){
            console.log(err)
        }
    }

    console.log(lot);
    return (
        <div className='form'> 
        <h1>Zmien lot nr. {lot.LotId} </h1>
        <input type="text" placeholder='Skad' onChange={handleChange} name="Skad"/>
        <input type="text" placeholder='Dokad'  onChange={handleChange} name = "Dokad"/>
        <input type="date" placeholder='DataRozp' onChange={handleChange} name = "DataRozp"/>
        <input type="date" placeholder='DataZak' onChange={handleChange} name = "DataZak"/>
        <button onClick={handleClick}>Zmien lot</button>
         </div>
    );
};

export default Updatelot
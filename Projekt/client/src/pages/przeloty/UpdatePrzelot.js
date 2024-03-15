import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
const Updateprzelot = () => {
    const [przeloty,setPrzelot] = useState({
        Status: "",
        LiniaLotnicza: ""
    });

    const navigate = useNavigate();
    const location = useLocation()

    const IdSamolot = location.pathname.split("/")[2];
    const IdLot = location.pathname.split("/")[3];

    const handleChange = (e) => {
        setPrzelot((prev) => ({...prev, [e.target.name]: e.target.value}));
    }
    const handleClick = async e =>{
        e.preventDefault()
        try {
            axios.put(`http://localhost:8800/przelot/${IdSamolot}/${IdLot}`, przeloty);
            navigate("/przelot")
            window.location.reload()
        } catch(err){
            console.log(err)
        }
    }

    console.log(przeloty);
    return (
        <div className='form'> 
        <h1>Zmien przelot</h1>
        <input type="text" placeholder='Status' onChange={handleChange} name="Status"/>
        <input type="text" placeholder='Linia Lotnicza' onChange={handleChange} name="LiniaLotnicza"/>
        <button onClick={handleClick}>Zmien przelot</button>
         </div>
    );
};

export default Updateprzelot
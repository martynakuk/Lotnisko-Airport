import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
const Updatesamolot = () => {
    const [samolot,setSamolot] = useState({
        DataProdukcji: "",
        IloscMiejsc: "",
        Model: "",
    });

    const navigate = useNavigate();
    const location = useLocation()

    const IdSamolot = location.pathname.split("/")[2];

    const handleChange = (e) => {
        setSamolot((prev) => ({...prev, [e.target.name]: e.target.value}));
    }
    const handleClick = async e =>{
        e.preventDefault()
        try {
            axios.put(`http://localhost:8800/samolot/${IdSamolot}`, samolot);
            navigate("/samolot")
        } catch(err){
            console.log(err)
        }
    }

    console.log(samolot);
    return (
        <div className='form'> 
        <h1>Zmien samolot</h1>
        <input type="date" placeholder='DataProdukcji' onChange={handleChange} name="DataProdukcji"/>
        <input type="text" placeholder='IloscMiejsc'  onChange={handleChange} name = "IloscMiejsc"/>
        <input type="text" placeholder='Model' onChange={handleChange} name = "Model"/>
        <button onClick={handleClick}>Zmien samolot</button>
         </div>
    );
};

export default Updatesamolot
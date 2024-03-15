import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddSamolot = () => {
    const [addsamolot,setSamolot] = useState({
        DataProdukcji: "",
        IloscMiejsc: "",
        Model: "",
    });

    const navigate = useNavigate();
    const handleChange = (e) => {
        setSamolot((prev) => ({...prev, [e.target.name]: e.target.value}));
    }
    const handleClick = async e =>{
        e.preventDefault()
        try {
            await axios.post("http://localhost:8800/samolot",addsamolot)
            navigate("/samolot")
        } catch(err){
            console.log(err)
        }
    }

    console.log(addsamolot);
    return (
        <div className='form'> 
        <h1>Dodaj nowy samolot</h1>
        <input type="date" placeholder='DataProdukcji' onChange={handleChange} name="DataProdukcji"/>
        <input type="text" placeholder='IloscMiejsc'  onChange={handleChange} name = "IloscMiejsc"/>
        <input type="text" placeholder='Model' onChange={handleChange} name = "Model"/>
        <button onClick={handleClick}>Dodaj samolot</button>
         </div>
    );
};

export default AddSamolot
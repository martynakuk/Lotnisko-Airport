import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddPrzelot = () => {
    const [przelot, setPrzelot] = useState({
        IdLot: "",
        IdSamolot: "",
        Status: "",
        LiniaLotnicza: ""
    });

    const [blad, setBlad] = useState("");

    const navigate = useNavigate();
    const handleChange = (e) => {
        setPrzelot((prev) => ({...prev, [e.target.name]: e.target.value}));
        setBlad("");
    }
    const handleClick = async e =>{
        e.preventDefault()

            try {
    
                await axios.post("http://localhost:8800/przelot", przelot);
                navigate("/przelot")
               
            } catch (err) {
                console.error(err);
                setBlad("Błąd podczas dodawania przelotu.");
            }
        };    

    
    

    console.log(przelot);
    return (
        <div className='form'> 
            <h1>Dodaj nowy przelot</h1>
            <input type="text" placeholder='ID Lot' onChange={handleChange} name="IdLot"/>
            <input type="text" placeholder='ID Samolot' onChange={handleChange} name="IdSamolot"/>
            <input type="text" placeholder='Status' onChange={handleChange} name="Status"/>
            <input type="text" placeholder='Linia Lotnicza' onChange={handleChange} name="LiniaLotnicza"/>
            {blad && <p style={{ color: 'red' }}>{blad}</p>}
            <button onClick={handleClick}>Dodaj przelot</button>
        </div>
    );
    

    }
export default AddPrzelot
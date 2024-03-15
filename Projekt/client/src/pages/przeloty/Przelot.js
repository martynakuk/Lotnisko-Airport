import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import './Przelot.css'

const Przelot = () => {
    const [przeloty, setPrzelot] = useState([])

    useEffect (()=>{
        const fetchAllLots = async()=>{
            try {
                const res = await axios.get("http://localhost:8800/przelot")
                setPrzelot(res.data);
                console.log(res)
                
            }catch (err){
                console.log(err)
            }
        }
        fetchAllLots()
    },[])

    const handleDelete = async (idSamolot, idLot) => {
        try {
            const response = await axios.delete(`http://localhost:8800/przelot/${idSamolot}/${idLot}`);
            console.log(response); 
            window.location.reload()
        } catch (err) {
            console.error(err);
        }
    };
    
    return (
        <div>
            <h1>Przeloty</h1>
            <div className='przeloty'>
                {przeloty.map(przelot => (
                    <div className='przelot'>
                        <h2>Skąd: {przelot.Skad}</h2>
                        <h2>Dokąd: {przelot.Dokad}</h2>
                        <h2>Data Rozpoczęcia: {przelot.DataRozp}</h2>
                        <h2>Data Zakończenia: {przelot.DataZak}</h2>
                        <h2>Model Samolotu: {przelot.Model}</h2>
                        <h2>Status: {przelot.Status}</h2>
                        <h2>Linia Lotnicza: {przelot.LiniaLotnicza}</h2>
                        <button className='update'><Link to={`/przelot/${przelot.IdSamolot}/${przelot.IdLot}`}>Zmień </Link></button>
                        <button className='delete' onClick={() => handleDelete(przelot.IdSamolot, przelot.IdLot)}>Usuń</button>

                    </div>
                ))}
            </div>
            <button><Link to="/addprzelot">Dodaj nowy przelot</Link></button>
        </div>
    );
    
       
    
}

export default Przelot
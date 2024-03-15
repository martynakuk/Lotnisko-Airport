import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import './Lot.css';


const Lot = () => {
    const [loty, setLot] = useState([])

    useEffect (()=>{
        const fetchAllLots = async()=>{
            try {
                const res = await axios.get("http://localhost:8800/lot")
                setLot(res.data);
                console.log(res)
                
            }catch (err){
                console.log(err)
            }
        }
        fetchAllLots()
    },[])

    const handleDelete = async (id )=> {
        try {
            await axios.delete("http://localhost:8800/lot/"+id)
            window.location.reload()
        } catch(err){
            console.log(err)
        }
    }
    

    return <div>
            <h1> Loty </h1>
            <div className='naglowek'>
                <h3><Link to = "/samolot"> Samoloty </Link></h3>
                <h3><Link to = "/przelot"> Przeloty</Link></h3>
            </div>
            <div className='loty'>
                {loty.map(lot=>(
                    <div className='lot' key={lot.IdLot}>
                        <h2>Skąd: {lot.Skad}</h2>
                        <h2>Dokąd: {lot.Dokad}</h2>
                        <h2>Godzina wylotu: {lot.DataRozp}</h2>
                        <h2>Gordzina przylotu: {lot.DataZak}</h2>
                        <button className='update'><Link to={`/updatelot/${lot.IdLot}`}>Zmien </Link></button>
                        <button className='delete' onClick={()=>handleDelete(lot.IdLot)} >Usun</button>
                    </div>

                ))}
            </div>
            <button><Link to ="/addlot">Dodaj nowy lot</Link></button>
    </div>;
       
    
}

export default Lot
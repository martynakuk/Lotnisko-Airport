import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import './Samolot.css'

const Samolot = () => {
    const [samoloty, setSamolot] = useState([])

    useEffect (()=>{
        const fetchAllSamolots = async()=>{
            try {
                const res = await axios.get("http://localhost:8800/samolot")
                setSamolot(res.data);
                console.log(res)
                
            }catch (err){
                console.log(err)
            }
        }
        fetchAllSamolots()
    },[])

    const handleDelete = async (id )=> {
        try {
            await axios.delete("http://localhost:8800/samolot/"+id)
            window.location.reload()
        } catch(err){
            console.log(err)
        }
    }
    

    return <div>
            <h1> Samoloty </h1>
            <div className='samoloty'>
                {samoloty.map(samolot=>(
                    <div className='samolot' key={samolot.IdSamolot}>
                        <h2>Nr. Samolotu {samolot.IdSamolot}</h2>
                        <h2>{samolot.DataProdukcji}</h2>
                        <h2>{samolot.IloscMiejsc}</h2>
                        <h2>{samolot.Model}</h2>
                        <button className='update'><Link to={`/samolot/${samolot.IdSamolot}`}>Zmien </Link></button>
                        <button className='delete' onClick={()=>handleDelete(samolot.IdSamolot)} >Usun</button>
                    </div>

                ))}
            </div>
            <button><Link to ="/samolot/addsamolot">Dodaj nowy samolot</Link></button>
    </div>;
       
    
}

export default Samolot
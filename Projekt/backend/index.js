import express from "express"
import mysql from "mysql"
import cors from "cors"

const app = express();

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"TrudneHaslo1!",
    database:"lotnisko"
    
});

app.use(express.json());
app.use(cors())

app.get("/", (req,res)=>{
    res.json("hello this is the backend")
});

app.get("/lot", (req,res)=>{
    const q ="SELECT * from lot"
    db.query(q, (err,data)=>{
        if (err) return res.json(err)
        return res.json(data)
    });
});

app.get("/samolot", (req,res)=>{
    const q ="SELECT * from samolot"
    db.query(q, (err,data)=>{
        if (err) return res.json(err)
        return res.json(data)
    });
});

app.get("/przelot", (req,res)=>{
    const q = "SELECT przelot.IdSamolot, przelot.IdLot, lot.Skad, lot.Dokad, lot.DataRozp, lot.DataZak, samolot.Model, samolot.IloscMiejsc, przelot.Status, przelot.LiniaLotnicza FROM przelot JOIN lot ON przelot.idlot = lot.idlot JOIN samolot ON przelot.idsamolot = samolot.idsamolot;";
    
    db.query(q, (err,data)=>{
        if (err) return res.json(err)
        return res.json(data)
    });
});

app.post("/lot",(req,res)=>{
    const q = "INSERT INTO `lotnisko`.`lot` (`DataRozp`, `DataZak`, `Skad`, `Dokad`) VALUES (?)";
    const values = [
        req.body.DataRozp,
        req.body.DataZak,
        req.body.Skad,
        req.body.Dokad,
    ];

    db.query(q,[values], (err,data)=>{
        if (err) return res.json(err)
        return res.json("lot has been created") 
    });
});

app.post("/samolot",(req,res)=>{
    const q = "INSERT INTO `lotnisko`.`samolot` (`DataProdukcji`, `IloscMiejsc`, `Model`) VALUES (?)";
    const values = [
        req.body.DataProdukcji,
        req.body.IloscMiejsc,
        req.body.Model,
    ];

    db.query(q,[values], (err,data)=>{
        if (err) return res.json(err)
        return res.json("Samolot has been created") 
    });
});

app.post("/przelot", (req, res) => {
    const q = "INSERT INTO `lotnisko`.`przelot` (`IdSamolot`, `IdLot`, `Status`, `LiniaLotnicza`) VALUES (?)";
    const values = [
        req.body.IdSamolot,
        req.body.IdLot,
        req.body.Status,
        req.body.LiniaLotnicza
    ];

    db.query(q, [values], (err, data) => {
        if (err) return res.json(err);
        return res.json("Przelot został dodany");
    });
});


app.put("/lot/:id", (req,res) => {
    const LotId = req.params.id;
    const q = "UPDATE lot SET `Dokad` = ?, `Skad` = ?, `DataRozp` = ?, `DataZak` = ? WHERE IdLot = ?";
    const values = [
        req.body.DataRozp,
        req.body.DataZak,
        req.body.Skad,
        req.body.Dokad,
    ]
    db.query(q,[...values, LotId], (err,data)=>{
        if (err) return res.json(err)
        return res.json("lot has been updated") 
    })
})

app.put("/samolot/:id", (req,res) => {
    const SamolotId = req.params.id;
    const q = "UPDATE samolot SET `DataProdukcji` = ?, `IloscMiejsc` = ?, `Model` = ? WHERE IdSamolot = ?";
    const values = [
        req.body.DataProdukcji,
        req.body.IloscMiejsc,
        req.body.Model,
    ]
    db.query(q,[...values, SamolotId], (err,data)=>{
        if (err) return res.json(err)
        return res.json("Samolot has been updated") 
    })
})

app.put("/przelot/:idSamolot/:idLot", (req,res) => {
    const SamolotId = req.params.idSamolot;
    const LotId = req.params.idLot;
    const q = "UPDATE przelot SET `Status` = ?, `LiniaLotnicza` = ? WHERE IdSamolot = ? AND IdLot = ?";
    const values = [
        req.body.Status,
        req.body.LiniaLotnicza
    ]
    db.query(q,[...values, SamolotId, LotId], (err,data)=>{
        if (err) return res.json(err)
        return res.json("Przelot has been updated") 
    })
})

app.delete("/lot/:id", (req,res) => {
    const LotId = req.params.id;
    const q = "DELETE FROM lot WHERE IdLot = ?"
    db.query(q,[LotId], (err,data)=>{
        if (err) return res.json(err)
        return res.json("lot has been deleted") 
    })
})

app.delete("/samolot/:id", (req,res) => {
    const SamolotId = req.params.id;
    const q = "DELETE FROM samolot WHERE IdSamolot = ?"
    db.query(q,[SamolotId], (err,data)=>{
        if (err) return res.json(err)
        return res.json("Samolot has been deleted") 
    })
})

app.delete("/przelot/:idSamolot/:idLot", (req,res) => {
    const SamolotId = req.params.idSamolot;
    const LotId = req.params.idLot;
    const q = "DELETE FROM przelot WHERE IdSamolot = ? and IdLot = ?"
    db.query(q,[SamolotId, LotId], (err,data)=>{
        if (err) return res.json(err)
        return res.json("Przelot has been deleted") 
    })
})

app.listen(8800, ()=>{
    console.log("Connected to backend")
});
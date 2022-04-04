const express = require ("express");
const cors = require ("cors");
const app = express();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended:true}));

app.post("/api/login", (rep,res)=>{
    console.log(req.body);
    res.status(200).json({mje:"el back esta funcionando"})
});

app.Listen (4000, ()=>console.log("Servidor Funciondo en 4000"));



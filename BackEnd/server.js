require("dotenv").config();
const express=require('express');
const sql=require('mssql');
const cors=require('cors');

const app=express();
const PORT = process.env.PORT || 1433;
app.use(cors());


const config = {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    server: process.env.DB_SERVER,
    database: process.env.DB_NAME,
    options:{
        trustServerCertificate:true,
        trustedConnection:false,
        enableArithAbort:true,
        instancename:"SQLEXPRESS",
    },
    port:1433
}

app.get('/words', async(req,res)=>{
    try{
    const pool=await sql.connect(config);
    const data=pool.request().query('SELECT * FROM dbo.fiveWords WHERE ID < 5;')
    data.then(res1=>{
        return res.json(res1);
    })
    }
    catch(err){
        console.log(err)
    }
})

app.listen(5000,()=>{
    console.log("The server has started.")
})
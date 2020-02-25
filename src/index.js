import 'dotenv/config';
import express from 'express';
import bodyParser from 'body-parser';
import core from "./core/core";

// globale declaration and initialisation
const PORT = process.env.PORT || 80;
express()
.use(bodyParser.json())

.get("/list",core.mainRoute)
.get("/list/:args",core.mainRoute)

.get("/launch/:proc",core.procLauncher)
.get("/launch/:proc/:args",core.procLauncher)



.listen(PORT,()=>{
    console.clear();
    console.log(`listen on port ${PORT}`);
});
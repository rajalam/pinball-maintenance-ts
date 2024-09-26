import express, { Express, Request, Response } from "express";

//server start in console: "npx ts-node server.ts"
//check also https://blog.logrocket.com/how-to-set-up-node-typescript-express/

const bodyparser = require('body-parser')
const fs = require('fs');
//const fs = require('fs').promises;
const https = require('https')
// const express = require('express')  //Jos ei toimi, niin "npm install express"

const dotenv = require('dotenv');
dotenv.config();

const cors = require('cors')
const { Pool } = require('pg');
const { restart } = require('nodemon');
const app:Express = express();
const port = process.env.PORT || 4000; //8080

const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt');
const e = require('cors');
const { allowedNodeEnvironmentFlags } = require('process');
const saltRounds = 10;

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'device_maintenance',
  password: 'admin',
  port: 5432,
})

app.use(cors())  //jos ei toimi, niin "npm install cors"
app.use(express.json());  //Ja jos haluaa bodyn suoraan req argumentista
app.use(bodyparser.urlencoded({ extended: false }))
app.use(bodyparser.json())

// Create a NodeJS HTTPS listener on port 4000 that points to the Express app
// Use a callback function to tell when the server is created.
https
  .createServer(
    // Provide the private and public key to the server by reading each
    // file's content with the readFileSync() method.
    {
      key: fs.readFileSync("key.pem"),
      cert: fs.readFileSync("cert.pem"),
    },
    app
  )
  .listen(port, () => {
    console.log('server is running at https://localhost:'+ port);
  });


//TEST
app.get('/', async (req:Request, res:Response) => {
  //console.log(req.decoded)
  res.send("Nyt ollaan kirjautumista vaativassa palvelussa")
})


//TODO TEE UUDESTAAN seuraava, jos/kun tentti poisto toteutus vaan passivoinnilla
//device fetch
//input: -
//result: JSON [id, nimi]
//HTTP response codes
//200 fetch OK
//500 server error
//TODO mahd. lisäys, jolla haetaan vain tiettyyn käyttäjään liittyvät laitteet, koska ei ehkä mielekästä
//hakea kaikkia kannassa olevia laitteita roolista riippumatta?
app.get('/devices', async (req:Request, res:Response) => {

  //const id = Number(req.params.id)  
  //const luokkaId = Number(req.params.kouluId)  

  console.log("/devices GET")
  //console.log ("tenttiNimi: ",req.body.nimi)
  try {
    const result = await pool.query("select * from device order by id", [])
    //res.body = result
    res.setHeader("Content-type", "application/json")
    //res.body = result.body
    res.status(200).send(result.rows)
    //res.send('Tais tentti GET onnistua')    
  }
  catch (e) {
    res.status(500).send(e)
  }
})


//vaaditaan token vahvistus kaikille metodeille tästä rivistä eteenpäin
//app.use(vahvistaToken)


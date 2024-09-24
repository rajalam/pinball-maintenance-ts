const bodyparser = require('body-parser')
const fs = require('fs');
//const fs = require('fs').promises;
const https = require('https')
const express = require('express')  //Jos ei toimi, niin "npm install express"

const cors = require('cors')
const { Pool } = require('pg');
const { restart } = require('nodemon');
const app = express()
const port = 8080

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
  .listen(4000, () => {
    console.log('server is running at port 4000')
  });
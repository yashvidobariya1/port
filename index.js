const http = require('http');
const express = require('express');
require('./database')
const userRouter = require('./router')
require("dotenv").config();
const port = process.env.PORT || 5001;
const cors = require('cors');
const app = express();
app.use(cors());
app.get('/', (req, res) => {
  res.send('HELLO WORLD!!!')
})
app.use(express.json());
app.use(userRouter)
const server = http.createServer(app)
server.listen(5000, () => {
  console.log(`Server Started at ${port}`)
})
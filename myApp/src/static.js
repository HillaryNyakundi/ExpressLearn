const express = require('express') //Import the express function
const path = require('path');


const app = express() //Use all the methods that are defined in thr express function in the app


//Create the server, the request response cycle
//http methods :get post put delete

// app.get(route, callback(req,res)) request for the route(location) where you wanna fetch your data from, the callback function gets the request

const staticPath = path.join(__dirname, '../public');
console.log(staticPath)

app.use(express.static(staticPath))

app.get('/' , (req, res)=>{
       res.send('Thia is our login page')
}) //login page

// Create a port to receive and transmit data, were creating the server on that port



app.get('/profilePage', (req, res)=>{
       res.send('This is our profile page')
})


app.get('/feedPage', (req, res)=>{
       res.send('This is our feed page')
})


app.listen(8000, ()=>{
       console.log('Port running on 8000')
})



const express = require('express') //Import the express function


const app = express() //Use all the methods that are defined in thr express function in the app

let name = 'Hillary'
let Password = 12345

//Create the server, the request response cycle
//http methods :get post put delete

// app.get(route, callback(req,res)) request for the route(location) where you wanna fetch your data from, the callback function gets the request

app.get('/' , (req, res)=>{
       res.write(`<h2>This is the login page<h2>`)
       res.write(`<h2>This is the login page<h2>`)
       res.send()
}) //login page

// Create a port to receive and transmit data, were creating the server on that port

app.use(loginMiddleware)

app.get('/profilePage', (req, res)=>{
       res.json([
              {
              firstname : 'Hillary',
              Secondname : 'Nyakundi'
       },
       {
              firstname : 'Hillary',
              Secondname : 'Marangaa'
       }
       ])
})


app.get('/feedPage', (req, res)=>{
       res.send('This is our feed page')
})


app.listen(8000, ()=>{
       console.log('Port running on 8000')
})


function loginMiddleware(req, res, next){
       if(name == 'Hillary' && Password == 12345){
              next()
       }else{
              res.send("Cnnot aunthenticate the user")
       }
}

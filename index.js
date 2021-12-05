    const express = require('express')
    const app = express ()

    app.get('/prueba',(req,res) => {
        res.send("Pruebas superadas :D")
    })


    app.listen(3000,()=> {
        console.log("Conectado puerto 3000")
    } )

    app.post('/maicol',(req,res) => {
        res.json({
        "cedula" : "455555",
        "nombre" : "maicol"
        })
    })

    app.post('/michel',(req,res) => {
        res.json({
        "cedula" : "1554273286286",
        "nombre" : "michel"
        })
    })



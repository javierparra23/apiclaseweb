    const express = require('express')
    const app = express ()

    app.get('/prueba',(req,res) => {
        res.send("Pruebas superadas :D")
    })


    app.listen(3000,()=> {
        console.log("Conectado puerto 3000")
    } )



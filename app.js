//Requieres
var express = require ('express');

// INICIALIZAR VARIABLES

var app =express();

//RUTAS
app.get('/', (req, res, next) =>{

res.status(200).json({
    ok:true,
    mensaje:'petición Realizada correctamente'
})
});


// ESCUCHAR PETICIONES

app.listen(3000,() => {
    console.log('Express Server puerto 3000:,\x1b[32m%s\x1b[0','Online');
})
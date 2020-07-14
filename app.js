const  dotenv = require  ('dotenv');
dotenv.config();
var express = require ('express');
const { Pool } = require('pg') 
const pool = new Pool()
//Requieres



// INICIALIZAR VARIABLES

var app =express();
//CONEXIONA A LA BASE DE DATOS
pool.connect((err, client, release) => {
    if (err) {
      return console.error('Error acquiring client', err.stack)
    }
    client.query('SELECT NOW()', (err, result) => {
      release()
      if (err) {
        return console.error('Error executing query', err.stack)
      }
      console.log(result.rows)
    })
  })


//RUTAS
app.get('/', (req, res, next) =>{

res.status(200).json({
    ok:true,
    mensaje:'petición Realizada correctamente'
})
}); 


// ESCUCHAR PETICIONES

app.listen(3000,() => {
    console.log('Server puerto 3000:\x1b[32m%s\x1b[0','Online');
})
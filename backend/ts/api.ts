let express = require('express');
let cors=require('cors');
let bodyParser = require('body-parser');
let app=express();
let urlencodedParser = bodyParser.urlencoded({ extended: false });

let fs = require('fs');


const hostname = '127.0.0.1';
const port = 3023;

//metodo para obtener lista
app.get('/', (req:any,res:any)=>{

  fs.readFile('notas.json', (err:any, json:any) => {
    let obj = JSON.parse(json);
    res.json(obj);
});

});

//metodo para añadir nota a lista
app.get('/agregar', (req:any, res:any,string:any)=>{

  fs.writeFile('notas.json', JSON.stringify(req), function (err:any) {
    console.log(JSON.stringify(string));
  });

});

//metodo para editar nota a lista 
app.post('/editar',(req:any, res:any)=>{

});


app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  }); 

   
const express = require('express');
const app = express();
const port = 3000;

/*Motor de Plantillas cn el Framework EJS para Express */
app.set('view engine','ejs');
app.set('views',__dirname + '/views');


app.use(express.static(__dirname + "/public"));

app.get('/',(req,res) => {
    res.render("index",{titulo : "Mi título dinámico desde página Index v2..."})
});

app.get('/servicios', (req,res) => {
    res.render("servicios",{tituloServicios : "Esta es un mensaje dinámico de la página Servicios v2..."})
});

app.use((req,res,next) =>{
    res.status(404).render("404",{
        titulo: "Página 404",
        descripcion: "Ese es el título de la página web"
    })
});

app.listen(port,() => {
    console.log('El server está a su servicio escuchando en el puerto',port);
});
const express = require("express");
const app = express();
const port = 3001;
const path = require("path");

app.listen(port, () =>{
    console.log("Servidor funcionando en puerto 3001");
});
app.get("/", (req,res) => {
    res.sendFile(path.join(__dirname, "views", "home.html"))
});

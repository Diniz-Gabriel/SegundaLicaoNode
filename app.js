const express = require("express")
const app = express()

app.get("/", function(req, res){
  res.send("Página principal")
})

var tabuada = require("./moduleTabuada")

app.get("/tabuada", function(req, res){
  res.send(tabuada(3))

})

app.get("/produtos", function(req, res){
  res.send("Página de produtos")
})

app.get("/empresa", function(req, res){
  res.send("Página da empresa")
})

app.get("/contrato", function(req, res){
  res.send("Página de contrato")
})


app.listen(8081, function(){
  console.log("Servidor web rodando !")  
})

// comando para abaixar o pacote express para rodar o servidor npm install express --save 
import express from 'express'

import { findUf }  from './controllers/UfController'
import { rotaIBGE, rotaInexistente, rotaSigla } from "./routes"

const app = express()
const porta = process.env.PORT // Porta padrão ou definida


app.get('/uf/sigla', rotaInexistente)

app.get('/uf/sigla/:uf', rotaSigla)

app.get('/uf/ibge', rotaInexistente)

app.get('/uf/ibge/:codigo', rotaIBGE)

app.listen(porta || 3001, () => {
    console.log(`Servidor rodando na porta ${porta}`)
})
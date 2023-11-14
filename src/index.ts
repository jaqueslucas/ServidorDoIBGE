import 'dotenv/config'
import express from 'express'

import { rotaIBGE, rotaInexistente, rotaSigla } from "./routes"

const app = express()
const porta = process.env.PORT

app.get('/uf/sigla', rotaInexistente)

app.get('/uf/sigla/:uf', rotaSigla)

app.get('/uf/ibge', rotaInexistente)

app.get('/uf/ibge/:codigo', rotaIBGE)

app.listen(porta || 3000, () => {
    console.log(`Servidor rodando na porta http://localhost:${porta}`)
})
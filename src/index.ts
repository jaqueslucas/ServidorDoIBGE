import express from 'express'
import { findUf }  from './controllers/UfController'

const app = express();
const porta = process.env.PORT; // Porta padrão ou definida


app.get('/uf/sigla', (req, res) => {
    return res.json({ error: "Requisição desconhecida" })
});

app.get('/uf/sigla/:uf', (req, res) => {
    const params = req.params

    // Percorrer o array `ufs` e encontrar o objeto que possui a sigla igual a sigla passada pelo usuário
    const uf = findUf((uf) => {
        return uf.uf === params.uf.toUpperCase()
    })

    if (!uf) {
        return res.json({ error: `Sigla ${params.uf} não encontrada` })
    }

    return res.json(uf);
});

app.get('/uf/ibge', (req, res) => {
    return res.json({ error: "Requisição desconhecida" })
});

app.get('/uf/ibge/:codigo', (req, res) => {
    const params = req.params

    // Percorrer o array `ufs` e encontrar o objeto que possui a sigla igual a sigla passada pelo usuário
    const uf = findUf((uf) => {
        return uf.ibge === parseInt(params.codigo)
    })

    if (!uf) {
        return res.json({ error: `Código ${params.codigo} não encontrada` })
    }

    return res.json(uf);
});

app.listen(porta || 3001, () => {
    console.log(`Servidor rodando na porta ${porta}`);
});
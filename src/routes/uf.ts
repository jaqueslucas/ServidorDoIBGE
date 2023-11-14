import type { RequestHandler } from "express"

import { findUf } from "../controllers/UfController"

export const rotaInexistente: RequestHandler = (req, res) => {
    return res.json({ error: "Requisição desconhecida" })
}

export const rotaIBGE: RequestHandler = (req, res) => {
    const params = req.params

    // Percorrer o array `ufs` e encontrar o objeto que possui a sigla igual a sigla passada pelo usuário
    const uf = findUf((uf) => {
        return uf.ibge === parseInt(params.codigo)
    })

    if (!uf) {
        return res.json({ error: `Código ${params.codigo} não encontrada` })
    }

    return res.json(uf)
}

export const rotaSigla: RequestHandler = (req, res) => {
    const params = req.params

    // Percorrer o array `ufs` e encontrar o objeto que possui a sigla igual a sigla passada pelo usuário
    const uf = findUf((uf) => {
        return uf.uf === params.uf.toUpperCase()
    })

    if (!uf) {
        return res.json({ error: `Sigla ${params.uf} não encontrada` })
    }

    return res.json(uf)
}
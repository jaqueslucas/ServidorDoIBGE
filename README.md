
# Servidor de Dados dos Estados do Brasil

Este é um projeto de servidor que retorna os dados dos estados do Brasil com base no código do IBGE do estado ou na sigla do estado.

## Descrição da Atividade

Esta atividade consiste em criar um servidor que responda às requisições HTTP para fornecer os dados dos estados do país. A atividade soma 1 ponto na nota da Prova 2.

### Data de Entrega

A entrega é individual e presencial, agendada para a aula de 14/nov.

### Objetivos

- Criar uma aplicação servidora.
- Definir rotas HTTP.
- Criar classe e interface.

### Requisitos Funcionais

1. O servidor deve retornar os dados do estado consultado usando a sigla do estado como parâmetro na URL.
2. O servidor deve retornar os dados do estado consultado usando o código do IBGE como parâmetro na URL.

### Requisitos Não Funcionais

1. A estrutura do projeto deve seguir o modelo apresentado.
2. O arquivo `dados.ts` contém um JSON com os dados dos estados do país obtidos em [link fornecido](https://blog.mds.gov.br/redesuas/lista-de-municipios-brasileiros).
3. O arquivo `types/index.ts` deve ter a definição do tipo de dado `UfProps` (objeto que representa um estado).
4. Definição das rotas `/uf/sigla` e `/uf/ibge` dentro da pasta `routes`.
5. O servidor deve rodar na porta 3001. A variável de ambiente `PORT` deve ser definida no arquivo `.env`.

### Estrutura do Projeto

#### Conteúdo do Arquivo `dados.ts`

```typescript
import { UfProps } from "../types";

const ufs: UfProps[] = [
 {ibge:11,estado:'Rondônia',uf:'RO',regiao:'Região Norte',qtdmun:52},
{ibge:12,estado:'Acre',uf:'AC',regiao:'Região Norte',qtdmun:22},
{ibge:13,estado:'Amazonas',uf:'AM',regiao:'Região Norte',qtdmun:62},
{ibge:14,estado:'Roraima',uf:'RR',regiao:'Região Norte',qtdmun:15},
{ibge:15,estado:'Pará',uf:'PA',regiao:'Região Norte',qtdmun:144},
{ibge:16,estado:'Amapá',uf:'AP',regiao:'Região Norte',qtdmun:16},
{ibge:17,estado:'Tocantins',uf:'TO',regiao:'Região Norte',qtdmun:139},
{ibge:21,estado:'Maranhão',uf:'MA',regiao:'Região Nordeste',qtdmun:217},
{ibge:22,estado:'Piauí',uf:'PI',regiao:'Região Nordeste',qtdmun:224},
{ibge:23,estado:'Ceará',uf:'CE',regiao:'Região Nordeste',qtdmun:184},
{ibge:24,estado:'Rio Grande do Norte',uf:'RN',regiao:'Região Nordeste',qtdmun:167},
{ibge:25,estado:'Paraíba',uf:'PB',regiao:'Região Nordeste',qtdmun:223},
{ibge:26,estado:'Pernambuco',uf:'PE',regiao:'Região Nordeste',qtdmun:185},
{ibge:27,estado:'Alagoas',uf:'AL',regiao:'Região Nordeste',qtdmun:102},
{ibge:28,estado:'Sergipe',uf:'SE',regiao:'Região Nordeste',qtdmun:75},
{ibge:29,estado:'Bahia',uf:'BA',regiao:'Região Nordeste',qtdmun:417},
{ibge:31,estado:'Minas Gerais',uf:'MG',regiao:'Região Sudeste',qtdmun:853},
{ibge:32,estado:'Espírito Santo',uf:'ES',regiao:'Região Sudeste',qtdmun:78},
{ibge:33,estado:'Rio de Janeiro',uf:'RJ',regiao:'Região Sudeste',qtdmun:92},
{ibge:35,estado:'São Paulo',uf:'SP',regiao:'Região Sudeste',qtdmun:645},
{ibge:41,estado:'Paraná',uf:'PR',regiao:'Região Sul',qtdmun:399},
{ibge:42,estado:'Santa Catarina',uf:'SC',regiao:'Região Sul',qtdmun:295},
{ibge:43,estado:'Rio Grande do Sul',uf:'RS',regiao:'Região Sul',qtdmun:497},
{ibge:50,estado:'Mato Grosso do Sul',uf:'MS',regiao:'Região CentroOeste',qtdmun:79},
{ibge:51,estado:'Mato Grosso',uf:'MT',regiao:'Região Centro-Oeste',qtdmun:141},
{ibge:52,estado:'Goiás',uf:'GO',regiao:'Região Centro-Oeste',qtdmun:246},
{ibge:53,estado:'Distrito Federal',uf:'DF',regiao:'Região Centro-Oeste',qtdmun:1}
];

export default ufs;
```

---

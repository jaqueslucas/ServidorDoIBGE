
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
 // Dados dos estados aqui...
];

export default ufs;
```

---

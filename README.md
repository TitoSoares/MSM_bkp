
## Description

O Projeto MeiSemMedo é uma ideia desenvolvida por alunos do curso de Desenvolvedor Full-Stack, com o objetivo de demonstrar as funcionalidades do Nest.js.
O projeto consiste em uma plataforma de auxílio à rotina de um Microempreendedor Individual em sua primeira MEI, proporcionando um sistema de cadastro de clientes,
cadastro de serviços em formato de agenda semanal e um registro de renda com as entradas e saídas devidamente cadastradas.
O Projeto foi desenvolvido pelos alunos Kristopher e Victor, para o nosso Projeto Integrador.


[Nest](https://github.com/nestjs/nest) 

# Descrição da API
## Modulo de Cadastro de Usuario
Caminho para o módulo: ``` /usuarios```
Métodos do módulo:
```bash
Tipo: GET
caminho: /usuarios/
Parametros esperados:
  Body: --
  Params: --
Retorno:
list{
id,
nome,
email,
cpf,
cnpj,
dataNasc}
```
```bash
Tipo: Put
caminho: /usuarios/:id
Parametros esperados:
  Body: {
    nome: string,
    email: string,
    cpf: string,
    cnpj: string,
    dataNasc: string,
    senha: string
  }
  Params: ID_USUARIO
Retorno:
{
  usuario: usuarioAtualizado,
  message:"Usuáio atulizado"
}
```
```bash
Tipo: DELETE
caminho: /usuarios/:id
Parametros esperados:
  Body: --
  Params: ID_USUARIO
Retorno:
{
  usuario: usuarioRemovido,
  message:"Usuário removido"
}
```
```bash
Tipo: Post
caminho: /usuarios/
Parametros esperados:
  Body: {
    nome: string,
    email: string,
    cpf: string,
    cnpj: string,
    dataNasc: string,
    senha: string
  }
  Params: --
Retorno:
{
  id: usuario.id,
  message:"Usuario Criado"
}
```
## Modulo de Cadastro de Receita
Caminho para o módulo: ``` /entrada_saida```
Métodos do módulo:
```bash
Tipo: GET
caminho: /entrada_saida/
Parametros esperados:
  Body: --
  Params: --
Retorno:
list{
id,
entradas,
saidas,
liquido
}
```
```bash
Tipo: Put
caminho: /entrada_saida/:id
Parametros esperados:
  Body: {
    id_operacao:string,
    tipo:boolean,
    valor:Number
  }
  Params: ID_OPERACAO
Retorno:
{
  operacao: operacaoAtualizado,
  message:"Sua operaçâo foi atulizada"
}
```
```bash
Tipo: DELETE
caminho: /entrada_saida/:id
Parametros esperados:
  Body: --
  Params: ID_OPERACAO
Retorno:
{
  operacao: OperecaoRemovida,
  message:"Sua operação foi removida com sucesso"
}
```
```bash
Tipo: Post
caminho: /entrada_saida/id_usuario
Parametros esperados:
  Body: {
 tipe:boolean,
valor:Number
  }
  Params: --
Retorno:
{
  id: operacao.id,
  message:"Cadastro de operação criado"
}
```
## Modulo de Cadastro de Agenda
Caminho para o módulo: ``` /agenda```
Métodos do módulo:
```bash
Tipo: GET
caminho: /agenda/
Parametros esperados:
  Body: --
  Params: --
Retorno:
list{
id,
data,
hora,
atividade
}
```
```bash
Tipo: Put
caminho: /agenda/:id
Parametros esperados:
  Body: {
    data:date,
    hora:date,
    atividade:string
  }
  Params: ID_AGENDA
Retorno:
{
  agenda: agendaAtualizado,
  message:"Sua atividade foi atulizada"
}
```
```bash
Tipo: DELETE
caminho: /agenda/:id
Parametros esperados:
  Body: --
  Params: ID_AGENDA
Retorno:
{
  agenda: AgendaRemovida,
  message:"Sua atividade foi removida com sucesso"
}
```
```bash
Tipo: Post
caminho: /agenda/id_usuario
Parametros esperados:
  Body: {
 data:date,
hora:date,
atividade:string
  }
  Params: --
Retorno:
{
  id: agenda.id,
  message:"Sua atividade foi cadastrada na agenda"
}
```
## Installation
```bash
$ npm install
```
## Running the app
```bash
# development
$ npm run start
# watch mode
$ npm run start:dev
# production mode
$ npm run start:prod
```
## Support
Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).
## Stay in touch
- Author - [Kristopher Soares Colares Dos Santos e Victor Augusto Farias Ferreira]
## License
Nest is [MIT licensed](LICENSE).


## Description

Projeto desenvolvido com alunos, para mostrar funcionalidades do Nest.js
Projeto consiste em uma simulação de sistema de locação e streaming de filmes e series.

[Nest](https://github.com/nestjs/nest) 

# Descrição da API
## Modulo de Usuario
Caminho para o módulo: ``` /usuarios```
Métodos do módulo:
```bash
Tipo: GET
caminho: /usuarios/
Parametros esperados:
  Body: --
  Params: --
Retorno:

list{id,
nome,
cidade,
email}
```

```bash
Tipo: Put
caminho: /usuarios/:id
Parametros esperados:
  Body: {
    nome: string,
    idade: int,
    cidade: string,
    email: string,
    telefone: string,
    senha: string
  }
  Params: ID_USUARIO
Retorno:
{
  usuario: usuarioAtualizado,
  message
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
  message
}
```


```bash
Tipo: Post
caminho: /usuarios/:id
Parametros esperados:
  Body: {
    nome: string,
    idade: int,
    cidade: string,
    email: string,
    telefone: string,
    senha: string
  }
  Params: --
Retorno:
{
  id: usuario.id,
  message
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

- Author - [João Pedro Parella]


## License

Nest is [MIT licensed](LICENSE).

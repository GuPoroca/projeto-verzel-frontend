
<p align="center"><strong>Frontend Processo Seletivo Verzel.</strong></p>

<p align="center">
  <a href="#get-started"><strong>Get Started</strong></a> ·
  <a href="#decisões"><strong>Decisões</strong></a> ·
  <a href="#deployment"><strong>Considerações</strong></a>
</p>

<br/>

## Get Started

LINK PARA <a href="https://youtu.be/ATgcJQ5G32c" target="_blank"> VIDEO </a> APRESENTAÇÃO
Para rodar, primeiro, crie um .env com o link do backend, no meu caso http://localhost:8000,
no .env.example o exemplo e o formato dele.
abra o terminal na pasta do projeto e,

Instale as dependências:

```shell
npm install
```

para executar em modo desenvolvedor:

```shell
npm run dev
```

> _Note_: Para o funcionamento do site com todas as features, é necessário rodar o <a href="https://github.com/GuPoroca/projeto-verzel-backend" target="_blank"> Backend </a> ao mesmo tempo.

## Decisões

Nesse projeto me utilizei de algumas bibliotecas para facilitar o desenvolvimento de UI's, para entregar
um projeto mais organizado e limpo. Essas foram:
- Chakra-UI para fazer os componentes e as páginas.

Para validação de dados, usei o Zod.

## Considerações

Gostaria de primeiramente agradecer a oportunidade de aprender fazer esse projeto, o tempo foi curto, mas
consegui implementar os requisitos, mesmo que a qualidade não esteja no meu melhor nível.

Dificuldades:

Pelo motivo de fazer autenticação, acabei me complicando e adicionando complexidade para meu projeto, que
talvez com mais funcionalidades e um futuro, vai se pagar, mas no mais o projeto tenta utilizar as funcionalidades
de maneira lógica e intuitiva.

- GitFlow: 

Tomei a liberdade nesse projeto já que era individual e não estava em produção para usar a branch main como
se fosse a develop.
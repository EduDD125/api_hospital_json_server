const jsonServer = require('json-server');  // importando dependencia json-server
const server = jsonServer.create();         // instanciando um server
const router = jsonServer.router("db.json") // criando as endpoints da api a partir do db.json

const middlewares = jsonServer.defaults()    // define os middlewares usados pelo json-server
server.use(middlewares)                      // aplicando middlewares ao server criado

server.use(                                  // usar antes de server.use(routes)
    jsonServer.rewriter({
        "/*":"/$1",
    })                                       // aqui é possivel adicionar rotas customizáveis se necessário
)

server.use(router);                          // aplicando rotas ao server

server.listen(3000, () => {                  // definido porta que deve ser ouvida para comunicação com servidor
    console.log("JSON Server is running in door 3000");
})

 module.exports = server                      // exportando servidor
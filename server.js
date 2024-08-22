// import {createServer} from 'node:http'

// const server = createServer((req, res) => {
//    res.write('seja bem vindo')

//    return res.end()
// })

// server.listen(3333)

import {fastify} from 'fastify'

const server = fastify()

server.get('/', () => {
   return 'Sejam Bem Vindos'
})


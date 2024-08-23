import {fastify} from 'fastify'

import {}
const server = fastify()

server.post('/videos', () => {
   return 'Sejam Bem Vindos'
})

server.get('/videos', () => {
   return 'Conheça o Node no Back end'
})

server.put('/videos/:id', () => {
   return 'Hello Node.js'
})

server.delete('/vídeos/:id', () => {
   return 'Hello Node.js'
})

server.listen( {
   port: 3333,
})

import {fastify} from 'fastify'
import { DatabaseMemory } from './database-memory.js'

const server = fastify()

const database = new DatabaseMemory()

server.post('/videos', (request, reply) => {
   database.create( {
      title: 'Video 01',
      description: 'Este é o video 01',
      duration: 180,
   })
   console.log(database.list())

   return reply.status(201).send()
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

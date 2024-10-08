import {fastify} from 'fastify'
import { DatabaseMemory } from './database-memory.js'

const server = fastify()

const database = new DatabaseMemory()

server.post('/videos', (request, reply) => {
   const {title, description, duration, } = request.body
   
   database.create( {
      title,
      description,
      duration,
   })
  
   return reply.status(201).send()
})

server.get('/videos', (requery) => {
   
   const search = requery.query.search

   const videos = database.list(search)
     
   return videos
})

server.put('/videos/:id', (request, reply) => {
   const videoId = request.params.videoId
   const {title, description, duration, } = request.body

database.updade(videoId, {
      title,
      description,
      duration,
   })

   return reply.status(204).send()
})

server.delete('/vídeos/:id', (request, reply) => {
   const videoId = request.params.videoId
   database.delete(videoId)

   return reply.status(204).send()
})

server.listen( {
   port: 3333,
})

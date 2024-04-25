// import { createServer} from 'node:http'

// const server = createServer((request, response) => {
//     response.write('hello')

//     return response.end()
// })

// server.listen(3333)

import { fastify } from 'fastify'
import { DatabaseMemory } from '../database-memory.js'

const server = fastify()

const database = new DatabaseMemory()

server.post('/tarefas', (request, reply) => {
    const {title, description, date, categoria} = request.body

database.create({
    title,
    description,
    date,
    categoria,
})

  return reply.status(201).send()
})

server.get('/tarefas', () => {
    const tarefas =database.list()

    console.log(tarefas)

    return tarefas
})

server.put('/tarefas/:id', (request, reply) => {
    const tarefaId = request.params.tarefaId
    const {title, description, date, categoria} = request.body

    database.update(tarefaId, {
        title,
        description,
        date,
        categoria,
    })

return reply.status(204).send()
})

server.delete('/tarefas/:id', (request, reply) => {
    const tarefaId = request.params.id 

    database.delete(tarefaId)

    return reply.status(204).send()
})
server.listen({
    port: 3333,
})
import { randomUUID } from "node:crypto"

export class DatabaseMemory {
    #tarefas = new Map()

    list() {
        return Array.from(this.#tarefas.entries()).map((tarefaArray) =>{
    const id = tarefaArray[0]
    const data = tarefaArray[1]

    return {
        id,
        ...data,
    }
    })
}


create(tarefa) {
    const tarefaId = randomUUID
     
    this.#tarefas.set(tarefaId, tarefa)
}

update(id, tarefa) {
    this.#tarefas.set(id, tarefa)
}

delete(id) {
    this.#tarefas.delete(id)
   }
}
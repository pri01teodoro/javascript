"use strict";
class TarefaListas {
    constructor() {
        this._tarefas = [];
    }
    get tarefas() {
        return this._tarefas;
    }
    set tarefas(tarefa) {
        this._tarefas = tarefa;
    }
    adicionar(tarefa) {
        this._tarefas.push(tarefa);
    }
}

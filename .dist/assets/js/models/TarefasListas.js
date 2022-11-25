"use strict";
class TarefasListas {
    constructor() {
        this._tarefas = [];
    }
    get tarefas() {
        return this._tarefas;
    }
    adicionar(tarefa) {
        this._tarefas.push(tarefa);
    }
}
const tarefaLista1 = new TarefasListas();
const t1 = new Tarefa("Comprar pão", new Date(2022, 10, 1));
const t2 = new Tarefa("Comprar manteiga", new Date(2022, 10, 1));
const t3 = new Tarefa("Comprar leite", new Date(2022, 10, 1));
tarefaLista1.adicionar(t1);
tarefaLista1.adicionar(t2);
tarefaLista1.adicionar(t3);
tarefaLista1.tarefas.forEach(tarefa => {
    console.log(tarefa.descricao);
});

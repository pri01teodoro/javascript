"use strict";
class TarefaController {
    constructor(listaTarefas) {
        this._listaTarefa = listaTarefas;
        this._tarefaView = new tarefaView();
    }
    adicionar(tarefa) {
        // adding inside the list
        this._listaTarefa.adicionar(tarefa);
        // showing in the page
        this._tarefaView.montar(this._listaTarefa);
    }
}
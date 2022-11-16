class TarefaListas {
    private _tarefas: Array<Tarefa>;

    constructor() {
        this._tarefas = [];        
    }

    get tarefas(): Array<Tarefa>{
        return this._tarefas;
    }

    set tarefas(tarefa: Array<Tarefa>){
        this._tarefas = tarefa;
    }

    adicionar(tarefa: Tarefa){
        this._tarefas.push(tarefa);
    }
}
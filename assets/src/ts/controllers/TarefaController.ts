class TarefaController {
    private _listaTarefa: TarefasListas;
    private _tarefaView: TarefaView;
    
    constructor(listaTarefas: TarefasListas) {
        this._listaTarefa = listaTarefas;
        this._tarefaView = new TarefaView();
    }

    adicionar(tarefa: Tarefa){
        // adding inside the list
        this._listaTarefa.adicionar(tarefa);
        
        // showing in the page
        this._tarefaView.montar(this._listaTarefa);
    }
}
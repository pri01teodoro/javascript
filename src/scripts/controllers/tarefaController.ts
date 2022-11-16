class TarefaController {
    private _listaTarefa: TarefaListas;
    private _tarefaView: tarefaView;
    
    constructor(listaTarefas: TarefaListas) {
        this._listaTarefa = listaTarefas;
        this._tarefaView = new tarefaView();
    }

    adicionar(tarefa: Tarefa){
        // adding inside the list
        this._listaTarefa.adicionar(tarefa);
        
        // showing in the page
        this._tarefaView.montar(this._listaTarefa);
    }
}
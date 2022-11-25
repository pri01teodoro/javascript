class TarefaView {
    private _tabela: HTMLTableElement;
    private __inputDescricao: HTMLInputElement;
    private _inputData: HTMLInputElement;
    private _btnAdicionar: HTMLButtonElement;
  
    constructor() {
      this._tabela = document.querySelector("#tabela-tarefas")!;
      this.__inputDescricao = document.querySelector("#descricao")!;
      this._inputData = document.querySelector("#data")!;
      this._btnAdicionar = document.querySelector("#btn-adicionar")!;
    }
  
    get tabela(): HTMLTableElement{
      return this.tabela;
    }
  
    set tabela(tabela: HTMLTableElement){
      this._tabela = tabela;
    }
  
    montar(listaTarefas: TarefasListas) {
      this._tabela.innerHTML = "";
  
      listaTarefas.tarefas.map((tar) => {
        const linha = document.createElement("tr");
        const colDescricao = document.createElement("td");
        const colDia = document.createElement("td");
        const colConcluida = document.createElement("td");
  
        // insere na coluna
        colDescricao.innerHTML = tar.descricao;
        colDia.innerHTML = tar.data.toString();
        colConcluida.innerHTML = tar.concluida ? "Concluida": "nao esta concluida";
  
        // junta na linha
        linha.appendChild(colDescricao)
        linha.appendChild(colDia)
        linha.appendChild(colConcluida)
        
        // juntando na tabela
        this._tabela.append(linha)
      });
    }
  }
  
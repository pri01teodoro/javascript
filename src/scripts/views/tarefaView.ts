class tarefaView {
    private _tabela: HTMLTableElement;
  
    constructor() {
      this._tabela = document.querySelector("#tabela-tarefas")!;
    }
  
    get tabela(): HTMLTableElement{
      return this.tabela;
    }
  
    set tabela(tabela: HTMLTableElement){
      this._tabela = tabela;
    }
  
    montar(listaTarefas: TarefaListas) {
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
  
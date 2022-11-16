"use strict";
class tarefaView {
    constructor() {
        this._tabela = document.querySelector("#tabela-tarefas");
    }
    get tabela() {
        return this.tabela;
    }
    set tabela(tabela) {
        this._tabela = tabela;
    }
    montar(listaTarefas) {
        this._tabela.innerHTML = "";
        listaTarefas.tarefas.map((tar) => {
            const linha = document.createElement("tr");
            const colDescricao = document.createElement("td");
            const colDia = document.createElement("td");
            const colConcluida = document.createElement("td");
            // insere na coluna
            colDescricao.innerHTML = tar.descricao;
            colDia.innerHTML = tar.data.toString();
            colConcluida.innerHTML = tar.concluida ? "Concluída" : "Não está concluída";
            // junta na linha
            linha.appendChild(colDescricao);
            linha.appendChild(colDia);
            linha.appendChild(colConcluida);
            // juntando na tabela
            this._tabela.append(linha);
        });
    }
}

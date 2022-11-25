"use strict";
class Tarefa {
    constructor(descricao, data) {
        this._descricao = descricao;
        this._data = data;
        this._concluida = false;
    }
    // get and set descricao
    get descricao() {
        return this._descricao;
    }
    set descricao(value) {
        this._descricao = value;
    }
    // get and set data
    get data() {
        return this._data;
    }
    set data(data) {
        this._data = data;
    }
    // get and set concluida
    get concluida() {
        return this._concluida;
    }
    set concluida(concluida) {
        this._concluida = concluida;
    }
}
const tarefa1 = new Tarefa("Comprar pão", new Date(2022, 10, 24));
console.log(tarefa1.descricao);
console.log(tarefa1.data);

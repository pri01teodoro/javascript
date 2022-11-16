class Tarefa {
    private _descricao: string;
    private _data: Date;
    private _concluida: boolean;

    constructor(descricao: string, data: Date){
        this._descricao = descricao;
        this._data = data;
        this._concluida = false;
    }

    // get and set descricao
    public get descricao(): string {
        return this._descricao;
    }
    public set descricao(value: string) {
        this._descricao = value;
    }

    // get and set data
    public get data(): Date{
        return this._data;
    }
    public set data(data: Date){
        this._data = data;
    }
    
    // get and set concluida
    public get concluida(): boolean{
        return this._concluida;
    }
    public set concluida(concluida: boolean){
        this._concluida = concluida;
    }
}
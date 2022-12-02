export interface IItem{
    idItem?: number,
    descricao: string,
    estoqueSeguranca: number,
    familia: string,
    grupo: string,
    unidade: string
}

export interface IEstoque{
    idEstoque?: number,
    estoqueReal: number,
    localizacao: String,
    estoqueFuturo?: number,
    dataFutura?: Date, 
    item: IItem
}

export interface IUsuario{
    idUsuario?: number,
    email: string,
    nome: string,
    perfil: string,
    senha: string
}

export interface IMovimentacao{
    idMovimentacao?: number,
    dataMovimentacao: Date,
    origemDestino: string,
    quantidade: number,
    tipo: string,
    item: IItem,
    estoque: IEstoque,
    usuario: IUsuario
}

export interface INovaMovimentacao{
    origemDestino: string,
    quantidade: number,
    idItem?: number,
    idUsuario?: number
}

export interface IReserva{
    idReserva?: number,
    dataPrevista: Date,
    ordem: string,
    quantidadeReserva: number,
    finalizada: boolean,
    item: IItem,
    usuario: IUsuario
}

export interface INovaReserva{
    idReserva?: number,
    finalizada: boolean,
    quantidadeReserva: number,
    dataPrevista: Date,
    ordem: string,
    idUsuario: number,
    idItem: number,
}

export interface IPrevisao{
    idPrevisao?: number,
    dataPrevista: Date,
    ordem: string,
    quantidadePrevista: number,
    finalizada: boolean,
    item: IItem,
    usuario: IUsuario
}

export interface INovaPrevisao{
    idPrevisao?: number,
    ordem: string,
    quantidadePrevista: number,
    idItem: number,
    idUsuario: number,
    dataPrevista: Date,
    finalizada: boolean,
}

export interface ILog{
    idItem?: number,
    tipoMovimentacao: string,
    origemDestino: string,
    data: Date,
    quantidade: number,
    estoqueMomento: number
}

export interface IError{
    error:string,
    message:string,
    path:string
}

export interface ILoginError{
    error:string,
    error_description:string
}

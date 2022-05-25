import { Turma } from "./turma"

export class Escola {
    
    id: number
    nome: string
    endereco: string
    cnpj: string
    turma: Turma
    
    constructor(id: number, nome: string, endereco: string, cnpj: string, turma: Turma){
        this.nome = nome
        this.endereco = endereco
        this.id = id
        this.cnpj = cnpj
        this.turma = turma
    }


}

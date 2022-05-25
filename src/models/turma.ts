export class Turma {

    turmaId: number
    nome: string
    horario: string;
    escolaId: number

    constructor(escolaId: number, turmaId: number, nome: string, horario: string){
        this.horario = horario
        this.nome = nome
        this.turmaId = turmaId
        this.escolaId = escolaId
    }

}

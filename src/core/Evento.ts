export default class Evento {
    #id: string
    #nome: string
    #descricao: string
    #inicio: any
    #fim: any
    #horaInicio: any
    #horaFim: any

    constructor(nome: string, descricao: string, inicio: any, fim: any, horaInicio: any, horaFim: any, id: string = null) {
        this.#nome = nome
        this.#descricao = descricao
        this.#inicio = inicio
        this.#fim = fim
        this.#id = id
        this.#horaInicio = horaInicio
        this.#horaFim = horaFim
    }

    static vazio() {
        return new Evento("","",null,null,"","","")
    }

    get id() {
        return this.#id
    }

    get descricao() {
        return this.#descricao
    }

    get inicio() {
        return this.#inicio
    }

    get fim() {
        return this.#fim
    }

    get nome() {
        return this.#nome
    }

    get horaInicio() {
        return this.#horaInicio
    }

    get horaFim() {
        return this.#horaFim
    }
}
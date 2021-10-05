import Evento from "./Evento";

export default interface EventoRepositorio {
    salvar(evento: Evento): Promise<[Evento,string]>
    excluir(evento: Evento): Promise<void>
    obter(): Promise<Evento[]>
}
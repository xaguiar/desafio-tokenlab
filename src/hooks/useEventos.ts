import Evento from "../core/Evento";
import EventoRepositorio from "../core/EventoRepositorio";
import { useEffect, useState } from "react";
import ColecaoEvento from "../backend/db/ColecaoEvento";
import useTabelaOuForm from "./useTabelaOuForm";

export default function useEventos () {

    const repo: EventoRepositorio = new ColecaoEvento()

    const {tabelaVisivel, exibirTabela, exibirFomulario} = useTabelaOuForm()

    const [evento, setEvento] = useState<Evento>(Evento.vazio())
    const [eventos, setEventos] = useState<Evento[]>([])

    useEffect(obter, [])

    function obter() {
        repo.obter().then(eventos => {
        setEventos(eventos)
        exibirTabela()
        })
    }

    function selecionarEvento(evento : Evento) {
        setEvento(evento)
        exibirFomulario()
    }
    
    async function excluirEvento(evento : Evento) {
        await repo.excluir(evento)
        obter()
    }

    async function salvarEvento(evento: Evento) {
        await repo.salvar(evento)
        obter()
    }

    function novoEvento() {
        setEvento(Evento.vazio())
        exibirFomulario()
    }

    return {
        evento,
        eventos,
        novoEvento,
        salvarEvento,
        excluirEvento,
        selecionarEvento,
        obter,
        tabelaVisivel,
        exibirTabela
    }
}
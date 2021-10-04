import Evento from "../core/Evento";
import { IconeEdicao, IconeLixo } from "./Icones";

interface TabelaProps {
    eventos: Evento[]
    eventoSelecionado?: (evento: Evento) => void
    eventoExcluido?: (evento: Evento) => void
}

export default function Tabela(props) {

    const exibirAcoes = props.eventoExcluido || props.eventoSelecionado

    function renderizarCabecalho() {
        return ( 
            <tr>
                <th className="text-left p-4">Código</th>
                <th className="text-left p-4">Nome</th>
                <th className="text-left p-4">Descrição</th>
                <th className="text-left p-4">Início</th>
                <th className="text-left p-4">Fim</th>
                {exibirAcoes ? <th className="p-4">Ação</th> : false}
            </tr>  
        )
    }

    function renderizarAcoes(evento: Evento) {
        return (
            <td className="flex justify-center">
                {props.eventoSelecionado ? (
                    <button onClick={() => props.eventoSelecionado?.(evento)} className={`
                        flex justify-center items-center
                        text-green-900 rounded-full p-2 m-1
                        hover:bg-blue-200
                    `}>
                        {IconeEdicao}
                    </button>
                ) : false}
                {props.eventoExcluido ? (
                    <button onClick={() => props.eventoExcluido?.(evento)} className={`
                        flex justify-center items-center
                        text-blue-900 rounded-full p-2 m-1
                        hover:bg-blue-200
                    `}>
                        {IconeLixo}
                    </button>
                ) : false}
            </td>
        )
    }

    function renderizarDados() {
        return props.eventos?.map((evento, i) => {
            return (
                <tr key = {evento.id}
                    className={`${i % 2 === 0 ? "bg-green-200" : "bg-green-100"}`}>
                    <td className="text-left p-4">{evento.id}</td>
                    <td className="text-left p-4">{evento.nome}</td>
                    <td className="text-left p-4">{evento.descricao}</td>
                    <td className="text-left p-4">{evento.inicio + " às " + evento.horaInicio}</td>
                    <td className="text-left p-4">{evento.fim + " às " + evento.horaFim}</td>
                    {exibirAcoes ? renderizarAcoes(evento) : false}
                </tr>
            )
        })
    }
    return (
        <table className = "w-full rounded-xl overflow-hidden">
            <thead className={`
                bg-gradient-to-r from-blue-200 to-blue-400
            `}>
                {renderizarCabecalho()}
            </thead>
            <tbody>{renderizarDados()}</tbody>
        </table>
    )
}
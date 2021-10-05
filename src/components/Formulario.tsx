import { useState } from "react";
import Evento from "../core/Evento";
import Botao from "./Botao";
import Entrada from "./Entrada";

interface FormularioProps {
    evento: Evento
    eventoChange?: (evento: Evento) => void
    cancelado?: () => void
    email?: string
    rodape?: string
}

export default function Formulario(props: FormularioProps) {

    const id = props.evento?.id
    const email = props.email
    const [nome, setNome] = useState(props.evento?.nome ?? "")
    const [descricao, setDescricao] = useState(props.evento?.descricao ?? "")
    const [inicio, setInicio] = useState(props.evento?.inicio ?? "")
    const [fim, setFim] = useState(props.evento?.fim ?? "")
    const [horaInicio, setHoraInicio] = useState(props.evento?.horaInicio ?? "")
    const [horaFim, setHoraFim] = useState(props.evento?.horaFim ?? "")

    return (
        <div>
            {id ? <Entrada 
                somenteLeitura
                texto="Código" 
                valor={id}
                className="mb-4"
            /> : false}
            <Entrada 
                somenteLeitura
                texto="E-mail" 
                valor={email}
                className="mb-4"
            />
            <Entrada 
                texto="Nome" 
                valor={nome}
                change={setNome}
                className="mb-4" />
            <Entrada 
                texto="Descrição" 
                valor={descricao}
                change={setDescricao}
                className="mb-4" />
            <Entrada 
                texto="Data de início" 
                valor={inicio}
                tipo="date"
                change={setInicio}
                className="mb-4"/>
            <Entrada 
                texto="Data de término" 
                valor={fim}
                tipo="date"
                change={setFim}
                className="mb-4"/>
            <Entrada 
                texto="Hora de início" 
                valor={horaInicio} 
                tipo="time"
                change={setHoraInicio}
                className="mb-4"/>
            <Entrada 
                texto="Hora de término" 
                valor={horaFim} 
                tipo="time"
                change={setHoraFim}/>
            <div className="flex justify-end mt-7">
                <Botao cor="blue" className="mr-2" 
                    onClick={() => props.eventoChange?.(new Evento(nome,descricao,inicio,fim,horaInicio,horaFim,email,id))}>
                    {id ? "Alterar" : "Salvar"}
                </Botao>
                <Botao cor="gray" onClick={props.cancelado}>
                    Cancelar
                </Botao>
            </div>
        </div>
    )
}
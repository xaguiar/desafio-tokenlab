interface EntradaProps {
    texto: string
    tipo?: "text" | "date" | "time" | "password"
    valor: any
    somenteLeitura?: boolean
    className?: string
    change?: (valor: any) => void
}

export default function Entrada(props: EntradaProps) {
    return (
        <div className={`flex flex-col ${props.className}`}>
            <label className="mb-2">
                {props.texto}
            </label>
            <input
                type={props.tipo ?? "text"}
                defaultValue={props.valor}
                readOnly={props.somenteLeitura}
                onChange={e => props.change?.(e.target.value)}
                className={`
                    border border-blue-400 rounded-lg
                    focus:outline-none bg-gray-100 px-4 py-2
                    ${props.somenteLeitura ? '' : 'focus:bg-white'}
                `}
            />
        </div>
    )
}
import { useState } from 'react';

export default function useTabelaOuForm() {

    const [visivel, setVisivel] = useState<"tabela" | "form">("tabela") 
    const exibirTabela = () => setVisivel("tabela")
    const exibirFomulario = () => setVisivel("form")
    
    const [erro, setErro] = useState<"correto" | "incorreto">("correto")
    const exibirErro = () => setErro("incorreto")
    const removerErro = () => setErro("correto")

    return {
        formularioVisivel: visivel === "form",
        tabelaVisivel: visivel === "tabela",
        erroVisivel: erro === "incorreto",
        exibirErro,
        removerErro,
        exibirTabela,
        exibirFomulario
    }
}
import Botao from "../components/Botao";
import Formulario from "../components/Formulario";
import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import useEventos from "../hooks/useEventos";

export default function Home() {

  const {evento, eventos, selecionarEvento, excluirEvento, salvarEvento, novoEvento, tabelaVisivel, exibirTabela} = useEventos()
  

  return (
    <div className={`
      flex justify-center items-center h-screen
      bg-gradient-to-r from-blue-500 to-green-400
      text-white
    `}>
      <Layout titulo="Meus eventos">
        {tabelaVisivel ? (
        <>
          <div className="flex justify-end">
            <Botao cor="green" className="mb-4" onClick={novoEvento}>
              Novo evento
            </Botao>
          </div>
          <Tabela eventos={eventos}
            eventoSelecionado={selecionarEvento}
            eventoExcluido={excluirEvento}>
          </Tabela> 
        </>
        ) : (
          <Formulario
            evento={evento}
            eventoChange={salvarEvento}
            cancelado={exibirTabela}
          />
        ) }
      </Layout>
    </div>
  )
}
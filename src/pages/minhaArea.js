/* eslint-disable react-hooks/rules-of-hooks */
import withAuth from "../auth/withAuth"
import { useUser } from '../auth/useUser'
import Botao from "../components/Botao"
import Formulario from "../components/Formulario"
import Layout from "../components/Layout"
import Tabela from "../components/Tabela"
import useEventos from "../hooks/useEventos"

function minhaArea() {

  const {evento, eventos, selecionarEvento, excluirEvento, salvarEvento, novoEvento, tabelaVisivel, exibirTabela, erroVisivel} = useEventos()
  const { user, logout } = useUser()
  console.log(user)
  
  return (
    <div className={`
      flex justify-center items-center h-screen
      bg-gradient-to-r from-blue-500 to-green-400
      text-white
    `}>
      <Layout titulo="Meus eventos">
        {tabelaVisivel ? (
        <>
        <div className="px-5 py-2 text-1xl">
          <div>Informações de login:</div>
          {
            <div>
              <div>Email - {user?.email}</div>
              <Botao cor="red" className="mb-3 mt-2" onClick={() => logout()}>Logoff</Botao>
            </div> 
          }
        </div>
          <div className="flex justify-end">
            <Botao cor="green" className="mb-4" onClick={novoEvento}>
              Novo evento
            </Botao>
          </div>
          <Tabela eventos={eventos}
            eventoSelecionado={selecionarEvento}
            eventoExcluido={excluirEvento}
            email={user?.email}>
          </Tabela> 
        </>
        ) : (
          <Formulario
            email = {user?.email}
            evento={evento}
            eventoChange={salvarEvento}
            cancelado={exibirTabela}       
          />
        ) }
        {erroVisivel ? (<h1 className="px-5 py-2 text-1xl text-red-600 justify-end">Não é possível sobrescrever eventos com o mesmo nome. Favor alterar ou inserir outro evento.</h1>) : false}
      </Layout>
    </div>
  )
}

export default withAuth(minhaArea);
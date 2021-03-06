/* eslint-disable @next/next/no-html-link-for-pages */
import Layout from "../components/Layout";

export default function Home() {
  return (
    <div className={`
      flex justify-center items-center h-screen p-center
      bg-gradient-to-r from-blue-500 to-green-400
      text-white
    `} >
    <Layout titulo="Bem vindo ao Event Planner, o seu organizador do dia a dia!">
      <a href="/minhaArea" className={`
            flex flex-col
            bg-white text-blue-600
            rounded-md text-2xl text-center
        `}>
        Vamos começar!
      </a>
    </Layout>
    </div>
  )
}

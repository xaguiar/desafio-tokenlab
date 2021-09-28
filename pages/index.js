import Link from 'next/link'
import styles from '../styles/index.module.scss'

function Home() {
    return (
        <div>
            <title>Event Planner</title>
            <form action="/sobre" method="get" id="form1">
                <body className={styles.body}>
                    <div className={styles.tela}>
                        <h1>Login</h1>
                        <input type="text" placeholder="Usuário" className={styles.input}></input>
                        <br></br><br></br>
                        <input type="password" placeholder="Senha" className={styles.input}></input>
                        <br></br><br></br><br></br>
                        <button className={styles.button_login} type="submit" form="form1" value="Submit">Login</button>
                        <br></br><br></br>
                        <button className={styles.button_cadastro} type="submit" form="form1" value="Submit">Cadastro</button>
                    </div>
                </body>
            </form>
        </div>
    )
}

export default Home
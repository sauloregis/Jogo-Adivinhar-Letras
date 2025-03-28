import styles from "./app.module.css"
import { Header } from "./components/Header"
import { Tip } from "./components/Tip"
import { Letter } from "./components/Letters"

export default function App() {

  function HandlerRestartGame() {
    return(
      alert("Reiniciou o jogo!")
    )
  }
  return (
    <div className={styles.container}>
      <main>
        <Header current={6} max={10} onRestart={HandlerRestartGame}/>
        <Tip tip="Linguagem de programação dinâmica" />
        <Letter value="R"/>
      </main>
    </div>
  )
}

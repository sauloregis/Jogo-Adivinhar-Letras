import styles from "./app.module.css"
import { Input } from "./components/Inputs"
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
        <div className={styles.word}>
          <Letter value="R"/>
          <Letter value="E"/>
          <Letter value="A"/>
          <Letter value="C"/>
          <Letter value="T"/>
        </div>

        <h4>Palpite</h4>
        
        <div>
          <Input autoFocus maxLength={1} placeholder="?"/>
        </div>
      </main>
    </div>
  )
}

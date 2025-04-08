import styles from "./app.module.css"
import { Button } from "./components/Button"
import { Input } from "./components/Inputs"
import { Header } from "./components/Header"
import { Tip } from "./components/Tip"
import { Letter } from "./components/Letter"
import { LettersUsed } from "./components/LettersUsed"
import { WORDS, Challenge } from "./utils/words"
import { useState, useEffect } from "react"

export default function App() {
  const [letter, setLetter] = useState("")
  const [attempts, setAttempts] = useState(0)
  const [challenge, setChallenge] = useState<Challenge | null>(null)


  function HandlerRestartGame() {
      alert("Reiniciou o jogo!")
  }

  function startGame() {
    const index = Math.floor(Math.random() * WORDS.length)
    const randomWord = WORDS[index]

    setChallenge(randomWord)

    setAttempts(0)
    setLetter("")
  }

  useEffect(() => {
    startGame()
  }, []) 

  if(!challenge){
    return 
  }
  
  return (
    <div className={styles.container}>
      <main>
        <Header current={attempts} max={10} onRestart={HandlerRestartGame}/>
        <Tip tip="" />
        <div className={styles.word}>
          {challenge.word.split("").map(() => (  //o map itera entre cada elemento da array e produz uma Letter pra cada uma
            <Letter value={letter} />
          ))

          }
        </div>

        <h4>Palpite</h4>
        
        <div className={styles.guess}>
          <Input autoFocus maxLength={1} placeholder="?"/>
          <Button title="Confirmar" />
        </div>

        <LettersUsed />
      </main>
    </div>
  )
}

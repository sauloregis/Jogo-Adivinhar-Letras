import styles from "./app.module.css"
import { Button } from "./components/Button"
import { Input } from "./components/Inputs"
import { Header } from "./components/Header"
import { Tip } from "./components/Tip"
import { Letter } from "./components/Letter"
import { LettersUsed, LettersUsedProps } from "./components/LettersUsed"
import { WORDS, Challenge } from "./utils/words"
import { useState, useEffect } from "react"

export default function App() {
  const [score, setScore] = useState(0)	
  const [letter, setLetter] = useState("")
  const [lettersUsed, setLettersUsed] = useState<LettersUsedProps[]>([])
  const [challenge, setChallenge] = useState<Challenge | null>(null)


  function HandlerRestartGame() {
      alert("Reiniciou o jogo!")
  }

  function startGame() {
    const index = Math.floor(Math.random() * WORDS.length)
    const randomWord = WORDS[index]

    setChallenge(randomWord)

    setScore(0)
    setLetter("")
    setLettersUsed([])
  }

  function handleConfirm() {
    if (!challenge) {
      return
    }

    if(!letter.trim()){
      return alert("Digite uma letra!")
    }

    const value = letter.toUpperCase()
    const exists = lettersUsed.find((used) => used.value.toUpperCase() === value)

    if (exists) {
      return alert("Você já utilizou a letra " + value) 
    }

    const hits = challenge.word
      .toUpperCase()
      .split("")
      .filter((char) => char === value).length

    const correct = hits > 0
    const currentScore = score + hits

    setLettersUsed((prevState) => [...prevState, { value, correct }])
    setScore(currentScore)
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
        <Header current={score} max={10} onRestart={HandlerRestartGame}/>
        <Tip tip={challenge.tip} />
        
        <div className={styles.word}>
          {challenge.word.split("").map((letter, index) => {
            const letterUsed = lettersUsed.find(
              (used) => used.value.toUpperCase() === letter.toUpperCase()
            )
            
            return <Letter key={index} value={letterUsed?.value} color={letterUsed?.correct ? "correct" : "default"} />
          })}
        </div>

        <h4>Palpite</h4>
        
        <div className={styles.guess}>
          <Input 
            autoFocus
            value={letter} 
            maxLength={1} 
            placeholder="?" 
            onChange={(e) => setLetter(e.target.value)} 
          />

          <Button title="Confirmar" onClick={handleConfirm}/>
        </div>

        <LettersUsed data={lettersUsed}/>
      </main>
    </div>
  )
}

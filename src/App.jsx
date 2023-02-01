import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

const TURNS = {
  X: 'X',
  O: '0'
}

const Square = ({children, isSelected, updateBoard, index}) => {
  const className = `square ${isSelected ? 'is-selected' : ''}`
  return(
    <div className={className}>
        {children}
    </div>
  )
}




function App() {
  
const [ board, setBoard ] = useState(Array(9).fill(null));
const [ turno, setTurno ] = useState(TURNS.X)

  return (
    <main className='board'>
      <h1> Tres en Raya </h1>
      <section className='game'>
        {
          board.map((_, index)=>{
            return(
             <Square key={index} index={index}>
                {board[index]}
              </Square>
            )
          })
        }

      </section>
      <section className='turn'>
        <Square isSelected={turno === TURNS.X}>
          {TURNS.X}
        </Square>
        <Square isSelected={turno === TURNS.O}>
          {TURNS.O}
        </Square>
      </section>

    </main>
  )

}

export default App

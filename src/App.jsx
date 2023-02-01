import { useState } from 'react'
import './App.css'


const TURNS = {
  X: 'X',
  O: '0'
}

const Square = ({children, isSelected, updateBoard, index}) => {
  
  const evento = ()=>{
    updateBoard(index);
  }
  console.log("isSelected:"+isSelected)
  console.log("index:"+index)
  const className = `square ${isSelected ? 'is-selected' : ''}`
  return(
    <div onClick={evento} className={className}>
        {children}
    </div>
  )
}

function App() {

  const [ board, setBoard ] = useState(Array(9).fill(null));
  const [ turno, setTurno ] = useState(TURNS.X)
  
  const updateBoard = (index) => {
    const newBoard = [...board]
    newBoard[index] = turno;
    setBoard(newBoard)
    console.log(">>>>>>>>>>>>>>>>>>>>>>>>>")
    console.log(...board)
    console.log(index)
    const newTurn = turno === TURNS.X ? TURNS.O : TURNS.X
    setTurno(newTurn)
  }
  
  return (
    <main className='board'>
      <h1> Tres en Raya </h1>
      <section className='game'>
        {
          board.map((_, index)=>{
            return(
             <Square key={index} 
                     index={index}
                     updateBoard={updateBoard}>
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

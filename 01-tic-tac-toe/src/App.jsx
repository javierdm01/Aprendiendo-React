/* eslint-disable react/prop-types */
import { useState } from 'react'
import './App.css'






const Square=({children,isSelected,updateBoard,index})=>{
  const className= `square ${isSelected ? 'is-selected' : ''}`;
  const handleClick=()=>{
    updateBoard(index)
  }
  return (
    <div onClick={handleClick} className={className}>
      {children}
    </div>
  )
}

function App() {
  const TURN={
    "X":"🔴",
    "O":"🔵"
  }
  const winnerCombos=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
  ]
  const [turn,setTurn]= useState(TURN.X)
  const [board, setBoard] = useState(new Array(9).fill(null))
  const [winner,setWinner] = useState(null)


  const updateBoard=(index)=>{

    if(board[index]) return
    const newBoard=[...board];
    newBoard[index]=turn
    setBoard(newBoard )
    const newTurn= turn== TURN.X ? TURN.O : TURN.X;
    setTurn(newTurn);
    
  }
  
  return (
    <>
      <main className="board">
        <h1>Tres en rayas</h1>
        <section className="game">
          {
            board.map((square, index)=>{
              return (
                <Square updateBoard={updateBoard}  key={index} index={index}>
                  {square}
                </Square>
              )
            })
          }
        </section>
        <section className="turn">
          <Square isSelected={turn=== TURN.X}>{TURN.X}</Square>
          <Square isSelected={turn=== TURN.O}>{TURN.O}</Square>
        </section>
      </main>
    </>
  )
}

export default App

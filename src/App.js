import React, { useState } from 'react';
import "./App.css";

function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null))
  const nextValue = calculateNextValue(squares)
  const winner = calculateWinner(squares)
  const status = calculateStatus(winner, squares, nextValue)
  
  
  // const way=calculateWinningWay(squares[a,b,c])
  function selectSquare(square) {
    if (winner || squares[square]) {
      return 
    }
    const squaresCopy = [...squares]
    squaresCopy[square] = nextValue
    setSquares(squaresCopy)
  }
  

  function restart() {
    setSquares(Array(9).fill(null))
  }

  function renderSquare(i) {
    return (
      <button className="square" onClick={() => 
      selectSquare(i)}>
        {squares[i]}
      </button>
    )
  }

  return (
    <div>
      <div className='player'>
      <div className='player1'>Player 1 : X</div>
      <div className='player2'>Player 2 : O</div>
      </div>
      <div></div>
      <div className="status">{status}</div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
      <button className="restart" onClick={restart}>
        restart
      </button>
      

   
    
    </div>
  )
}

function Game() {
  return (
    <div className="game">
      <div className="game-board">
        <Board />
      </div>
    </div>
  )
}

function calculateStatus(winner, squares, nextValue) {
  return winner
  ? `Winner: ${winner}`
  : squares.every(Boolean)
  ? `It a Tie game`
  : `Next player: ${nextValue}`
    
}

// function calculateCount(winner){
//   let countX=0;
//   let countO=0;
//   if(winner=='X'){
//     countX=countX+1;
//     return countX
//   }
//   else if(winner=='O'){
//     countO=countO+1;
//     return countO
//   }
  
// }

// function calculatePlayerStatus(nextPlayer) {
  
//     <div className='player-status'>Next player: {nextPlayer}</div>
// }

function calculateNextValue(squares) {
  return squares.filter(Boolean).length % 2 === 0 ? 'X' : 'O'
}

// function calculateNextPlayer(squares) {
//   return squares.filter(Boolean).length % 2 === 0 ? 'X' : 'O'
// }



function calculateWinner(squares) {
  
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i]
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a]
    }
  }
  return null
}

// function calculateCount(squares){
//   const 
//   if(squares[a]=='X'){
//     let countX=1;
//     countX++;
//   }
// }

// function calculateWinningWay(squares[a,b,c]){
//   <React.Fragment>
//   <div className='winningway1'>{squares[a]}</div>
//   <div>{squares[b]}</div>
//   <div>{squares[c]}</div>
//   </React.Fragment>
// }



function App() {

  return (
    <div className='tic'>
      <h1>TIC TAC TOE GAME</h1>
    <div className='game-ui'>
  <Game />
  </div>
  </div>
  )
}

export default App
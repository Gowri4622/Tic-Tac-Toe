### EX NO: 02

# <p align="center">React Application</P>

## Aim:
To create a react application for Tic Tac Toe game 

## Algorithm:

Step-1: Create a folder in cmd and import packages

Step-2: Create a components and create .jsx file folder

Step-3: As per the given task design the style.css

Step-4: Fetch the data by using API

Step-5: Run the program in npm start


## Program

### app.js
```javascript
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



function calculateNextValue(squares) {
  return squares.filter(Boolean).length % 2 === 0 ? 'X' : 'O'
}





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

```

### app.css
```javascript
.game {
  font: 14px 'Century Gothic', Futura, sans-serif;
  margin: 20px;
  min-height: 260px;
}
.tic{
  text-align: center;
}

.game-ui{
  margin-left: 30%;
  margin-top: 10%;
  
}

.game ol,
.game ul {
  padding-left: 30px;
}

.board-row:after {
  clear: both;
  content: '';
  display: table;
}


.status {
  margin-bottom: 10px;
  font-size: 30px;
  background-color: #f7b04e;
  border-color: black;
  border-radius: solid;
  padding: 5px;
  padding-left: 40px;
  padding-right: 40px;
  padding-top: 20px;
  padding-bottom: 20px;

}

.restart {
  margin-top: 10px;
  padding: 10px;
  font-size: 20px;
  border: 2px solid #030303 ;
}
.player2{
  float: right;
  margin-top: -35px;
  font-size: 25px;
  
}
.player1{
  float: left;
  margin-top: -35px;
  font-size: 25px;
}
.square {
  background: #f9a95d;
  border: 2px solid #999;
  float: left;
  font-size: 24px;
  font-weight: bold;
  line-height: 34px;
  height: 100px;
  margin-right: -1px;
  margin-top: -1px;
  padding: 0;
  text-align: center;
  width: 100px;
}
.player-status{
  margin-left: 150%;
  margin-top: 100%;
}

.square:focus {
  outline: none;
  background: #ddd;
}

.game {
  display: flex;
  flex-direction: row;
}

.game-info {
  margin-left: 20px;
  min-width: 190px;
}
```

## Output

![Screenshot 2023-06-04 112238](https://github.com/Gowri4622/react-calci-form/assets/75235455/cdbb2c31-56ff-44f8-be4b-3937e93944f8)

![Screenshot 2023-06-04 112252](https://github.com/Gowri4622/react-calci-form/assets/75235455/b10bb375-5b16-4ffa-913b-ada9faeaa3ab)


## Result
Thus, a react application for Tic Tac Toe game  is successfully
implemented

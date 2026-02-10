import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Player from './components/Player'
import GameBoard from './components/GameBoard'
import Log from './components/Log'
import { WINNING_COMBINATIONS } from './components/winning-combinations'
import GameOver from './components/GameOver'

const PLAYERS = {
  X:'Player 1',
  O:'Player 2'
};

// 85
// Reducing state management and identify unnecessary states


const INITIAL_GAME_BOARD = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
];

function deriveActivePlayer(gameTurns){
   let currentPlayer='X';

      if(gameTurns.length>0 && gameTurns[0].player==='X'){
        currentPlayer='O';
      }
      return currentPlayer;
}

function derivegameBoard(gameTurns){
    // deep coppy
   let gameBoard = [...INITIAL_GAME_BOARD.map(array=>[...array])];

    for (const turn of gameTurns) {
        const { square, player } = turn;
        const { row, col } = square;

        gameBoard[row][col] = player;
    }
    return gameBoard;

}

function deriveWinner(gameBoard,players){
   let winner;

  for(const combinations of WINNING_COMBINATIONS){
    const firstSquareSymbol = gameBoard[combinations[0].row][combinations[0].col];
    const secondSquareSymbol =gameBoard[combinations[1].row][combinations[1].col];
    const thirdSquareSymbol =gameBoard[combinations[2].row][combinations[2].col];

    if(
      firstSquareSymbol &&
      firstSquareSymbol === secondSquareSymbol &&
      firstSquareSymbol === thirdSquareSymbol
    ){
      winner=players[firstSquareSymbol];
      return winner;
    }
    
  }
}

function App() {
  const [players,setPlayers]=useState(PLAYERS);


function handlePlayerNameChange(symbol,newName){
  setPlayers(prevPlayers=>{
    return{
      ...prevPlayers,
      [symbol]:newName
    }
  })
}

  const [gameTurns,setGameTurns]=useState([]);
  
  // const [activePlayer,setActivePlayer]=useState('X'); // (we are just using for changing ui gameturn state is also there so let's not use this extra one)

  const activePlayer = deriveActivePlayer(gameTurns);
  const gameBoard = derivegameBoard(gameTurns);
   
  const winner=deriveWinner(gameBoard,players);
  const hasDraw=!winner &&gameTurns.length ===9 ;


  function handleSelectSquare(rowIndex,colIndex){
   // setActivePlayer((curActivePlayer)=>curActivePlayer==='X'?'O':'X');
    setGameTurns(prevTurns=>{
      const currentPlayer=deriveActivePlayer(prevTurns);

      const updatedTurns=[{ square:{row:rowIndex,col:colIndex},player:currentPlayer  },...prevTurns];
      return updatedTurns;

    });
  }

  function handleRestart(){
    setGameTurns([]);
  }

  return (
   <main>
    <div id="game-container">
      <ol id="players" className='highlight-player'>
       
       <Player name={PLAYERS.X} sign="X" isActive={activePlayer==='X'} onChangeName={handlePlayerNameChange}/>
        <Player name={PLAYERS.O} sign="O" isActive={activePlayer==='O'} onChangeName={handlePlayerNameChange}/>

      </ol>
      {/* {winner && <p>You won, {winner}!</p>} */}
       {(winner || hasDraw )&& <GameOver winner={winner} onRestart={handleRestart}/>}

      {console.log(winner)}
      <GameBoard onSelectSquare={handleSelectSquare} activePlayerSymbol={activePlayer} turns={gameTurns} board={gameBoard}/>
    </div>
      <Log turns={gameTurns}/>

   </main>
  )
}

export default App

// outsourcing data into a seprate file
//lifting computed values up
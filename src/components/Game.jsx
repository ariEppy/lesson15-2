import React, { useState, useEffect } from "react";
import "./Game.css"

export default function GamePage({ username, setPage, setWinner }) {
  const [deck, setDeck] = useState([]);
  const [playerCard, setPlayerCard] = useState(null);
  const [compCard, setCompCard] = useState(null);
  const [playerScore, setPlayerScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [round, setRound] = useState(0);

  // onload make a cards array and add this to deck
  useEffect(() => {
    const cards = [];
    for (let i = 0; i < 52; i++) {
      cards.push(Math.floor(Math.random() * 13) + 1);
    }
    setDeck(cards);
    
  }, []);

  const playRound = () => {
    setRound(prev => prev + 1);
    // if we've reached the end of the deck then get the winner and winner page
    if (deck.length < 2) {
  
      if (playerScore > computerScore)
        {
           setWinner(username);
        } 
       
      else setWinner("Computer");
      setPage("winner");
      return;
    }

    // get a random card for the user and the computer
    const playerIndex = Math.floor(Math.random() * deck.length);
    const playerPicked = deck[playerIndex];
    const newDeck = [...deck];
    newDeck.splice(playerIndex, 1);

    const compIndex = Math.floor(Math.random() * newDeck.length);
    const compPicked = newDeck[compIndex];
    newDeck.splice(compIndex, 1);

    setPlayerCard(playerPicked);
    setCompCard(compPicked);
    setDeck(newDeck);

    if (playerPicked > compPicked) 
      setPlayerScore(playerScore + 1);
    else if (compPicked > playerPicked) 
      setComputerScore(computerScore + 1);
  };

  return (
    <div>
      <div className="flex">
        <div className="flexLeft">
      <h2 className="comp">Computer</h2>
      </div>
      <div className="flexMid"><p>{compCard}</p></div>
      <div className="flexRight">
      <h2>Score</h2>
      <h2>Comp - {computerScore}</h2>
      <h2>You - {playerScore}</h2>
      </div>
      </div>
      <div className="flex">
        <div className="flexLeft2">
      <h2>No.</h2>
      <h2>{round}</h2>
      </div>
      <div className="flexRight2">
      <p>{playerCard}</p>
      </div>
     <div className="flexRight"></div>
      </div>
      <br />
      <div className="bottom">
         <button onClick={playRound}>Next</button>
      <h2 className="you">You</h2></div>

      
    </div>
  );
}

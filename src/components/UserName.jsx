import React, { useState, useEffect } from "react";
import "./UserName.css"
import { ScoreTable } from "./ScoreTable";

export default function UsernamePage({ username, setUsername, setPage, scoreBoard, setScoreBoard }) {
const [table , setTable] = useState(false);

  useEffect(() => {
    setUsername("");
  }, []);
  
  const startGame = () => {
    if (!username)
      alert("Please enter a name");
    else
    {
      // make a new ScoreTable object
      setScoreBoard(prevUsers => {
    const existingPlayer = prevUsers.find(user => user.name === username);

    if (existingPlayer) {
      return prevUsers;
    } else {
      const newPlayer = new ScoreTable(username, 0);
      return [...prevUsers, newPlayer];
    }
  });
      setPage("game");
    }
  };
  const scoreTable = () => {
    if(table == false)
      setTable(true);
    else setTable(false);
  }

  return (
    <div className="userName">
      <h2>Ready for War</h2>
      <input
        type="text"
        value={username}
        placeholder="Enter your name"
        onChange={(e) => setUsername(e.target.value)}
      />
      <br /><br />
      <button onClick={startGame}>Start</button>
      <br />
      <br />
      <button onClick={scoreTable}>Score Table</button>
      {table && (
        <div className="scoreBoard">
          <h1>Score Table</h1>
          {[...scoreBoard] 
            .sort((a, b) => b.score - a.score) 
            .map((player, i) => (
              <div key={i} className="score">
                <p>{player.name}-{player.score}</p>
              </div>
            ))}
        </div>
      )}

    </div>
  );
}

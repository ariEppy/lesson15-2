import React, { useEffect, useState, useRef } from "react";
import "./Winners.css"

export default function WinnerPage({ winner, setPage, totalUser, setTotalUser, totalComp, setTotalComp, scoreBoard, setScoreBoard }) {
  const [winOrLose, setWinOrLose] = useState("");
  const firstRender = useRef(true); 

  useEffect(() => {
    if (firstRender.current) {
      if (winner === "Computer") {
        setTotalComp(prev => prev + 1);
        setWinOrLose("lose");
      } else {
        setTotalUser(prev => prev + 1);
        setWinOrLose("win");
      }
      firstRender.current = false; 
    }
  }, []);

  const goToUser = () => {
    // update the scoreboard list if the user won
    if(totalUser> totalComp)
    {
      setScoreBoard(prevArray =>
            prevArray.map(user =>
              user.name === winner
                ? { ...user, score: user.score + 1 }
                : user
            )
          );
    }
    
    setTotalUser(0);
    setTotalComp(0);
    setPage("username")
  }

  return (
    <div>
      <button onClick={goToUser}>x</button>
      <h1>{winOrLose}</h1>
      <p className="score">{totalUser} - {totalComp}</p>
      <br /><br />
      <button onClick={() => setPage("game")}>Again?</button>
    </div>
  );
}

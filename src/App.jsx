import React, { useState, useEffect } from "react";
import UsernamePage from "./components/UserName";
import GamePage from "./components/Game";
import WinnerPage from "./components/Winners";

export default function App() {
  const [username, setUsername] = useState(""); 
  const [page, setPage] = useState("username"); 
  const [winner, setWinner] = useState("");
  const [totalUser, setTotalUser] = useState(0);
  const [totalComp, setTotalComp] = useState(0); 
  const [scoreBoard, setScoreBoard] = useState([]);


  return (
    <div>
      {page === "username" && (
        <UsernamePage
          username={username}
          setUsername={setUsername}
          setPage={setPage}
          scoreBoard = {scoreBoard}
          setScoreBoard = {setScoreBoard}
        />
      )}
      {page === "game" && (
        <GamePage
          username={username}
          setPage={setPage}
          setWinner={setWinner}
        />
      )}
      {page === "winner" && (
        <WinnerPage
          winner={winner}
          setPage={setPage}
          totalUser = {totalUser}
          setTotalUser = {setTotalUser}
          totalComp = {totalComp}
          setTotalComp = {setTotalComp}
          scoreBoard = {scoreBoard}
          setScoreBoard = {setScoreBoard}
     
        />
      )}
    </div>
  );
}

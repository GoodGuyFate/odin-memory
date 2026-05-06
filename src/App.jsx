import { useState, useEffect, useRef } from "react";
import "./App.css";
import Header from "./components/Header";
import GameBoard from "./components/Gameboard";
import Footer from "./components/Footer";

const url =
  "https://ddragon.leagueoflegends.com/cdn/15.8.1/data/en_US/champion.json";

function shuffle(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export default function App() {
  const [champions, setChampions] = useState([]); // the 12 cards
  const [score, setScore] = useState(0);
  const [best, setBest] = useState(localStorage.getItem("best") || 0);
  const clicked = useRef(new Set());

  useEffect(() => {
    async function fetchChampions() {
      const res = await fetch(url);
      const data = await res.json();
      const allChampions = Object.values(data.data);
      const picked = shuffle(allChampions).slice(0, 12);
      setChampions(picked);
    }
    fetchChampions();
  }, []);

  useEffect(() => {
    localStorage.setItem("best", String(best));
  }, [best]);

  function clickHandler(championID) {
    if (clicked.current.has(championID)) {
      clicked.current.clear();
      setScore(0);
      setChampions(shuffle(champions));
    } else {
      clicked.current.add(championID);
      setScore((prevScore) => prevScore + 1);
      setChampions(shuffle(champions));
      if (score + 1 > best) {
        setBest(score + 1);
      }
    }
  }

  return (
    <div className="app">
      <Header score={score} best={best} />
      <main>
        <GameBoard champions={champions} onCardClick={clickHandler} />
      </main>
      <Footer />
    </div>
  );
}

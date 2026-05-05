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
  const [best, setBest] = useState(0);
  const clicked = useRef(new Set());

  console.log(champions);

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

  return (
    <div className="app">
      <Header />
      <main>
        <GameBoard champions={champions} />
      </main>
      <Footer />
    </div>
  );
}

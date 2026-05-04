import "./App.css";
import Header from "./components/Header";
import GameBoard from "./components/Gameboard";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <GameBoard />
      </main>
      <Footer />
    </div>
  );
}

import "../styles/Header.css";

export default function Header({ score = 0, best = 0 }) {
  return (
    <header className="header">
      <h1 className="header__title">
        <span>League of Legends</span> Memory Game
      </h1>

      <div className="header__scores">
        <div className="header__score-item">
          <span className="header__score-label">Score</span>
          <span className="header__score-value">{score}</span>
        </div>

        <div className="header__score-divider" />

        <div className="header__score-item">
          <span className="header__score-label">Best</span>
          <span className="header__score-value">{best}</span>
        </div>
      </div>
    </header>
  );
}

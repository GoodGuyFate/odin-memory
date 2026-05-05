import "../styles/Gameboard.css";

export default function Gameboard({ champions }) {
  return (
    <div className="gameboard">
      {champions.map((champion) => (
        <div key={champion.id} className="card">
          <img
            src={`https://ddragon.leagueoflegends.com/cdn/15.8.1/img/champion/${champion.id}.png`}
            alt={champion.id}
          />
        </div>
      ))}
    </div>
  );
}

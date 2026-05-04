import "../styles/Footer.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <span className="footer__text">© {year}</span>
      <span className="footer__separator">·</span>
      <a
        className="footer__link"
        href="https://github.com/Goodguyfate"
        target="_blank"
        rel="noopener noreferrer"
      >
        Goodguyfate
      </a>
      <span className="footer__separator">·</span>
      <span className="footer__text">Not affiliated with Riot Games</span>
    </footer>
  );
}
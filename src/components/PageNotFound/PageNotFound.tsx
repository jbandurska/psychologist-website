import "./PageNotFound.css";

export default function PageNotFound() {
  return (
    <div className="page-not-found">
      <span className="error-message">Błąd 404</span>
      <span>nie znaleziono strony o podanym adresie</span>
    </div>
  );
}

import "./StaticPhoto.css";

export default function StaticPhoto() {
  return (
    <div
      className="static-background-photo"
      style={{
        backgroundImage: `url(/images/static_background.jpg)`,
      }}
    >
      <span className="quote">
        Podświadomość ma niezawodne sposoby na rozwiązywanie każdego problemu
      </span>
      <span className="author">~Joseph Murphy</span>
    </div>
  );
}

import "./PhotoHeader.css";

function PhotoHeader({
  title,
  subtitle,
  imageName,
}: {
  title: string;
  subtitle?: string;
  imageName: string;
}) {
  return (
    <div className="photo-header-wrapper">
      <div
        className="photo-header"
        style={{
          backgroundImage: `url(/images/${imageName})`,
        }}
      >
        <div className="title-wrapper">
          <h1>{title}</h1>
          {subtitle ? <h2>{subtitle}</h2> : null}
        </div>
      </div>
    </div>
  );
}

export default PhotoHeader;

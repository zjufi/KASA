import '../style/banner.scss';

function Banniere({ image, title = null }) {
  return (
    <div
      className="banner"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="overlay" />
      {title && <h1 className="banner-text">{title}</h1>}
    </div>

  );
}

export default Banniere;

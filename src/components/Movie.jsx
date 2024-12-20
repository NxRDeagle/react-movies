const Movie = ({ title, year, poster, type }) => {
  return (
    <div className="card">
      <div className="card-image waves-effect waves-block waves-light">
        {poster === 'N/A' ? (
          <img
            className="activator"
            src={`https://placehold.jp/24/cccccc/ffffff/300x400.png?text=${title}`}
          />
        ) : (
          <img className="activator movie_poster-image" src={poster} style={{ margin: '0 auto' }} />
        )}
      </div>
      <div className="card-content">
        <span className="card-title activator grey-text text-darken-4">{title}</span>
        <p>
          {year} <span className="right">{type}</span>
        </p>
      </div>
    </div>
  );
};

export default Movie;

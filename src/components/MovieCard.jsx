// Display a single movie entry with sensible fallbacks for incomplete data.
export default function MovieCard({
  movie: { title, vote_average, poster_path, release_date, original_language },
}) {
  return (
    <div className="movie-card">
      {/* Use TMDB poster when available; fallback image prevents broken UI */}
      <img
        src={
          poster_path
            ? `https://image.tmdb.org/t/p/w500/${poster_path}`
            : "/no-movie.png"
        }
        alt={title}
      />

      <div className="mt-4">
        <h3>{title}</h3>
        <div className="content">
          <div className="rating">
            <img src="star.svg" alt="Star Icon" />
            <p>{vote_average ? vote_average.toFixed(1) : "N/A"}</p>
          </div>

          {/* Language and release year stay visible even when rating is missing */}
          <span>•</span>
          <p className="lang">{original_language}</p>

          <span>•</span>
          <p className="year">
            {release_date ? release_date.split("-")[0] : "N/A"}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function MovieCard({ movie }) {
  return (
    <div>
      <p key={movie.id} className="text-white">
        {movie.title}
      </p>
    </div>
  );
}

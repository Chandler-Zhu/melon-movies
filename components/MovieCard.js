import Image from 'next/image';
import Link from 'next/link';

const MovieCard = ({ movie }) => {
  return (
    <Link href={`/movie/${movie.id}`} passHref>
      <div className="bg-white shadow-sm rounded-md flex flex-col cursor-pointer group relative overflow-hidden">
        <Image
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          width={700}
          height={800}
          className="rounded-t-md"
          alt={movie.title}
        />
        <div className="px-6 py-2 flex flex-col grow justify-center ">
          <h3 className="font-bold text-xl mb-1">{movie.title}</h3>
          <p className="text-gray-700 text-base mb-1 ">{movie.release_date}</p>
          <div className="absolute bottom-0 left-0 h-2 w-0 group-hover:w-full transition-all duration-300 bg-cyan-500"></div>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;

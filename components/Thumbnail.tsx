import Image from "next/image";
import { Movie } from "../typings";

interface Props {
  movie: Movie;
  //when using firebase
  //movie:Movie | Dovumentdata
}

function Thumbnail({ movie }: Props) {
  return (
    <div className="relative h-28 min-w-[180px] cursor-pointer transition duration-200 ease-out md:h-36 md:min-2-[260px] md:hover:scale-105">
      <Image
        src={`https://image.tmdb.org/t/p/w500${
          movie.backdrop_path || movie.poster_path
        }`}
        alt={movie.title}
        fill
        className="rounded-sm object-cover md:rounded"
      />
    </div>
  );
}

export default Thumbnail;

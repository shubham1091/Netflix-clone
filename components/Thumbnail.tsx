import Image from "next/image";
import { modalState, movieState } from "../atoms/modalAtom";
import { useRecoilState } from "recoil";
import { Movie } from "../typings";

interface Props {
  movie: Movie;
  //when using firebase
  //movie:Movie | Dovumentdata
}

function Thumbnail({ movie }: Props) {
  const [showModal, setShowModal] = useRecoilState(modalState);
  const [currentMovie, setCurrentMovie] = useRecoilState(movieState);

  return (
    <div
      className="relative h-28 min-w-[180px] cursor-pointer transition duration-200 ease-out md:h-36 md:min-2-[260px] md:hover:scale-105"
      onClick={() => {
        setCurrentMovie(movie);
        setShowModal(true);
      }}
    >
      <Image
        src={`https://image.tmdb.org/t/p/w500${
          movie.backdrop_path || movie.poster_path
        }`}
        alt={movie.title}
        fill
        className="rounded-sm object-cover md:rounded"
        style={{ objectFit: "cover" }}
      />
    </div>
  );
}

export default Thumbnail;

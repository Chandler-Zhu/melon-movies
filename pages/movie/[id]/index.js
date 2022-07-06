import axios from 'axios';
import Image from 'next/image';
import Meta from '../../../components/Meta';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { useRef, useState } from 'react';

import { useLocalStorage } from 'usehooks-ts';
import Swal from 'sweetalert2';

const SlRating = dynamic(
  () =>
    import('../../../node_modules/@shoelace-style/shoelace/dist/react').then(
      (mod) => mod.SlRating
    ),
  {
    ssr: false,
  }
);

import { server } from '../../../config';

const Movie = ({ movie }) => {
  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer);
      toast.addEventListener('mouseleave', Swal.resumeTimer);
    },
  });
  const ratingId = `rating_${movie.id}`;
  const success = useRef(null);
  const [rating, setRating] = useLocalStorage(ratingId, 0);
  const saveRating = (e) => {
    setRating(e.target.value);

    Toast.fire({
      icon: 'success',
      title: 'Your changes have been saved',
    });
  };
  return (
    <div className="relative container w-full h-screen pt-6 flex justify-center ">
      <Meta title={movie.title} />
      <div className="  mx-2 h-[75vh] gap-x-8 md:grid flex-col md:grid-cols-[6fr_4fr] grid-rows-[1fr_1fr_3fr_1fr_1fr_1fr] items-center content-start">
        <div className="md:absolute w-max mb-6 top-10 left-10 text-slate-500 group hover:text-slate-800">
          <Link href="/">
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 inline group-hover:-translate-x-1 duration-200"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              <span className="align-middle text-lg font-semibold ml-1  ">
                Back
              </span>
            </a>
          </Link>
        </div>
        <div className="[grid-row:2/7] col-start-1 mr-3 rounded-md md:ml-8">
          <Image
            src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
            width="1000"
            height="600"
            layout="responsive"
            objectFit="cover"
            alt={movie.title}
          />
        </div>
        <div className="col-start-2"></div>
        <div className="[grid-row:2/7] col-start-2 flex flex-col items-start">
          <h1 className="font-bold text-2xl mt-2 col-start-2  ">
            {movie.title}
          </h1>
          <p className="text-gray-800 text-md mt-6 col-start-2 w-[350px] ">
            {movie.overview}
          </p>
          <p className="mt-5 text-gray-600 text-sm col-start-2 self-start">
            Genres:{' '}
            <span className="font-bold">
              {movie.genres.map((genre) => genre.name).join(', ')}
            </span>
          </p>
          <p className="text-gray-600 text-sm mb-5 ">
            Release Date:{' '}
            <span className="font-bold">{movie.release_date}</span>
          </p>
          <div className=" self-center md:self-start">
            <p>How do you like this film ?</p>
            <div className="col-start-2 mt-2">
              <SlRating
                value={rating}
                onSlChange={(e) => saveRating(e)}
                precision={0.5}
                max={5}
                style={{ '--symbol-size': '2rem' }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export async function getStaticProps(context) {
  const { id } = context.params;
  const res = await axios(
    `${server}/${id}?api_key=${process.env.API_KEY}&language=en-US&page=1`
  );
  const movie = res.data;
  // const ratingId = `rating_${movie.id}`;

  return {
    props: { movie },
  };
}

export async function getStaticPaths() {
  const res = await axios(
    `${server}/popular?api_key=${process.env.API_KEY}&language=en-US&page=1`
  );
  const movies = res.data.results;

  const ids = movies.map((movie) => movie.id);
  const paths = ids.map((id) => ({ params: { id: id.toString() } }));

  return {
    paths,
    fallback: false,
  };
}

export default Movie;

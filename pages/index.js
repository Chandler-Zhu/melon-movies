import axios from 'axios';
import PopularMovie from '../components/PopularMovie';
import { server } from '../config';
import Head from 'next/head';
import { motion } from 'framer-motion';

export default function Home({ movies }) {
  return (
    <div className="bg-gray-700">
      <div
        className="flex flex-col items-center justify-center min-h-[60vh] bg-black"
        style={{
          'background-image':
            'linear-gradient(rgb(0 0 0 / 60%), rgb(0 0 0 / 60%)), url(/hero-bg.jpg)',
        }}
      >
        <Head>
          <title>Melon Movies</title>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap"
            rel="stylesheet"
          />

          <link
            rel="icon"
            type="image/svg+xml"
            href="/favicon.svg"
            sizes="any"
          ></link>
        </Head>

        <motion.main
          transition={{
            delay: 0.5,
            duration: 0.6,
            ease: [0.6, -0.05, 0.01, 0.99],
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="flex flex-col items-center justify-center flex-1 px-20 text-center"
        >
          <h1 className="text-5xl font-medium text-white max-w-lg tracking-wide">
            Unlimited movies, TV shows, and more.
          </h1>
          <h2 className="text-2xl text-white mt-4 mb-8">
            Watch anywhere. Cancel anytime.
          </h2>
          <p className="text-white text-lg">
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>
          <div className="flex mt-4">
            <input
              placeholder="Email address"
              className="bg-white p-4 min-w-[400px]"
            />
            <button className="flex items-center bg-cyan-500 text-white text-xl px-8">
              Get Started
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </motion.main>
      </div>
      <PopularMovie movies={movies.results} />
    </div>
  );
}

export async function getStaticProps() {
  const res = await axios(
    `${server}/popular?api_key=${process.env.API_KEY}&language=en-US&page=1`
  );
  const movies = res.data;

  return {
    props: { movies },
  };
}

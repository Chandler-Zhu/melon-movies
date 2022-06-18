import Meta from '../components/Meta';
import { motion } from 'framer-motion';

const contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="text-center mt-10"
    >
      <Meta title="Contact Me" />
      <h1 className="text-4xl font-bold">Contact Me</h1>
      <p className="mt-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 ml-auto inline-block"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
        email: chandlerzhu@yahoo.com
      </p>
      <p className="mt-4 mb-96">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 ml-auto inline-block"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
          />
        </svg>
        tel: 647-916-8863
      </p>
    </motion.div>
  );
};

export default contact;

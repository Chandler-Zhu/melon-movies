import Meta from '../components/Meta';
import { motion } from 'framer-motion';

const pricing = () => {
  return (
    <div className=" mt-10 mx-4 min-h-[700px] ">
      <Meta title="Pricing" />
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="text-4xl font-bold text-center "
      >
        Pricing Page
      </motion.h1>
      <div className="grid lg:grid-cols-3 mt-10 gap-12 lg:gap-8 max-w-6xl mx-auto">
        {pricingPlans.map((plan) => (
          <motion.div
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              delay: plan.delay,
              duration: 0.6,
              ease: [0.6, -0.05, 0.01, 0.99],
            }}
            className="border border-slate-200 shadow-lg p-8 rounded-2xl flex-col flex relative"
            key={plan.title}
            whileHover={{ scale: 1.01 }}
          >
            <h3 className="text-lg font-semibold">{plan.title}</h3>
            {plan.mostPopular && (
              <p className="absolute shadow-md rounded-full top-0 -translate-y-1/2 bg-cyan-500 text-sm tracking-wide font-semibold text-white px-3 py-0.5">
                Most Popular
              </p>
            )}
            <div className="mt-4 bg-slate-50 p-6 -mx-6 rounded-lg">
              <p className="text-sm font-semibold text-slate-500 flex items-center">
                <span>{plan.currency}</span>
                <span className="text-4xl text-slate-900 ml-3">
                  ${plan.price}
                </span>
                <span className="ml-1.5">{plan.frequency}</span>
              </p>
            </div>
            <ul className="mt-6 space-y-4 flex-1">
              {plan.features.map((feature) => (
                <li
                  key={feature}
                  className="text-sm text-slate-700 leading-6 flex"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-cyan-500 shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="ml-3">{feature}</span>
                </li>
              ))}
            </ul>
            <button
              className={`mt-8 text-center rounded-lg  px-6 py-4 w-full font-semibold leading-4 block ${
                plan.mostPopular
                  ? 'text-white bg-cyan-500 hover:bg-cyan-600 shadow-md'
                  : 'text-cyan-700 bg-cyan-50 hover:bg-cyan-100'
              }`}
            >
              {plan.cta}
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
export default pricing;
const pricingPlans = [
  {
    title: 'Basic',
    price: 9.99,
    delay: 0.2,
    currency: 'CAD',
    frequency: '/month',
    features: [
      '1 screen at the same time',
      '1 device to have downloads on',
      'Watch on your laptop, TV, phone or tablet with our free app',
      '1 ad break per hour',
    ],
    cta: 'Start your trial',
    mostPopular: false,
  },
  {
    title: 'Standard',
    price: 16.49,
    delay: 0.1,
    currency: 'CAD',
    frequency: '/month',
    features: [
      '2 screens at the same time',
      '2 devices to have downloads on',
      'Watch on your laptop, TV, phone or tablet with our free app',
      '1 ad break every 2 hours',
      'HD available',
    ],
    cta: 'Start your trial',
    mostPopular: true,
  },
  {
    title: 'Premium',
    price: 21.99,
    delay: 0.3,
    currency: 'CAD',
    frequency: '/month',
    features: [
      '4 screens at the same time',
      '4 devices to have downloads on',
      'Watch on your laptop, TV, phone or tablet with our free app',
      'No ads',
      'HD available',
      'Ultra HD available',
    ],
    cta: 'Start your trial',
    mostPopular: false,
  },
];

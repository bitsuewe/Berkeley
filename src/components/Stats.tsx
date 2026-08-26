import React from 'react';
import { motion } from 'framer-motion';
import { CountUp } from './CountUp';

export const Stats: React.FC = () => {
  const statsList = [
    { number: 500, label: 'Researchers & Staff', suffix: '+' },
    { number: 1200, label: 'Publications', suffix: '+' },
    { number: 150, label: 'Active Projects', suffix: '+' },
    { number: 80, label: 'Collaborating Institutions', suffix: '+' },
  ];

  return (
    <section className="bg-[#00313c] text-white py-16 border-t border-white/10 relative overflow-hidden select-none">
      <div className="max-w-[1180px] w-[90%] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 lg:divide-x divide-white/25">
        {statsList.map((stat, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false, margin: '-50px' }}
            transition={{
              duration: 0.7,
              delay: idx * 0.15,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            className="text-center px-6 py-6 group"
          >
            <div className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#77d5dc] mb-2 leading-none group-hover:scale-105 transition-transform duration-300">
              <CountUp to={stat.number} suffix={stat.suffix} duration={2.2} />
            </div>
            <div className="text-white/80 text-sm font-medium tracking-wide">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

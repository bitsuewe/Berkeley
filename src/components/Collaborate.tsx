import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export const Collaborate: React.FC = () => {
  const collabItems = [
    {
      icon: '◎',
      title: 'Work With Us',
      desc: 'Partner on cutting-edge research, technology transfer, and industrial innovation.',
      linkText: 'Apply Now',
      href: 'mailto:collaborate@berkeley-lab.edu',
    },
    {
      icon: '◇',
      title: 'Careers & Fellowships',
      desc: 'Explore postdoctoral fellowships, Ph.D. positions, and visiting scholar programs.',
      linkText: 'Explore Roles',
      href: '#people',
    },
    {
      icon: '✉',
      title: 'Contact Our Team',
      desc: 'Get in touch directly with Dr. Sewasew and our laboratory administration.',
      linkText: 'Send Email',
      href: 'mailto:contact@berkeley-lab.edu',
    },
  ];

  return (
    <section className="bg-[#f0f6f7] py-20 overflow-hidden" id="contact">
      <div className="max-w-[1180px] w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 items-start">

        {/* Main Title (Col 1 - 3 cols) */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, margin: '-50px' }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-3 space-y-3"
        >
          <div className="eyebrow">COLLABORATE WITH US</div>
          <h2 className="font-heading text-3xl font-extrabold text-[#102f38] leading-tight">
            Let's build the future together.
          </h2>
        </motion.div>

        {/* 3 Collab Items with Re-triggering Viewport Animation & Hover Elevation */}
        {collabItems.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: '-50px' }}
            transition={{ duration: 0.7, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-3 border-l-2 border-[#d4e0e2] pl-8 space-y-3 group hover:border-[#007681] transition-all duration-300 hover:-translate-y-1.5"
          >
            <div className="text-3xl text-[#007681] font-bold group-hover:scale-125 transition-transform duration-300 origin-left">
              {item.icon}
            </div>
            <h3 className="font-bold text-[#102f38] text-base group-hover:text-[#007681] transition-colors">
              {item.title}
            </h3>
            <p className="text-[#63666a] text-xs leading-relaxed">
              {item.desc}
            </p>
            <a href={item.href} className="text-link text-sm uppercase flex items-center gap-1.5 group-hover:text-[#007681] transition-colors">
              <span>{item.linkText}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
            </a>
          </motion.div>
        ))}

      </div>
    </section>
  );
};

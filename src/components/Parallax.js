import './Parallax.css';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const Parallax = ({ type }) => {
  //hooks
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ['0%', '500%']);
  const yBg = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

  return (
    <div>
      <div
        className={type === 'homeparallax' ? 'parallax-bg-1' : 'parallax-bg-2'}
        ref={ref}
      >
        <motion.h1 style={{ y: yText }}>
          {type === 'homeparallax' ? 'Hello World!' : 'Contact me!'}
        </motion.h1>
        <motion.div
          className={
            type === 'homeparallax'
              ? 'parallax-mountain-1'
              : 'parallax-mountain-2'
          }
        ></motion.div>
        <motion.div style={{ x: yBg }} className="parallax-stars"></motion.div>
      </div>
    </div>
  );
};

export default Parallax;

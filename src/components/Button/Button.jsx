import React from "react";
import { motion } from "framer-motion";
import styles from "./Button.module.css";

const DURATION = 0.3;
const STAGGER = 0.025;

const Button = ({ children, href }) => {
  const isString = typeof children === 'string';
  const splitChildren = isString ? children.split("") : [];

  return (
    <motion.div
      style={{
        padding: '5px',
        border: '1px solid black',
      }}
    >
      <motion.a
        initial="initial"
        whileHover="hovered"
        href={href}
        style={{
          position: 'relative',
          display: 'block',
          overflow: 'hidden',
          whiteSpace: 'nowrap',
          cursor: 'pointer',
          fontSize: 'var(--small-font-size)',
          fontWeight: 'var(--font-bold)',
          textTransform: 'uppercase',
        }}
        className={styles.button}
      >
        <div>
          {splitChildren.map((l, i) => (
            <motion.span
              variants={{
                initial: {
                  y: 0,
                },
                hovered: {
                  y: "-100%",
                },
              }}
              transition={{
                duration: DURATION,
                ease: "easeInOut",
                delay: STAGGER * i,
              }}
              style={{ display: 'inline-block' }}
              key={i}
            >
              {l}
            </motion.span>
          ))}
        </div>
        <div style={{ position: 'absolute', inset: 0 }}>
          {splitChildren.map((l, i) => (
            <motion.span
              variants={{
                initial: {
                  y: "100%",
                },
                hovered: {
                  y: 0,
                },
              }}
              transition={{
                duration: DURATION,
                ease: "easeInOut",
                delay: STAGGER * i,
              }}
              style={{ display: 'inline-block' }}
              key={i}
            >
              {l}
            </motion.span>
          ))}
        </div>
      </motion.a>
    </motion.div>
  );
};

export default Button;

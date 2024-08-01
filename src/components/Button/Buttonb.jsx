// Button.js
import React from "react";
import { motion } from "framer-motion";
import styles from "./Button.module.css";

const DURATION = 0.3;
const STAGGER = 0.025;

const Button = ({ children, href, onClick, target }) => {
  const childrenText = typeof children === 'string' ? children : children.toString();

  return (
    <motion.div style={{ marginBottom: '5px' }}>
      <motion.a
        initial="initial"
        whileHover="hovered"
        href={href}
        target={target}
        rel={target === "_blank" ? "noopener noreferrer" : undefined}
        onClick={onClick}
        style={{
          position: 'relative',
          display: 'block',
          overflow: 'hidden',
          whiteSpace: 'nowrap',
          cursor: 'pointer',
          fontSize: 'var(--small-font-size)',
          fontWeight: 'var(--font-bold)',
          textTransform: 'uppercase',
          color: 'inherit',  // Ensure the text color is inherited
          textDecoration: 'none'  // Remove underline
        }}
        className={styles.button}
      >
        <div>
          {childrenText.split("").map((l, i) => (
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
          {childrenText.split("").map((l, i) => (
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

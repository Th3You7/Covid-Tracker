import React from "react";
import { motion } from "framer-motion";
import img from "../../imgs/coronavirus1.png";
import classes from "./loading.module.css";
const Loading = () => {
  return (
    <div className={classes.container}>
      <motion.img
        src={img}
        alt="coronavirus"
        animate={{
          scale: [1, 1.4, 1.4, 1, 1],
          rotate: [0, 0, 270, 270, 0],
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          times: [0, 0.2, 0.5, 0.8, 1],
          loop: Infinity,
          repeatDelay: 1,
        }}
      />
    </div>
  );
};

export default Loading;

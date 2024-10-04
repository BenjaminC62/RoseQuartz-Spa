import React from "react";
import up from "../../../images/up.png";
import "./../../../styles/GoUp.css";
import { motion } from "framer-motion";

function GoUp() {
  const scrollTo = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <React.Fragment>
      <motion.div className="go-up">
        <img src={up} className="up-arrow" onClick={scrollTo} />
      </motion.div>
    </React.Fragment>
  );
}

export default GoUp;

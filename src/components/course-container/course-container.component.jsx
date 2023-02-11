import { motion } from "framer-motion";
import { fadeIn } from "../../utils/framer-motion/framer";
import "./course-container.styles.scss";

const CourseContainer = ({ children }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      variants={fadeIn("up", 0)}
      viewport={{ once: true }}
      className="course-container"
    >
      <h2 className="course-header">Our courses</h2>
      <p className="course-description">We offer interesting courses</p>
      <motion.div layout="position" className="course-wrapper">
        {children}
      </motion.div>
    </motion.div>
  );
};

export default CourseContainer;

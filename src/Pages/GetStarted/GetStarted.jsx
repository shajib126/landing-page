import "./GetStarted.css";
import { motion } from "framer-motion";
const GetStarted = () => {
  return (
    <motion.div initial={{opacity:0,x:-200,}} animate={{x:0}} whileInView={{opacity:1,x:0}} transition={{duration:0.5,delay:1}} id='get-started' className='get-started'>
      <div className="get-started-title">
        <iframe
          frameBorder="0"
          src="https://lottie.host/?file=8e8c9b0a-ef66-47d8-a603-1ff1cdb10bb7/Kau9ELuEw4.json"
        ></iframe>
        <h1>Let's Go !</h1>
      </div>
      <div className="btn-group">
        <motion.button
          whileHover={{ scale: 1.1 }}
          transition={{
            type: "spring",
            dumping: 3,
            stiffness: 250,
            duration: 1,
          }}
        >
          Get Started
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          transition={{
            type: "spring",
            dumping: 3,
            stiffness: 250,
            duration: 1,
          }}
        >
          Request For a Demo
        </motion.button>
      </div>
    </motion.div>
  );
};

export default GetStarted;

import React, { useState } from "react";
import "./Navbar.css";

import { motion, AnimatePresence } from "framer-motion";
const Navbar = () => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <nav>
      <motion.h1 animate={{ y: [10, 0, 0], opacity: [1, 0.5, 1],scale:[1.1,1] }} 
      transition={{ repeatType:"reverse",repeat:Infinity, duration: 2 }} >
        <motion.span animate={{scale:1.1}} transition={{type:'spring',duration:2,damping:3,repeat:Infinity,repeatType:'reverse'}} className="z">Z</motion.span> - SOFT
      </motion.h1>
      <div className="menu">
      <a href="#home">
                <i className="fa-solid fa-house"></i>
                Home
              </a>
              <a href="#services">
                <i className="fa-solid fa-list-check"></i>Services
              </a>
              <a href="#testimonials">
                <i className="fa-regular fa-face-smile"></i>Testimonials
              </a>
              <a href="#about">
                <i className="fa-solid fa-circle-info"></i>About Z-Soft
              </a>
              <a href="features">
                <i className="fa-solid fa-list"></i>Features
              </a>
              <a href="#benefits">
                <i className="fa-solid fa-coins"></i>Benefits
              </a>
              <a href="#get-started">
                <i className="fa-solid fa-play"></i>Get-Started
              </a>
              <a href="#products">
                <i className="fa-solid fa-shop"></i>Products
              </a>
              <a href="#contact">
                <i className="fa-regular fa-message"></i>Contact Us
              </a>
              <a href="#faq">
                <i className="fa-solid fa-circle-question"></i>FAQ
              </a>
      </div>
      {/* menu for mobile */}
      <div className="mobile-menu">
        {
          isVisible ? <i onClick={() => setIsVisible(false)} className="fa-solid fa-xmark"></i> :  <i
          onClick={() => setIsVisible(true)}
          className="fa-solid fa-bars"
        ></i>
        }
       
        <AnimatePresence initial={false}>
          {isVisible && (
            <motion.div key="modal" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} className="mobile-menu-list">
              <a href="#home">
                <i className="fa-solid fa-house"></i>
                Home
              </a>
              <a href="#services">
                <i className="fa-solid fa-list-check"></i>Services
              </a>
              <a href="#testimonials">
                <i className="fa-regular fa-face-smile"></i>Testimonials
              </a>
              <a href="#about">
                <i className="fa-solid fa-circle-info"></i>About Z-Soft
              </a>
              <a href="features">
                <i className="fa-solid fa-list"></i>Features
              </a>
              <a href="#benefits">
                <i className="fa-solid fa-coins"></i>Benefits
              </a>
              <a href="#get-started">
                <i className="fa-solid fa-play"></i>Get-Started
              </a>
              <a href="#products">
                <i className="fa-solid fa-shop"></i>Products
              </a>
              <a href="#contact">
                <i className="fa-regular fa-message"></i>Contact Us
              </a>
              <a href="#faq">
                <i className="fa-solid fa-circle-question"></i>FAQ
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;


import { motion, AnimatePresence } from "framer-motion";
import React, { useEffect, useState } from "react";

const navItems = ["Service", "Our Work", "About Us", "Insights", "Work"];

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // Scroll show/hide
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <AnimatePresence>
      {showNavbar && (
        <motion.div
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          exit={{ y: -100 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="fixed z-[999] w-full px-20 py-8 flex justify-between items-center bg-zinc-800 backdrop-blur-md"
        >
          {/* Logo */}
          <div className="logo">
            <img
              src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
              alt="Logo"
              className="w-[100px]"
            />
          </div>

          {/* Links */}
          <div className="links flex gap-10 font-[Neue_Montreal] relative">
            {navItems.map((item, index) => (
              <div
                key={index}
                className={`relative cursor-pointer pb-2 ${
                  index === 4 ? "ml-32" : ""
                }`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Text with upward lift */}
                <motion.span
                  className="text-lg capitalize font-light inline-block"
                  animate={{
                    y: hoveredIndex === index ? -5 : 0,
                  }}
                  transition={{ duration: 0.1 }}
                >
                  {item}
                </motion.span>

                {/* Underline stays fixed */}
                <motion.div
                  className="absolute left-0 bottom-0 h-[2px] bg-white"
                  initial={{ width: 0 }}
                  animate={{
                    width: hoveredIndex === index ? "100%" : "0%",
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                />
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Navbar;

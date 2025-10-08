// src/components/Hero.jsx
import React, { useState, useEffect } from "react";
import { motion as Motion } from "framer-motion";
import girlchild_two from "../assets/images/girlchild_two.png"; // ✅ Local image import

const Hero = () => {
  const [currentBgImage, setCurrentBgImage] = useState(0);

  // Background images for rotation
  const backgroundImages = [
    "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1887&q=80",
    "https://images.unsplash.com/photo-1536922246289-88c42f957773?auto=format&fit=crop&w=1880&q=80",
    "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=1727&q=80",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1887&q=80",
  ];

  // Rotate backgrounds every 5s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBgImage((prev) => (prev + 1) % backgroundImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  return (
    <Motion.div
      id="home"
      className="hero-modern"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* ====== Rotating Backgrounds ====== */}
      <div className="hero-background-images">
        {backgroundImages.map((image, index) => (
          <Motion.div
            key={index}
            className={`background-image ${
              index === currentBgImage ? "active" : ""
            }`}
            style={{ backgroundImage: `url(${image})` }}
            initial={{ opacity: 0 }}
            animate={{ opacity: index === currentBgImage ? 0.3 : 0 }}
            transition={{ duration: 1.5 }}
          />
        ))}
        <div className="background-overlay"></div>
      </div>

      {/* ====== Content Container ====== */}
      <div className="hero-container">
        {/* Left: Text content */}
        <div className="hero-left-content">
          <Motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hero-tagline"
          >
            EMPOWERING BLACK GIRLS WORLDWIDE
          </Motion.h1>

          <Motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="hero-main-title"
          >
            Black Girls
            <br />
            Change The World
          </Motion.h1>

          <Motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="hero-divider-modern"
          />

          <Motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="hero-description"
          >
            Celebrating the brilliance, resilience, and power of Black girls
            everywhere. We're building a future where every Black girl can lead,
            innovate, and thrive.
          </Motion.p>

          <Motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="hero-buttons-modern"
          >
            <Motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary-modern"
            >
              Join Our Sisterhood
            </Motion.button>
            <Motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary-modern"
            >
              Support Our Cause
            </Motion.button>
          </Motion.div>

          {/* Stats */}
          <Motion.div
            className="hero-stats"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            <div className="stat-item">
              <div className="stat-number">250K+</div>
              <div className="stat-label">Girls Empowered</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">50+</div>
              <div className="stat-label">Countries</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">95%</div>
              <div className="stat-label">Success Rate</div>
            </div>
          </Motion.div>
        </div>

        {/* ====== Right: Hero Image ====== */}
        <div className="hero-right-content">
          <Motion.div
            className="hero-main-figure"
            initial={{ scale: 0.8, opacity: 0, x: 50 }}
            animate={{ scale: 1, opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            {/* ✅ Local Image Used Here */}
            <img
              src={girlchild_two}
              alt="Confident Black Girl Standing Proud"
              className="hero-standing-image"
            />

          </Motion.div>
        </div>
      </div>

      {/* ====== Scroll Indicator ====== */}
      <Motion.div
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.5 }}
      >
        <div className="scroll-text">Scroll to Explore</div>
        <Motion.div
          className="scroll-arrow"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          ↓
        </Motion.div>
      </Motion.div>
    </Motion.div>
  );
};

export default Hero;

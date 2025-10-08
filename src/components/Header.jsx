// components/Header.jsx
import React, { useState, useEffect } from 'react';
import { motion as Motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Scrolled state for background change
      setIsScrolled(currentScrollY > 50);
      
      // Hide/show header on scroll
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest('.nav') && !event.target.closest('.menu-toggle')) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMenuOpen]);

  const navigationItems = [
    {
      name: "Home",
      href: "#home",
      type: "link"
    },
    {
      name: "Our Vision",
      href: "#vision",
      type: "link"
    },
    {
      name: "Programs",
      href: "#programs",
      type: "dropdown",
      items: [
        { name: "STEM Education", href: "#programs", icon: "🔬" },
        { name: "Leadership Academy", href: "#programs", icon: "👑" },
        { name: "Creative Arts", href: "#programs", icon: "🎨" },
        { name: "Health & Wellness", href: "#programs", icon: "💖" }
      ]
    },
    {
      name: "Impact",
      href: "#impact",
      type: "dropdown",
      items: [
        { name: "Success Stories", href: "#impact", icon: "🌟" },
        { name: "Global Reach", href: "#impact", icon: "🌍" },
        { name: "Research & Data", href: "#impact", icon: "📊" }
      ]
    },
    {
      name: "Get Involved",
      href: "#growth",
      type: "dropdown",
      items: [
        { name: "Volunteer", href: "#growth", icon: "🤝" },
        { name: "Donate", href: "#growth", icon: "💝" },
        { name: "Partnership", href: "#growth", icon: "🏢" },
        { name: "Careers", href: "#growth", icon: "💼" }
      ]
    },
    {
      name: "About",
      href: "#team",
      type: "link"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.3,
        ease: "easeIn"
      }
    }
  };

  const dropdownVariants = {
    hidden: {
      opacity: 0,
      y: 10,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.2,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      y: 10,
      scale: 0.95,
      transition: {
        duration: 0.15,
        ease: "easeIn"
      }
    }
  };

  return (
    <Motion.header
      className={`header ${isScrolled ? 'scrolled' : ''} ${!isVisible ? 'hidden' : ''}`}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className="container">
        {/* Logo Section */}
        <Motion.div
          className="logo-section"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <a href="#home" className="logo">
            <div className="logo-icon">
              <Motion.svg
                width="36"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
              >
                <path
                  d="M18 2L23 14L34 14L25 21L29 32L18 25L7 32L11 21L2 14L13 14L18 2Z"
                  fill="url(#logoGradient)"
                />
                <defs>
                  <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#8B5CF6" />
                    <stop offset="100%" stopColor="#EC4899" />
                  </linearGradient>
                </defs>
              </Motion.svg>
            </div>
            <div className="logo-text">
              <Motion.span
                className="logo-primary"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                GIRL CHILD
              </Motion.span>
              <Motion.span
                className="logo-secondary"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                EMPOWERMENT
              </Motion.span>
            </div>
          </a>
        </Motion.div>
        
        {/* Navigation */}
        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          <div className="nav-links">
            {navigationItems.map((item, index) => (
              <div
                key={item.name}
                className="nav-item"
                onMouseEnter={() => item.type === 'dropdown' && setActiveDropdown(item.name)}
                onMouseLeave={() => item.type === 'dropdown' && setActiveDropdown(null)}
              >
                {item.type === 'link' ? (
                  <Motion.a
                    href={item.href}
                    className="nav-link"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index }}
                    whileHover={{ y: -2 }}
                  >
                    <span className="link-text">{item.name}</span>
                    <span className="link-underline"></span>
                  </Motion.a>
                ) : (
                  <div className="nav-link dropdown-trigger">
                    <Motion.span
                      className="link-text"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 * index }}
                    >
                      {item.name}
                    </Motion.span>
                    <Motion.span
                      className="dropdown-arrow"
                      animate={{ rotate: activeDropdown === item.name ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      ▼
                    </Motion.span>
                    <span className="link-underline"></span>

                    {/* Dropdown Menu */}
                    <AnimatePresence>
                      {activeDropdown === item.name && (
                        <Motion.div
                          className="dropdown-menu"
                          variants={dropdownVariants}
                          initial="hidden"
                          animate="visible"
                          exit="exit"
                        >
                          {item.items.map((dropdownItem, dropdownIndex) => (
                            <Motion.a
                              key={dropdownItem.name}
                              href={dropdownItem.href}
                              className="dropdown-item"
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: dropdownIndex * 0.05 }}
                              whileHover={{ x: 5, backgroundColor: 'rgba(139, 92, 246, 0.1)' }}
                              onClick={() => {
                                setActiveDropdown(null);
                                setIsMenuOpen(false);
                              }}
                            >
                              <span className="dropdown-icon">{dropdownItem.icon}</span>
                              <span>{dropdownItem.name}</span>
                            </Motion.a>
                          ))}
                        </Motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                )}
              </div>
            ))}
          </div>
          
          {/* Call to Action Buttons */}
          <div className="nav-actions">
            <Motion.button
              className="cta-button secondary"
              whileHover={{ scale: 1.05, y: -1 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
            >
              <span className="button-icon">💝</span>
              Donate
            </Motion.button>
            <Motion.button
              className="cta-button primary"
              whileHover={{ 
                scale: 1.05,
                y: -1,
                boxShadow: "0 8px 25px rgba(139, 92, 246, 0.4)"
              }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
            >
              <span className="button-icon">🤝</span>
              Join Movement
            </Motion.button>
          </div>

          {/* Mobile Stats */}
          <div className="mobile-stats">
            <div className="stat">
              <div className="stat-number">250K+</div>
              <div className="stat-label">Girls Empowered</div>
            </div>
            <div className="stat">
              <div className="stat-number">50+</div>
              <div className="stat-label">Countries</div>
            </div>
          </div>
        </nav>

        {/* Mobile Menu Toggle */}
        <Motion.button 
          className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
          whileTap={{ scale: 0.9 }}
        >
          <Motion.span
            animate={isMenuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3 }}
          />
          <Motion.span
            animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
          <Motion.span
            animate={isMenuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3 }}
          />
        </Motion.button>
      </div>

      {/* Progress Bar */}
      <Motion.div
        className="progress-bar"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: isScrolled ? (window.scrollY / (document.body.scrollHeight - window.innerHeight)) : 0 }}
        transition={{ duration: 0.3 }}
      />
    </Motion.header>
  );
};

export default Header;
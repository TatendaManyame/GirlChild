// components/Team.jsx
import React, { useState, useRef } from 'react';
import { motion as Motion, AnimatePresence } from 'framer-motion';

const Team = () => {
  const [activeMember, setActiveMember] = useState(0);
  const scrollContainerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const teamData = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      role: "Founder & CEO",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      bio: "Former UN Education Advisor with 15+ years experience in girl child education. PhD in Educational Leadership from Harvard.",
      achievements: ["Led 50+ education initiatives", "Authored 3 books on girl empowerment", "UN Women Award 2022"],
      social: { linkedin: "#", twitter: "#" },
      stats: { projects: 50, countries: 25, impact: "1M+" }
    },
    {
      id: 2,
      name: "Maria Rodriguez",
      role: "Chief Operations Officer",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      bio: "Operations expert with background in scaling non-profits across Africa and Asia. MBA from Stanford Graduate School of Business.",
      achievements: ["Scaled operations to 30 countries", "Reduced costs by 40%", "Forbes 30 Under 30"],
      social: { linkedin: "#", twitter: "#" },
      stats: { projects: 35, countries: 30, impact: "750K" }
    },
    {
      id: 3,
      name: "Aisha Bello",
      role: "Director of Programs",
      image: "https://images.unsplash.com/photo-1536922246289-88c42f957773?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      bio: "Education specialist from Nigeria with focus on STEM education for girls. Masters in International Development from Oxford.",
      achievements: ["Developed STEM curriculum", "Trained 10,000 teachers", "Google Impact Challenge Winner"],
      social: { linkedin: "#", twitter: "#" },
      stats: { projects: 28, countries: 15, impact: "500K" }
    },
    {
      id: 4,
      name: "Dr. Chen Li",
      role: "Head of Research",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      bio: "Data scientist and researcher specializing in education impact measurement. PhD in Statistics from MIT.",
      achievements: ["Published 20+ research papers", "Developed impact framework", "World Bank Consultant"],
      social: { linkedin: "#", twitter: "#" },
      stats: { projects: 22, countries: 18, impact: "300K" }
    },
    {
      id: 5,
      name: "Elena Martinez",
      role: "Partnership Director",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      bio: "Strategic partnerships expert with corporate background. Former Director at Microsoft Philanthropies.",
      achievements: ["Secured $50M in funding", "Built 100+ partnerships", "Corporate Alliance Award"],
      social: { linkedin: "#", twitter: "#" },
      stats: { projects: 45, countries: 40, impact: "2M+" }
    },
    {
      id: 6,
      name: "Fatima Al-Mansoori",
      role: "Regional Director - MENA",
      image: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      bio: "Women's rights advocate from UAE with focus on Middle Eastern education reform. Masters in Gender Studies.",
      achievements: ["Expanded to 12 Arab nations", "Cultural adaptation expert", "Arab Women Award 2023"],
      social: { linkedin: "#", twitter: "#" },
      stats: { projects: 18, countries: 12, impact: "250K" }
    }
  ];

  const organizations = [
    { name: "UN Women", logo: "🏛️", partnership: "Strategic" },
    { name: "Google.org", logo: "🔍", partnership: "Technology" },
    { name: "World Bank", logo: "🌍", partnership: "Funding" },
    { name: "Microsoft", logo: "💻", partnership: "Technology" },
    { name: "Gates Foundation", logo: "🎯", partnership: "Research" },
    { name: "UNICEF", logo: "👶", partnership: "Implementation" },
    { name: "Mastercard Foundation", logo: "💳", partnership: "Scholarships" },
    { name: "African Union", logo: "🤝", partnership: "Regional" }
  ];

  // Horizontal scroll handlers
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  const scrollToMember = (index) => {
    setActiveMember(index);
    const container = scrollContainerRef.current;
    const member = container.children[index];
    const containerWidth = container.offsetWidth;
    const memberLeft = member.offsetLeft;
    const memberWidth = member.offsetWidth;
    
    container.scrollTo({
      left: memberLeft - (containerWidth - memberWidth) / 2,
      behavior: 'smooth'
    });
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="team" className="team-section">
      <div className="container">
        <Motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>Our Leadership Team</h2>
          <p>Visionary leaders driving the global movement for girl child empowerment</p>
        </Motion.div>

        {/* Team Members Horizontal Scroll */}
        <div className="team-scroll-container">
          <div 
            className="team-scroll-wrapper"
            ref={scrollContainerRef}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
          >
            {teamData.map((member, index) => (
              <Motion.div
                key={member.id}
                className={`team-member-card ${activeMember === index ? 'active' : ''}`}
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                onClick={() => scrollToMember(index)}
                whileHover={{ scale: activeMember === index ? 1 : 1.05 }}
              >
                <div className="member-image-container">
                  <img src={member.image} alt={member.name} className="member-image" />
                  <div className="member-overlay">
                    <div className="member-stats">
                      <div className="stat">
                        <span className="stat-number">{member.stats.projects}</span>
                        <span className="stat-label">Projects</span>
                      </div>
                      <div className="stat">
                        <span className="stat-number">{member.stats.countries}</span>
                        <span className="stat-label">Countries</span>
                      </div>
                      <div className="stat">
                        <span className="stat-number">{member.stats.impact}</span>
                        <span className="stat-label">Impact</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="member-info">
                  <h3>{member.name}</h3>
                  <p className="member-role">{member.role}</p>
                  <div className="member-achievements">
                    {member.achievements.slice(0, 2).map((achievement, i) => (
                      <span key={i} className="achievement-tag">🏆 {achievement}</span>
                    ))}
                  </div>
                </div>
              </Motion.div>
            ))}
          </div>

          {/* Scroll Indicators */}
          <div className="scroll-indicators">
            {teamData.map((_, index) => (
              <button
                key={index}
                className={`indicator ${activeMember === index ? 'active' : ''}`}
                onClick={() => scrollToMember(index)}
              />
            ))}
          </div>
        </div>

        {/* Active Member Details */}
        <AnimatePresence mode="wait">
          <Motion.div
            key={activeMember}
            className="member-details"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5 }}
          >
            <div className="details-content">
              <div className="details-main">
                <h3>{teamData[activeMember].name}</h3>
                <p className="details-role">{teamData[activeMember].role}</p>
                <p className="details-bio">{teamData[activeMember].bio}</p>
                
                <div className="achievements-grid">
                  {teamData[activeMember].achievements.map((achievement, index) => (
                    <Motion.div
                      key={index}
                      className="achievement-card"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <span className="achievement-icon">🎯</span>
                      <span>{achievement}</span>
                    </Motion.div>
                  ))}
                </div>

                <div className="social-links">
                  <Motion.a
                    href={teamData[activeMember].social.linkedin}
                    className="social-link"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    💼 LinkedIn
                  </Motion.a>
                  <Motion.a
                    href={teamData[activeMember].social.twitter}
                    className="social-link"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    🐦 Twitter
                  </Motion.a>
                </div>
              </div>

              <div className="details-stats">
                <Motion.div
                  className="stat-card"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <div className="stat-value">{teamData[activeMember].stats.projects}+</div>
                  <div className="stat-label">Projects Led</div>
                </Motion.div>
                <Motion.div
                  className="stat-card"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <div className="stat-value">{teamData[activeMember].stats.countries}</div>
                  <div className="stat-label">Countries</div>
                </Motion.div>
                <Motion.div
                  className="stat-card"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <div className="stat-value">{teamData[activeMember].stats.impact}</div>
                  <div className="stat-label">Girls Impacted</div>
                </Motion.div>
              </div>
            </div>
          </Motion.div>
        </AnimatePresence>

        {/* Partner Organizations */}
        <Motion.div
          className="partners-section"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h3>Trusted by Global Organizations</h3>
          <div className="partners-scroll">
            <div className="partners-track">
              {[...organizations, ...organizations].map((org, index) => (
                <Motion.div
                  key={index}
                  className="partner-card"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <div className="partner-logo">{org.logo}</div>
                  <div className="partner-info">
                    <h4>{org.name}</h4>
                    <span className="partnership-type">{org.partnership} Partner</span>
                  </div>
                </Motion.div>
              ))}
            </div>
          </div>
        </Motion.div>

        {/* Team Stats */}
        <Motion.div
          className="team-stats-overview"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="stats-grid">
            <Motion.div
              className="global-stat"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              viewport={{ once: true }}
            >
              <div className="stat-number">50+</div>
              <div className="stat-label">Team Members</div>
            </Motion.div>
            <Motion.div
              className="global-stat"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              viewport={{ once: true }}
            >
              <div className="stat-number">65</div>
              <div className="stat-label">Countries</div>
            </Motion.div>
            <Motion.div
              className="global-stat"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              viewport={{ once: true }}
            >
              <div className="stat-number">15+</div>
              <div className="stat-label">Years Experience</div>
            </Motion.div>
            <Motion.div
              className="global-stat"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 1.3 }}
              viewport={{ once: true }}
            >
              <div className="stat-number">95%</div>
              <div className="stat-label">Success Rate</div>
            </Motion.div>
          </div>
        </Motion.div>
      </div>
    </section>
  );
};

export default Team;
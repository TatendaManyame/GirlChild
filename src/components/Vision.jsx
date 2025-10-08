// components/Vision.jsx
import React from 'react';
import { motion as Motion } from 'framer-motion';

const Vision = () => {
  const visionPillars = [
    {
      icon: "👑",
      title: "Our Vision",
      description: "A world where every Black girl has equal opportunities to lead, innovate, and shape her future without limitations or barriers.",
      metrics: "5M+ girls empowered by 2030",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      color: "#8B5CF6"
    },
    {
      icon: "🎯",
      title: "Our Mission",
      description: "To dismantle systemic barriers through education, mentorship, and empowerment programs specifically designed for Black girls globally.",
      metrics: "100+ countries reached",
      image: "https://images.unsplash.com/photo-1536922246289-88c42f957773?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      color: "#EC4899"
    },
    {
      icon: "💝",
      title: "Our Values",
      description: "Excellence, Inclusion, Resilience, and Sisterhood guide our commitment to empowering every Black girl to reach her full potential.",
      metrics: "Girl-centered approach",
      image: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      color: "#06B6D4"
    }
  ];

  const impactStories = [
    {
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      name: "Amina, 15",
      location: "Nairobi, Kenya",
      story: "From dreaming of becoming a doctor to winning national science competitions with our STEM programs."
    },
    {
      image: "https://images.unsplash.com/photo-1516627145497-ae69578cf5d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      name: "Chiamaka, 17",
      location: "Lagos, Nigeria",
      story: "Our leadership academy helped her start a community project that now supports 200+ girls in her neighborhood."
    },
    {
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      name: "Brittany, 16",
      location: "Chicago, USA",
      story: "Through our mentorship program, she secured a full scholarship to study computer science at university."
    }
  ];

  return (
    <section id="vision" className="vision-section">
      <div className="container">
        <Motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
        </Motion.div>

        {/* Vision Pillars with Images */}
        <div className="vision-pillars">
          {visionPillars.map((pillar, index) => (
            <Motion.div
              key={index}
              className="vision-pillar"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="pillar-content">
                <div className="pillar-header">
                  <Motion.div
                    className="pillar-icon"
                    style={{ backgroundColor: pillar.color }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {pillar.icon}
                  </Motion.div>
                  <h3>{pillar.title}</h3>
                </div>
                <p>{pillar.description}</p>
                <Motion.div
                  className="vision-metric"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                  viewport={{ once: true }}
                  style={{ borderColor: pillar.color }}
                >
                  <span>{pillar.metrics}</span>
                </Motion.div>
              </div>
              <Motion.div
                className="pillar-image"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 + 0.1 }}
                viewport={{ once: true }}
              >
                <img src={pillar.image} alt={pillar.title} />
                <div 
                  className="image-overlay"
                  style={{ background: `linear-gradient(45deg, ${pillar.color}20, transparent)` }}
                />
              </Motion.div>
            </Motion.div>
          ))}
        </div>

        {/* Impact Stories */}
        <Motion.div
          className="impact-stories-section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3>Stories of Transformation</h3>
          <p>Real impact through the lives of Black girls we've empowered</p>
          
          <div className="stories-grid">
            {impactStories.map((story, index) => (
              <Motion.div
                key={index}
                className="story-card"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <div className="story-image">
                  <img src={story.image} alt={story.name} />
                  <div className="story-overlay">
                    <div className="story-location">📍 {story.location}</div>
                  </div>
                </div>
                <div className="story-content">
                  <h4>{story.name}</h4>
                  <p>{story.story}</p>
                  <Motion.div
                    className="success-badge"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.15 + 0.3 }}
                    viewport={{ once: true }}
                  >
                    🌟 Success Story
                  </Motion.div>
                </div>
              </Motion.div>
            ))}
          </div>
        </Motion.div>

        {/* Global Impact Stats */}
        <Motion.div
          className="vision-stats"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="stat-item">
            <Motion.div
              className="stat-circle"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              viewport={{ once: true }}
            >
              <Motion.h3
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.9 }}
                viewport={{ once: true }}
              >
                250K+
              </Motion.h3>
            </Motion.div>
            <p>Black Girls Educated</p>
          </div>
          <div className="stat-item">
            <Motion.div
              className="stat-circle"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <Motion.h3
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 1.0 }}
                viewport={{ once: true }}
              >
                50+
              </Motion.h3>
            </Motion.div>
            <p>Countries Reached</p>
          </div>
          <div className="stat-item">
            <Motion.div
              className="stat-circle"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              viewport={{ once: true }}
            >
              <Motion.h3
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 1.1 }}
                viewport={{ once: true }}
              >
                89%
              </Motion.h3>
            </Motion.div>
            <p>Success Rate</p>
          </div>
          <div className="stat-item">
            <Motion.div
              className="stat-circle"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 1.0 }}
              viewport={{ once: true }}
            >
              <Motion.h3
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 1.2 }}
                viewport={{ once: true }}
              >
                95%
              </Motion.h3>
            </Motion.div>
            <p>Confidence Boost</p>
          </div>
        </Motion.div>

        {/* Call to Action */}
        <Motion.div
          className="vision-cta"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="cta-content">
            <h3>Join Our Movement</h3>
            <p>Be part of creating a world where every Black girl can thrive, lead, and change her community</p>
            <Motion.button
              className="cta-button"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Support Our Vision
            </Motion.button>
          </div>
        </Motion.div>
      </div>
    </section>
  );
};

export default Vision;
// components/Challenges.jsx
import React from 'react';
import { motion as Motion } from 'framer-motion';

const Challenges = () => {
  const challenges = [
    {
      title: "Education Gap",
      description: "130 million girls worldwide are out of school, with Black girls facing disproportionate barriers to quality education and STEM opportunities.",
      statistic: "130M",
      subtitle: "Girls out of school",
      color: "#EF4444",
      image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      icon: "📚",
      impact: "Limited future opportunities",
      solutions: ["School infrastructure", "Digital learning", "Scholarships"]
    },
    {
      title: "Child Marriage",
      description: "12 million girls are married before age 18 each year, ending their education prematurely and limiting their life choices.",
      statistic: "12M",
      subtitle: "Child marriages yearly",
      color: "#F59E0B",
      image: "https://images.unsplash.com/photo-1516627145497-ae69578cf5d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      icon: "💔",
      impact: "Education interrupted",
      solutions: ["Awareness campaigns", "Legal protection", "Economic support"]
    },
    {
      title: "Gender-Based Violence",
      description: "1 in 3 women experience physical or sexual violence, with Black girls facing intersectional discrimination and safety concerns.",
      statistic: "1 in 3",
      subtitle: "Experience violence",
      color: "#8B5CF6",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      icon: "🚫",
      impact: "Psychological trauma",
      solutions: ["Safe spaces", "Counseling", "Self-defense training"]
    },
    {
      title: "Economic Exclusion",
      description: "Women earn 23% less than men globally, with Black women facing even greater economic disparities and limited opportunities.",
      statistic: "23%",
      subtitle: "Gender pay gap",
      color: "#EC4899",
      image: "https://images.unsplash.com/photo-1536922246289-88c42f957773?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      icon: "💼",
      impact: "Financial dependency",
      solutions: ["Vocational training", "Entrepreneurship", "Mentorship"]
    }
  ];

  const globalStats = [
    { number: "1 in 4", text: "Girls in developing countries not in school" },
    { number: "15M", text: "Girls of primary school age will never enter a classroom" },
    { number: "2/3", text: "Of illiterate adults are women" },
    { number: "90%", text: "Of countries have laws impeding women's economic opportunities" }
  ];

  return (
    <section id="challenges" className="challenges-section">
      <div className="container">
        <Motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>The Challenges Black Girls Face</h2>
          <p>Understanding the systemic barriers that prevent Black girls from reaching their full potential worldwide</p>
        </Motion.div>

        {/* Global Statistics Banner */}
        <Motion.div
          className="global-stats-banner"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="stats-grid">
            {globalStats.map((stat, index) => (
              <Motion.div
                key={index}
                className="global-stat"
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="stat-number">{stat.number}</div>
                <div className="stat-text">{stat.text}</div>
              </Motion.div>
            ))}
          </div>
        </Motion.div>

        {/* Main Challenges Grid */}
        <div className="challenges-grid">
          {challenges.map((challenge, index) => (
            <Motion.div
              key={index}
              className="challenge-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              {/* Challenge Image */}
              <Motion.div
                className="challenge-image"
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.15 + 0.1 }}
                viewport={{ once: true }}
              >
                <img src={challenge.image} alt={challenge.title} />
                <div 
                  className="image-overlay"
                  style={{ background: `linear-gradient(45deg, ${challenge.color}40, transparent)` }}
                />
                <Motion.div
                  className="challenge-icon"
                  style={{ backgroundColor: challenge.color }}
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.15 + 0.3 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  {challenge.icon}
                </Motion.div>
              </Motion.div>

              {/* Challenge Content */}
              <div className="challenge-content">
                <div className="challenge-header">
                  <Motion.div
                    className="challenge-stat"
                    style={{ color: challenge.color }}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.15 + 0.2 }}
                    viewport={{ once: true }}
                  >
                    {challenge.statistic}
                  </Motion.div>
                  <div className="challenge-subtitle">{challenge.subtitle}</div>
                </div>

                <h3>{challenge.title}</h3>
                <p>{challenge.description}</p>

                {/* Impact Indicator */}
                <Motion.div
                  className="impact-indicator"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.15 + 0.4 }}
                  viewport={{ once: true }}
                >
                  <span className="impact-icon">⚠️</span>
                  <span className="impact-text">{challenge.impact}</span>
                </Motion.div>

                {/* Progress Visualization */}
                <Motion.div
                  className="progress-container"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.15 + 0.5 }}
                  viewport={{ once: true }}
                >
                  <div className="progress-label">Issue Severity</div>
                  <div className="progress-bar">
                    <Motion.div
                      className="progress-fill"
                      style={{ backgroundColor: challenge.color }}
                      initial={{ width: 0 }}
                      whileInView={{ width: "85%" }}
                      transition={{ duration: 1, delay: index * 0.15 + 0.6 }}
                      viewport={{ once: true }}
                    />
                  </div>
                </Motion.div>

                {/* Solutions Preview */}
                <Motion.div
                  className="solutions-preview"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.15 + 0.7 }}
                  viewport={{ once: true }}
                >
                  <div className="solutions-label">Our Solutions:</div>
                  <div className="solutions-tags">
                    {challenge.solutions.map((solution, solIndex) => (
                      <Motion.span
                        key={solIndex}
                        className="solution-tag"
                        style={{ borderColor: challenge.color }}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: index * 0.15 + 0.8 + solIndex * 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.05, backgroundColor: `${challenge.color}20` }}
                      >
                        {solution}
                      </Motion.span>
                    ))}
                  </div>
                </Motion.div>
              </div>
            </Motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <Motion.div
          className="challenges-cta"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="cta-content">
            <h3>Together We Can Overcome These Challenges</h3>
            <p>Join our mission to break down barriers and create equal opportunities for every Black girl</p>
            <div className="cta-buttons">
              <Motion.button
                className="cta-button primary"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Take Action Now
              </Motion.button>
              <Motion.button
                className="cta-button secondary"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
              </Motion.button>
            </div>
          </div>
        </Motion.div>
      </div>
    </section>
  );
};

export default Challenges;
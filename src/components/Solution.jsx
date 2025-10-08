// components/Solution.jsx
import React, { useState } from 'react';
import { motion as Motion, AnimatePresence } from 'framer-motion';

const Solution = () => {
  const [activeSolution, setActiveSolution] = useState(0);

  const solutions = [
    {
      title: "Education Access",
      icon: "📚",
      description: "Providing quality education, scholarships, and learning resources to ensure every girl can learn and thrive.",
      features: [
        "School Infrastructure Development",
        "Digital Learning Platforms",
        "STEM Education Programs",
        "Vocational Training"
      ],
      impact: "85% enrollment increase",
      color: "#10B981"
    },
    {
      title: "Mentorship Programs",
      icon: "👥",
      description: "Connecting girls with successful women mentors to guide their personal and professional development.",
      features: [
        "Career Guidance Sessions",
        "Leadership Workshops",
        "Professional Networking",
        "Role Model Exposure"
      ],
      impact: "92% confidence boost",
      color: "#3B82F6"
    },
    {
      title: "Health & Safety",
      icon: "🏥",
      description: "Ensuring girls' physical and mental well-being through comprehensive health and protection programs.",
      features: [
        "Healthcare Services",
        "Mental Health Support",
        "Safety Training",
        "Nutrition Programs"
      ],
      impact: "78% health improvement",
      color: "#8B5CF6"
    },
    {
      title: "Economic Empowerment",
      icon: "💼",
      description: "Creating economic opportunities through skills training, entrepreneurship, and financial literacy.",
      features: [
        "Entrepreneurship Training",
        "Financial Literacy",
        "Job Placement",
        "Small Business Support"
      ],
      impact: "65% income increase",
      color: "#F59E0B"
    }
  ];

  return (
    <section id="solution" className="solution-section">
      <div className="container">
        <Motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>Our Comprehensive Solutions</h2>
          <p>Multi-faceted approaches to address the unique challenges faced by girls worldwide</p>
        </Motion.div>

        <div className="solutions-container">
          <div className="solutions-nav">
            {solutions.map((solution, index) => (
              <Motion.button
                key={index}
                className={`solution-tab ${activeSolution === index ? 'active' : ''}`}
                onClick={() => setActiveSolution(index)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{ '--accent-color': solution.color }}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <span className="solution-icon">{solution.icon}</span>
                <span className="solution-title">{solution.title}</span>
              </Motion.button>
            ))}
          </div>

          <div className="solutions-content">
            <AnimatePresence mode="wait">
              <Motion.div
                key={activeSolution}
                className="solution-detail"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
              >
                <div className="solution-info">
                  <h3>{solutions[activeSolution].title}</h3>
                  <p>{solutions[activeSolution].description}</p>
                  <div className="solution-features">
                    {solutions[activeSolution].features.map((feature, index) => (
                      <Motion.div
                        key={index}
                        className="feature-item"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <span className="feature-check">✓</span>
                        {feature}
                      </Motion.div>
                    ))}
                  </div>
                  <div className="solution-impact">
                    <Motion.span
                      className="impact-badge"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.5 }}
                      style={{ backgroundColor: solutions[activeSolution].color }}
                    >
                      {solutions[activeSolution].impact}
                    </Motion.span>
                  </div>
                </div>
                <div className="solution-visual">
                  <Motion.div
                    className="impact-chart"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <div className="chart-container">
                      <Motion.div
                        className="chart-bar"
                        initial={{ height: 0 }}
                        animate={{ height: "85%" }}
                        transition={{ duration: 1, delay: 0.3 }}
                        style={{ backgroundColor: solutions[activeSolution].color }}
                      />
                      <div className="chart-label">Impact</div>
                    </div>
                  </Motion.div>
                </div>
              </Motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;
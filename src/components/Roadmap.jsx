// components/Roadmap.jsx
import React, { useState } from 'react';
import { motion as Motion, AnimatePresence } from 'framer-motion';

const Roadmap = () => {
  const [activePhase, setActivePhase] = useState(0);

  const roadmapData = [
    {
      year: "2024",
      title: "Foundation & Expansion",
      status: "current",
      objectives: [
        "Launch digital learning platform",
        "Establish 50 new community centers",
        "Reach 100,000 girls directly",
        "Build corporate partnership network"
      ],
      metrics: {
        target: "100K",
        current: "45K",
        progress: 45
      },
      color: "#8B5CF6",
      achievements: [
        "Platform development completed",
        "25 centers operational",
        "45,000 girls enrolled"
      ]
    },
    {
      year: "2025",
      title: "Scale & Impact",
      status: "upcoming",
      objectives: [
        "Expand to 10 new countries",
        "Launch mentorship program",
        "Implement STEM curriculum",
        "Establish research institute"
      ],
      metrics: {
        target: "250K",
        current: "0",
        progress: 0
      },
      color: "#EC4899",
      achievements: []
    },
    {
      year: "2026",
      title: "Transformation & Leadership",
      status: "upcoming",
      objectives: [
        "Develop leadership academy",
        "Create economic empowerment fund",
        "Establish global advocacy network",
        "Launch alumni success program"
      ],
      metrics: {
        target: "500K",
        current: "0",
        progress: 0
      },
      color: "#06B6D4",
      achievements: []
    },
    {
      year: "2027+",
      title: "Sustainable Future",
      status: "future",
      objectives: [
        "Achieve financial sustainability",
        "Scale to 1M+ girls annually",
        "Influence global education policy",
        "Create self-sustaining ecosystem"
      ],
      metrics: {
        target: "1M+",
        current: "0",
        progress: 0
      },
      color: "#10B981",
      achievements: []
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
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
    <section id="roadmap" className="roadmap-section">
      <div className="container">
        <Motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>Strategic Roadmap</h2>
          <p>Our phased approach to transforming girl child education and empowerment globally</p>
        </Motion.div>

        <div className="roadmap-container">
          {/* Timeline Navigation */}
          <Motion.div
            className="timeline-nav"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {roadmapData.map((phase, index) => (
              <Motion.button
                key={index}
                className={`phase-indicator ${activePhase === index ? 'active' : ''} ${phase.status}`}
                onClick={() => setActivePhase(index)}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{ '--phase-color': phase.color }}
              >
                <div className="phase-marker">
                  <div className="marker-dot"></div>
                  {index < roadmapData.length - 1 && (
                    <div className="timeline-connector"></div>
                  )}
                </div>
                <div className="phase-info">
                  <span className="phase-year">{phase.year}</span>
                  <span className="phase-title">{phase.title}</span>
                </div>
              </Motion.button>
            ))}
          </Motion.div>

          {/* Phase Details */}
          <div className="phase-details-container">
            <AnimatePresence mode="wait">
              <Motion.div
                key={activePhase}
                className="phase-details"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
              >
                <div className="phase-header">
                  <div className="phase-status">
                    <span className={`status-badge ${roadmapData[activePhase].status}`}>
                      {roadmapData[activePhase].status === 'current' && '🟢 In Progress'}
                      {roadmapData[activePhase].status === 'upcoming' && '🟡 Upcoming'}
                      {roadmapData[activePhase].status === 'future' && '🔵 Future Vision'}
                    </span>
                  </div>
                  <h3>{roadmapData[activePhase].year} - {roadmapData[activePhase].title}</h3>
                  
                  {/* Progress Metrics */}
                  <div className="progress-metrics">
                    <div className="metric-card">
                      <div className="metric-value">
                        {roadmapData[activePhase].metrics.current}
                      </div>
                      <div className="metric-label">Current Reach</div>
                    </div>
                    <div className="metric-card">
                      <div className="metric-value">
                        {roadmapData[activePhase].metrics.target}
                      </div>
                      <div className="metric-label">Target</div>
                    </div>
                    <div className="progress-visual">
                      <div className="progress-text">
                        {roadmapData[activePhase].metrics.progress}% Complete
                      </div>
                      <div className="progress-bar">
                        <Motion.div
                          className="progress-fill"
                          style={{ backgroundColor: roadmapData[activePhase].color }}
                          initial={{ width: 0 }}
                          animate={{ width: `${roadmapData[activePhase].metrics.progress}%` }}
                          transition={{ duration: 1, delay: 0.3 }}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="phase-content">
                  {/* Objectives */}
                  <div className="objectives-section">
                    <h4>Key Objectives</h4>
                    <div className="objectives-grid">
                      {roadmapData[activePhase].objectives.map((objective, index) => (
                        <Motion.div
                          key={index}
                          className="objective-card"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          whileHover={{ scale: 1.02 }}
                        >
                          <div 
                            className="objective-icon"
                            style={{ backgroundColor: roadmapData[activePhase].color }}
                          >
                            {index + 1}
                          </div>
                          <p>{objective}</p>
                        </Motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Achievements */}
                  {roadmapData[activePhase].achievements.length > 0 && (
                    <div className="achievements-section">
                      <h4>Current Achievements</h4>
                      <div className="achievements-list">
                        {roadmapData[activePhase].achievements.map((achievement, index) => (
                          <Motion.div
                            key={index}
                            className="achievement-item"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
                          >
                            <span className="achievement-check">✅</span>
                            <span>{achievement}</span>
                          </Motion.div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Impact Visualization */}
                  <div className="impact-visualization">
                    <h4>Expected Impact</h4>
                    <div className="impact-metrics">
                      <Motion.div
                        className="impact-metric"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                      >
                        <div className="impact-value">85%</div>
                        <div className="impact-label">Education Access</div>
                      </Motion.div>
                      <Motion.div
                        className="impact-metric"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.6, delay: 1.0 }}
                      >
                        <div className="impact-value">70%</div>
                        <div className="impact-label">Leadership Skills</div>
                      </Motion.div>
                      <Motion.div
                        className="impact-metric"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.6, delay: 1.2 }}
                      >
                        <div className="impact-value">90%</div>
                        <div className="impact-label">Confidence Boost</div>
                      </Motion.div>
                    </div>
                  </div>
                </div>
              </Motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Global Timeline Overview */}
        <Motion.div
          className="timeline-overview"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <h3>Global Impact Timeline</h3>
          <div className="timeline-visual">
            {roadmapData.map((phase, index) => (
              <Motion.div
                key={index}
                className="timeline-phase"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div 
                  className="timeline-bubble"
                  style={{ backgroundColor: phase.color }}
                >
                  <span className="bubble-year">{phase.year}</span>
                  <span className="bubble-target">{phase.metrics.target}</span>
                </div>
                {index < roadmapData.length - 1 && (
                  <div className="timeline-arrow">→</div>
                )}
              </Motion.div>
            ))}
          </div>
        </Motion.div>
      </div>
    </section>
  );
};

export default Roadmap;
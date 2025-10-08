// components/Impact.jsx
import React from 'react';
import { motion as Motion } from 'framer-motion';

const Impact = () => {
  const impactData = {
    education: [
      { year: '2020', value: 45 },
      { year: '2021', value: 58 },
      { year: '2022', value: 67 },
      { year: '2023', value: 76 },
      { year: '2024', value: 85 }
    ],
    leadership: [
      { year: '2020', value: 38 },
      { year: '2021', value: 49 },
      { year: '2022', value: 57 },
      { year: '2023', value: 68 },
      { year: '2024', value: 79 }
    ],
    regions: [
      { name: 'Africa', value: 92, color: '#8B5CF6' },
      { name: 'Asia', value: 78, color: '#EC4899' },
      { name: 'Latin America', value: 85, color: '#06B6D4' },
      { name: 'Middle East', value: 74, color: '#10B981' }
    ]
  };


  return (
    <section id="impact" className="impact-section">
      <div className="container">
        <Motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>Measurable Impact</h2>
          <p>Transforming lives and communities through girl child empowerment</p>
        </Motion.div>

        <div className="impact-grid">
          <Motion.div
            className="impact-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3>Educational Progress</h3>
            <div className="bar-chart">
              {impactData.education.map((item, index) => (
                <div key={index} className="bar-container">
                  <Motion.div
                    className="bar"
                    initial={{ height: 0 }}
                    whileInView={{ height: `${item.value}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    style={{ backgroundColor: '#8B5CF6' }}
                  />
                  <span className="bar-label">{item.year}</span>
                  <span className="bar-value">{item.value}%</span>
                </div>
              ))}
            </div>
          </Motion.div>

          <Motion.div
            className="impact-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3>Leadership Growth</h3>
            <div className="line-chart">
              <svg width="100%" height="200" viewBox="0 0 400 200">
                <Motion.path
                  d="M0,200 L100,160 L200,140 L300,120 L400,100"
                  fill="none"
                  stroke="#EC4899"
                  strokeWidth="3"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  transition={{ duration: 1.5, delay: 0.5 }}
                  viewport={{ once: true }}
                />
                {impactData.leadership.map((point, index) => (
                  <Motion.circle
                    key={index}
                    cx={index * 100}
                    cy={200 - point.value * 2}
                    r="6"
                    fill="#EC4899"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                    viewport={{ once: true }}
                  />
                ))}
              </svg>
            </div>
          </Motion.div>

          <Motion.div
            className="impact-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <h3>Global Reach</h3>
            <div className="region-stats">
              {impactData.regions.map((region, index) => (
                <Motion.div
                  key={index}
                  className="region-item"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="region-info">
                    <span className="region-name">{region.name}</span>
                    <span className="region-value">{region.value}%</span>
                  </div>
                  <div className="region-bar">
                    <Motion.div
                      className="region-fill"
                      style={{ backgroundColor: region.color }}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${region.value}%` }}
                      transition={{ duration: 1, delay: 1 + index * 0.1 }}
                      viewport={{ once: true }}
                    />
                  </div>
                </Motion.div>
              ))}
            </div>
          </Motion.div>
        </div>    
        </div>
  
    </section>
  );
};

export default Impact;
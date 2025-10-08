// components/Growth.jsx
import React from 'react';
import { motion as Motion } from 'framer-motion';

const Growth = () => {
  const growthData = [
    {
      year: "2024",
      title: "Expansion Phase",
      description: "Scaling our operations to reach 50 new countries and establishing regional hubs across Africa, Asia, and Latin America.",
      metrics: {
        funding: "$25M",
        countries: "50+",
        girls: "500K"
      },
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      initiatives: [
        "Regional hub establishment",
        "Local partnership development",
        "Cultural adaptation programs"
      ]
    },
    {
      year: "2025",
      title: "Technology Integration",
      description: "Implementing advanced digital learning platforms and AI-powered mentorship programs to enhance scalability and impact measurement.",
      metrics: {
        funding: "$40M",
        countries: "75+",
        girls: "1M+"
      },
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      initiatives: [
        "Digital platform launch",
        "AI mentorship integration",
        "Real-time impact analytics"
      ]
    },
    {
      year: "2026",
      title: "Sustainable Model",
      description: "Transitioning to self-sustaining social enterprise model with diversified funding streams and local economic empowerment programs.",
      metrics: {
        funding: "$60M",
        countries: "100+",
        girls: "2M+"
      },
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      initiatives: [
        "Social enterprise launch",
        "Local business partnerships",
        "Sustainable funding model"
      ]
    }
  ];

  const fundingSources = [
    {
      type: "Foundation Grants",
      percentage: 45,
      amount: "$27M",
      color: "#8B5CF6"
    },
    {
      type: "Corporate Partnerships",
      percentage: 30,
      amount: "$18M",
      color: "#EC4899"
    },
    {
      type: "Individual Donors",
      percentage: 15,
      amount: "$9M",
      color: "#06B6D4"
    },
    {
      type: "Government Funding",
      percentage: 10,
      amount: "$6M",
      color: "#10B981"
    }
  ];

  return (
    <section id="growth" className="growth-section">
      <div className="container">
        <Motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>Strategic Growth & Funding</h2>
          <p>Sustainable expansion plan to maximize our impact on girl child empowerment globally</p>
        </Motion.div>

        {/* Growth Timeline */}
        <div className="growth-timeline">
          {growthData.map((phase, index) => (
            <Motion.div
              key={index}
              className={`growth-phase ${index % 2 === 0 ? 'image-left' : 'image-right'}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="phase-image">
                <Motion.img
                  src={phase.image}
                  alt={phase.title}
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                />
              </div>
              
              <div className="phase-content">
                <Motion.div
                  className="phase-header"
                  initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 + 0.1 }}
                  viewport={{ once: true }}
                >
                  <span className="phase-year">{phase.year}</span>
                  <h3>{phase.title}</h3>
                  <p>{phase.description}</p>
                </Motion.div>

                {/* Metrics */}
                <Motion.div
                  className="phase-metrics"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 + 0.4 }}
                  viewport={{ once: true }}
                >
                  <div className="metric">
                    <div className="metric-value">{phase.metrics.funding}</div>
                    <div className="metric-label">Funding Goal</div>
                  </div>
                  <div className="metric">
                    <div className="metric-value">{phase.metrics.countries}</div>
                    <div className="metric-label">Countries</div>
                  </div>
                  <div className="metric">
                    <div className="metric-value">{phase.metrics.girls}</div>
                    <div className="metric-label">Girls Impacted</div>
                  </div>
                </Motion.div>

                {/* Initiatives */}
                <Motion.div
                  className="phase-initiatives"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.2 + 0.6 }}
                  viewport={{ once: true }}
                >
                  <h4>Key Initiatives</h4>
                  <div className="initiatives-list">
                    {phase.initiatives.map((initiative, i) => (
                      <Motion.div
                        key={i}
                        className="initiative-item"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.2 + 0.7 + i * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <span className="initiative-check">✓</span>
                        {initiative}
                      </Motion.div>
                    ))}
                  </div>
                </Motion.div>
              </div>
            </Motion.div>
          ))}
        </div>

        {/* Funding Breakdown */}
        <Motion.div
          className="funding-section"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="funding-content">
            <div className="funding-info">
              <h3>Funding Strategy & Allocation</h3>
              <p>Our diversified funding approach ensures sustainable growth while maximizing impact per dollar spent.</p>
              
              <div className="funding-stats">
                <div className="funding-stat">
                  <div className="stat-number">$60M</div>
                  <div className="stat-label">Total Funding Goal</div>
                </div>
                <div className="funding-stat">
                  <div className="stat-number">85%</div>
                  <div className="stat-label">Direct Program Allocation</div>
                </div>
                <div className="funding-stat">
                  <div className="stat-number">15%</div>
                  <div className="stat-label">Operational Costs</div>
                </div>
              </div>
            </div>

            <div className="funding-visual">
              <h4>Funding Sources</h4>
              <div className="funding-chart">
                {fundingSources.map((source, index) => (
                  <Motion.div
                    key={index}
                    className="funding-source"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="source-bar">
                      <Motion.div
                        className="bar-fill"
                        style={{ backgroundColor: source.color }}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${source.percentage}%` }}
                        transition={{ duration: 1, delay: 0.8 + index * 0.1 }}
                        viewport={{ once: true }}
                      />
                    </div>
                    <div className="source-info">
                      <span className="source-type">{source.type}</span>
                      <span className="source-amount">{source.amount} ({source.percentage}%)</span>
                    </div>
                  </Motion.div>
                ))}
              </div>
            </div>
          </div>
        </Motion.div>

        {/* Call to Action */}
        <Motion.div
          className="growth-cta"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="cta-content">
            <h3>Join Our Growth Journey</h3>
            <p>Be part of our mission to empower 2 million girls by 2026 through strategic partnerships and funding.</p>
            <div className="cta-buttons">
              <Motion.button
                className="cta-button primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Become a Partner
              </Motion.button>
              <Motion.button
                className="cta-button secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Download Investment Deck
              </Motion.button>
            </div>
          </div>
        </Motion.div>
      </div>
    </section>
  );
};

export default Growth;
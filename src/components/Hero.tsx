import React from 'react'

const Hero: React.FC = () => {
  return (
    <section className="hero">
      {/* Background gradient */}
      <div className="hero-bg"></div>
      
      {/* Animated background elements */}
      <div className="hero-elements">
        <div className="hero-element-1"></div>
        <div className="hero-element-2"></div>
      </div>
      
      <div className="hero-content">
        <div className="hero-badge">
          Pirate Agent - CS370 by Noah Khomer final project
        </div>
        
        <h1 className="hero-title">
          Pirate Intelligent Agent
        </h1>
        
        <p className="hero-description">
          A deep Q-learning implementation that teaches a pirate agent to navigate mazes and find treasure using reinforcement learning and neural networks.
        </p>
        
        <div className="hero-buttons">
          <a href="#overview" className="btn btn-primary">
            Explore Project
          </a>
          <a href="#code" className="btn btn-secondary">
            View Code
          </a>
        </div>
        
        <div className="hero-stats">
          <div className="hero-stat">
            <div className="hero-stat-value text-accent-primary">8x8</div>
            <div className="hero-stat-label">Maze Size</div>
          </div>
          <div className="hero-stat">
            <div className="hero-stat-value text-accent-secondary">200</div>
            <div className="hero-stat-label">Training Epochs</div>
          </div>
          <div className="hero-stat">
            <div className="hero-stat-value text-success">90%+</div>
            <div className="hero-stat-label">Win Rate</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

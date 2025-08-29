import React from 'react'

const ProjectSection: React.FC = () => {
  return (
    <section id="project" className="section project-section">
      <div className="container">
        <h2 className="section-title">🏴‍☠️ What I Built</h2>
        
        <div className="project-content">
          <div className="project-description">
            <h3>Pirate Agent - AI Maze Navigation</h3>
            <p>
              I developed an intelligent agent using reinforcement learning that can navigate through complex mazes. 
              The pirate agent learns to find optimal paths from a starting position to a treasure (goal) while avoiding obstacles.
            </p>
            
            <div className="key-features">
              <h4>Key Features:</h4>
              <ul>
                <li>Reinforcement learning algorithm (Q-learning)</li>
                <li>Dynamic maze generation and visualization</li>
                <li>Real-time pathfinding visualization</li>
                <li>Training progress monitoring</li>
                <li>Performance metrics and analysis</li>
              </ul>
            </div>
          </div>
          
          <div className="project-achievements">
            <h3>What It Achieved</h3>
            <div className="achievements-grid">
              <div className="achievement-card">
                <div className="achievement-icon">🎯</div>
                <h4>Efficient Navigation</h4>
                <p>Agent learns optimal paths through various maze configurations</p>
              </div>
              
              <div className="achievement-card">
                <div className="achievement-icon">🧠</div>
                <h4>Learning Capability</h4>
                <p>Improves performance over time through experience and training</p>
              </div>
              
              <div className="achievement-card">
                <div className="achievement-icon">⚡</div>
                <h4>Fast Convergence</h4>
                <p>Quickly adapts to new maze layouts and finds solutions</p>
              </div>
              
              <div className="achievement-card">
                <div className="achievement-icon">📊</div>
                <h4>Performance Metrics</h4>
                <p>Comprehensive tracking of learning progress and success rates</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProjectSection

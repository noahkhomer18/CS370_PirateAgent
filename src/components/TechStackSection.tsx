import React from 'react'

const TechStackSection: React.FC = () => {
  return (
    <section id="tech" className="section tech-stack-section">
      <div className="container">
        <h2 className="section-title">⚙️ Training Parameters & Tech Stack</h2>
        
        <div className="tech-content">
          <div className="tech-grid">
            <div className="tech-section">
              <h3>🧠 Training Parameters</h3>
              <div className="compact-buttons">
                <span className="compact-tech">📊 Epoch: Training cycles</span>
                <span className="compact-tech">🎓 Learning Rate: 0.1-0.5</span>
                <span className="compact-tech">🔮 Discount Factor: Future rewards</span>
                <span className="compact-tech">🎲 Epsilon: 1.0→0.01</span>
              </div>
            </div>
            
            <div className="tech-section">
              <h3>🤖 AI & ML</h3>
              <div className="compact-buttons">
                <span className="compact-tech">Reinforcement Learning</span>
                <span className="compact-tech">Q-Learning</span>
                <span className="compact-tech">Markov Decision Process</span>
              </div>
            </div>
            
            <div className="tech-section">
              <h3>💻 Backend</h3>
              <div className="compact-buttons">
                <span className="compact-tech">Python</span>
                <span className="compact-tech">NumPy</span>
                <span className="compact-tech">Matplotlib</span>
                <span className="compact-tech">Pandas</span>
              </div>
            </div>
            
            <div className="tech-section">
              <h3>🌐 Frontend</h3>
              <div className="compact-buttons">
                <span className="compact-tech">React</span>
                <span className="compact-tech">TypeScript</span>
                <span className="compact-tech">CSS3</span>
                <span className="compact-tech">Vite</span>
              </div>
            </div>
            
            <div className="tech-section">
              <h3>🎯 Algorithms</h3>
              <div className="compact-buttons">
                <span className="compact-tech">Q-Table</span>
                <span className="compact-tech">Grid World</span>
                <span className="compact-tech">Epsilon-Greedy</span>
              </div>
            </div>
            
            <div className="tech-section">
              <h3>🛠️ Tools</h3>
              <div className="compact-buttons">
                <span className="compact-tech">npm</span>
                <span className="compact-tech">Git</span>
                <span className="compact-tech">VS Code</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TechStackSection

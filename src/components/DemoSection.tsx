import React, { useState } from 'react'

const DemoSection: React.FC = () => {
  const [isRunning, setIsRunning] = useState(false)
  const [currentStep, setCurrentStep] = useState(0)
  const [exploredCells, setExploredCells] = useState<Set<string>>(new Set())

  const runDemo = () => {
    setIsRunning(true)
    setCurrentStep(0)
    setExploredCells(new Set())
    
    // Define the path the agent will explore
    const explorationPath = [
      [0, 0], // Start position
      [1, 0], // Move down
      [2, 0], // Move down
      [2, 1], // Move right
      [2, 2], // Move right
      [2, 3], // Move right
      [2, 4], // Move right
      [1, 4], // Move up
      [0, 4]  // Move up to goal
    ]
    
    // Simulate the agent exploring the maze step by step
    explorationPath.forEach(([row, col], index) => {
      setTimeout(() => {
        setCurrentStep(index + 1)
        setExploredCells(prev => new Set([...prev, `${row}-${col}`]))
        
        if (index === explorationPath.length - 1) {
          // Final step - show completion
          setTimeout(() => {
            setIsRunning(false)
          }, 1000)
        }
      }, (index + 1) * 800)
    })
  }

  const getCellContent = (row: number, col: number) => {
    const cellKey = `${row}-${col}`
    
    if (row === 0 && col === 0) return { content: '🏴‍☠️', className: 'start' }
    if (row === 0 && col === 4) return { content: '💎', className: 'goal' }
    if (row === 0 && col === 1) return { content: '🧱', className: 'wall' }
    if (row === 1 && col === 1) return { content: '🧱', className: 'wall' }
    if (row === 1 && col === 3) return { content: '🧱', className: 'wall' }
    
    // Check if this cell has been explored by the agent
    if (exploredCells.has(cellKey)) {
      return { content: '🔴', className: 'explored' }
    }
    
    return { content: '⬜', className: 'path' }
  }

  return (
    <section id="demo" className="section demo-section">
      <div className="container">
        <h2 className="section-title">🎮 Run the Code & See Results</h2>
        
        <div className="demo-content">
          <div className="demo-controls">
            <h3>Interactive Demo</h3>
            <button 
              className={`demo-button ${isRunning ? 'running' : ''}`}
              onClick={runDemo}
              disabled={isRunning}
            >
              {isRunning ? 'Exploring...' : '🚀 Run Pirate Agent'}
            </button>
            
            {isRunning && (
              <div className="demo-status">
                <div className="status-bar">
                  <div 
                    className="status-progress" 
                    style={{width: `${(currentStep / 9) * 100}%`}}
                  ></div>
                </div>
                <p className="status-text">
                  {currentStep === 0 ? 'Ready to start...' : 
                   currentStep === 1 ? 'Starting exploration...' :
                   currentStep === 2 ? 'Moving through maze...' :
                   currentStep === 3 ? 'Exploring new paths...' :
                   currentStep === 4 ? 'Learning optimal route...' :
                   currentStep === 5 ? 'Discovering shortcuts...' :
                   currentStep === 6 ? 'Mapping the territory...' :
                   currentStep === 7 ? 'Almost there...' :
                   currentStep === 8 ? 'Path found! 🎯' :
                   'Exploration complete!'}
                </p>
              </div>
            )}
          </div>
          
          <div className="maze-visualization">
            <h3>Maze & Path Visualization</h3>
            <div className="maze-grid">
              {/* Dynamic maze representation */}
              {[0, 1, 2].map(row => (
                <div key={row} className="maze-row">
                  {[0, 1, 2, 3, 4].map(col => {
                    const { content, className } = getCellContent(row, col)
                    return (
                      <div key={col} className={`maze-cell ${className}`}>
                        {content}
                      </div>
                    )
                  })}
                </div>
              ))}
            </div>
            
            <div className="maze-legend">
              <div className="legend-item">
                <span className="legend-symbol">🏴‍☠️</span>
                <span>Pirate Agent (Start)</span>
              </div>
              <div className="legend-item">
                <span className="legend-symbol">💎</span>
                <span>Treasure (Goal)</span>
              </div>
              <div className="legend-item">
                <span className="legend-symbol">🧱</span>
                <span>Wall (Obstacle)</span>
              </div>
              <div className="legend-item">
                <span className="legend-symbol">🔴</span>
                <span>Explored Path</span>
              </div>
              <div className="legend-item">
                <span className="legend-symbol">⬜</span>
                <span>Unexplored</span>
              </div>
            </div>
          </div>
          

        </div>
      </div>
    </section>
  )
}

export default DemoSection

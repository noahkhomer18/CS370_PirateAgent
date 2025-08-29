import React from 'react'

const CodeSection: React.FC = () => {
  return (
    <section id="code" className="section code-section">
      <div className="container">
        <h2 className="section-title">💻 The Code</h2>
        
        <div className="code-content">
          <div className="code-explanation">
            <h3>How the Pirate Agent Works</h3>
            <p>
              The code implements a Q-learning reinforcement learning algorithm where the agent (pirate) learns to navigate 
              through a maze by exploring different actions and learning from rewards. Here's what the key components do:
            </p>
            
            <div className="code-components">
              <div className="component">
                <h4>🔍 State Representation</h4>
                <p>The agent's current position in the maze grid (x, y coordinates)</p>
              </div>
              
              <div className="component">
                <h4>🎮 Actions</h4>
                <p>Four possible movements: up, down, left, right</p>
              </div>
              
              <div className="component">
                <h4>🏆 Rewards</h4>
                <p>Positive reward for reaching the goal, negative for hitting walls</p>
              </div>
              
              <div className="component">
                <h4>🧠 Q-Table</h4>
                <p>Stores learned values for each state-action pair</p>
              </div>
            </div>
          </div>
          
          <div className="code-showcase">
            <h3>Core Algorithm</h3>
            <div className="code-block">
              <pre><code>{`# Q-Learning Update Rule
Q[state, action] = Q[state, action] + 
    learning_rate * (reward + 
    discount_factor * max(Q[next_state]) - 
    Q[state, action])

# Action Selection (ε-greedy)
if random() < epsilon:
    action = random_action()
else:
    action = argmax(Q[state])`}</code></pre>
            </div>
            
            <div className="code-features">
              <h4>Key Implementation Features:</h4>
              <ul>
                <li><strong>Epsilon-Greedy Strategy:</strong> Balances exploration vs exploitation</li>
                <li><strong>Dynamic Learning Rate:</strong> Adapts based on training progress</li>
                <li><strong>Experience Replay:</strong> Stores and learns from past experiences</li>
                <li><strong>Convergence Detection:</strong> Monitors when learning stabilizes</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CodeSection

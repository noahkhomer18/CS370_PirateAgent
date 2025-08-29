# 🏴‍☠️ Pirate Agent Frontend

A modern, interactive frontend showcase for the CS 370 Pirate Intelligent Agent project. Built with React, TypeScript, and a beautiful dark theme to demonstrate the Deep Q-Learning implementation.

## ✨ Features

- **Modern Dark Theme**: Sleek, professional design with custom CSS variables
- **Interactive Components**: Tabbed code showcase, animated maze visualization
- **Responsive Design**: Mobile-friendly layout that works on all devices
- **Code Highlighting**: Syntax-highlighted Python code snippets
- **Visual Learning**: Interactive maze visualization with agent movement
- **Performance Metrics**: Training results and learning progression charts

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd pirate-agent-frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## 🏗️ Project Structure

```
src/
├── components/          # React components
│   ├── Header.tsx      # Navigation header
│   ├── Hero.tsx        # Hero section with project title
│   ├── ProjectOverview.tsx  # Project description
│   ├── TechnicalDetails.tsx # AI algorithm explanation
│   ├── CodeShowcase.tsx     # Interactive code display
│   ├── MazeVisualization.tsx # Interactive maze demo
│   ├── Results.tsx     # Training results & metrics
│   └── Footer.tsx      # Project footer
├── App.tsx             # Main application component
├── main.tsx            # Application entry point
└── index.css           # Global styles and CSS variables
```

## 🎨 Design System

### Color Palette
- **Primary Background**: `#0a0a0a` (Deep Black)
- **Secondary Background**: `#1a1a1a` (Dark Gray)
- **Accent Primary**: `#00d4aa` (Teal)
- **Accent Secondary**: `#ff6b6b` (Coral)
- **Success**: `#00d4aa` (Teal)
- **Warning**: `#ffd93d` (Yellow)
- **Error**: `#ff6b6b` (Coral)

### Typography
- **Primary Font**: Inter (Modern, readable sans-serif)
- **Code Font**: JetBrains Mono (Developer-friendly monospace)

### Components
- **Cards**: Elevated containers with hover effects
- **Buttons**: Interactive elements with smooth transitions
- **Grid System**: Responsive layout system
- **Navigation**: Fixed header with smooth scrolling

## 🔧 Technologies Used

- **React 18**: Modern React with hooks and functional components
- **TypeScript**: Type-safe JavaScript development
- **Vite**: Fast build tool and development server
- **CSS3**: Custom CSS with CSS variables and modern features
- **Responsive Design**: Mobile-first approach with CSS Grid and Flexbox

## 📱 Responsive Design

The frontend is fully responsive and works on:
- Desktop computers (1200px+)
- Tablets (768px - 1199px)
- Mobile devices (320px - 767px)

## 🎯 Project Showcase Sections

1. **Hero Section**: Eye-catching introduction with project title and key metrics
2. **Project Overview**: Clear explanation of goals and AI approach
3. **Technical Details**: Deep dive into Deep Q-Learning algorithms
4. **Code Showcase**: Interactive tabs showing key code implementations
5. **Maze Visualization**: Interactive 8x8 maze with agent movement
6. **Results**: Training performance metrics and learning progression
7. **Footer**: Project information and navigation links

## 🚀 Performance Features

- **Lazy Loading**: Components load as needed
- **Optimized Images**: Efficient asset handling
- **Smooth Animations**: CSS transitions and hover effects
- **Fast Navigation**: Smooth scrolling between sections

## 🔍 Customization

### Adding New Sections
1. Create a new component in `src/components/`
2. Import and add it to `App.tsx`
3. Update navigation in `Header.tsx`

### Modifying Colors
Edit CSS variables in `src/index.css`:
```css
:root {
  --accent-primary: #your-color;
  --accent-secondary: #your-color;
}
```

### Adding Code Snippets
Update the `codeSnippets` object in `CodeShowcase.tsx`:
```typescript
const codeSnippets = {
  newSection: {
    title: 'New Section',
    description: 'Description here',
    code: `your code here`
  }
}
```

## 📄 License

This project is part of CS 370 coursework and is for educational purposes.

## 👨‍💻 Author

**Noah Khomer** - CS 370 Student
- Course: Introduction to Artificial Intelligence
- Project: Pirate Intelligent Agent with Deep Q-Learning

## 🤝 Contributing

This is an academic project, but suggestions for improvements are welcome!

## 📚 Related Resources

- [Deep Q-Learning Documentation](https://keras.io/examples/rl/deep_q_network_lunar_lander/)
- [Reinforcement Learning Basics](https://en.wikipedia.org/wiki/Reinforcement_learning)
- [Neural Network Architecture](https://keras.io/guides/sequential_model/)

---

Built with ❤️ for CS 370 - Introduction to Artificial Intelligence


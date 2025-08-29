import React, { useState, useEffect } from 'react'

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <nav className="header-nav">
          <div className="header-brand">
            <div className="header-logo">🏴‍☠️</div>
            <span className="header-title">Pirate Agent - CS370</span>
          </div>
          

        </nav>
      </div>
    </header>
  )
}

export default Header

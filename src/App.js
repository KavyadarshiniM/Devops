import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isLoading, setIsLoading] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1500);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight - windowHeight;
      const scrolled = (window.scrollY / documentHeight) * 100;
      setScrollProgress(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigateToPage = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (isLoading) {
    return (
      <div className="loader-container">
        <div className="loader-content">
          <div className="loader-logo">KEC × GUVI</div>
          <div className="loader-bar">
            <div className="loader-fill"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="App">
      <div className="scroll-progress" style={{ width: `${scrollProgress}%` }}></div>
      
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-brand">
            <div className="brand-logo">
              <span className="logo-k">K</span>
              <span className="logo-text">ONGU</span>
            </div>
            <div className="guvi-badge">× GUVI</div>
          </div>
          <div className="nav-links">
            <button 
              className={currentPage === 'home' ? 'active' : ''} 
              onClick={() => navigateToPage('home')}
            >
              Home
            </button>
            <button 
              className={currentPage === 'programs' ? 'active' : ''} 
              onClick={() => navigateToPage('programs')}
            >
              Programs
            </button>
          </div>
        </div>
      </nav>

      {currentPage === 'home' ? <HomePage /> : <ProgramsPage />}

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-grid">
            <div className="footer-section">
              <h3>Kongu Engineering College</h3>
              <p>Perundurai, Erode - 638060</p>
              <p>Tamil Nadu, India</p>
            </div>
            <div className="footer-section">
              <h3>Powered By</h3>
              <div className="guvi-footer-logo">GUVI</div>
              <p>IIT-M Research Park</p>
            </div>
            <div className="footer-section">
              <h3>Connect</h3>
              <p>info@kongu.edu</p>
              <p>+91 4294 226602</p>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© 2026 Kongu Engineering College. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function HomePage() {
  const stats = [
    { number: '75+', label: 'Years of Excellence' },
    { number: '10,000+', label: 'Alumni Network' },
    { number: '50+', label: 'Industry Partners' },
    { number: '100%', label: 'Placement Support' }
  ];

  const features = [
    {
      icon: '🎓',
      title: 'World-Class Education',
      description: 'AICTE approved programs with industry-aligned curriculum'
    },
    {
      icon: '💻',
      title: 'GUVI Integration',
      description: 'Cutting-edge tech learning platform powered by IIT-M'
    },
    {
      icon: '🏆',
      title: 'Excellence in Research',
      description: 'State-of-the-art labs and innovation centers'
    },
    {
      icon: '🌐',
      title: 'Global Opportunities',
      description: 'International collaborations and exchange programs'
    }
  ];

  return (
    <div className="page home-page">
      <section className="hero">
        <div className="hero-background">
          <div className="hero-pattern"></div>
          <div className="hero-gradient"></div>
        </div>
        <div className="hero-content">
          <div className="hero-text">
            <div className="hero-tag">Est. 1984 • AICTE Approved</div>
            <h1 className="hero-title">
              Engineering
              <span className="highlight"> Excellence</span>
              <br />
              Meets Innovation
            </h1>
            <p className="hero-subtitle">
              Kongu Engineering College partners with GUVI to deliver 
              world-class technical education that prepares you for the future
            </p>
            <div className="hero-cta">
              <button className="btn btn-primary">Explore Programs</button>
              <button className="btn btn-secondary">Campus Tour</button>
            </div>
          </div>
          <div className="hero-visual">
            <div className="visual-card card-1">
              <div className="card-icon">📚</div>
              <div className="card-text">15+ Departments</div>
            </div>
            <div className="visual-card card-2">
              <div className="card-icon">🔬</div>
              <div className="card-text">Research Labs</div>
            </div>
            <div className="visual-card card-3">
              <div className="card-icon">🌟</div>
              <div className="card-text">NAAC A+ Grade</div>
            </div>
          </div>
        </div>
      </section>

      <section className="stats-section">
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="features-section">
        <div className="section-header">
          <h2>Why Choose KEC?</h2>
          <p>Empowering tomorrow's innovators with excellence and opportunity</p>
        </div>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card" style={{ animationDelay: `${index * 0.15}s` }}>
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="partnership-section">
        <div className="partnership-content">
          <div className="partnership-visual">
            <div className="partnership-badge">
              <div className="badge-text">Powered By</div>
              <div className="badge-logo">GUVI</div>
              <div className="badge-subtext">IIT Madras Research Park</div>
            </div>
          </div>
          <div className="partnership-text">
            <h2>Learning Amplified with GUVI</h2>
            <p>
              Our partnership with GUVI brings cutting-edge technology education 
              directly to our students. Access industry-relevant courses, 
              certifications, and projects that complement your academic journey.
            </p>
            <ul className="partnership-benefits">
              <li>✓ Free access to premium courses</li>
              <li>✓ Industry-recognized certifications</li>
              <li>✓ Hands-on project experience</li>
              <li>✓ Career guidance and mentorship</li>
            </ul>
            <button className="btn btn-guvi">Explore GUVI Courses</button>
          </div>
        </div>
      </section>
    </div>
  );
}

function ProgramsPage() {
  const programs = [
    {
      category: 'Undergraduate Programs',
      courses: [
        { name: 'Computer Science & Engineering', duration: '4 Years', seats: 180 },
        { name: 'Electronics & Communication Engineering', duration: '4 Years', seats: 120 },
        { name: 'Mechanical Engineering', duration: '4 Years', seats: 120 },
        { name: 'Civil Engineering', duration: '4 Years', seats: 60 },
        { name: 'Artificial Intelligence & Data Science', duration: '4 Years', seats: 60 },
        { name: 'Information Technology', duration: '4 Years', seats: 120 }
      ]
    },
    {
      category: 'Postgraduate Programs',
      courses: [
        { name: 'M.E. Computer Science & Engineering', duration: '2 Years', seats: 18 },
        { name: 'M.E. VLSI Design', duration: '2 Years', seats: 18 },
        { name: 'M.Tech. CAD/CAM', duration: '2 Years', seats: 18 },
        { name: 'MBA', duration: '2 Years', seats: 60 }
      ]
    },
    {
      category: 'GUVI Certification Programs',
      courses: [
        { name: 'Full Stack Development', duration: '6 Months', badge: 'Popular' },
        { name: 'Data Science & Machine Learning', duration: '6 Months', badge: 'New' },
        { name: 'Cloud Computing & DevOps', duration: '4 Months', badge: 'Trending' },
        { name: 'Cybersecurity Fundamentals', duration: '3 Months', badge: 'New' }
      ]
    }
  ];

  return (
    <div className="page programs-page">
      <section className="programs-hero">
        <div className="programs-hero-content">
          <h1>Acaaademic Programs</h1>
          <p>Choose from our diverse range of engineering programs and skill-based certifications</p>
        </div>
      </section>

      <section className="programs-content">
        {programs.map((programSection, idx) => (
          <div key={idx} className="program-section">
            <div className="program-header">
              <h2>{programSection.category}</h2>
              <div className="header-line"></div>
            </div>
            <div className="courses-grid">
              {programSection.courses.map((course, index) => (
                <div key={index} className="course-card" style={{ animationDelay: `${index * 0.1}s` }}>
                  {course.badge && <div className="course-badge">{course.badge}</div>}
                  <div className="course-info">
                    <h3>{course.name}</h3>
                    <div className="course-meta">
                      <span className="duration">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5"/>
                          <path d="M8 4V8L11 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                        </svg>
                        {course.duration}
                      </span>
                      {course.seats && (
                        <span className="seats">
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M8 8C9.65685 8 11 6.65685 11 5C11 3.34315 9.65685 2 8 2C6.34315 2 5 3.34315 5 5C5 6.65685 6.34315 8 8 8Z" stroke="currentColor" strokeWidth="1.5"/>
                            <path d="M3 14C3 11.7909 5.23858 10 8 10C10.7614 10 13 11.7909 13 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                          </svg>
                          {course.seats} Seats
                        </span>
                      )}
                    </div>
                  </div>
                  <button className="course-btn">Learn More →</button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      <section className="admission-cta">
        <div className="cta-content">
          <h2>Ready to Start Your Journey?</h2>
          <p>Applications for the 2026-27 academic year are now open</p>
          <div className="cta-buttons">
            <button className="btn btn-primary">Apply Now</button>
            <button className="btn btn-secondary">Download Brochure</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
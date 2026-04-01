import React, { useState, useEffect, useRef, useCallback } from 'react';

const heroSlides = [
  '/assets/event1.jpg',
  '/assets/event2.jpg',
  '/assets/event3.jpg',
  '/assets/event4.jpg',
  '/assets/gallery_event6.jpg',
];

const App = () => {
  const [navScrolled, setNavScrolled] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideInterval = useRef(null);

  const startSlideTimer = useCallback(() => {
    if (slideInterval.current) clearInterval(slideInterval.current);
    slideInterval.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 4000);
  }, []);

  useEffect(() => {
    startSlideTimer();
    return () => clearInterval(slideInterval.current);
  }, [startSlideTimer]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
    startSlideTimer();
  };

  useEffect(() => {
    const handleScroll = () => {
      setNavScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollIntoView = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="app">
      {/* News Ticker */}
      <div className="top-ticker">
        <div className="ticker-wrap">
          <div className="ticker-content">
            <span>🚀 Admissions are open for 2026 - 2027 at NEW INFANT JESUSEM HIGH SCHOOL! Join us for a journey of excellence. 🎓</span>
            <span>🚀 Admissions are open for 2026 - 2027 at NEW INFANT JESUSEM HIGH SCHOOL! Join us for a journey of excellence. 🎓</span>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className={`nav ${navScrolled ? 'scrolled' : ''}`}>
        <div className="container nav-content">
          <div className="logo-group">
            <img src="/assets/logo.png" alt="NIJ Logo" className="logo-img" />
            <span className="school-name">NEW INFANT JESUSEM HIGH SCHOOL</span>
          </div>
          <ul className="nav-links">
            <li onClick={() => scrollIntoView('home')}>Home</li>
            <li onClick={() => scrollIntoView('about')}>About Us</li>
            <li onClick={() => scrollIntoView('academic')}>Academics</li>
            <li onClick={() => scrollIntoView('facilitiy')}>Facilities</li>
            <li onClick={() => scrollIntoView('gallery')}>Gallery</li>
            <li onClick={() => scrollIntoView('contact')}>Contact</li>
          </ul>
          <button className="btn-primary" onClick={() => window.open('https://infantjesus.ourschoolerp.com/', '_blank')}>Login</button>
        </div>
      </nav>

      {/* Hero Section with Slideshow */}
      <section id="home" className="hero">
        {/* Slide backgrounds */}
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
            style={{ backgroundImage: `url('${slide}')` }}
          />
        ))}
        {/* Dark blue overlay — same on every slide */}
        <div className="hero-overlay" />



        {/* Navigation dots */}
        <div className="hero-dots">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              className={`hero-dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* About Us */}
      <section id="about" className="about">
        <div className="container about-grid">
          <div className="about-image-container">
            <img src="/assets/about_library.png" alt="Students in Library" className="about-img" />
            <div className="about-experience">
              <h3>20+</h3>
              <p>Years of Excellence</p>
            </div>
          </div>
          <div className="about-text">
            <span className="section-tag">About Our School</span>
            <h2 className="section-title">A Legacy of Quality Education</h2>
            <p>New Infant Jesusem High School is a premier educational institution dedicated to providing a transformative learning experience. Our curriculum focuses on academic rigor, character building, and innovative thinking.</p>
            <div className="stats-mini">
              <div className="stat-item">
                <h3>100%</h3>
                <p>Pass Rate</p>
              </div>
              <div className="stat-item">
                <h3>500+</h3>
                <p>Students</p>
              </div>
              <div className="stat-item">
                <h3>30+</h3>
                <p>Expert Faculty</p>
              </div>
            </div>
            <button className="btn-primary mt-4" onClick={() => scrollIntoView('academic')}>Read More</button>
          </div>
        </div>
      </section>

      {/* Academics */}
      <section id="academic" className="academic bg-light">
        <div className="container text-center">
          <span className="section-tag">Learning Path</span>
          <h2 className="section-title">Comprehensive Academic Programs</h2>
          <div className="academic-grid">
            <div className="academic-card">
              <div className="card-icon">📚</div>
              <h3>Primary Education</h3>
              <p>Laying a strong foundation through activity-based learning and discovery.</p>
            </div>
            <div className="academic-card">
              <div className="card-icon">🧪</div>
              <h3>Middle School</h3>
              <p>Deepening knowledge in sciences and humanities with hands-on labs.</p>
            </div>
            <div className="academic-card">
              <div className="card-icon">🎓</div>
              <h3>High School</h3>
              <p>Rigorous preparation for board exams and global career pathways.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section id="facilitiy" className="facilities">
        <div className="container">
          <div className="flex-between">
            <div>
              <span className="section-tag">Our Campus</span>
              <h2 className="section-title">World-Class Facilities</h2>
            </div>
            <button className="btn-outline dark" onClick={() => scrollIntoView('gallery')}>View Gallery</button>
          </div>
          <div className="facilities-grid">
            <div className="facility-card">
              <img src="/assets/facility_classroom.png" alt="Smart Classroom" />
              <div className="facility-overlay">
                <h3>Smart Classrooms</h3>
              </div>
            </div>
            <div className="facility-card">
              <img src="/assets/facility_sports.png" alt="Sports Grounds" />
              <div className="facility-overlay">
                <h3>Modern Sports Arena</h3>
              </div>
            </div>
            <div className="facility-card">
              <img src="/assets/gallery_lab.png" alt="Science Labs" />
              <div className="facility-overlay">
                <h3>Advanced Science Labs</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="gallery bg-light">
        <div className="container text-center">
          <span className="section-tag">Life at NIJ</span>
          <h2 className="section-title">Campus Highlights</h2>
          <div className="gallery-grid">
            <div className="gallery-item"><img src="/assets/gallery_event1.jpg" alt="Felicitation Ceremony" /></div>
            <div className="gallery-item"><img src="/assets/gallery_event2.jpg" alt="Panel Discussion" /></div>
            <div className="gallery-item"><img src="/assets/gallery_event3.jpg" alt="Staff Felicitation" /></div>
            <div className="gallery-item"><img src="/assets/gallery_event4.jpg" alt="Award Presentation" /></div>
            <div className="gallery-item"><img src="/assets/gallery_event5.jpg" alt="Student Achievement" /></div>
            <div className="gallery-item"><img src="/assets/gallery_event6.jpg" alt="Staff Group Photo" /></div>
            <div className="gallery-item"><img src="/assets/gallery_event7.jpg" alt="Bouquet Presentation" /></div>
            <div className="gallery-item"><img src="/assets/gallery_event8.jpg" alt="Handshake Ceremony" /></div>
            <div className="gallery-item"><img src="/assets/gallery_event9.jpg" alt="Teachers Felicitation" /></div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="contact">
        <div className="container contact-grid">
          <div className="contact-info">
            <span className="section-tag">Reach Out</span>
            <h2 className="section-title">Contact Information</h2>
            <div className="info-item">
              <span className="icon">📍</span>
              <p>GOVT HOSPITAL BACK SIDE, KALIGIRI POST AND MANDAL, SPSR NELLORE DT, AP - 524224</p>
            </div>
            <div className="info-item">
              <span className="icon">📞</span>
              <p>+91 98489 10100</p>
            </div>
            <div className="info-item">
              <span className="icon">✉️</span>
              <p>newinfantjesus@gmail.com</p>
            </div>

          </div>
          <div className="contact-form glass animate-fade">
            <h3>Send us a Message</h3>
            <form onSubmit={(e) => e.preventDefault()}>
              <input type="text" placeholder="Full Name" />
              <input type="email" placeholder="Email Address" />
              <textarea placeholder="Your Message" rows="4"></textarea>
              <button className="btn-primary w-full shadow-lg">Submit Now</button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer bg-dark">
        <div className="container footer-content">
          <div className="footer-brand">
            <div className="logo-group mb-4">
              <img src="/assets/logo.png" alt="NIJ Logo" className="logo-img" />
              <span className="school-name text-white">NEW INFANT JESUSEM HIGH SCHOOL</span>
            </div>
            <p>Empowering the next generation with knowledge, values, and skills for life.</p>
          </div>
          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li onClick={() => scrollIntoView('home')}>Home</li>
              <li onClick={() => scrollIntoView('about')}>About Us</li>
              <li onClick={() => scrollIntoView('academic')}>Academics</li>
              <li onClick={() => scrollIntoView('facilitiy')}>Facilities</li>
            </ul>
          </div>
          <div className="footer-newsletter">
            <h4>Newsletter</h4>
            <div className="newsletter-box">
              <input type="email" placeholder="Email Address" />
              <button>Subscribe</button>
            </div>
          </div>
        </div>
        <div className="footer-bottom text-center">
          <p>Copyright 2026 NEW INFANT JESUSEM HIGH SCHOOL - All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;

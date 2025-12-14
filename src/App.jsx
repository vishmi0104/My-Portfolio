import React, { useState, useEffect } from 'react';
import { Mail, Github, Linkedin, ExternalLink, Menu, X, Instagram } from 'lucide-react';

function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = () => {
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill in all fields!');
      return;
    }
    
    setShowSuccess(true);
    
    const mailtoLink = `mailto:vishmiishanka14@gmail.com?subject=Contact from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(formData.message + '\n\nFrom: ' + formData.email)}`;
    window.location.href = mailtoLink;
    
    setFormData({ name: '', email: '', message: '' });
    
    setTimeout(() => {
      setShowSuccess(false);
    }, 5000);
  };

  return (
    <div className="bg-slate-800/50 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-8">
      {showSuccess && (
        <div className="mb-6 p-4 bg-green-500/20 border border-green-500/50 rounded-lg text-green-400 text-center">
          ✓ Message sent successfully! I will reply soon.
        </div>
      )}
      
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium mb-2">Name</label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg focus:outline-none focus:border-cyan-500 transition-colors text-white"
            placeholder="Your Name"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-2">Email</label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg focus:outline-none focus:border-cyan-500 transition-colors text-white"
            placeholder="your@email.com"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-2">Message</label>
          <textarea
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            rows={5}
            className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg focus:outline-none focus:border-cyan-500 transition-colors resize-none text-white"
            placeholder="Tell me about your project..."
          />
        </div>
        
        <button 
          onClick={handleSubmit}
          type="button"
          className="w-full px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg font-semibold hover:scale-105 transition-transform flex items-center justify-center gap-2"
        >
          Send Message
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="22" y1="2" x2="11" y2="13"></line>
            <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
          </svg>
        </button>
      </div>
    </div>
  );
}

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const projects = [
    {
      title: 'Cinnamon Plantation System',
      description: 'A comprehensive management system for cinnamon plantations with inventory tracking, worker management, and production monitoring',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      github: 'https://github.com/vishmi0104/Cinnamon-Plantation-Management-System',
      demo: '#',
      image: 'cinamon.jpg'
    },
    {
      title: 'Health Insurance Management System',
      description: 'A comprehensive system for managing health insurance policies, claims processing, and customer records with secure authentication',
      tech: ['HTML', 'CSS', 'PHP', 'MySQL'],
      github: 'https://github.com/vishmi0104/Online-Health-Insurance-Management-System',
      demo: '#',
      image: 'health.png'
    },
    {
      title: 'Online Bus Ticket Reservation System',
      description: 'A web-based platform for booking bus tickets with seat selection, route management, and payment processing',
      tech: ['Java', 'JSP', 'Servlet', 'MySQL'],
      github: 'https://github.com/vishmi0104/Bus-Ticket-Reservation-System',
      demo: '#',
      image: 'bus.jpg'
    },
    {
      title: 'Mood Tracker Mobile App',
      description: 'A mobile application for tracking daily moods, emotions, and mental wellness with visualization charts and mood patterns analysis',
      tech: ['Kotlin', 'Android', 'Data Persistence'],
      github: 'https://github.com/vishmi0104/Mood-Tracker',
      demo: '#',
      image: 'mood.png'
    },
    {
      title: 'Money Map',
      description: 'A personal finance management app for tracking expenses, managing budgets, and visualizing spending patterns with insightful reports',
      tech: ['Kotlin', 'Android', 'Data Persistence'],
      github: 'https://github.com/vishmi0104/Self-Finance-App',
      demo: '#',
      image: 'money.png'
    },
  ];

  const skills = [
    'React.js', 'JavaScript', 'TypeScript', 'Node.js', 
    'Tailwind CSS', 'MongoDB', 'Express.js', 'Git',
    'REST APIs', 'Vite', 'Framer Motion', 'Firebase',
    'Java', 'MySQL', 'HTML', 'CSS', 'PHP', 'Kotlin'
  ];

  return (
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white min-h-screen">
      <nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-md z-50 border-b border-purple-500/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Portfolio
            </div>

            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'projects', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-colors ${
                    activeSection === section
                      ? 'text-purple-400'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>

            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-slate-800/95 backdrop-blur-md border-t border-purple-500/20">
            <div className="px-4 py-4 space-y-3">
              {['home', 'about', 'projects', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="block w-full text-left capitalize py-2 hover:text-purple-400 transition-colors"
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <p className="text-purple-400 text-sm md:text-base font-semibold mb-4 uppercase tracking-wide">
                Aspiring Full Stack Developer
              </p>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Hi, I'm<br />
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Vishmi Chandrasekara
                </span>
              </h1>
              <p className="text-lg text-gray-300 mb-8 max-w-xl">
                I build beautiful, functional web applications with modern technologies. 
                Focused on creating smooth, user-friendly digital experiences.
              </p>
              <div className="flex gap-4 flex-wrap">
                <button
                  onClick={() => scrollToSection('contact')}
                  className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg font-semibold hover:scale-105 transition-transform"
                >
                  Contact Me
                </button>
                <a
                  href="/vishmi_cv.pdf"
                  download="Vishmi_Chandrasekara_CV.pdf"
                  className="px-8 py-3 border-2 border-cyan-500 rounded-lg font-semibold hover:bg-cyan-500/10 transition-colors inline-block"
                >
                  Download CV
                </a>
              </div>
              <div className="flex gap-6 mt-8">
                <a href="https://github.com/vishmi0104" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">
                  <Github size={24} />
                </a>
                <a href="https://www.linkedin.com/in/vishmi-chandrasekara-9666832a4" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">
                  <Linkedin size={24} />
                </a>
                <a href="mailto:vishmiishanka14@gmail.com" className="hover:text-cyan-400 transition-colors">
                  <Mail size={24} />
                </a>
              </div>
            </div>

            <div className="flex justify-center md:justify-end">
              <div className="relative">
                <div className="w-96 h-96 md:w-[500px] md:h-[500px] rounded-full overflow-hidden border-4 border-cyan-500 shadow-2xl">
                  <img 
                    src="/profile.jpg" 
                    alt="Vishmi Chandrasekara" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -z-10 top-4 left-4 w-96 h-96 md:w-[500px] md:h-[500px] rounded-full bg-gradient-to-r from-cyan-500/30 to-blue-500/30 blur-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-full h-[500px] rounded-2xl overflow-hidden border-4 border-purple-500/30 shadow-2xl">
                <img 
                  src="/formal.jpg" 
                  alt="Vishmi Chandrasekara" 
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform"
                />
              </div>
            </div>
            <div className="space-y-6">
              <p className="text-lg text-gray-300">
                I'm an aspiring full stack developer pursuing a degree in Information Technology, specializing in Software Engineering at SLIIT. 
                With a passion for creating innovative solutions across web and mobile platforms, I specialize in building scalable applications 
                that solve real-world problems and deliver exceptional user experiences.
              </p>
              <p className="text-lg text-gray-300">
                My journey in software development has led me to work with diverse technologies including React, Java, 
                PHP, Kotlin, and various databases. I enjoy the challenge of bringing ideas to life through clean, 
                efficient code and I'm constantly exploring new technologies to expand my skill set.
              </p>
              <div className="pt-6">
                <h3 className="text-2xl font-semibold mb-4 text-purple-400">Skills & Technologies</h3>
                <div className="flex flex-wrap gap-3">
                  {skills.map((skill, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-purple-500/20 border border-purple-500/30 rounded-full text-sm hover:bg-purple-500/30 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-6xl mx-auto w-full">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-6 hover:border-purple-500 transition-all hover:scale-105 group"
              >
                <div className="mb-4 h-48 rounded-xl overflow-hidden bg-slate-700">
                  <img 
                    src={`/${project.image}`}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-purple-500/20 rounded-full text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
                  >
                    <Github size={18} />
                    <span>Code</span>
                  </a>
                  {project.demo !== '#' && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
                    >
                      <ExternalLink size={18} />
                      <span>Demo</span>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-6xl mx-auto w-full">
          <div className="text-center mb-12">
            <p className="text-cyan-400 text-sm font-semibold mb-2 uppercase tracking-wide">Get In Touch</p>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Contact Me
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">Let's Talk About Your Project</h3>
              <p className="text-gray-400 mb-8">
                I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="text-cyan-400" size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Mail me</p>
                    <a href="mailto:vishmiishanka14@gmail.com" className="text-lg hover:text-cyan-400 transition-colors">
                      vishmiishanka14@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="text-cyan-400" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Call me</p>
                    <a href="tel:+94705726025" className="text-lg hover:text-cyan-400 transition-colors">
                      +94 70 572 6025
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="text-cyan-400" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Location</p>
                    <p className="text-lg">Colombo, Sri Lanka</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-4 mt-8">
                <a href="https://github.com/vishmi0104" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-slate-800 hover:bg-cyan-500/20 rounded-lg flex items-center justify-center transition-colors">
                  <Github size={20} />
                </a>
                <a href="https://www.linkedin.com/in/vishmi-chandrasekara-9666832a4" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-slate-800 hover:bg-cyan-500/20 rounded-lg flex items-center justify-center transition-colors">
                  <Linkedin size={20} />
                </a>
                <a href="https://www.instagram.com/vishmi_ishanka?igsh=MWQ5bmloM21vajdjYg==&utm_source=ig_contact_invite" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-slate-800 hover:bg-cyan-500/20 rounded-lg flex items-center justify-center transition-colors">
                  <Instagram size={20} />
                </a>
              </div>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>

      <footer className="border-t border-purple-500/20 py-8 text-center text-gray-400">
        <p>&copy; 2025 Vishmi Chandrasekara. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
import type { Variants } from 'framer-motion';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Mail, ExternalLink, Moon, Sun, Menu, X, Code, Palette, Zap } from 'lucide-react';

const myVariant = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: 'spring', stiffness: 100 },
  },
} as any;



const Portfolio: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  const projects = [
    {
      title: "React Projects",
      description: "A curated set of small to mid-size projects built with React, showcasing my front-end development skills. These projects explore various aspects of modern React development including component architecture, state management (React Hooks, Context API), API integration, form handling, and responsive design.",
      tech: ["React", "JavaScript",],
      github: "https://github.com/Joel-Romail/React_Projects",
      demo: "https://github.com/Joel-Romail/React_Projects"
    },
    {
      title: "AI Pose Coach Human Pose Estimation + Exercise Feedback",
      description: "This project uses MediaPipe, OpenCV, and Python to analyze human movement from exercise videos (e.g., squats).",
      tech: ["Python", "MediaPipe", "OpenCV", "Matplotlib, Seaborn"],
      github: "https://github.com/Joel-Romail/Computer_Vision_Model",
      demo: "https://github.com/Joel-Romail/Computer_Vision_Model"
    },
    {
      title: "GoalCraft: Your Personal Achievement Dashboard",
      description: "Meet GoalCraft, a beautifully designed web application that transforms goal setting from a chore into an inspiring journey. I built GoalCraft to provide a simple, yet powerful, tool for anyone looking to organize their ambitions and visualize their progress.",
      tech: ["Next.js", "TypeScript", "React", "Tailwind CSS", "ShadCN UI"],
      github: "https://github.com/Joel-Romail/goal-app",
      demo: "https://github.com/Joel-Romail/goal-app"
    },
        {
      title: "EmotiQuote - AI-Powered Motivational Quote Application",
      description: "EmotiQuote is a web app designed to provide a moment of reflection and motivation, tailored to your emotional state. By selecting a mood, you receive a relevant quote, with an AI-powered backend working to ensure the suggestions are fresh and meaningful. I built this project to explore the integration of generative AI within a modern React-based web application, focusing on creating a seamless and personalized user experience. The app features a clean, accessible design, the ability to save your favorite quotes, and a theme switcher for your viewing comfort.",
      tech: ["Next.js (with React)", "TypeScript", "Tailwind CSS", "ShadCN UI", "Genkit with Google's Gemini models"],
      github: "https://github.com/Joel-Romail/my-next-app",
      demo: "https://github.com/Joel-Romail/my-next-app"
    },
    {
      title: "Affirma: Your Daily Dose of Positivity",
      description: "Affirma is a mindful web application designed to bring a moment of positivity and reflection to your day. Each day, users receive a new affirmation to inspire them. They can reflect on this affirmation in a private journal, which automatically saves their thoughts right in their browser. With a clean, calming interface and a dark/light mode toggle, Affirma provides a peaceful digital space for well-being.",
      tech: ["Next.js", "TypeScript", "React", "Tailwind CSS", "ShadCN UI"],
      github: "https://github.com/Joel-Romail/affirmation-app",
      demo: "https://github.com/Joel-Romail/affirmation-app"
    },
    {
      title: "SafePass: A Modern, Secure Password Manager",
      description: "SafePass is a testament to building secure, user-centric applications without compromising on privacy. It's a web-based password vault that runs entirely in your browser, ensuring that sensitive data like passwords never leaves your local machine. One of the standout features is the AI-powered password generator. By leveraging Genkit and the Google Gemini AI model, SafePass can generate incredibly strong and unique passwords tailored to specific security requirements. This project showcases my ability to integrate cutting-edge AI services into a practical, real-world application while prioritizing security and user privacy from the ground up.",
      tech: ["Next.js", "TypeScript", "React", "Tailwind CSS", "ShadCN UI"],
      github: "https://github.com/Joel-Romail/safe-pass",
      demo: "https://github.com/Joel-Romail/safe-pass"
    }
  ];

  const skills = [
    { name: "Frontend", icon: Code, color: "text-blue-500" },
    { name: "UI/UX", icon: Palette, color: "text-purple-500" },
    { name: "Performance", icon: Zap, color: "text-yellow-500" }
  ];

  const handleContactSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const message = formData.get('message') as string;
    
    const mailtoLink = `mailto:joial.danial@gmail..com?subject=Portfolio Contact from ${name}&body=From: ${name} (${email})%0A%0AMessage:%0A${message}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark bg-gray-900' : 'bg-white'}`}>
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${darkMode ? 'bg-gray-900/95' : 'bg-white/95'} backdrop-blur-md border-b ${darkMode ? 'border-gray-800' : 'border-gray-200'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}
            >
              Portfolio
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {['hero', 'about', 'projects', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-colors duration-200 ${
                    activeSection === section 
                      ? darkMode ? 'text-blue-400' : 'text-blue-600'
                      : darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {section === 'hero' ? 'Home' : section}
                </button>
              ))}
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`p-2 rounded-full transition-colors duration-200 ${
                  darkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-100'
                }`}
              >
                {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center space-x-2">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`p-2 rounded-full transition-colors duration-200 ${
                  darkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-100'
                }`}
              >
                {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`p-2 rounded-full transition-colors duration-200 ${
                  darkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-100'
                }`}
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className={`md:hidden border-t ${darkMode ? 'border-gray-800 bg-gray-900' : 'border-gray-200 bg-white'}`}
            >
              <div className="px-4 py-2 space-y-1">
                {['hero', 'about', 'projects', 'contact'].map((section) => (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className={`block w-full text-left px-3 py-2 rounded-md capitalize transition-colors duration-200 ${
                      activeSection === section 
                        ? darkMode ? 'bg-gray-800 text-blue-400' : 'bg-gray-100 text-blue-600'
                        : darkMode ? 'text-gray-300 hover:bg-gray-800 hover:text-white' : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                    }`}
                  >
                    {section === 'hero' ? 'Home' : section}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div
            variants={itemVariants}
            className="mb-8"
          >
            <div className={`w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-400 to-purple-600 p-1`}>
              <div className={`w-full h-full rounded-full ${darkMode ? 'bg-gray-900' : 'bg-white'} flex items-center justify-center`}>
                <div className="text-4xl font-bold bg-gradient-to-br from-blue-400 to-purple-600 bg-clip-text text-transparent">
                  JS
                </div>
              </div>
            </div>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className={`text-4xl md:text-6xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}
          >
            Hi, I'm <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">Joial Danyal</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className={`text-xl md:text-2xl mb-8 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}
          >
            Crafting Smart Experiences Through Code and Design
          </motion.p>

          <motion.p
            variants={itemVariants}
            className={`text-lg mb-12 max-w-2xl mx-auto ${darkMode ? 'text-gray-400' : 'text-gray-700'}`}
          >
            I’m a web developer passionate about creating intuitive interfaces and exploring how AI can enhance digital experiences.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button
              onClick={() => scrollToSection('projects')}
              className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200"
            >
              View My Work
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className={`px-8 py-3 border-2 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200 ${
                darkMode 
                  ? 'border-gray-600 text-gray-300 hover:bg-gray-800' 
                  : 'border-gray-300 text-gray-700 hover:bg-gray-50'
              }`}
            >
              Get In Touch
            </button>
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className={`text-3xl md:text-4xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              About Me
            </h2>
            <p className={`text-lg max-w-3xl mx-auto ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              I'm a self-taught developer with a passion for building modern web applications and exploring how machine learning—especially computer vision—can enhance user experiences. I work with tools like React, Next.js, TypeScript, and Python to bring ideas to life through clean, interactive interfaces. Along the way, I’ve built personal projects that combine strong frontend development with smart, data-driven features. I'm always learning, experimenting, and looking for opportunities to grow—feel free to check out my work or reach out to connect.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`p-6 rounded-2xl ${darkMode ? 'bg-gray-900' : 'bg-white'} shadow-lg hover:shadow-xl transition-shadow duration-200`}
              >
                <div className={`w-12 h-12 ${skill.color} mb-4`}>
                  <skill.icon className="w-full h-full" />
                </div>
                <h3 className={`text-xl font-semibold mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  {skill.name}
                </h3>
                <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  {skill.name === 'Frontend' && 'React, TypeScript, Next.js,'}
                  {skill.name === 'UI/UX' && 'Figma, Responsive Design'}
                  {skill.name === 'Performance' && ' Web Vitals'}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className={`text-3xl md:text-4xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Featured Projects
            </h2>
            <p className={`text-lg max-w-2xl mx-auto ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Here are some of my recent projects that showcase my skills and creativity.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`group rounded-2xl overflow-hidden ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105`}
              >
                <div className={`h-48 bg-gradient-to-br ${
                  index % 3 === 0 ? 'from-blue-400 to-purple-600' :
                  index % 3 === 1 ? 'from-green-400 to-blue-600' :
                  'from-purple-400 to-pink-600'
                } flex items-center justify-center`}>
                  <div className="text-white text-6xl font-bold opacity-20">
                    {project.title.split(' ').map(word => word[0]).join('')}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className={`text-xl font-semibold mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    {project.title}
                  </h3>
                  <p className={`mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className={`px-3 py-1 text-sm rounded-full ${
                          darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors duration-200 ${
                        darkMode ? 'bg-gray-700 hover:bg-gray-600 text-white' : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                      }`}
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-200"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Demo
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className={`text-3xl md:text-4xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Get In Touch
            </h2>
            <p className={`text-lg max-w-2xl mx-auto ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology.
            </p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            onSubmit={handleContactSubmit}
            className="space-y-6"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  className={`w-full px-4 py-3 rounded-lg border transition-colors duration-200 ${
                    darkMode 
                      ? 'bg-gray-700 border-gray-600 text-white focus:border-blue-500' 
                      : 'bg-white border-gray-300 text-gray-900 focus:border-blue-500'
                  } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50`}
                />
              </div>
              <div>
                <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  className={`w-full px-4 py-3 rounded-lg border transition-colors duration-200 ${
                    darkMode 
                      ? 'bg-gray-700 border-gray-600 text-white focus:border-blue-500' 
                      : 'bg-white border-gray-300 text-gray-900 focus:border-blue-500'
                  } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50`}
                />
              </div>
            </div>
            
            <div>
              <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Message
              </label>
              <textarea
                name="message"
                required
                rows={6}
                className={`w-full px-4 py-3 rounded-lg border transition-colors duration-200 ${
                  darkMode 
                    ? 'bg-gray-700 border-gray-600 text-white focus:border-blue-500' 
                    : 'bg-white border-gray-300 text-gray-900 focus:border-blue-500'
                } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50`}
              />
            </div>
            
            <div className="text-center">
              <button
                type="submit"
                className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200"
              >
                Send Message
              </button>
            </div>
          </motion.form>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-12 ${darkMode ? 'bg-gray-900' : 'bg-white'} border-t ${darkMode ? 'border-gray-800' : 'border-gray-200'}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className={`text-center md:text-left mb-6 md:mb-0 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              <p>&copy; 2024 Joial Danyal. All rights reserved.</p>
            </div>
            
            <div className="flex space-x-6">
              <motion.a
                href="https://github.com/Joel-Romail?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className={`p-3 rounded-full transition-colors duration-200 ${
                  darkMode ? 'hover:bg-gray-800 text-gray-400 hover:text-white' : 'hover:bg-gray-100 text-gray-600 hover:text-gray-900'
                }`}
              >
                <Github className="w-6 h-6" />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/joial-danyal-816aa2b0/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className={`p-3 rounded-full transition-colors duration-200 ${
                  darkMode ? 'hover:bg-gray-800 text-gray-400 hover:text-white' : 'hover:bg-gray-100 text-gray-600 hover:text-gray-900'
                }`}
              >
                <Linkedin className="w-6 h-6" />
              </motion.a>
              <motion.a
                href="mailto:joial.danial@gmail.com"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className={`p-3 rounded-full transition-colors duration-200 ${
                  darkMode ? 'hover:bg-gray-800 text-gray-400 hover:text-white' : 'hover:bg-gray-100 text-gray-600 hover:text-gray-900'
                }`}
              >
                <Mail className="w-6 h-6" />
              </motion.a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
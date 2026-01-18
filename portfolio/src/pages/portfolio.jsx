import React, { useState } from 'react';
import {
  Mail, Phone, MapPin, Github, Linkedin, Download, Menu, X,
  ExternalLink, Code, Terminal, Database, Cpu, Globe, Layers,
  Trophy, User, Send, ChevronRight, Award, Zap, Star
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Portfolio() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [projectFilter, setProjectFilter] = useState('major');

  const skills = {
    'Programming Languages': ['Python', 'JavaScript (ES6+)', 'SQL'],
    'Frameworks & Libraries': ['Django', 'Django REST Framework', 'React.js', 'Redux', 'Streamlit'],
    'Backend Technologies': ['Django Channels', 'WebSockets', 'Redis', 'Celery', 'JWT'],
    'Frontend Technologies': ['Tailwind CSS', 'Framer Motion', 'Three.js', 'Bootstrap', 'Matter.js', 'Semantic UI'],
    'Databases': ['PostgreSQL', 'Firebase', 'Mongodb'],
    'DevOps / Tools': ['Git', 'GitHub', 'AWS', 'Render', 'Cloudinary', 'VS Code', 'Figma', 'PythonAnywhere'],
    'AI / ML': ['Google Gemini API', 'OpenCV', 'MediaPipe', 'gTTS', 'PyMuPDF']
  };

  const majorProjects = [
    {
      name: 'NanoRide – Miniature Cars E-commerce',
      problem: 'Niche e-commerce platforms often lack professional-grade transaction security and inventory management.',
      role: 'Full Stack Developer',
      stack: ['Django', 'PostgreSQL', 'Razorpay', 'Cloudinary', 'Redis'],
      features: [
        'Razorpay integration with wallet systems and automated refunds',
        'Advanced multi-variant product filtering and real-time inventory management',
        'Admin dashboard with PDF/Excel analytics reporting'
      ],
      impact: 'Built a robust e-commerce engine handling secure transactions and complex product variations.',
      links: {
        github: 'https://github.com/sayyedrabeeh/NanoRide--Miniature-Cars-E-commerse_Platform',
        live: 'https://nanoride-miniature-cars-e-commerse.onrender.com/'
      }
    },
    {
      name: 'TaleTailor (AI Story Generator)',
      problem: 'AI writing tools often lack real-time collaborative features and immersive emotional depth.',
      role: 'Full Stack Developer',
      stack: ['Django', 'Channels', 'PostgreSQL', 'Redis', 'Celery', 'WebSockets', 'Gemini API', 'gTTS'],
      features: [
        'AI-driven narrative engine generating cohesive stories with emotional resonance',
        'Real-time collaborative editing using WebSockets for multi-user sync',
        'Synchronized audio generation and dynamic theme transitions'
      ],
      impact: 'Created a highly immersive storytelling environment with concurrent editing capabilities.',
      links: {
        github: 'https://github.com/sayyedrabeeh/taletailor',
        live: 'https://taletailor.onrender.com/'
      }
    },
    {
      name: 'ResuMatch (Resume AI)',
      problem: 'Recruiters struggle to parse and manage unstructured resume data across multiple candidates.',
      role: 'Full Stack Developer',
      stack: ['React', 'Django REST', 'PostgreSQL', 'ReportLab', 'PyMuPDF'],
      features: [
        'Automated PDF parsing using custom heuristics to extract contact info and skills',
        'Secure multi-resume upload pipeline with JWT-based authentication',
        'Normalized social link extraction for profile consistency'
      ],
      impact: 'Streamlined candidate intake by automating data extraction from unstructured formats.',
      links: {
        github: 'https://github.com/sayyedrabeeh/resume-ai-',
        live: 'https://resume-ai-1-q2lm.onrender.com/'
      }
    },
    {
      name: 'Full-Stack Developer Portfolio (3D + AI)',
      problem: 'Standard portfolios fail to demonstrate high-level technical creativity and interactivity.',
      role: 'Full Stack Developer',
      stack: ['React', 'Three.js', 'Framer Motion', 'Matter.js', 'Gemini AI'],
      features: [
        'Cinematic 3D transitions and physics-based interactions (Matter.js)',
        'Context-aware AI assistant using Gemini to answer technical queries',
        'Drag-and-drop skills playground with real-time physics engine'
      ],
      impact: 'Showcased cross-disciplinary mastery of WebGL, AI, and modern React patterns.',
      links: {
        github: 'https://github.com/sayyedrabeeh/Full-Stack-Developer-Portfolio-with-3D-Animations-and-AI-Integration',
        live: 'https://portfolio-fronted-static.onrender.com/'
      }
    },
    {
      name: 'Nexus Blog App',
      problem: 'Creating content platforms with robust role-based access and analytics.',
      role: 'Backend Developer',
      stack: ['Django', 'Class-Based Views', 'PostgreSQL', 'Bootstrap'],
      features: [
        'Advanced CRUD for posts with rich text editor integration',
        'Subscriber management and comment moderation system',
        'Dynamic analytics dashboard for post reach'
      ],
      impact: 'Built a professional content machine focused on clean architectural patterns.',
      links: {
        github: 'https://github.com/sayyedrabeeh/nexus-blog-cbv-',
        live: 'https://nexus-blog-cbv.onrender.com/'
      }
    },
    {
      name: 'Jarvis AI (Web Based)',
      problem: 'Porting complex voice assistant logic to a scalable web interface.',
      role: 'Backend Developer',
      stack: ['Python', 'Django', 'gTTS', 'SpeechRecognition'],
      features: [
        'Voice-to-command processing with instant web action execution',
        'Dynamic response generation using custom Python logic',
        'Clean, minimal dashboard for interaction history'
      ],
      impact: 'Successfully bridged local automation scripts with cloud-accessible web services.',
      links: {
        github: 'https://github.com/sayyedrabeeh/jarvis-ai',
        live: 'https://jarvis-ai-2nfc.onrender.com/'
      }
    },
    {
      name: 'Library Management System',
      problem: 'Libraries need efficient, digital ways to track book inventory and membership.',
      role: 'Full Stack Developer',
      stack: ['Django', 'PostgreSQL', 'Bootstrap'],
      features: [
        'Automated book tracking with issuance and return workflows',
        'Fine-calculation logic and membership management',
        'Searchable index for thousands of book entries'
      ],
      impact: 'Built a reliable administrative tool for systematic inventory management.',
      links: {
        github: 'https://github.com/sayyedrabeeh/LibraryMS',
        live: 'https://library-management-system-jewe.onrender.com/'
      }
    },
    {
      name: 'Task Manager',
      problem: 'Personal productivity tools often lack intuitive state management and cloud persistence.',
      role: 'Full Stack Developer',
      stack: ['React', 'Firebase', 'Firestore', 'Tailwind'],
      features: [
        'Real-time task synchronization across devices via Firestore',
        'Categorized Todo lists with priority levels and filtering',
        'Firebase Authentication for secure user task isolation'
      ],
      impact: 'Developed a responsive task tracking app with seamless cloud integration.',
      links: {
        github: 'https://github.com/sayyedrabeeh/T_o_D_o-task-manager-',
        live: 'https://todo-task-manager-7630b.web.app/'
      }
    },
    {
      name: 'Woodora – Interior Design Business Portfolio',
      problem: 'Service businesses need high-conversion landing pages to showcase their portfolio.',
      role: 'Full Stack Developer',
      stack: ['React', 'Framer Motion', 'Tailwind CSS'],
      features: [
        'Animated project galleries and service highlights',
        'Interactive inquiry forms and mobile-first design',
        'Client testimonial sliders and contact integration'
      ],
      impact: 'Created a professional digital presence for a design business with high visual impact.',
      links: {
        github: 'https://github.com/sayyedrabeeh/woodora-interior-design-bussiness-portfolio',
        live: 'https://woodora-interior-design-bussiness.onrender.com/'
      }
    },
    {
      name: 'Contact management',
      problem: 'Handling large volumes of contacts requires clean, searchable, and secure management.',
      role: 'Full Stack Developer',
      stack: ['React', 'Semantic UI', 'Firebase'],
      features: [
        'Searchable contact list with rapid CRUD operations',
        'Clean, accessible UI built with Semantic UI components',
        'Secure persistent storage with real-time updates'
      ],
      impact: 'Built a functional, easy-to-use directory with robust backend persistence.',
      links: {
        github: 'https://github.com/sayyedrabeeh/contact_app-react-semantic-ui',
        live: 'https://contact-app-94c8a.web.app/login'
      }
    }
  ];

  const miniProjects = [
    {
      name: 'Netflix Clone',
      type: 'Frontend',
      github: 'https://github.com/sayyedrabeeh/netflix_clone',
      live: 'https://netflix-clone-v042.onrender.com/',
      bullets: ['Dynamic movie data fetching', 'Trailer embedding', 'Smooth SCSS styling']
    },
    {
      name: 'OLX Clone',
      type: 'Full Stack',
      github: 'https://github.com/sayyedrabeeh/OLX_clone',
      live: 'https://olxclone-663e8.web.app/',
      bullets: ['C2C listing management', 'Firebase Auth', 'Image uploads']
    },
    {
      name: 'Dubai Ginnee AI',
      type: 'Streamlit/AI',
      github: 'https://github.com/sayyedrabeeh/chatbot-with-streamlit',
      live: 'https://dubaiginnee.streamlit.app/',
      bullets: ['NLP-based responses', 'Streamlit UI', 'API Integration']
    },
    {
      name: 'QR Code Maker',
      type: 'Utility',
      github: 'https://github.com/sayyedrabeeh/qr-code-maker-',
      live: 'https://sayyedrabeeh.pythonanywhere.com/',
      bullets: ['Custom QR generation', 'Download as PNG', 'Python/Flask']
    },
    {
      name: 'Todo App',
      type: 'Frontend',
      github: 'https://github.com/sayyedrabeeh/TodoApp-in-React',
      live: 'https://sayyedrabeeh.github.io/TodoApp-in-React/',
      bullets: ['React state management', 'Local storage persistence', 'Clean UI']
    },
    {
      name: 'User Management App',
      type: 'Utility',
      github: 'https://github.com/sayyedrabeeh/users-managment',
      live: '',
      bullets: ['CRUD operations', 'Search filtering', 'Validation logic']
    },
    {
      name: 'Dino Controller',
      type: 'OpenCV/AI',
      github: 'https://github.com/sayyedrabeeh/Dino',
      live: '',
      bullets: ['Hand gesture game control', 'Computer vision', 'PyAutoGUI sync']
    },
    {
      name: 'Dr Strange Simulator',
      type: 'OpenCV/MediaPipe',
      github: 'https://github.com/sayyedrabeeh/dr-stange-simulator',
      live: '',
      bullets: ['Spatial hand tracking', 'Real-time magic FX', 'MediaPipe integration']
    },
    {
      name: 'Virtual Painter',
      type: 'Computer Vision',
      github: 'https://github.com/sayyedrabeeh/virtual-painter',
      live: '',
      bullets: ['On-screen drawing', 'Color palette detection', 'Hand tracking']
    },
    {
      name: 'Game Controller',
      type: 'AI / CV',
      github: 'https://github.com/sayyedrabeeh/game-controller',
      live: '',
      bullets: ['Subway Surf voice/gesture control', 'Latency optimization', 'Python/OpenCV']
    },
    {
      name: '2D-to-3D Visualizer',
      type: 'Three.js/AI',
      github: 'https://github.com/sayyedrabeeh/2d-to-3d-visulaizer',
      live: '',
      bullets: ['Mesh generation', 'Three.js rendering', 'Procedural geometry']
    },
    {
      name: 'Artist Portfolio',
      type: 'Frontend',
      github: 'https://github.com/sayyedrabeeh/artist',
      live: 'https://artist-1-r68o.onrender.com/',
      bullets: ['Gallery showcase', 'Contact integration', 'Responsive design']
    }
  ];

  const experience = [
    {
      title: 'Full Stack Development Residency (Brototype)',
      period: 'Jul 2024 – Present',
      location: 'Calicut, Kerala',
      highlights: [
        'Intensive 1000+ hour project-based program focused on scalable web architectures.',
        'Built 20+ production-ready applications spanning E-commerce, AI SaaS, and Real-time systems.',
        'Mastered advanced state management, asynchronous processing, and cloud deployment.'
      ]
    },
    {
      title: 'Self-Driven Technical Mastery',
      period: '2023 – Present',
      location: 'Remote',
      highlights: [
        'Successfully transitioned from a Humanities background to Full Stack Engineering through rigorous self-study.',
        'Active LeetCode problem solver focused on algorithmic efficiency and data structures.',
        'Developed a deep understanding of Computer Vision (OpenCV) and AI integration (Gemini).'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 font-sans selection:bg-blue-500/30">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-gray-950/80 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center h-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center space-x-2"
            >
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center font-bold text-xl">S</div>
              <span className="text-xl font-bold tracking-tight">Rabeeh<span className="text-blue-500">.dev</span></span>
            </motion.div>

            <div className="hidden md:flex space-x-8">
              {['About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-sm font-medium text-gray-400 hover:text-white transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>

            <div className="flex items-center space-x-4">
              <a href="https://github.com/sayyedrabeeh" target="_blank" rel="noreferrer" className="p-2 text-gray-400 hover:text-white transition-colors">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com/in/sayyed-rabeeh" target="_blank" rel="noreferrer" className="p-2 text-gray-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 text-gray-400 hover:text-white transition-colors"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-gray-900 border-b border-gray-800"
            >
              <div className="px-6 py-8 space-y-4">
                {['About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-lg font-medium text-gray-300 hover:text-blue-500"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section id="about" className="pt-40 pb-20 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              <span>Open to Full Stack roles </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
              Full Stack <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">Developer</span> <br />
              & AI Enthusiast
            </h1>
            <p className="text-xl text-gray-400 mb-10 max-w-xl leading-relaxed">
              I build scalable web architectures and intelligent AI solutions that bridge the gap between user experience and technical excellence.
              <span className="block mt-4 text-gray-300 font-medium italic">Transforming humanities-driven critical thinking into robust engineering.</span>
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="/resume.pdf"
                download="Sayyed_Rabeeh_Resume.pdf"
                className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold transition-all shadow-lg shadow-blue-600/20 flex items-center gap-2 group"
              >
                <Download size={20} className="group-hover:translate-y-1 transition-transform" /> Download Resume
              </a>
              <a href="#projects" className="px-8 py-4 bg-gray-800 hover:bg-gray-700 rounded-xl font-bold transition-all flex items-center gap-2">
                Explore 20+ Projects <ChevronRight size={20} />
              </a>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative hidden lg:block"
          >
            <div className="absolute inset-0 bg-blue-500/20 blur-[120px] rounded-full"></div>
            <div className="relative border border-gray-800 rounded-3xl p-8 bg-gray-900/50 backdrop-blur-sm">
              <div className="flex items-center space-x-3 mb-8">
                <div className="flex space-x-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="h-px flex-1 bg-gray-800"></div>
              </div>
              <div className="space-y-4 font-mono text-sm leading-relaxed text-gray-300">
                <p className="text-blue-400">const developer = &#123;</p>
                <p className="pl-4">name: 'Sayyed Rabeeh',</p>
                <p className="pl-4">total_projects: 22,</p>
                <p className="pl-4">stack: ['Django', 'React', 'OpenCV'],</p>
                <p className="pl-4">leads: '10 Major, 12 Mini',</p>
                <p className="pl-4 text-blue-400">&#125;</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-6 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Expertise</h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">Clearly categorized stack focused on modern full-stack requirements.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(skills).map(([category, items], idx) => (
              <motion.div
                key={category}
                whileHover={{ y: -5 }}
                className="p-6 rounded-2xl bg-gray-950 border border-gray-800 hover:border-blue-500/50 transition-all group"
              >
                <h3 className="text-blue-400 font-bold mb-4 flex items-center gap-2">
                  {category === 'AI / ML' ? <Cpu size={18} /> :
                    category === 'Databases' ? <Database size={18} /> :
                      category === 'Frameworks & Libraries' ? <Layers size={18} /> : <Terminal size={18} />}
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {items.map(item => (
                    <span key={item} className="px-2.5 py-1 text-xs font-medium bg-gray-800 rounded-md text-gray-300 border border-gray-700 group-hover:bg-gray-700 transition-colors">
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-4 italic text-blue-500">Selected Works</h2>
              <p className="text-gray-400 max-w-xl text-lg">Detailed breakthroughs of my most significant engineering achievements.</p>
            </div>
          </div>

          {/* Filter Toggles */}
          <div className="flex border-b border-gray-800 mb-12">
            <button
              onClick={() => setProjectFilter('major')}
              className={`px-8 py-4 font-bold text-sm uppercase tracking-widest transition-all ${projectFilter === 'major' ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-500 hover:text-gray-300'}`}
            >
              Major Projects ({majorProjects.length})
            </button>
            <button
              onClick={() => setProjectFilter('mini')}
              className={`px-8 py-4 font-bold text-sm uppercase tracking-widest transition-all ${projectFilter === 'mini' ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-500 hover:text-gray-300'}`}
            >
              Mini & Experimental ({miniProjects.length})
            </button>
          </div>

          {/* Major Projects Grid */}
          {projectFilter === 'major' && (
            <div className="grid lg:grid-cols-2 gap-10">
              {majorProjects.map((project, idx) => (
                <motion.div
                  key={project.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-gray-900/40 border border-gray-800 rounded-3xl p-8 hover:bg-gray-900/60 transition-all group"
                >
                  <div className="flex justify-between items-start mb-6">
                    <div className="max-w-[80%]">
                      <h3 className="text-2xl font-bold mb-1 tracking-tight text-white leading-tight">{project.name}</h3>
                      <p className="text-blue-400 font-medium text-sm">{project.role}</p>
                    </div>
                    <div className="flex gap-3">
                      <a href={project.links.github} target="_blank" rel="noreferrer" className="p-2 bg-gray-800 rounded-full hover:bg-blue-600 transition-colors text-gray-400 hover:text-white" title="View Source">
                        <Github size={18} />
                      </a>
                      {project.links.live && (
                        <a href={project.links.live} target="_blank" rel="noreferrer" className="p-2 bg-gray-800 rounded-full hover:bg-blue-600 transition-colors text-gray-400 hover:text-white" title="Live Demo">
                          <ExternalLink size={18} />
                        </a>
                      )}
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="bg-blue-500/5 border border-blue-500/10 p-4 rounded-xl">
                      <p className="text-sm text-gray-300 italic">"{project.problem}"</p>
                    </div>
                    <div>
                      <ul className="space-y-3">
                        {project.features.map(feature => (
                          <li key={feature} className="flex items-start gap-3 text-sm text-gray-300">
                            <div className="w-1.5 h-1.5 mt-1.5 rounded-full bg-blue-500 shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="pt-4 border-t border-gray-800 flex flex-wrap gap-2">
                      {project.stack.map(tech => (
                        <span key={tech} className="text-[10px] px-2 py-0.5 rounded bg-gray-800 text-gray-400 border border-gray-700">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center gap-2 text-green-400 text-sm font-medium">
                      <Trophy size={16} />
                      <span>{project.impact}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {/* Mini Projects List */}
          {projectFilter === 'mini' && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {miniProjects.map((project, idx) => (
                <motion.div
                  key={project.name}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="bg-gray-900 border border-gray-800 rounded-2xl p-6 hover:border-blue-500/30 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex justify-between items-start mb-4">
                      <div className="p-2 bg-gray-800 rounded-lg text-blue-400">
                        {project.type.includes('Vision') || project.type.includes('AI') ? <Cpu size={20} /> : <Globe size={20} />}
                      </div>
                      <div className="flex gap-2">
                        <a href={project.github} target="_blank" rel="noreferrer" className="text-gray-500 hover:text-white"><Github size={18} /></a>
                        {project.live && <a href={project.live} target="_blank" rel="noreferrer" className="text-gray-500 hover:text-white"><ExternalLink size={18} /></a>}
                      </div>
                    </div>
                    <h4 className="font-bold text-lg mb-1">{project.name}</h4>
                    <p className="text-xs text-gray-500 font-bold uppercase tracking-widest mb-4">{project.type}</p>
                    <ul className="space-y-1.5">
                      {project.bullets.map(bullet => (
                        <li key={bullet} className="text-xs text-gray-400 flex items-center gap-2">
                          <span className="w-1 h-1 rounded-full bg-blue-500 opacity-50" />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 px-6 bg-gray-950">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">Path to Excellence</h2>
          <div className="space-y-12">
            {experience.map((exp, idx) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative pl-8 border-l-2 border-gray-800 group"
              >
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-600 border-2 border-gray-950 group-hover:scale-125 transition-transform shadow-[0_0_10px_rgba(37,99,235,0.5)]"></div>
                <div className="mb-2 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                  <span className="text-sm font-bold text-gray-500 bg-gray-900 px-3 py-1 rounded-full border border-gray-800">{exp.period}</span>
                </div>
                <p className="text-sm text-blue-400 font-medium mb-4">{exp.location}</p>
                <ul className="space-y-3">
                  {exp.highlights.map(h => (
                    <li key={h} className="text-gray-400 leading-relaxed text-sm flex gap-3">
                      <span className="text-blue-500">•</span>
                      {h}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 px-6 bg-gray-900/30">
        <div className="max-w-3xl mx-auto text-center">
          <div className="w-20 h-20 bg-gradient-to-tr from-blue-600 to-cyan-400 rounded-3xl mx-auto mb-10 rotate-3 flex items-center justify-center text-3xl shadow-xl shadow-blue-500/20">
            <User size={40} className="-rotate-3" />
          </div>
          <h2 className="text-3xl font-bold mb-6">The Mindset</h2>
          <p className="text-xl text-gray-400 leading-relaxed">
            Transitioning from a humanities background equipped me with a unique <strong>critical thinking</strong> lens toward software architecture.
            I don't just write code; I design systems that solve human problems. My core strength lies in <strong>rapid adaptability</strong>—mastering 10+
            technologies and building 20+ applications in under 1.5 years.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-[3rem] p-12 md:p-20 relative overflow-hidden text-center">
            <div className="absolute top-0 right-0 p-10 opacity-10">
              <Award size={200} />
            </div>
            <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-8">Ready to Scale Your Team?</h2>
            <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
              I'm currently looking for Full Stack Developer roles where I can contribute to high-impact projects. Let's discuss how I can help your team.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <a href="mailto:sayyedrabeeh240@gmail.com" className="px-10 py-5 bg-white text-blue-600 rounded-2xl font-bold text-lg hover:bg-gray-100 transition-all flex items-center gap-3">
                <Send size={24} /> Get in Touch
              </a>
              <div className="flex items-center gap-4">
                <a href="https://github.com/sayyedrabeeh" target="_blank" rel="noreferrer" className="p-4 bg-white/10 text-white rounded-full hover:bg-white/20 transition-all">
                  <Github size={28} />
                </a>
                <a href="https://linkedin.com/in/sayyed-rabeeh" target="_blank" rel="noreferrer" className="p-4 bg-white/10 text-white rounded-full hover:bg-white/20 transition-all">
                  <Linkedin size={28} />
                </a>
              </div>
            </div>
          </div>

          <div className="mt-20 grid md:grid-cols-3 gap-8 text-center pt-10 border-t border-gray-900">
            <div>
              <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Primary Email</p>
              <p className="font-medium text-gray-300">sayyedrabeeh240@gmail.com</p>
            </div>
            <div>
              <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Direct Line</p>
              <p className="font-medium text-gray-300">+91 9207286895</p>
            </div>
            <div>
              <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Base Location</p>
              <p className="font-medium text-gray-300">Malappuram, Kerala, India</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-gray-900 text-center">
        <p className="text-gray-500 text-sm font-medium">
          &copy; {new Date().getFullYear()} Sayyed Rabeeh. Built with React, Tailwind, and a Passion for Engineering.
        </p>
      </footer>
    </div>
  );
}

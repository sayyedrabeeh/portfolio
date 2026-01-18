import React, { useState } from 'react';
import {
  Mail, Phone, MapPin, Github, Linkedin, Download, Menu, X,
  ExternalLink, Code, Terminal, Database, Cpu, Globe, Layers,
  Trophy, User, Send, ChevronRight, Award, Zap, Star, ArrowRight
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
    'Infrastructure & DevOps': ['Git', 'GitHub', 'AWS', 'Render', 'Cloudinary', 'VS Code', 'Figma', 'PythonAnywhere'],
    'Applied Intelligence': ['Google Gemini API', 'OpenCV', 'MediaPipe', 'gTTS', 'PyMuPDF']
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
      name: 'VocalNexus – AI Automation Engine',
      problem: 'Enterprise automation requires seamless bridging between speech processing and cloud-accessible web services.',
      role: 'Backend Systems Engineer',
      stack: ['Python', 'Django', 'gTTS', 'SpeechRecognition'],
      features: [
        'Advanced Vocal-to-Command orchestration with real-time execution',
        'Dynamic heuristic response generation via custom Python logic',
        'State-tracked interaction history dashboard'
      ],
      impact: 'Successfully bridged local automation scripts with cloud-accessible web services.',
      links: {
        github: 'https://github.com/sayyedrabeeh/jarvis-ai',
        live: 'https://jarvis-ai-2nfc.onrender.com/'
      }
    },
    {
      name: 'ResourceLink – Distributed Library OS',
      problem: 'Academic institutions require high-availability systems for systematic inventory and member management.',
      role: 'Full Stack Systems Engineer',
      stack: ['Django', 'PostgreSQL', 'Bootstrap'],
      features: [
        'High-concurrency book tracking and issuance workflows',
        'Automated fine-calculation heuristics and audit trails',
        'Optimized search indexing for high-volume entry retrieval'
      ],
      impact: 'Built a reliable administrative tool for systematic inventory management.',
      links: {
        github: 'https://github.com/sayyedrabeeh/LibraryMS',
        live: 'https://library-management-system-jewe.onrender.com/'
      }
    },
    {
      name: 'SyncPoint – Cloud Productivity Engine',
      problem: 'Modern productivity tools require low-latency state management and cross-platform synchronization.',
      role: 'Frontend Infrastructure Engineer',
      stack: ['React', 'Firebase', 'Firestore', 'Tailwind'],
      features: [
        'Low-latency state synchronization using cloud Firestore',
        'Prioritized task orchestration with advanced filtering',
        'Secure multi-tenant authentication and data isolation'
      ],
      impact: 'Engineered a high-performance productivity solution with enterprise-grade synchronization.',
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
      impact: 'Deployed a high-conversion digital platform for an interior design enterprise.',
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

  const sideProjects = [
    {
      name: 'MediaStream – Architecture Study',
      type: 'Frontend',
      github: 'https://github.com/sayyedrabeeh/netflix_clone',
      live: 'https://netflix-clone-v042.onrender.com/',
      bullets: ['Dynamic content orchestration', 'Trailer system integration', 'Custom SCSS design system']
    },
    {
      name: 'Nexus Marketplace – Distributed C2C',
      type: 'Full Stack',
      github: 'https://github.com/sayyedrabeeh/OLX_clone',
      live: 'https://olxclone-663e8.web.app/',
      bullets: ['Asynchronous listing management', 'Firebase Auth security', 'Distributed image storage']
    },
    {
      name: 'Ginee AI – Conversational Interface',
      type: 'Streamlit/AI',
      github: 'https://github.com/sayyedrabeeh/chatbot-with-streamlit',
      live: 'https://dubaiginnee.streamlit.app/',
      bullets: ['Natural Language processing', 'Streamlit dashboard', 'Enterprise API integration']
    },
    {
      name: 'Dynamic QR Synthesis Tool',
      type: 'Utility',
      github: 'https://github.com/sayyedrabeeh/qr-code-maker-',
      live: 'https://sayyedrabeeh.pythonanywhere.com/',
      bullets: ['Procedural QR generation', 'Binary export (PNG)', 'Flask-based service']
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
      name: 'Spatial Interface Controller',
      type: 'Applied Intelligence',
      github: 'https://github.com/sayyedrabeeh/Dino',
      live: '',
      bullets: ['Gesture-based system control', 'Real-time Computer Vision', 'Hardware sync (PyAutoGUI)']
    },
    {
      name: 'Neural Gesture FX Simulator',
      type: 'Applied Intelligence',
      github: 'https://github.com/sayyedrabeeh/dr-stange-simulator',
      live: '',
      bullets: ['Advanced spatial hand tracking', 'Real-time visual effects engine', 'MediaPipe integration']
    },
    {
      name: 'Virtual Painter',
      type: 'Computer Vision',
      github: 'https://github.com/sayyedrabeeh/virtual-painter',
      live: '',
      bullets: ['On-screen drawing', 'Color palette detection', 'Hand tracking']
    },
    {
      name: 'Vocal/Gesture Automation Engine',
      type: 'Applied Intelligence',
      github: 'https://github.com/sayyedrabeeh/game-controller',
      live: '',
      bullets: ['Multi-modal system control', 'Sub-millisecond latency tuning', 'Custom OpenCV pipelines']
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
        'Mastered enterprise architecture patterns, asynchronous workflows, and distributed systems.'
      ]
    },
    {
      title: 'Technical Lead & Independent Researcher',
      period: '2023 – Present',
      location: 'Remote',
      highlights: [
        'Advanced specialized knowledge in Full Stack Engineering and high-performance computing.',
        'Active contributor to algorithmic research and complex data structure optimizations.',
        'Engineered 10+ open-source utilities focusing on Computer Vision and AI integration.'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-neutral-950 text-gray-100 font-sans selection:bg-indigo-500/30 relative">
      {/* Technical Grid Background */}
      <div className="fixed inset-0 z-0 opacity-[0.03] pointer-events-none bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px]"></div>

      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-neutral-950/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center h-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center space-x-2"
            >
              <div className="w-10 h-10 bg-sky-600 rounded-lg flex items-center justify-center font-bold text-xl shadow-lg shadow-sky-600/20">S</div>
              <span className="text-xl font-bold tracking-tight">Rabeeh<span className="text-sky-500">.dev</span></span>
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
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-sm font-medium mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
              </span>
              <span>Open to Full Stack roles </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6 tracking-tight">
              Full Stack <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-emerald-400">Developer</span> <br />
              & Applied AI
            </h1>
            <p className="text-xl text-gray-400 mb-10 max-w-xl leading-relaxed">
              Specializing in <span className="text-white font-medium">high-performance web systems</span> and AI-integrated solutions that drive business value through technical excellence.
              <span className="block mt-4 text-gray-300 font-medium italic">Leveraging multi-disciplinary critical thinking to architect robust, scalable engineering solutions.</span>
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="/resume.pdf"
                download="Sayyed_Rabeeh_Resume.pdf"
                className="px-8 py-4 bg-sky-600 hover:bg-sky-700 text-white rounded-xl font-bold transition-all shadow-lg shadow-sky-600/20 flex items-center gap-2 group"
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
            <div className="absolute inset-0 bg-sky-500/5 blur-[120px] rounded-full"></div>
            <div className="relative border border-white/5 rounded-3xl p-8 bg-neutral-900/50 backdrop-blur-md">
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
                <p className="pl-4">stack: ['Django', 'React', 'Applied Intelligence'],</p>
                <p className="pl-4 font-bold text-sky-400">&#125;</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-6 relative overflow-hidden bg-neutral-950">
        {/* Subtle Depth */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-sky-600/5 blur-[120px] rounded-full pointer-events-none -z-10"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-600/5 blur-[120px] rounded-full pointer-events-none -z-10"></div>

        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter text-white">
                Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-emerald-400">Toolkit</span>
              </h2>
              <div className="h-1 w-20 bg-sky-600 mx-auto rounded-full mb-6"></div>
              <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
                A specialized ecosystem of modern technologies curated for building
                <span className="text-white font-medium"> scalable, intelligent, and immersive</span> digital experiences.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(skills).map(([category, items], idx) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="relative group h-full"
              >
                <div className="h-full p-8 rounded-2xl bg-neutral-900/50 border border-white/5 hover:border-sky-500/40 transition-all duration-300 shadow-xl">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-sky-500/10 flex items-center justify-center text-sky-400 group-hover:bg-sky-600 group-hover:text-white transition-all">
                      {category === 'AI / ML' ? <Cpu size={20} /> :
                        category === 'Databases' ? <Database size={20} /> :
                          category === 'Frameworks & Libraries' ? <Layers size={20} /> :
                            category === 'Programming Languages' ? <Code size={20} /> :
                              category === 'Backend Technologies' ? <Terminal size={20} /> :
                                category === 'Frontend Technologies' ? <Globe size={20} /> : <Zap size={20} />}
                    </div>
                    <h3 className="font-bold text-white group-hover:text-sky-400 transition-colors">
                      {category}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {items.map((item) => (
                      <span
                        key={item}
                        className="px-3 py-1 text-xs font-medium bg-white/5 text-gray-400 rounded-lg border border-white/5 hover:border-sky-500/30 transition-all cursor-default"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      < section id="projects" className="py-24 px-6 relative" >
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter text-white">
                Selected <span className="text-sky-500">Works</span>
              </h2>
              <p className="text-gray-400 max-w-xl text-lg leading-relaxed">
                A gallery of digital breakthroughs, showcasing complex engineering
                solved with <span className="text-white font-medium">elegant architecture</span>.
              </p>
            </motion.div>

            <div className="relative p-1.5 bg-neutral-900/50 backdrop-blur-md rounded-2xl border border-white/5 flex gap-1 self-start lg:self-end">
              <motion.div
                layout
                className="absolute inset-y-1.5 bg-sky-600 rounded-xl shadow-lg shadow-sky-600/20"
                initial={false}
                animate={{
                  x: projectFilter === 'major' ? 6 : 178,
                  width: projectFilter === 'major' ? 166 : 220,
                }}
                transition={{ type: "spring", bounce: 0.1, duration: 0.4 }}
              />
              <button
                onClick={() => setProjectFilter('major')}
                className={`relative px-6 py-3 rounded-xl text-sm font-bold uppercase tracking-wider transition-colors z-10 w-40 ${projectFilter === 'major' ? 'text-white' : 'text-gray-500 hover:text-gray-300'}`}
              >
                Major Works
              </button>
              <button
                onClick={() => setProjectFilter('side')}
                className={`relative px-6 py-3 rounded-xl text-sm font-bold uppercase tracking-wider transition-colors z-10 w-56 ${projectFilter === 'side' ? 'text-white' : 'text-gray-500 hover:text-gray-300'}`}
              >
                Technical Side Projects
              </button>
            </div>
          </div>

          <AnimatePresence mode="wait">
            {projectFilter === 'major' ? (
              <motion.div
                key="major"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-10"
              >
                {majorProjects.map((project, idx) => (
                  <motion.div
                    key={project.name}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05 }}
                    className="group relative bg-neutral-900/30 border border-white/5 rounded-[2.5rem] overflow-hidden hover:border-sky-500/40 transition-all duration-300 shadow-xl"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-sky-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    <div className="p-8 md:p-10 relative h-full flex flex-col">
                      <div className="flex justify-between items-start mb-10">
                        <div className="max-w-[75%]">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-2xl md:text-3xl font-black text-white group-hover:text-sky-400 transition-colors leading-tight">
                              {project.name}
                            </h3>
                            <span className={`px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-widest h-fit ${project.links.live ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' : 'bg-sky-500/10 text-sky-400 border border-sky-500/20'}`}>
                              {project.links.live ? 'Live' : 'Architecture'}
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="w-8 h-0.5 bg-sky-500 rounded-full"></span>
                            <span className="text-sky-400 font-bold text-xs uppercase tracking-widest">{project.role}</span>
                          </div>
                        </div>
                        <div className="flex gap-3">
                          <a href={project.links.github} target="_blank" rel="noreferrer" className="w-12 h-12 flex items-center justify-center bg-white/5 rounded-2xl hover:bg-sky-600 transition-all text-gray-400 hover:text-white transform hover:-translate-y-1" title="View Source">
                            <Github size={20} />
                          </a>
                          {project.links.live && (
                            <a href={project.links.live} target="_blank" rel="noreferrer" className="w-12 h-12 flex items-center justify-center bg-white/5 rounded-2xl hover:bg-sky-600 transition-all text-gray-400 hover:text-white transform hover:-translate-y-1" title="Live Demo">
                              <ExternalLink size={20} />
                            </a>
                          )}
                        </div>
                      </div>

                      <div className="flex-1 space-y-8">
                        <div className="p-5 bg-sky-500/5 rounded-2xl border border-sky-500/10 italic text-gray-400 text-sm leading-relaxed relative overflow-hidden">
                          <div className="absolute top-0 left-0 w-1 h-full bg-sky-600"></div>
                          <span className="relative z-10">"{project.problem}"</span>
                        </div>

                        <div className="space-y-4">
                          <h4 className="text-xs font-black text-gray-500 uppercase tracking-[0.2em]">Core Features</h4>
                          <ul className="grid grid-cols-1 gap-3">
                            {project.features.map(feature => (
                              <li key={feature} className="flex items-start gap-4 text-[13px] text-gray-400">
                                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-sky-600/50" />
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="pt-8 border-t border-gray-800/50 flex flex-wrap gap-2">
                          {project.stack.map(tech => (
                            <span key={tech} className="px-3 py-1 text-[10px] font-bold rounded-lg bg-white/5 text-gray-500 border border-white/5 group-hover:text-indigo-400 group-hover:border-indigo-500/30 transition-all">
                              {tech}
                            </span>
                          ))}
                        </div>

                        <motion.div
                          className="mt-auto pt-6 flex items-center gap-3 text-emerald-400 text-sm font-bold bg-emerald-500/5 p-4 rounded-2xl border border-emerald-500/10"
                        >
                          <div className="w-8 h-8 rounded-xl bg-emerald-500/10 flex items-center justify-center">
                            <Trophy size={16} />
                          </div>
                          <span>{project.impact}</span>
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="side"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {sideProjects.map((project, idx) => (
                  <motion.div
                    key={project.name}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05 }}
                    whileHover={{ y: -5 }}
                    className="relative group h-full"
                  >
                    <div className="h-full p-8 rounded-[2rem] bg-neutral-900/30 border border-white/5 hover:border-sky-500/30 transition-all duration-300 flex flex-col overflow-hidden shadow-xl">
                      {/* Hover Gradient */}
                      <div className="absolute top-0 right-0 w-32 h-32 bg-sky-600/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>

                      <div className="flex justify-between items-start mb-8 relative z-10">
                        <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-sky-400 group-hover:bg-sky-600 group-hover:text-white transition-all">
                          {project.type.toLowerCase().includes('vision') || project.type.toLowerCase().includes('ai') ? <Cpu size={22} /> :
                            project.type.toLowerCase().includes('frontend') ? <Globe size={22} /> : <Terminal size={22} />}
                        </div>
                        <div className="flex gap-2">
                          <a href={project.github} target="_blank" rel="noreferrer" className="w-10 h-10 flex items-center justify-center text-gray-500 hover:text-white bg-white/5 rounded-xl transition-colors"><Github size={18} /></a>
                          {project.live && <a href={project.live} target="_blank" rel="noreferrer" className="w-10 h-10 flex items-center justify-center text-gray-500 hover:text-white bg-white/5 rounded-xl transition-colors"><ExternalLink size={18} /></a>}
                        </div>
                      </div>

                      <div className="mb-6">
                        <h4 className="font-black text-xl mb-1 text-white group-hover:text-sky-400 transition-colors">{project.name}</h4>
                        <div className="inline-block px-2 py-0.5 rounded-md bg-sky-500/10 text-sky-400 text-[10px] font-black uppercase tracking-widest">{project.type}</div>
                      </div>

                      <ul className="space-y-3 mb-8 flex-1">
                        {project.bullets.map(bullet => (
                          <li key={bullet} className="text-sm text-gray-400 flex items-start gap-3">
                            <Zap size={12} className="mt-1 text-sky-500/50 group-hover:text-sky-400 transition-colors shrink-0" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="mt-auto pt-6 border-t border-white/5 flex items-center justify-between">
                        <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">
                          {project.name.toLowerCase().includes('study') || project.name.toLowerCase().includes('marketplace') ? 'Architecture Study' : 'Utility & Core'}
                        </span>
                        <ArrowRight size={14} className="text-gray-500 group-hover:text-sky-500 group-hover:translate-x-1 transition-all" />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section >

      {/* Experience Section */}
      <section id="experience" className="py-24 px-6 bg-neutral-950 relative overflow-hidden" >
        <div className="absolute top-1/2 left-0 w-64 h-64 bg-sky-600/5 blur-[100px] rounded-full pointer-events-none text-white"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-5xl font-black mb-16 text-center tracking-tight text-white">Path to Excellence</h2>
          <div className="space-y-12">
            {experience.map((exp, idx) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative pl-8 border-l-2 border-gray-800 group"
              >
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-sky-600 border-2 border-neutral-950 group-hover:scale-125 transition-transform shadow-[0_0_10px_rgba(2,132,199,0.5)]"></div>
                <div className="mb-2 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                  <span className="text-sm font-bold text-gray-500 bg-white/5 px-3 py-1 rounded-full border border-white/5">{exp.period}</span>
                </div>
                <p className="text-sm text-sky-400 font-medium mb-4">{exp.location}</p>
                <ul className="space-y-3">
                  {exp.highlights.map(h => (
                    <li key={h} className="text-gray-400 leading-relaxed text-sm flex gap-3">
                      <span className="text-sky-500">•</span>
                      {h}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section >

      {/* About Section */}
      <section className="py-24 px-6 bg-neutral-950" >
        <div className="max-w-3xl mx-auto text-center">
          <div className="w-20 h-20 bg-gradient-to-tr from-sky-600 to-emerald-400 rounded-3xl mx-auto mb-10 rotate-3 flex items-center justify-center text-3xl shadow-xl shadow-sky-500/20 text-white">
            <User size={40} className="-rotate-3" />
          </div>
          <h2 className="text-3xl font-bold mb-6">The Mindset</h2>
          <p className="text-xl text-gray-400 leading-relaxed">
            Transitioning from a humanities background provided a unique <strong>analytical framework</strong> for software architecture.
            I focus on architecting <strong>high-impact systems</strong> that address complex technical challenges. My core strength lies in <strong>exceptional agility</strong>—mastering 10+
            technologies and delivering 20+ applications within a rigorous 1.5-year timeline.
          </p>
        </div>
      </section >

      {/* CTA Section */}
      <section id="contact" className="py-24 px-6 relative overflow-hidden bg-neutral-950" >
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-sky-600/5 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="bg-gradient-to-br from-sky-600 to-emerald-800 rounded-[3rem] p-12 md:p-20 relative overflow-hidden text-center shadow-2xl">
            <div className="absolute top-0 right-0 p-10 opacity-10">
              <Award size={200} />
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter shadow-sm">Ready to Scale Your Team?</h2>
            <p className="text-xl text-sky-50 mb-12 max-w-2xl mx-auto">
              I'm currently looking for Full Stack Developer roles where I can contribute to high-impact projects. Let's discuss how I can help your team.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <a href="mailto:sayyedrabeeh240@gmail.com" className="px-10 py-5 bg-white text-sky-600 rounded-2xl font-bold text-lg hover:bg-gray-100 transition-all flex items-center gap-3 shadow-xl">
                <Send size={24} /> Get in Touch
              </a>
              <div className="flex items-center gap-4">
                <a href="https://github.com/sayyedrabeeh" target="_blank" rel="noreferrer" className="p-4 bg-white/20 text-white rounded-full hover:bg-white/30 transition-all backdrop-blur-md">
                  <Github size={28} />
                </a>
                <a href="https://linkedin.com/in/sayyed-rabeeh" target="_blank" rel="noreferrer" className="p-4 bg-white/20 text-white rounded-full hover:bg-white/30 transition-all backdrop-blur-md">
                  <Linkedin size={28} />
                </a>
              </div>
            </div>
          </div>

          <div className="mt-20 grid md:grid-cols-3 gap-8 text-center pt-10 border-t border-white/5">
            <div>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Primary Email</p>
              <p className="font-medium text-gray-300">sayyedrabeeh240@gmail.com</p>
            </div>
            <div>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Direct Line</p>
              <p className="font-medium text-gray-300">+91 9207286895</p>
            </div>
            <div>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Base Location</p>
              <p className="font-medium text-gray-300">Malappuram, Kerala, India</p>
            </div>
          </div>
        </div>
      </section >

      {/* Footer */}
      < footer className="py-12 border-t border-white/5 text-center bg-neutral-950" >
        <p className="text-gray-500 text-sm font-medium">
          &copy; {new Date().getFullYear()} Sayyed Rabeeh. Built with React, Tailwind, and a Passion for Engineering.
        </p>
      </footer >
    </div >
  );
}

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Download, Menu, X, Briefcase } from 'lucide-react';

export default function Portfolio() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const coreCompetencies = [
    'Python', 'Django', 'Django REST Framework', 'React.js', 'PostgreSQL',
    'MongoDB', 'Redis', 'Machine Learning', 'Computer Vision', 'AWS'
  ];

  const technicalSkills = {
    'Backend Development': ['Python', 'Django', 'Django REST Framework', 'Flask', 'FastAPI', 'Node.js'],
    'Frontend Development': ['React.js', 'JavaScript (ES6+)', 'TypeScript', 'HTML5', 'CSS3', 'Tailwind CSS'],
    'Database Management': ['PostgreSQL', 'MongoDB', 'MySQL', 'SQLite', 'Redis'],
    'AI & Machine Learning': ['OpenCV', 'TensorFlow', 'Scikit-learn', 'Computer Vision', 'NLP', 'MediaPipe'],
    'DevOps & Cloud': ['AWS', 'Docker', 'Git', 'GitHub', 'Linux', 'CI/CD'],
    'Development Tools': ['Postman', 'VS Code', 'Jupyter', 'Figma', 'Agile/Scrum']
  };

  const professionalMetrics = [
    { value: '10+', label: 'Applications Developed' },
    { value: '5+', label: 'API Integrations' },
    { value: '95%', label: 'Code Quality Score' },
    { value: '100%', label: 'On-Time Delivery' }
  ];

  const projects = [
    {
      title: 'AI Sketch Studio',
      role: 'Full Stack Developer',
      duration: '2024',
      description: 'Developed an enterprise-grade image transformation platform featuring 14 distinct artistic rendering algorithms with real-time computer vision processing.',
      achievements: [
        'Architected scalable Django REST API handling 1000+ concurrent requests',
        'Implemented 14 real-time image processing algorithms using OpenCV',
        'Optimized processing pipeline reducing latency by 40%',
        'Designed responsive UI with Tailwind CSS achieving 95+ Lighthouse score'
      ],
      technologies: ['Django', 'OpenCV', 'Python', 'REST API', 'PostgreSQL', 'Tailwind CSS'],
      github: 'https://github.com/sayyedrabeeh/artist'
    },
    {
      title: 'ResuMatch - AI Resume Analyzer',
      role: 'Full Stack Developer',
      duration: '2024',
      description: 'Built comprehensive AI-powered recruitment platform utilizing NLP for resume parsing, ATS optimization scoring, and intelligent job matching.',
      achievements: [
        'Developed full-stack application using Django backend and React frontend',
        'Integrated NLP models achieving 90%+ accuracy in keyword extraction',
        'Implemented ATS scoring algorithm processing 500+ resumes',
        'Designed normalized PostgreSQL schema with optimized indexing'
      ],
      technologies: ['Django', 'React', 'PostgreSQL', 'NLP', 'Machine Learning', 'Redux'],
      github: 'https://github.com/sayyedrabeeh/resume-ai-'
    },
    {
      title: 'Jarvis - Virtual Assistant Platform',
      role: 'Backend Developer',
      duration: '2024',
      description: 'Created sophisticated web-based virtual assistant with multi-service API integration, voice recognition, and real-time query processing.',
      achievements: [
        'Architected Django backend integrating Spotify, YouTube, and Wikipedia APIs',
        'Implemented voice recognition with 85%+ accuracy rate',
        'Developed caching mechanism reducing API response time by 60%',
        'Built real-time processing system handling 100+ concurrent users'
      ],
      technologies: ['Django', 'Python', 'REST APIs', 'Redis', 'JavaScript', 'Web Scraping'],
      github: 'https://github.com/sayyedrabeeh/jarvis-ai'
    },
    {
      title: 'Virtual Painter',
      role: 'Computer Vision Developer',
      duration: '2024',
      description: 'Engineered advanced gesture-based drawing application utilizing computer vision algorithms for real-time hand tracking at 60 FPS.',
      achievements: [
        'Implemented real-time hand gesture recognition using MediaPipe',
        'Optimized CV pipeline achieving consistent 60 FPS performance',
        'Developed intuitive gesture mapping with 95%+ recognition accuracy',
        'Created efficient canvas rendering engine with minimal latency'
      ],
      technologies: ['Python', 'OpenCV', 'MediaPipe', 'Computer Vision', 'NumPy'],
      github: 'https://github.com/sayyedrabeeh/virtual-painter'
    },
    {
      title: 'TaleTailor - Content Generation Platform',
      role: 'Full Stack Developer',
      duration: '2024',
      description: 'Built AI-powered storytelling platform with automated content generation, authentication system, and social networking features.',
      achievements: [
        'Developed scalable full-stack application with Django and React',
        'Integrated AI models for automated story generation',
        'Implemented JWT-based authentication with role-based access control',
        'Optimized database queries reducing page load time by 50%'
      ],
      technologies: ['Django', 'React', 'PostgreSQL', 'AI/ML', 'JWT', 'AWS S3'],
      github: 'https://github.com/sayyedrabeeh/taletailor'
    }
  ];

  const experience = [
    {
      title: 'Full Stack Developer',
      company: 'Freelance / Contract',
      location: 'Remote',
      period: 'January 2024 - Present',
      responsibilities: [
        'Design and develop custom web applications using Django, React, and modern JavaScript frameworks',
        'Implement AI/ML solutions including computer vision and NLP features for client projects',
        'Build and maintain RESTful APIs with comprehensive documentation using OpenAPI standards',
        'Deploy and manage applications on AWS infrastructure with Docker containerization',
        'Conduct code reviews and implement CI/CD pipelines for automated testing and deployment',
        'Collaborate with clients to gather requirements and deliver scalable, maintainable solutions'
      ]
    },
    {
      title: 'Full Stack Development Bootcamp',
      company: 'Brototype',
      location: 'Kerala, India',
      period: 'May 2023 - December 2023',
      responsibilities: [
        'Completed intensive 1000+ hour full-stack development program covering Python, Django, and React',
        'Developed 10+ production-ready applications following industry best practices',
        'Mastered data structures, algorithms, and software design patterns through hands-on projects',
        'Gained expertise in test-driven development, Git workflows, and Agile methodologies',
        'Participated in code reviews and pair programming sessions with peers',
        'Built strong foundation in database design, API development, and cloud deployment'
      ]
    }
  ];

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf'; // Make sure resume.pdf is in public folder
    link.download = 'Sayyed_Rabeeh_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 font-sans">
      {/* Navigation */}
      <nav className="bg-gray-800 border-b border-gray-700 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <Briefcase className="text-blue-400" size={26} />
              <span className="text-2xl font-bold text-gray-100">Sayyed Rabeeh</span>
            </div>

            <div className="hidden md:flex space-x-10">
              {['About', 'Experience', 'Projects', 'Skills', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-300 hover:text-blue-400 font-medium transition-colors duration-200"
                >
                  {item}
                </a>
              ))}
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-gray-300"
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden pb-4 bg-gray-800 border-t border-gray-700">
              {['About', 'Experience', 'Projects', 'Skills', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block py-3 text-gray-300 hover:text-blue-400 font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="about" className="bg-gradient-to-br from-gray-800 to-gray-900 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl md:text-6xl font-extrabold text-gray-100 mb-4">
                Sayyed Rabeeh
              </h1>
              <h2 className="text-3xl md:text-4xl font-light text-blue-400 mb-6">
                Full Stack Python Developer
              </h2>
              <p className="text-gray-300 mb-8 max-w-xl mx-auto lg:mx-0">
                Results-driven developer specializing in AI/ML integration, computer vision, and scalable web applications. Available for full-time opportunities.
              </p>
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-10">
                <button
                  onClick={handleDownloadResume}
                  className="px-7 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md transition-all duration-200 flex items-center gap-2"
                >
                  <Download size={20} /> Resume
                </button>
                <a href="#contact" className="px-7 py-3 bg-gray-700 hover:bg-gray-600 text-white font-semibold rounded-lg shadow-md transition-all duration-200">
                  Contact
                </a>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {professionalMetrics.map((m, i) => (
                <div key={i} className="bg-gray-800 p-6 rounded-xl border border-gray-700 text-center">
                  <div className="text-4xl font-bold text-blue-400 mb-2">{m.value}</div>
                  <div className="text-sm text-gray-400 uppercase tracking-wider">{m.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-12">
            <h3 className="text-xl font-bold text-gray-100 mb-4 text-center lg:text-left">Core Competencies</h3>
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start text-sm font-medium text-gray-300">
              {coreCompetencies.map((skill, i) => (
                <span key={i}>
                  {skill}
                  {i < coreCompetencies.length - 1 && <span className="mx-2 text-gray-500">•</span>}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="py-20 px-6 bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-100 mb-12 text-center border-b-4 border-blue-500 inline-block pb-2 mx-auto">
            Experience
          </h2>
          <div className="space-y-12">
            {experience.map((exp, i) => (
              <div key={i} className="bg-gray-900 p-8 rounded-xl shadow-lg border border-gray-700">
                <div className="flex flex-col md:flex-row justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-100 mb-2">{exp.title}</h3>
                    <p className="text-blue-400 font-semibold">{exp.company} • {exp.location}</p>
                  </div>
                  <div className="text-gray-400 font-medium mt-2 md:mt-0">{exp.period}</div>
                </div>
                <ul className="grid md:grid-cols-2 gap-4 text-gray-300">
                  {exp.responsibilities.map((r, j) => (
                    <li key={j} className="flex items-start text-base">
                      <span className="text-blue-400 mr-3 mt-1 flex-shrink-0">•</span>
                      <span>{r}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-20 px-6 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-100 mb-12 text-center border-b-4 border-blue-500 inline-block pb-2 mx-auto">
            Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((p, i) => (
              <div key={i} className="bg-gray-800 rounded-xl shadow-lg border border-gray-700 overflow-hidden">
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-100 mb-2">{p.title}</h3>
                  <div className="flex items-center gap-3 mb-4 text-sm text-gray-400">
                    <span className="text-blue-400">{p.role}</span>
                    <span>•</span>
                    <span>{p.duration}</span>
                  </div>
                  <p className="text-gray-300 mb-4 text-sm">{p.description}</p>
                  <div className="mb-4">
                    <h4 className="text-sm font-bold text-gray-400 uppercase mb-2">Key Achievements</h4>
                    <ul className="space-y-1 text-gray-300 text-xs">
                      {p.achievements.map((a, j) => (
                        <li key={j} className="flex items-start">
                          <span className="text-blue-400 mr-2 •">•</span>
                          <span>{a}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mb-4">
                    <h4 className="text-sm font-bold text-gray-400 uppercase mb-2">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {p.technologies.map((t, j) => (
                        <span key={j} className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded-md border border-gray-600">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 text-sm font-medium"
                  >
                    <Github size={16} /> View on GitHub
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-20 px-6 bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-100 mb-12 text-center border-b-4 border-blue-500 inline-block pb-2 mx-auto">
            Skills
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {Object.entries(technicalSkills).slice(0, 3).map(([cat, skills], i) => (
              <div key={i} className="bg-gray-900 p-6 rounded-xl shadow-lg border border-gray-700">
                <h3 className="text-lg font-bold text-gray-100 mb-4 text-center">{cat}</h3>
                <div className="flex flex-wrap justify-center gap-2">
                  {skills.map((s, j) => (
                    <span key={j} className="px-3 py-1 bg-gray-800 text-gray-300 text-sm rounded-full border border-gray-600">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="grid md:grid-cols-3 gap-8 mt-8">
            {Object.entries(technicalSkills).slice(3).map(([cat, skills], i) => (
              <div key={i} className="bg-gray-900 p-6 rounded-xl shadow-lg border border-gray-700">
                <h3 className="text-lg font-bold text-gray-100 mb-4 text-center">{cat}</h3>
                <div className="flex flex-wrap justify-center gap-2">
                  {skills.map((s, j) => (
                    <span key={j} className="px-3 py-1 bg-gray-800 text-gray-300 text-sm rounded-full border border-gray-600">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 px-6 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-100 mb-12 border-b-4 border-blue-500 inline-block pb-2">
            Get in Touch
          </h2>
          <p className="text-gray-300 text-lg mb-12 max-w-2xl mx-auto">
            I'm currently available for full-time Full Stack Python Developer roles. Open to remote work and relocation.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
              <Mail className="mx-auto mb-4 text-blue-400" size={32} />
              <h3 className="font-bold text-gray-100 mb-2 text-sm uppercase">Email</h3>
              <a href="mailto:sayyedrabeeh240@gmail.com" className="text-blue-400 hover:text-blue-300 text-sm">
                sayyedrabeeh240@gmail.com
              </a>
            </div>
            <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
              <Phone className="mx-auto mb-4 text-blue-400" size={32} />
              <h3 className="font-bold text-gray-100 mb-2 text-sm uppercase">Phone</h3>
              <a href="tel:+919207286895" className="text-blue-400 hover:text-blue-300 text-sm">
                +91 9207286895
              </a>
            </div>
            <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
              <MapPin className="mx-auto mb-4 text-blue-400" size={32} />
              <h3 className="font-bold text-gray-100 mb-2 text-sm uppercase">Location</h3>
              <p className="text-gray-300 text-sm">Malappuram, Kerala, India</p>
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            <a
              href="https://github.com/sayyedrabeeh"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white font-semibold rounded-lg shadow-md transition-all duration-200 flex items-center gap-2"
            >
              <Github size={20} /> GitHub
            </a>
            <a
              href="https://linkedin.com/in/sayyedrabeeh"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md transition-all duration-200 flex items-center gap-2"
            >
              <Linkedin size={20} /> LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 border-t border-gray-700 py-8 text-center">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-sm text-gray-400">© 2025 Sayyed Rabeeh. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}
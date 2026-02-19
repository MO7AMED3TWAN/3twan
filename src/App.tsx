import { useEffect, useState } from 'react';
import { 
  Menu, X, Github, Linkedin, Mail, Phone, ArrowRight, 
  Brain, MessageSquare, Bot, Workflow, Cpu, Database, 
  Cloud, Code2, Sparkles, ChevronRight, ExternalLink, 
  Calendar, Send, Quote, Star, BookOpen,
  Layers, Zap, Target, CheckCircle2
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import './App.css';

// Import images
import hero1 from '@/assets/images/hero-1.jpg';
import hero2 from '@/assets/images/hero-2.jpg';
import hero3 from '@/assets/images/hero-3.jpg';
import aboutImg from '@/assets/images/about.jpg';
import project1Img from '@/assets/images/project-1.jpg';
import project2Img from '@/assets/images/project-2.jpg';
import project3Img from '@/assets/images/project-3.jpg';
import blog1Img from '@/assets/images/blog-1.svg';
import blog2Img from '@/assets/images/blog-2.svg';
import blog3Img from '@/assets/images/blog-3.svg';

// Navigation Component
function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled ? 'bg-black/80 backdrop-blur-xl border-b border-white/10' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-purple flex items-center justify-center group-hover:scale-110 transition-transform">
              <Brain className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-white">3twan<span className="text-[#654aff]">.</span>com</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm text-white/70 hover:text-white transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#654aff] transition-all group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a href="#contact">
              <Button className="bg-[#654aff] hover:bg-[#7c5cff] text-white rounded-full px-6">
                Let's Talk
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-xl border-b border-white/10">
          <div className="px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block text-lg text-white/70 hover:text-white transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
              <Button className="w-full bg-[#654aff] hover:bg-[#7c5cff] text-white rounded-full mt-4">
                Let's Talk
              </Button>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

// Hero Section
function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const heroImages = [
    hero1,
    hero2,
    hero3,
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [heroImages.length]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Images with Overlay */}
      {heroImages.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div 
            className="absolute inset-0 bg-cover bg-center transform scale-105"
            style={{ backgroundImage: `url(${img})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black" />
        </div>
      ))}

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#654aff]/20 rounded-full blur-[128px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[128px] animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 animate-float">
          <Sparkles className="w-4 h-4 text-[#654aff]" />
          <span className="text-sm text-white/80">Available for Freelance Projects</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
          Mohamed <span className="text-gradient">Atwan</span>
        </h1>

        {/* Role */}
        <p className="text-xl md:text-2xl lg:text-3xl text-white/80 mb-4 font-light">
          AI Engineer & NLP Specialist
        </p>

        {/* Specializations */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {['NLP', 'Agentic AI', 'AI Automation'].map((spec) => (
            <span 
              key={spec}
              className="px-4 py-2 rounded-full glass text-sm text-white/70 border border-[#654aff]/30"
            >
              {spec}
            </span>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#projects">
            <Button size="lg" className="bg-[#654aff] hover:bg-[#7c5cff] text-white rounded-full px-8 py-6 text-lg group">
              Explore My Work
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </a>
          <a href="#contact">
            <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 rounded-full px-8 py-6 text-lg">
              Get In Touch
            </Button>
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto">
          {[
            { value: '2+', label: 'Years Experience' },
            { value: '5+', label: 'Projects Completed' },
            { value: '2+', label: 'Awards Won' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gradient mb-1">{stat.value}</div>
              <div className="text-sm text-white/60">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentSlide ? 'w-8 bg-[#654aff]' : 'bg-white/30'
            }`}
          />
        ))}
      </div>
    </section>
  );
}

// About Section
function AboutSection() {
  return (
    <section id="about" className="py-24 md:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-[#654aff] to-purple-600 rounded-3xl opacity-30 blur-2xl group-hover:opacity-50 transition-opacity" />
            <div className="relative rounded-3xl overflow-hidden">
              <img
                src={aboutImg}
                alt="Mohamed Atwan"
                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              
              {/* Floating Card */}
              <div className="absolute bottom-6 left-6 right-6 glass rounded-2xl p-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-[#654aff] flex items-center justify-center">
                    <Brain className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-semibold">AI Engineer</div>
                    <div className="text-white/60 text-sm">Huawei Cloud Ecosystem</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
              <Target className="w-4 h-4 text-[#654aff]" />
              <span className="text-sm text-white/80">About Me</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              We Can Change The World <span className="text-gradient">Through Data</span>
            </h2>

            <div className="space-y-4 text-white/70 leading-relaxed">
              <p>
                Results-driven Data Scientist with <strong className="text-white">2 years</strong> of experience in 
                <strong className="text-white"> Machine Learning</strong>, <strong className="text-white">Deep Learning</strong>, 
                <strong className="text-white"> Natural Language Processing</strong>, and <strong className="text-white">Data Science</strong>. 
                Skilled in extracting insights and building data-driven solutions with a focus on <strong className="text-white">Agentic AI & LLMs</strong>.
              </p>
              <p>
                Proven track record of leading teams to success, including achieving <strong className="text-white">Top 5 in MTC-AIC2 AI Competition</strong> 
                for Speech Recognition Systems and <strong className="text-white">Top 8 in Huawei Spark Infinity North Africa 2024</strong> 
                for Supply Chain AI Solutions.
              </p>
              <p>
                Currently working as an <strong className="text-white">AI Engineer at Huawei Cloud Ecosystem</strong>, 
                developing end-to-end AI solutions and NLP systems. Also serving as a 
                <strong className="text-white"> Huawei Cloud Developer Group (HCDG) Organizer</strong>, 
                fostering collaboration and innovation in the tech community.
              </p>
            </div>

            {/* Key Achievements */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {[
                'Top 5 MTC-AIC2 Competition',
                'Top 8 Huawei Spark Infinity',
                'HCIA-AI Certified',
                'HCDG Organizer',
              ].map((achievement) => (
                <div key={achievement} className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#654aff] flex-shrink-0" />
                  <span className="text-sm text-white/70">{achievement}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Skills Section
function SkillsSection() {
  const skillCategories = [
    {
      title: 'AI & Machine Learning',
      icon: Brain,
      skills: ['Machine Learning', 'Deep Learning', 'NLP', 'Computer Vision', 'LLMs', 'Transformers'],
    },
    {
      title: 'Frameworks & Tools',
      icon: Code2,
      skills: ['PyTorch', 'TensorFlow', 'Hugging Face', 'LangChain', 'Scikit-learn', 'OpenAI'],
    },
    {
      title: 'Cloud & MLOps',
      icon: Cloud,
      skills: ['Huawei Cloud', 'Azure', 'Docker', 'Kubernetes', 'MLflow', 'Git'],
    },
    {
      title: 'Data & Databases',
      icon: Database,
      skills: ['Python', 'SQL', 'Pandas', 'NumPy', 'Vector DBs', 'ETL Pipelines'],
    },
  ];

  return (
    <section id="skills" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#654aff]/10 rounded-full blur-[200px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
            <Zap className="w-4 h-4 text-[#654aff]" />
            <span className="text-sm text-white/80">My Expertise</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Skills & <span className="text-gradient">Technologies</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            A comprehensive toolkit built over years of working on cutting-edge AI projects
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="group glass rounded-2xl p-6 hover:border-[#654aff]/50 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#654aff]/20 flex items-center justify-center group-hover:bg-[#654aff] transition-colors">
                  <category.icon className="w-6 h-6 text-[#654aff] group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-semibold text-white">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-full bg-white/5 text-white/70 text-sm border border-white/10 hover:border-[#654aff]/50 hover:text-white transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Experience Timeline */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Experience Timeline</h3>
          <div className="space-y-6">
            {[
              {
                role: 'AI Engineer',
                company: 'Huawei Cloud Ecosystem',
                period: 'Oct 2025 - Present',
                description: 'Full-time AI development, NLP systems, LLM integration, and cloud-native solutions.',
              },
              {
                role: 'AI Instructor',
                company: 'Shabab Mobtakeron',
                period: 'Oct 2024 - Apr 2025',
                description: 'Part-time teaching AI and deep learning concepts, supervising graduation projects.',
              },
              {
                role: 'Data Engineering Trainee',
                company: 'Digital Egypt Pioneers (DEPI)',
                period: 'Jul 2024 - Oct 2024',
                description: 'Full-time training in data engineering, SQL, Python, and MLOps tools.',
              },
              {
                role: 'BI Development Trainee',
                company: 'Information Technology Institute (ITI)',
                period: 'Jul 2024 - Sep 2024',
                description: 'Training in data warehousing, SQL, Power BI, and business intelligence.',
              },
            ].map((exp, index) => (
              <div key={index} className="flex gap-4 md:gap-8">
                <div className="flex flex-col items-center">
                  <div className="w-4 h-4 rounded-full bg-[#654aff]" />
                  {index < 3 && <div className="w-0.5 flex-1 bg-white/10 mt-2" />}
                </div>
                <div className="pb-8 flex-1">
                  <div className="glass rounded-xl p-5 hover:border-[#654aff]/30 transition-colors">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h4 className="text-lg font-semibold text-white">{exp.role}</h4>
                      <span className="text-sm text-[#654aff]">{exp.period}</span>
                    </div>
                    <div className="text-white/60 mb-2">{exp.company}</div>
                    <p className="text-white/50 text-sm">{exp.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Services Section
function ServicesSection() {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      icon: Bot,
      title: 'AI Strategy Consulting',
      description: 'Comprehensive AI roadmap development for your business. From feasibility studies to implementation strategies, I help organizations leverage AI for competitive advantage.',
      features: ['AI Readiness Assessment', 'ROI Analysis', 'Technology Stack Recommendation', 'Implementation Roadmap'],
    },
    {
      icon: MessageSquare,
      title: 'NLP Solutions',
      description: 'Custom Natural Language Processing solutions including chatbots, sentiment analysis, text classification, and document processing systems tailored to your needs.',
      features: ['Chatbot Development', 'Sentiment Analysis', 'Text Classification', 'Named Entity Recognition'],
    },
    {
      icon: Workflow,
      title: 'AI Automation',
      description: 'End-to-end automation solutions using AI agents and LLMs. Streamline workflows, reduce manual tasks, and boost productivity with intelligent automation.',
      features: ['Workflow Automation', 'AI Agents', 'Process Optimization', 'Intelligent Document Processing'],
    },
  ];

  return (
    <section id="services" className="py-24 md:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
            <Layers className="w-4 h-4 text-[#654aff]" />
            <span className="text-sm text-white/80">What I Offer</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="text-gradient">Services</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Specialized AI solutions tailored to transform your business operations
          </p>
        </div>

        {/* Services Accordion */}
        <div className="flex flex-col lg:flex-row gap-4">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`relative overflow-hidden rounded-2xl cursor-pointer transition-all duration-500 ${
                activeService === index 
                  ? 'lg:flex-[3] bg-gradient-to-br from-[#654aff]/20 to-purple-900/20 border border-[#654aff]/50' 
                  : 'lg:flex-1 glass hover:border-white/20'
              }`}
              onClick={() => setActiveService(index)}
            >
              <div className="p-6 md:p-8 h-full flex flex-col">
                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-colors ${
                  activeService === index ? 'bg-[#654aff]' : 'bg-white/10'
                }`}>
                  <service.icon className="w-7 h-7 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-xl md:text-2xl font-bold text-white mb-4">{service.title}</h3>

                {/* Content - Only visible when active */}
                <div className={`overflow-hidden transition-all duration-500 ${
                  activeService === index ? 'opacity-100 max-h-96' : 'opacity-0 max-h-0 lg:max-h-0'
                }`}>
                  <p className="text-white/70 mb-6 leading-relaxed">{service.description}</p>
                  
                  <div className="space-y-3">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-[#654aff] flex-shrink-0" />
                        <span className="text-white/80">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <a href="#contact">
                    <Button className="mt-6 bg-[#654aff] hover:bg-[#7c5cff] text-white rounded-full group">
                      Get Started
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </a>
                </div>

                {/* Mobile: Always show description */}
                <div className="lg:hidden mt-4">
                  <p className="text-white/60 text-sm">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Projects Section
function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  const projects = [
    {
      title: 'Hadith Chatbot System',
      category: 'NLP & LLMs',
      description: 'An advanced chatbot system that delivers authenticated hadiths, explanations, and actionable lessons. Built with RAG architecture using LangChain and Qdrant vector database.',
      image: project1Img,
      technologies: ['Python', 'LangChain', 'Qdrant', 'QWEN 2.5', 'Hugging Face', 'PEFT'],
      features: [
        'Retrieval-Augmented Generation (RAG) for accurate responses',
        'Fine-tuned QWEN 2.5 1.5B model using LoRA',
        'Custom dataset of authenticated hadiths',
        'Semantic search with optimized embeddings',
      ],
      github: 'https://github.com/MO7AMED3TWAN',
      demo: '#',
    },
    {
      title: 'Arabic Speech Recognition',
      category: 'Deep Learning',
      description: 'Deep Learning-based Speech-to-Text system for Modern Standard Arabic & Egyptian dialects in real-world noisy environments. Ranked 5th in MTC-AIC2 competition.',
      image: project2Img,
      technologies: ['DeepSpeech 2', 'PyTorch', 'CNN', 'LSTM', 'GRU', 'MFCC'],
      features: [
        'DeepSpeech 2 architecture with CNNs & RNNs',
        'Noise reduction and signal processing',
        'Support for multiple Arabic dialects',
        'Real-time transcription capabilities',
      ],
      github: 'https://github.com/MO7AMED3TWAN/MTC-AIC2',
      demo: '#',
    },
    {
      title: 'Supply Chain AI Solution',
      category: 'AI Automation',
      description: 'AI-powered supply chain optimization solution that won Top 8 in Huawei Spark Infinity North Africa 2024. Features demand forecasting and inventory optimization.',
      image: project3Img,
      technologies: ['Python', 'TensorFlow', 'Time Series', 'Forecasting', 'Optimization'],
      features: [
        'Demand forecasting with ML models',
        'Inventory optimization algorithms',
        'Real-time analytics dashboard',
        'Automated reorder point calculation',
      ],
      github: 'https://github.com/MO7AMED3TWAN',
      demo: '#',
    },
  ];

  return (
    <section id="projects" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#654aff]/10 rounded-full blur-[200px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
            <Cpu className="w-4 h-4 text-[#654aff]" />
            <span className="text-sm text-white/80">Featured Work</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            A selection of my most impactful AI and machine learning projects
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group relative glass rounded-2xl overflow-hidden hover:border-[#654aff]/50 transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-[#654aff]/80 text-white text-xs">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#654aff] transition-colors">
                  {project.title}
                </h3>
                <p className="text-white/60 text-sm line-clamp-2 mb-4">{project.description}</p>
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span key={tech} className="px-2 py-1 rounded bg-white/5 text-white/50 text-xs">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 rounded bg-white/5 text-white/50 text-xs">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-[#654aff]/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="w-14 h-14 rounded-full bg-[#654aff] flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform">
                  <ExternalLink className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <a href="https://github.com/MO7AMED3TWAN" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 rounded-full px-8">
              View All Projects on GitHub
              <Github className="w-4 h-4 ml-2" />
            </Button>
          </a>
        </div>
      </div>

      {/* Project Detail Dialog */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-3xl bg-black/95 border-white/10 text-white max-h-[90vh] overflow-y-auto">
          {selectedProject && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold">{selectedProject.title}</DialogTitle>
                <DialogDescription className="text-white/60">{selectedProject.category}</DialogDescription>
              </DialogHeader>
              
              <div className="mt-4">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-64 object-cover rounded-xl mb-6"
                />
                
                <p className="text-white/80 leading-relaxed mb-6">{selectedProject.description}</p>
                
                <h4 className="text-lg font-semibold text-white mb-3">Key Features</h4>
                <ul className="space-y-2 mb-6">
                  {selectedProject.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-[#654aff] flex-shrink-0 mt-0.5" />
                      <span className="text-white/70">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <h4 className="text-lg font-semibold text-white mb-3">Technologies</h4>
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.technologies.map((tech) => (
                    <span key={tech} className="px-3 py-1.5 rounded-full bg-[#654aff]/20 text-[#654aff] text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <a href={selectedProject.github} target="_blank" rel="noopener noreferrer">
                    <Button className="bg-[#654aff] hover:bg-[#7c5cff] text-white">
                      <Github className="w-4 h-4 mr-2" />
                      View Code
                    </Button>
                  </a>
                  <a href={selectedProject.demo} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </Button>
                  </a>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}

// Testimonials Section
function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Ahmed Hassan',
      role: 'CEO, TechStart Inc.',
      content: 'Mohamed\'s AI solutions transformed our business operations completely. His expertise in NLP helped us automate customer support, reducing response time by 80%. Highly recommended!',
      rating: 5,
    },
    {
      name: 'Sarah Johnson',
      role: 'Tech Lead, DataFlow AI',
      content: 'Exceptional expertise in NLP and machine learning. Mohamed delivered a chatbot solution that exceeded our expectations. His attention to detail and problem-solving skills are outstanding.',
      rating: 5,
    },
    {
      name: 'Mohamed Ali',
      role: 'Founder, InnovateTech',
      content: 'Working with Mohamed was a game-changer for our startup. He delivered beyond expectations on every milestone. His deep understanding of AI and commitment to quality is rare to find.',
      rating: 5,
    },
  ];

  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
            <Quote className="w-4 h-4 text-[#654aff]" />
            <span className="text-sm text-white/80">Client Testimonials</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            What Clients <span className="text-gradient">Say</span>
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="glass rounded-2xl p-6 hover:border-[#654aff]/30 transition-all duration-300"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#654aff] text-[#654aff]" />
                ))}
              </div>

              {/* Content */}
              <p className="text-white/70 leading-relaxed mb-6">{testimonial.content}</p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-purple flex items-center justify-center text-white font-bold">
                  {testimonial.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <div className="text-white font-semibold">{testimonial.name}</div>
                  <div className="text-white/50 text-sm">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Blog Section
function BlogSection() {
  const [selectedArticle, setSelectedArticle] = useState<typeof articles[0] | null>(null);

  const articles = [
    {
      title: 'The Future of Agentic AI in 2025',
      category: 'Agentic AI',
      excerpt: 'Explore how autonomous AI agents are revolutionizing industries and what it means for businesses adopting this cutting-edge technology.',
      content: `
        <p>Agentic AI represents a paradigm shift in artificial intelligence, moving from passive tools to autonomous agents capable of making decisions and taking actions independently.</p>
        
        <h3>What is Agentic AI?</h3>
        <p>Agentic AI refers to AI systems that can operate autonomously, set goals, make decisions, and execute tasks without constant human oversight. Unlike traditional AI models that respond to specific prompts, agentic AI can:</p>
        <ul>
          <li>Break down complex goals into actionable steps</li>
          <li>Use tools and APIs to accomplish tasks</li>
          <li>Learn from feedback and adapt strategies</li>
          <li>Collaborate with other AI agents</li>
        </ul>

        <h3>Key Applications in 2025</h3>
        <p>We're seeing agentic AI transform several industries:</p>
        <ul>
          <li><strong>Customer Service:</strong> AI agents that can handle entire support workflows</li>
          <li><strong>Software Development:</strong> Autonomous coding assistants that can build features end-to-end</li>
          <li><strong>Research:</strong> AI systems that can conduct literature reviews and synthesize findings</li>
          <li><strong>Business Operations:</strong> Automated workflow optimization and decision-making</li>
        </ul>

        <h3>Getting Started</h3>
        <p>For businesses looking to adopt agentic AI, start with:</p>
        <ul>
          <li>Identifying repetitive decision-making processes</li>
          <li>Building robust feedback loops</li>
          <li>Implementing proper guardrails and oversight</li>
          <li>Starting with narrow, well-defined tasks</li>
        </ul>
      `,
      image: blog1Img,
      date: 'Jan 15, 2025',
      readTime: '8 min read',
    },
    {
      title: 'Building Production-Ready NLP Pipelines',
      category: 'NLP',
      excerpt: 'A comprehensive guide to designing, building, and deploying scalable NLP systems that handle real-world complexity.',
      content: `
        <p>Building NLP pipelines that work in production requires careful consideration of data quality, model selection, and system architecture.</p>
        
        <h3>Pipeline Architecture</h3>
        <p>A production NLP pipeline typically consists of:</p>
        <ul>
          <li><strong>Data Ingestion:</strong> Handling various input formats and sources</li>
          <li><strong>Preprocessing:</strong> Text cleaning, normalization, and tokenization</li>
          <li><strong>Feature Extraction:</strong> Converting text to model-ready formats</li>
          <li><strong>Inference:</strong> Model prediction with batching and optimization</li>
          <li><strong>Post-processing:</strong> Result formatting and confidence scoring</li>
        </ul>

        <h3>Key Challenges</h3>
        <p>Common challenges in production NLP:</p>
        <ul>
          <li>Handling out-of-vocabulary words and domain-specific terminology</li>
          <li>Managing model drift and performance degradation</li>
          <li>Scaling to handle high-throughput requests</li>
          <li>Ensuring low latency for real-time applications</li>
        </ul>

        <h3>Best Practices</h3>
        <ul>
          <li>Implement comprehensive logging and monitoring</li>
          <li>Use model versioning and A/B testing</li>
          <li>Design for graceful degradation</li>
          <li>Plan for continuous retraining pipelines</li>
        </ul>
      `,
      image: blog2Img,
      date: 'Jan 10, 2025',
      readTime: '12 min read',
    },
    {
      title: 'AI Automation: From Concept to Deployment',
      category: 'AI Automation',
      excerpt: 'Learn how to identify automation opportunities and implement AI solutions that deliver measurable ROI for your organization.',
      content: `
        <p>AI automation is transforming how businesses operate, but successful implementation requires a strategic approach.</p>
        
        <h3>Identifying Automation Opportunities</h3>
        <p>Look for processes that are:</p>
        <ul>
          <li>Repetitive and rule-based</li>
          <li>Data-intensive</li>
          <li>Prone to human error</li>
          <li>Time-consuming for employees</li>
        </ul>

        <h3>The Implementation Framework</h3>
        <p>Our proven 4-step framework:</p>
        <ol>
          <li><strong>Discovery:</strong> Map current processes and identify pain points</li>
          <li><strong>Design:</strong> Architect the AI solution with clear success metrics</li>
          <li><strong>Development:</strong> Build and test with iterative feedback</li>
          <li><strong>Deployment:</strong> Roll out with monitoring and support</li>
        </ol>

        <h3>Measuring Success</h3>
        <p>Key metrics to track:</p>
        <ul>
          <li>Time saved per process</li>
          <li>Error reduction percentage</li>
          <li>Cost savings</li>
          <li>Employee satisfaction scores</li>
          <li>ROI timeline</li>
        </ul>

        <h3>Common Pitfalls</h3>
        <p>Avoid these mistakes:</p>
        <ul>
          <li>Automating broken processes</li>
          <li>Underestimating change management</li>
          <li>Ignoring edge cases</li>
          <li>Insufficient testing</li>
        </ul>
      `,
      image: blog3Img,
      date: 'Jan 5, 2025',
      readTime: '10 min read',
    },
  ];

  return (
    <section id="blog" className="py-24 md:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
            <BookOpen className="w-4 h-4 text-[#654aff]" />
            <span className="text-sm text-white/80">Latest Articles</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="text-gradient">Blog</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Insights and tutorials on AI, NLP, and automation
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <article
              key={article.title}
              className="group glass rounded-2xl overflow-hidden hover:border-[#654aff]/50 transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedArticle(article)}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-[#654aff]/80 text-white text-xs">
                    {article.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-4 text-white/50 text-sm mb-3">
                  <span>{article.date}</span>
                  <span>•</span>
                  <span>{article.readTime}</span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#654aff] transition-colors line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-white/60 text-sm line-clamp-3">{article.excerpt}</p>
                
                <div className="flex items-center gap-2 mt-4 text-[#654aff] text-sm font-medium">
                  Read More
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Article Dialog */}
      <Dialog open={!!selectedArticle} onOpenChange={() => setSelectedArticle(null)}>
        <DialogContent className="max-w-4xl bg-black/95 border-white/10 text-white max-h-[90vh] overflow-y-auto">
          {selectedArticle && (
            <>
              <DialogHeader>
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-3 py-1 rounded-full bg-[#654aff]/20 text-[#654aff] text-xs">
                    {selectedArticle.category}
                  </span>
                  <span className="text-white/50 text-sm">{selectedArticle.date}</span>
                  <span className="text-white/50 text-sm">•</span>
                  <span className="text-white/50 text-sm">{selectedArticle.readTime}</span>
                </div>
                <DialogTitle className="text-2xl md:text-3xl font-bold">{selectedArticle.title}</DialogTitle>
              </DialogHeader>
              
              <div className="mt-4">
                <img
                  src={selectedArticle.image}
                  alt={selectedArticle.title}
                  className="w-full h-64 object-cover rounded-xl mb-6"
                />
                
                <div 
                  className="prose prose-invert max-w-none"
                  dangerouslySetInnerHTML={{ __html: selectedArticle.content }}
                />
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}

// Contact Section
function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    message: '',
    date: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.projectType) {
      newErrors.projectType = 'Please select a service';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Project details are required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Please provide at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      toast.error('Please fix the errors above', {
        description: 'Check all required fields',
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Prepare form data for Web3Forms
      const formDataToSend = new FormData();
      
      // Add Web3Forms access key (get from https://web3forms.com)
      formDataToSend.append('access_key', '7c47f178-d784-417d-8b9e-c6418ac5096d');
      
      // Add form fields
      formDataToSend.append('name', formData.name);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('project_type', formData.projectType);
      formDataToSend.append('preferred_date', formData.date || 'Not specified');
      formDataToSend.append('message', formData.message);
      
      // Optional: Add subject and redirect URL
      formDataToSend.append('subject', 'New Consultation Request from 3twan');
      formDataToSend.append('from_name', formData.name);

      // Send to Web3Forms API
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formDataToSend,
      });

      const data = await response.json();

      if (data.success) {
        toast.success('Consultation request sent!', {
          description: 'I\'ll get back to you as soon as possible.',
        });

        // Reset form
        setFormData({
          name: '',
          email: '',
          projectType: '',
          message: '',
          date: '',
        });
        setErrors({});
      } else {
        toast.error('Failed to send request', {
          description: data.message || 'Please try again',
        });
      }
    } catch (error) {
      toast.error('Something went wrong', {
        description: 'Please check your internet connection and try again',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#654aff]/10 rounded-full blur-[200px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
            <Send className="w-4 h-4 text-[#654aff]" />
            <span className="text-sm text-white/80">Get In Touch</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Let's Work <span className="text-gradient">Together</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Have a project in mind? Let's discuss how I can help bring your AI vision to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="glass rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6">Book a Consultation</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white/70 text-sm mb-2">
                    Your Name
                    {errors.name && <span className="text-red-400 ml-1">*</span>}
                  </label>
                  <Input
                    type="text"
                    name="name"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    className={`bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-[#654aff] transition-colors ${
                      errors.name ? 'border-red-500/50 focus:border-red-500' : ''
                    }`}
                    required
                  />
                  {errors.name && (
                    <p className="text-red-400 text-xs mt-1">{errors.name}</p>
                  )}
                </div>
                <div>
                  <label className="block text-white/70 text-sm mb-2">
                    Email Address
                    {errors.email && <span className="text-red-400 ml-1">*</span>}
                  </label>
                  <Input
                    type="email"
                    name="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    className={`bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-[#654aff] transition-colors ${
                      errors.email ? 'border-red-500/50 focus:border-red-500' : ''
                    }`}
                    required
                  />
                  {errors.email && (
                    <p className="text-red-400 text-xs mt-1">{errors.email}</p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-white/70 text-sm mb-2">
                  Project Type
                  {errors.projectType && <span className="text-red-400 ml-1">*</span>}
                </label>
                <select
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 rounded-md bg-white/5 border border-white/10 text-white focus:border-[#654aff] focus:outline-none transition-colors ${
                    errors.projectType ? 'border-red-500/50 focus:border-red-500' : ''
                  }`}
                  required
                >
                  <option value="" className="bg-black">Select a service</option>
                  <option value="AI Strategy Consulting" className="bg-black">AI Strategy Consulting</option>
                  <option value="NLP Solutions" className="bg-black">NLP Solutions</option>
                  <option value="AI Automation" className="bg-black">AI Automation</option>
                  <option value="Other" className="bg-black">Other</option>
                </select>
                {errors.projectType && (
                  <p className="text-red-400 text-xs mt-1">{errors.projectType}</p>
                )}
              </div>

              <div>
                <label className="block text-white/70 text-sm mb-2">Preferred Meeting Date (Optional)</label>
                <Input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="bg-white/5 border-white/10 text-white focus:border-[#654aff]"
                />
              </div>

              <div>
                <label className="block text-white/70 text-sm mb-2">
                  Project Details
                  {errors.message && <span className="text-red-400 ml-1">*</span>}
                </label>
                <Textarea
                  name="message"
                  placeholder="Tell me about your project, goals, and timeline..."
                  value={formData.message}
                  onChange={handleChange}
                  className={`bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-[#654aff] min-h-[120px] transition-colors ${
                    errors.message ? 'border-red-500/50 focus:border-red-500' : ''
                  }`}
                  required
                />
                <div className="flex justify-between items-center mt-1">
                  {errors.message && (
                    <p className="text-red-400 text-xs">{errors.message}</p>
                  )}
                  <p className="text-white/40 text-xs ml-auto">
                    {formData.message.length}/500 characters
                  </p>
                </div>
              </div>

              <Button 
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#654aff] hover:bg-[#7c5cff] disabled:bg-[#654aff]/50 disabled:cursor-not-allowed text-white rounded-full py-6 text-lg group transition-all"
              >
                {isSubmitting ? (
                  <>
                    <span className="opacity-0">Schedule</span>
                    <span className="absolute">Sending...</span>
                  </>
                ) : (
                  <>
                    Schedule Consultation
                    <Calendar className="w-5 h-5 ml-2 group-hover:translate-y-1 transition-transform" />
                  </>
                )}
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              <p className="text-white/60 mb-8">
                Feel free to reach out through any of these channels. I'm always excited to discuss new projects and opportunities.
              </p>
            </div>

            <div className="space-y-4">
              {[
                { icon: Mail, label: 'Email', value: 'Mo7amed3twan@gmail.com', href: 'mailto:Mo7amed3twan@gmail.com' },
                { icon: Phone, label: 'Phone', value: '+20 155 120 9560', href: 'https://wa.me/201551209560' },
                { icon: Github, label: 'GitHub', value: 'github.com/MO7AMED3TWAN', href: 'https://github.com/MO7AMED3TWAN' },
                { icon: Linkedin, label: 'LinkedIn', value: 'linkedin.com/in/mo7amed3twan', href: 'https://www.linkedin.com/in/mo7amed3twan/' },
              ].map((contact) => (
                <a
                  key={contact.label}
                  href={contact.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 glass rounded-xl hover:border-[#654aff]/50 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#654aff]/20 flex items-center justify-center group-hover:bg-[#654aff] transition-colors">
                    <contact.icon className="w-5 h-5 text-[#654aff] group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <div className="text-white/50 text-sm">{contact.label}</div>
                    <div className="text-white font-medium">{contact.value}</div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-white/30 ml-auto group-hover:text-[#654aff] group-hover:translate-x-1 transition-all" />
                </a>
              ))}
            </div>

            {/* Availability Status */}
            <div className="glass rounded-xl p-6 border border-green-500/30">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                <span className="text-white font-medium">Available for new projects</span>
              </div>
              <p className="text-white/60 text-sm mt-2">
                Currently accepting freelance work and consulting opportunities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Footer
function Footer() {
  return (
    <footer className="py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-purple flex items-center justify-center">
              <Brain className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-white">Mohamed<span className="text-[#654aff]">.</span></span>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-6">
            {['About', 'Skills', 'Services', 'Projects', 'Blog', 'Contact'].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-white/50 hover:text-white transition-colors text-sm"
              >
                {link}
              </a>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a href="https://github.com/MO7AMED3TWAN" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-[#654aff]/20 transition-colors">
              <Github className="w-5 h-5 text-white/70" />
            </a>
            <a href="https://www.linkedin.com/in/mo7amed3twan/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-[#654aff]/20 transition-colors">
              <Linkedin className="w-5 h-5 text-white/70" />
            </a>
            <a href="mailto:Mo7amed3twan@gmail.com" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-[#654aff]/20 transition-colors">
              <Mail className="w-5 h-5 text-white/70" />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-white/5 text-center">
          <p className="text-white/40 text-sm">
            © {new Date().getFullYear()} Mohamed Atwan. All rights reserved. Built with passion for AI.
          </p>
        </div>
      </div>
    </footer>
  );
}

// Main App Component
function App() {
  return (
    <div className="min-h-screen bg-black text-white noise-overlay">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ServicesSection />
        <ProjectsSection />
        <TestimonialsSection />
        <BlogSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;

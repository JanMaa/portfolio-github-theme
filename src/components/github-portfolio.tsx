'use client'

import { useState, useEffect } from 'react'
// import Image from 'next/image'
import { motion, useAnimation, Variants, AnimatePresence } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation';
import { useInView } from 'react-intersection-observer'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { BarChart, Mail, Book, Code, Award, Menu, X, Database, Brain, Eye, Terminal, PieChart, Linkedin, Github, BarChart2, BookOpen, ChevronLeft, ChevronRight, LineChart, Zap, Layers, ShoppingCart, PieChart as PieChartIcon } from "lucide-react"
import imgAvatar from '@/assets/avatar-sample.png'
import imgDashboard from '@/assets/dashboard-sample.png'
import imgCertificate from '@/assets/certificate-sample.png'

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}

const staggerChildren: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
}

const slideIn: Variants = {
  hidden: { x: -50, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.6 } }
}

const scaleIn: Variants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { duration: 0.6 } }
}

const rotateIn: Variants = {
  hidden: { rotate: -10, opacity: 0 },
  visible: { rotate: 0, opacity: 1, transition: { duration: 0.6 } }
}

const mobileMenuVariants: Variants = {
  closed: {
    opacity: 0,
    scale: 0.95,
    transition: {
      duration: 0.2,
      ease: "easeInOut"
    }
  },
  open: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.2,
      ease: "easeInOut"
    }
  }
}

interface AnimatedSectionProps {
  children?: React.ReactNode;
  className?: string;
  variants?: Variants;
}

function AnimatedSection({children, className, variants = fadeInUp }: AnimatedSectionProps ) {
  const controls = useAnimation()
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      className={className}
    >
      {children}
    </motion.section>
  )
}

export default function GitHubInspiredPortfolio() {
  const [activeSection, setActiveSection] = useState('about')
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [projectPage, setProjectPage] = useState(0)
  const [certificatePage, setCertificatePage] = useState(0)

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId)
    setIsMenuOpen(false)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const navItems = [
    { name: 'About', icon: <Book className="w-4 h-4" /> },
    { name: 'Skills', icon: <Code className="w-4 h-4" /> },
    { name: 'Projects', icon: <BarChart className="w-4 h-4" /> },
    { name: 'Certificates', icon: <Award className="w-4 h-4" /> },
    { name: 'Contact', icon: <Mail className="w-4 h-4" /> }
  ]

  const skills = [
    { name: "Data Analysis", icon: <PieChart className="w-6 h-6" /> },
    { name: "Statistical Modeling", icon: <BarChart className="w-6 h-6" /> },
    { name: "Machine Learning", icon: <Brain className="w-6 h-6" /> },
    { name: "Data Visualization", icon: <Eye className="w-6 h-6" /> },
    { name: "SQL", icon: <Database className="w-6 h-6" /> },
    { name: "Python", icon: <Terminal className="w-6 h-6" /> },
    { name: "R", icon: <Code className="w-6 h-6" /> },
    { name: "Tableau", icon: <BarChart className="w-6 h-6" /> },
    { name: "Power BI", icon: <PieChart className="w-6 h-6" /> }
  ]

  const projects = [
    {
      title: "Customer Churn Prediction",
      description: "Developed a machine learning model to predict customer churn with 85% accuracy.",
      icon: <BarChart className="w-5 h-5" />,
      image: imgDashboard
    },
    {
      title: "Sales Trend Analysis",
      description: "Analyzed 5 years of sales data to identify key trends and opportunities for growth.",
      icon: <LineChart className="w-5 h-5" />,
      image: imgDashboard
    },
    {
      title: "Sentiment Analysis Dashboard",
      description: "Created an interactive dashboard for real-time sentiment analysis of customer feedback.",
      icon: <PieChartIcon className="w-5 h-5" />,
      image: imgDashboard
    },
    {
      title: "Supply Chain Optimization",
      description: "Implemented a machine learning model to optimize inventory management and reduce costs.",
      icon: <Layers className="w-5 h-5" />,
      image: imgDashboard
    },
    {
      title: "Predictive Maintenance System",
      description: "Developed an IoT-based system for predicting equipment failures in manufacturing plants.",
      icon: <Zap className="w-5 h-5" />,
      image: imgDashboard
    },
    {
      title: "Customer Segmentation Analysis",
      description: "Utilized clustering algorithms to segment customers and tailor marketing strategies.",
      icon: <PieChart className="w-5 h-5" />,
      image: imgDashboard
    },
    {
      title: "Fraud Detection Algorithm",
      description: "Created a real-time fraud detection system for a fintech company using anomaly detection techniques.",
      icon: <Eye className="w-5 h-5" />,
      image: imgDashboard
    },
    {
      title: "Market Basket Analysis",
      description: "Implemented association rule mining to analyze customer purchase patterns and improve product placement.",
      icon: <ShoppingCart className="w-5 h-5" />,
      image: imgDashboard
    }
  ]

  const certificates = [
    { name: "Google Data Analytics Professional Certificate", image: imgCertificate },
    { name: "IBM Data Science Professional Certificate", image: imgCertificate },
    { name: "Microsoft Certified: Azure Data Scientist Associate", image: imgCertificate },
    { name: "Tableau Desktop Specialist", image: imgCertificate },
    { name: "AWS Certified Data Analytics - Specialty", image: imgCertificate },
    { name: "Certified Analytics Professional (CAP)", image: imgCertificate },
    { name: "SAS Certified Data Scientist", image: imgCertificate },
    { name: "Cloudera Certified Associate Data Analyst", image: imgCertificate },
    { name: "Data Science Council of America (DASCA) Associate Big Data Analyst", image: imgCertificate },
    { name: "MongoDB Certified Data Analyst Associate", image: imgCertificate },
    { name: "Alteryx Designer Core Certification", image: imgCertificate },
    { name: "IABAC Certified Business Analytics Professional", image: imgCertificate }
  ]

  const socialLinks = [
    { name: "LinkedIn", icon: <Linkedin className="w-5 h-5" />, url: "https://www.linkedin.com/in/janedoe" },
    { name: "GitHub", icon: <Github className="w-5 h-5" />, url: "https://github.com/janedoe" },
    { name: "Tableau", icon: <BarChart2 className="w-5 h-5" />, url: "https://public.tableau.com/profile/janedoe" },
    { name: "DataCamp", icon: <BookOpen className="w-5 h-5" />, url: "https://www.datacamp.com/profile/janedoe" }
  ]

  const projectsPerPage = 4
  const certificatesPerPage = 6
  const totalProjectPages = Math.ceil(projects.length / projectsPerPage)
  const totalCertificatePages = Math.ceil(certificates.length / certificatesPerPage)

  return (
    <div className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      <header className="sticky top-0 z-10 bg-[#161b22] border-b border-[#30363d]">
        <nav className="container mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold text-white">Jane Doe</h1>
            <button
              className="md:hidden text-[#c9d1d9] hover:text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
            <ul className="hidden md:flex space-x-4">
              {navItems.map(({ name, icon }) => (
                <li key={name.toLowerCase()}>
                  <button
                    onClick={() => scrollToSection(name.toLowerCase())}
                    className={`flex items-center px-3 py-2 text-sm font-medium rounded-md ${
                      activeSection === name.toLowerCase()
                        ? 'bg-[#21262d] text-white'
                        : 'text-[#8b949e] hover:bg-[#21262d] hover:text-white'
                    }`}
                  >
                    {icon}
                    <span className="ml-2">{name}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial="closed"
                animate="open"
                exit="closed"
                variants={mobileMenuVariants}
                className="md:hidden"
              >
                <ul className="mt-4 space-y-2">
                  {navItems.map(({ name, icon }) => (
                    <motion.li key={name.toLowerCase()} variants={fadeInUp}>
                      <button
                        onClick={() => scrollToSection(name.toLowerCase())}
                        className={`flex items-center w-full px-3 py-2 text-sm font-medium rounded-md ${
                          activeSection === name.toLowerCase()
                            ? 'bg-[#21262d] text-white'
                            : 'text-[#8b949e] hover:bg-[#21262d] hover:text-white'
                        }`}
                      >
                        {icon}
                        <span className="ml-2">{name}</span>
                      </button>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-8">
        <AnimatedSection className="mb-16" variants={slideIn}>
          <div id="about" className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
            <div className="flex items-center mb-4 lg:mb-0">
              <div className="mr-6">
                <img
                  src={imgAvatar}
                  alt="Jane Doe"
                  width={150}
                  height={150}
                  className="rounded-full border-4 border-[#30363d]"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-2 text-white">Jane Doe</h2>
                <h3 className="text-xl text-[#8b949e] mb-4">Data Analyst</h3>
                <div className="flex space-x-4">
                  {socialLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#8b949e] hover:text-white transition-colors duration-300"
                    >
                      {link.icon}
                      <span className="sr-only">{link.name}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <div className="lg:w-3/4 mt-6 lg:mt-0">
              <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-6 shadow-lg">
              <TypeAnimation
                  sequence={[
                    `Passionate data analyst with 5+ years of experience in transforming complex datasets into actionable insights. Skilled in statistical analysis, data visualization, and machine learning techniques.
                    
                    I thrive on uncovering hidden patterns in data and translating them into strategic business recommendations. My expertise spans various industries, including finance, healthcare, and e-commerce, where I\'ve consistently delivered high-impact projects that drive growth and efficiency.`,
                    100,
                  ]}
                  wrapper="div"
                  cursor={true}
                  repeat={0}
                  speed={80}
                  style={{ fontSize: '1rem', color: '#ffffff', fontFamily: 'monospace', lineHeight: '1.5', whiteSpace: 'pre-line'}}
                />
                {/* <p className="text-[#8b949e] mb-4 font-mono leading-relaxed">
                  Passionate data analyst with 5+ years of experience in transforming complex datasets into actionable insights.
                  Skilled in statistical analysis, data visualization, and machine learning techniques.
                </p>
                <p className="text-[#8b949e] font-mono leading-relaxed">
                  I thrive on uncovering hidden patterns in data and translating them into strategic business recommendations.
                  My expertise spans various industries, including finance, healthcare, and e-commerce, where I've consistently
                  delivered high-impact projects that drive growth and efficiency.
                </p> */}
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="mb-16" variants={scaleIn}>
          <h2 id="skills" className="text-2xl font-bold mb-6 text-white">Skills</h2>
          <motion.div
            variants={staggerChildren}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
          >
            {skills.map((skill) => (
              <motion.div
                key={skill.name}
                variants={fadeInUp}
                className="bg-[#21262d] rounded-md p-4 flex items-center space-x-3 transform transition-all duration-300 hover:scale-105 hover:bg-[#2d333b] hover:shadow-lg"
              >
                <div className="text-[#7ee787] transition-all duration-300 group-hover:scale-110">
                  {skill.icon}
                </div>
                <span className="text-[#c9d1d9]">{skill.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </AnimatedSection>

        <AnimatedSection className="mb-16" variants={rotateIn}>
          <h2 id="projects" className="text-2xl font-bold mb-6 text-white">Projects</h2>
          <motion.div
            variants={staggerChildren}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {projects.slice(projectPage * projectsPerPage, (projectPage + 1) * projectsPerPage).map((project, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="bg-[#21262d] border border-[#30363d] hover:border-[#58a6ff] transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="flex items-center text-white">
                      <span className="text-[#7ee787]">{project.icon}</span>
                      <span className="ml-2">{project.title}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="relative w-full h-fit">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="rounded-md w-full h-fit"
                      />
                    </div>
                    <CardDescription className="text-[#8b949e]">{project.description}</CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
          <div className="flex justify-center mt-6 space-x-4">
            <Button
              onClick={() => setProjectPage((prev) => Math.max(0, prev - 1))}
              disabled={projectPage === 0}
              className="bg-[#21262d] text-[#c9d1d9] hover:bg-[#30363d]"
            >
              <ChevronLeft className="w-4 h-4 mr-2" />
              Previous
            </Button>
            <Button
              onClick={() => setProjectPage((prev) => Math.min(totalProjectPages - 1, prev + 1))}
              disabled={projectPage === totalProjectPages - 1}
              className="bg-[#21262d] text-[#c9d1d9] hover:bg-[#30363d]"
            >
              Next
              <ChevronRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </AnimatedSection>

        <AnimatedSection className="mb-16" variants={slideIn}>
          <h2 id="certificates" className="text-2xl font-bold mb-6 text-white">Certificates</h2>
          <motion.div
            variants={staggerChildren}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {certificates.slice(certificatePage * certificatesPerPage, (certificatePage + 1) * certificatesPerPage).map((certificate, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="bg-[#21262d] border border-[#30363d] hover:border-[#58a6ff] transition-all duration-300">
                  <CardContent className="p-4 space-y-4">
                    <div className="relative w-full h-fit">
                      <img
                        src={certificate.image}
                        alt={certificate.name}
                        className="rounded-md w-full h-fit"
                      />
                    </div>
                    <p className="text-[#c9d1d9] text-sm">{certificate.name}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
          <div className="flex justify-center mt-6 space-x-4">
            <Button
              onClick={() => setCertificatePage((prev) => Math.max(0, prev - 1))}
              disabled={certificatePage === 0}
              className="bg-[#21262d] text-[#c9d1d9] hover:bg-[#30363d]"
            >
              <ChevronLeft className="w-4 h-4 mr-2" />
              Previous
            </Button>
            <Button
              onClick={() => setCertificatePage((prev) => Math.min(totalCertificatePages - 1, prev + 1))}
              disabled={certificatePage === totalCertificatePages - 1}
              className="bg-[#21262d] text-[#c9d1d9] hover:bg-[#30363d]"
            >
              Next
              <ChevronRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </AnimatedSection>

        <AnimatedSection className="mb-16" variants={scaleIn}>
          <h2 id="contact" className="text-2xl font-bold mb-4 text-white">Contact Me</h2>
          <Card className="bg-[#21262d] border border-[#30363d]">
            <CardContent className="pt-6">
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-[#c9d1d9]">Name</Label>
                    <Input id="name" placeholder="Your Name" className="bg-[#0d1117] border-[#30363d] text-[#c9d1d9] focus:border-[#58a6ff] focus:ring-1 focus:ring-[#58a6ff]" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-[#c9d1d9]">Email</Label>
                    <Input id="email" type="email" placeholder="your@email.com" className="bg-[#0d1117] border-[#30363d] text-[#c9d1d9] focus:border-[#58a6ff] focus:ring-1 focus:ring-[#58a6ff]" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-[#c9d1d9]">Message</Label>
                  <Textarea id="message" placeholder="Your message here..." className="bg-[#0d1117] border-[#30363d] text-[#c9d1d9] focus:border-[#58a6ff] focus:ring-1 focus:ring-[#58a6ff]" />
                </div>
                <Button type="submit" className="w-full bg-[#238636] hover:bg-[#2ea043] text-white transition-colors duration-300">Send Message</Button>
              </form>
            </CardContent>
          </Card>
        </AnimatedSection>
      </main>

      <footer className="bg-[#161b22] border-t border-[#30363d] text-[#8b949e] py-6">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Jane Doe. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
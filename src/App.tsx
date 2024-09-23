import { useState } from 'react'
// import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { BarChart, FileSpreadsheet, Mail, MapPin, Phone, Book, Code, Award, Menu, X, Database, Brain, Eye, Terminal, PieChart, Linkedin, Github, BarChart2, BookOpen, ChevronLeft, ChevronRight, LineChart, Zap, Layers, ShoppingCart, PieChart as PieChartIcon } from "lucide-react"

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
    image: "/placeholder.svg?height=200&width=400"
  },
  {
    title: "Sales Trend Analysis",
    description: "Analyzed 5 years of sales data to identify key trends and opportunities for growth.",
    icon: <LineChart className="w-5 h-5" />,
    image: "/placeholder.svg?height=200&width=400"
  },
  {
    title: "Sentiment Analysis Dashboard",
    description: "Created an interactive dashboard for real-time sentiment analysis of customer feedback.",
    icon: <PieChartIcon className="w-5 h-5" />,
    image: "/placeholder.svg?height=200&width=400"
  },
  {
    title: "Supply Chain Optimization",
    description: "Implemented a machine learning model to optimize inventory management and reduce costs.",
    icon: <Layers className="w-5 h-5" />,
    image: "/placeholder.svg?height=200&width=400"
  },
  {
    title: "Predictive Maintenance System",
    description: "Developed an IoT-based system for predicting equipment failures in manufacturing plants.",
    icon: <Zap className="w-5 h-5" />,
    image: "/placeholder.svg?height=200&width=400"
  },
  {
    title: "Customer Segmentation Analysis",
    description: "Utilized clustering algorithms to segment customers and tailor marketing strategies.",
    icon: <PieChart className="w-5 h-5" />,
    image: "/placeholder.svg?height=200&width=400"
  },
  {
    title: "Fraud Detection Algorithm",
    description: "Created a real-time fraud detection system for a fintech company using anomaly detection techniques.",
    icon: <Eye className="w-5 h-5" />,
    image: "/placeholder.svg?height=200&width=400"
  },
  {
    title: "Market Basket Analysis",
    description: "Implemented association rule mining to analyze customer purchase patterns and improve product placement.",
    icon: <ShoppingCart className="w-5 h-5" />,
    image: "/placeholder.svg?height=200&width=400"
  }
]

const certificates = [
  { name: "Google Data Analytics Professional Certificate", image: "/placeholder.svg?height=100&width=200" },
  { name: "IBM Data Science Professional Certificate", image: "/placeholder.svg?height=100&width=200" },
  { name: "Microsoft Certified: Azure Data Scientist Associate", image: "/placeholder.svg?height=100&width=200" },
  { name: "Tableau Desktop Specialist", image: "/placeholder.svg?height=100&width=200" },
  { name: "AWS Certified Data Analytics - Specialty", image: "/placeholder.svg?height=100&width=200" },
  { name: "Certified Analytics Professional (CAP)", image: "/placeholder.svg?height=100&width=200" },
  { name: "SAS Certified Data Scientist", image: "/placeholder.svg?height=100&width=200" },
  { name: "Cloudera Certified Associate Data Analyst", image: "/placeholder.svg?height=100&width=200" },
  { name: "Data Science Council of America (DASCA) Associate Big Data Analyst", image: "/placeholder.svg?height=100&width=200" },
  { name: "MongoDB Certified Data Analyst Associate", image: "/placeholder.svg?height=100&width=200" },
  { name: "Alteryx Designer Core Certification", image: "/placeholder.svg?height=100&width=200" },
  { name: "IABAC Certified Business Analytics Professional", image: "/placeholder.svg?height=100&width=200" }
]

const socialLinks = [
  { name: "LinkedIn", icon: <Linkedin className="w-5 h-5" />, url: "https://www.linkedin.com/in/janedoe" },
  { name: "GitHub", icon: <Github className="w-5 h-5" />, url: "https://github.com/janedoe" },
  { name: "Tableau", icon: <BarChart2 className="w-5 h-5" />, url: "https://public.tableau.com/profile/janedoe" },
  { name: "DataCamp", icon: <BookOpen className="w-5 h-5" />, url: "https://www.datacamp.com/profile/janedoe" }
]

const itemsPerPage = 4
const certificatesPerPage = 6
const totalProjectPages = Math.ceil(projects.length / itemsPerPage)
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
        {isMenuOpen && (
          <ul className="mt-4 space-y-2 md:hidden">
            {navItems.map(({ name, icon }) => (
              <li key={name.toLowerCase()}>
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
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>

    <main className="container mx-auto px-4 py-8">
      <section id="about" className="mb-16">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
          <div className="flex items-center mb-4 lg:mb-0">
            <div className="mr-6">
              <img
                src="/placeholder.svg?height=150&width=150"
                alt="Jane Doe"
                width={150}
                height={150}
                className="rounded-full border-4 border-[#30363d]"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-2 text-white">Janric Malate</h2>
              <h3 className="text-xl text-[#8b949e] mb-4">Data Governance Analyst</h3>
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
          <div className="lg:w-2/3 mt-6 lg:mt-6">
            <p className="text-[#8b949e]">
              Passionate data analyst with 5+ years of experience in transforming complex datasets into actionable insights.
              Skilled in statistical analysis, data visualization, and machine learning techniques. I thrive on uncovering
              hidden patterns in data and translating them into strategic business recommendations. My expertise spans
              various industries, including finance, healthcare, and e-commerce, where I've consistently delivered
              high-impact projects that drive growth and efficiency.
            </p>
          </div>
        </div>
      </section>

      <section id="skills" className="mb-16">
        <h2 className="text-2xl font-bold mb-6 text-white">Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="bg-[#21262d] rounded-md p-4 flex items-center space-x-3 transform transition-all duration-300 hover:scale-105 hover:bg-[#2d333b] hover:shadow-lg"
            >
              <div className="text-[#7ee787] transition-all duration-300 group-hover:scale-110">
                {skill.icon}
              </div>
              <span className="text-[#c9d1d9]">{skill.name}</span>
            </div>
          ))}
        </div>
      </section>

      <section id="projects" className="mb-16">
        <h2 className="text-2xl font-bold mb-6 text-white">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.slice(projectPage * itemsPerPage, (projectPage + 1) * itemsPerPage).map((project, index) => (
            <Card key={index} className="bg-[#21262d] border border-[#30363d] hover:border-[#58a6ff] transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center text-white">
                  <span className="text-[#7ee787]">{project.icon}</span>
                  <span className="ml-2">{project.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="relative w-full h-48">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="rounded-md"
                  />
                </div>
                <CardDescription className="text-[#8b949e]">{project.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
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
      </section>

      <section id="certificates" className="mb-16">
        <h2 className="text-2xl font-bold mb-6 text-white">Certificates</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certificates.slice(certificatePage * certificatesPerPage, (certificatePage + 1) * certificatesPerPage).map((certificate, index) => (
            <Card key={index} className="bg-[#21262d] border border-[#30363d] hover:border-[#58a6ff] transition-all duration-300">
              <CardContent className="p-4 space-y-4">
                <div className="relative w-full h-24">
                  <img
                    src={certificate.image}
                    alt={certificate.name}
                    className="rounded-md"
                  />
                </div>
                <p className="text-[#c9d1d9] text-sm">{certificate.name}</p>
              </CardContent>
            </Card>
          ))}
        </div>
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
      </section>

      <section id="contact" className="mb-16">
        <h2 className="text-2xl font-bold mb-4 text-white">Contact Me</h2>
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
      </section>
    </main>

    <footer className="bg-[#161b22] border-t border-[#30363d] text-[#8b949e] py-6">
      <div className="container mx-auto px-4 text-center">
        <p>&copy; 2024 Jane Doe. All rights reserved.</p>
      </div>
    </footer>
  </div>
)
}
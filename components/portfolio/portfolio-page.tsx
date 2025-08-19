"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Header from "@/components/landing-page/header"
import Footer from "@/components/landing-page/footer"

const aiSolutions = [
  {
    id: 1,
    title: "Conversational AI Assistants",
    description:
      "Intelligent chat systems that handle routine queries, guide users, and seamlessly transfer to human agents when needed.",
    useCases: ["E-commerce", "Healthcare", "Banking"],
    techStack: ["GPT-based NLP", "Rasa", "LangChain", "Dialogflow"],
    image:
      "https://res.cloudinary.com/dyr5pe2er/image/upload/v1755548454/ai-solutions/conversational-ai-dashboard_i4tboj.png",
    category: "ai-automation",
    categoryLabel: "AI Automation",
  },
  {
    id: 2,
    title: "Voice Interaction Bots",
    description:
      "Automated call agents that manage reminders, payments, surveys, and lead outreach using natural-sounding speech.",
    useCases: ["Telecom", "Insurance", "BPO"],
    techStack: ["Whisper/STT", "TTS", "Twilio", "AssemblyAI"],
    image:
      "https://res.cloudinary.com/dyr5pe2er/image/upload/v1755548455/ai-solutions/voice-interaction-multilingual_xx8tgo.png",
    category: "ai-automation",
    categoryLabel: "AI Automation",
  },
  {
    id: 3,
    title: "Proposal & Document Generator",
    description:
      "Turn RFPs and business requests into professional, ready-to-send proposals or summaries automatically.",
    useCases: ["IT Consulting", "Government Tenders", "Audit Firms"],
    techStack: ["GPT-4", "Doc/PDF Parsing", "Prompt Engineering"],
    image: "https://res.cloudinary.com/dyr5pe2er/image/upload/v1755548453/ai-solutions/document-generator_grlasi.png",
    category: "document-ai",
    categoryLabel: "Document AI",
  },
  {
    id: 4,
    title: "Market Intelligence & Web Insights",
    description:
      "Monitor competitors, analyze pricing and product data, and get actionable reports for smarter decisions.",
    useCases: ["Consulting", "Market Research"],
    techStack: ["Scrapy", "BeautifulSoup", "LangChain", "GPT Summaries"],
    image: "https://res.cloudinary.com/dyr5pe2er/image/upload/v1755548455/ai-solutions/market-intelligence_luxn5y.png",
    category: "data-analytics",
    categoryLabel: "Data Analytics",
  },
  {
    id: 5,
    title: "Smart Recruitment Assistant",
    description: "Evaluate resumes, rank candidates, and conduct first-round interviews via chat or voice.",
    useCases: ["HR Tech", "Staffing Agencies"],
    techStack: ["GPT-4", "Pinecone", "Faiss", "TTS/STT"],
    image:
      "https://res.cloudinary.com/dyr5pe2er/image/upload/v1755548455/ai-solutions/recruitment-assistant_hwn9su.png",
    category: "ai-automation",
    categoryLabel: "AI Automation",
  },
  {
    id: 6,
    title: "Document Summaries & Risk Analysis",
    description:
      "Convert contracts and reports into concise summaries highlighting key risks, obligations, and next actions.",
    useCases: ["Legal", "Compliance", "Procurement"],
    techStack: ["LangChain", "OpenAI", "OCR", "Pinecone"],
    image: "https://res.cloudinary.com/dyr5pe2er/image/upload/v1755548453/ai-solutions/document-analysis_ypwweo.png",
    category: "document-ai",
    categoryLabel: "Document AI",
  },
  {
    id: 7,
    title: "Predictive Analytics Engine",
    description:
      "Forecast trends, predict customer behavior, and optimize business operations using advanced machine learning models.",
    useCases: ["Retail", "Finance", "Manufacturing"],
    techStack: ["TensorFlow", "PyTorch", "Scikit-learn", "Apache Spark"],
    image: "https://res.cloudinary.com/dyr5pe2er/image/upload/v1755548456/ai-solutions/predictive-analytics_j2uucl.png",
    category: "data-analytics",
    categoryLabel: "Data Analytics",
  },
  {
    id: 8,
    title: "Computer Vision Solutions",
    description:
      "Automated image recognition, quality control, and visual inspection systems for industrial applications.",
    useCases: ["Manufacturing", "Healthcare", "Security"],
    techStack: ["OpenCV", "YOLO", "TensorFlow", "PyTorch"],
    image: "https://res.cloudinary.com/dyr5pe2er/image/upload/v1755548453/ai-solutions/computer-vision_d4t24h.png",
    category: "computer-vision",
    categoryLabel: "Computer Vision",
  },
]

const categories = [
  { id: "all", name: "All Solutions" },
  { id: "ai-automation", name: "AI Automation" },
  { id: "document-ai", name: "Document AI" },
  { id: "data-analytics", name: "Data Analytics" },
  { id: "computer-vision", name: "Computer Vision" },
]

interface PortfolioPageProps {
  initialData?: any[]
}

export default function PortfolioPage({ initialData }: PortfolioPageProps) {
  const [activeFilter, setActiveFilter] = useState<string>("all")
  const [isLoading, setIsLoading] = useState(true)
  const [selectedProject, setSelectedProject] = useState<(typeof aiSolutions)[0] | null>(null)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 300)

    return () => clearTimeout(timer)
  }, [])

  const filteredItems =
    activeFilter === "all" ? aiSolutions : aiSolutions.filter((item) => item.category === activeFilter)

  const openProjectPopup = (project: (typeof aiSolutions)[0]) => {
    setSelectedProject(project)
  }

  const closeProjectPopup = () => {
    setSelectedProject(null)
  }

  const getCategoryColor = (category: string) => {
    const colors = {
      "ai-automation": "bg-gradient-to-r from-blue-500 to-cyan-500",
      "document-ai": "bg-gradient-to-r from-purple-500 to-pink-500",
      "data-analytics": "bg-gradient-to-r from-green-500 to-emerald-500",
      "computer-vision": "bg-gradient-to-r from-orange-500 to-red-500",
    }
    return colors[category as keyof typeof colors] || "bg-gradient-to-r from-gray-500 to-gray-600"
  }

  return (
    <main className="min-h-screen bg-white dark:bg-[#111111]">
      <Header />
      <div className="container pt-8 pb-20">
        <div className="mb-16 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-black dark:text-white mb-6">
            Our AI{" "}
            <span className="bg-gradient-to-r from-[#7A7FEE] to-[#9B59B6] bg-clip-text text-transparent">
              Solutions Portfolio
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Explore our comprehensive AI solutions that transform businesses across industries. From conversational AI
            to computer vision, discover how we're revolutionizing the future with artificial intelligence.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 transform hover:scale-105 ${
                activeFilter === category.id
                  ? "bg-gradient-to-r from-[#7A7FEE] to-[#9B59B6] text-white shadow-lg"
                  : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, index) => (
              <div
                key={index}
                className="animate-pulse rounded-2xl overflow-hidden bg-gray-200 dark:bg-gray-800 h-96"
              ></div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((project) => (
              <div
                key={project.id}
                className="group bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-800 cursor-pointer"
                onClick={() => openProjectPopup(project)}
              >
                {/* Image Section */}
                <div className="relative overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Category Badge */}
                  <div
                    className={`absolute top-4 left-4 px-3 py-1 rounded-full text-white text-xs font-semibold ${getCategoryColor(project.category)}`}
                  >
                    {project.categoryLabel}
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-black dark:text-white mb-3 group-hover:text-[#7A7FEE] transition-colors duration-300">
                    {project.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Use Cases */}
                  <div className="mb-4">
                    <h4 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-2">
                      Use Cases
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.useCases.slice(0, 2).map((useCase, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 text-xs rounded-md font-medium"
                        >
                          {useCase}
                        </span>
                      ))}
                      {project.useCases.length > 2 && (
                        <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-xs rounded-md">
                          +{project.useCases.length - 2} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Tech Stack Preview */}
                  <div>
                    <h4 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-2">
                      Tech Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.slice(0, 3).map((tech, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 text-xs rounded-md font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.techStack.length > 3 && (
                        <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-xs rounded-md">
                          +{project.techStack.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Hover Indicator */}
                  <div className="mt-4 flex items-center text-[#7A7FEE] text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span>View Details</span>
                    <svg
                      className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {selectedProject && (
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            onClick={closeProjectPopup}
          >
            <div
              className="bg-white dark:bg-gray-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-gray-200 dark:border-gray-700"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                {/* Header Image */}
                <div className="relative h-64 overflow-hidden rounded-t-2xl">
                  <Image
                    src={selectedProject.image || "/placeholder.svg"}
                    alt={selectedProject.title}
                    width={800}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

                  {/* Close Button */}
                  <button
                    onClick={closeProjectPopup}
                    className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-200"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>

                  {/* Category Badge */}
                  <div
                    className={`absolute top-4 left-4 px-4 py-2 rounded-full text-white font-semibold ${getCategoryColor(selectedProject.category)}`}
                  >
                    {selectedProject.categoryLabel}
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="text-3xl font-bold text-black dark:text-white mb-4">{selectedProject.title}</h3>

                  <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-8">
                    {selectedProject.description}
                  </p>

                  <div className="grid md:grid-cols-2 gap-8">
                    {/* Use Cases */}
                    <div>
                      <h4 className="text-xl font-bold text-black dark:text-white mb-4 flex items-center">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                        Use Cases
                      </h4>
                      <div className="space-y-2">
                        {selectedProject.useCases.map((useCase, index) => (
                          <div
                            key={index}
                            className="px-4 py-3 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 rounded-lg font-medium border border-blue-200 dark:border-blue-800"
                          >
                            {useCase}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Technology Stack */}
                    <div>
                      <h4 className="text-xl font-bold text-black dark:text-white mb-4 flex items-center">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                        Technology Stack
                      </h4>
                      <div className="space-y-2">
                        {selectedProject.techStack.map((tech, index) => (
                          <div
                            key={index}
                            className="px-4 py-3 bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300 rounded-lg font-medium border border-purple-200 dark:border-purple-800"
                          >
                            {tech}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </main>
  )
}

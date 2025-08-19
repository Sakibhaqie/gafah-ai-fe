"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowUpRight } from "lucide-react"

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
  },
  {
    id: 3,
    title: "Proposal & Document Generator",
    description:
      "Turn RFPs and business requests into professional, ready-to-send proposals or summaries automatically.",
    useCases: ["IT Consulting", "Government Tenders", "Audit Firms"],
    techStack: ["GPT-4", "Doc/PDF Parsing", "Prompt Engineering"],
    image: "https://res.cloudinary.com/dyr5pe2er/image/upload/v1755548453/ai-solutions/document-generator_grlasi.png",
  },
  {
    id: 4,
    title: "Market Intelligence & Web Insights",
    description:
      "Monitor competitors, analyze pricing and product data, and get actionable reports for smarter decisions.",
    useCases: ["Consulting", "Market Research"],
    techStack: ["Scrapy", "BeautifulSoup", "LangChain", "GPT Summaries"],
    image: "https://res.cloudinary.com/dyr5pe2er/image/upload/v1755548455/ai-solutions/market-intelligence_luxn5y.png",
  },
  {
    id: 5,
    title: "Smart Recruitment Assistant",
    description: "Evaluate resumes, rank candidates, and conduct first-round interviews via chat or voice.",
    useCases: ["HR Tech", "Staffing Agencies"],
    techStack: ["GPT-4", "Pinecone", "Faiss", "TTS/STT"],
    image:
      "https://res.cloudinary.com/dyr5pe2er/image/upload/v1755548455/ai-solutions/recruitment-assistant_hwn9su.png",
  },
  {
    id: 6,
    title: "Document Summaries & Risk Analysis",
    description:
      "Convert contracts and reports into concise summaries highlighting key risks, obligations, and next actions.",
    useCases: ["Legal", "Compliance", "Procurement"],
    techStack: ["LangChain", "OpenAI", "OCR", "Pinecone"],
    image: "https://res.cloudinary.com/dyr5pe2er/image/upload/v1755548453/ai-solutions/document-analysis_ypwweo.png",
  },
]

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<(typeof aiSolutions)[0] | null>(null)

  const openProjectPopup = (project: (typeof aiSolutions)[0]) => {
    setSelectedProject(project)
  }

  const closeProjectPopup = () => {
    setSelectedProject(null)
  }

  return (
    <section id="projects" className="my-20">
      <h2 className="text-black dark:text-white mb-6">
        Our AI
        <span className="block text-[#7A7FEE] dark:text-[#7A7FEE]">Solutions Portfolio</span>
      </h2>
      <p className="mb-12 max-w-2xl text-gray-700 dark:text-gray-300">
        Discover our cutting-edge AI solutions that transform businesses across industries. From conversational AI to
        intelligent automation, explore how we're shaping the future with artificial intelligence.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {aiSolutions.slice(0, 3).map((solution) => (
          <div
            key={solution.id}
            className="card overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-[1.02] cursor-pointer"
            onClick={() => openProjectPopup(solution)}
          >
            <div className="flex items-center justify-center p-4 pt-6 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 relative">
              <Image
                src={solution.image || "/placeholder.svg"}
                alt={solution.title}
                width={600}
                height={400}
                className="w-full h-auto object-contain max-h-[220px]"
              />
            </div>
            <div className="p-4 md:p-6">
              <h3 className="text-xl font-semibold text-black dark:text-white mb-2">{solution.title}</h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">{solution.description}</p>

              <div className="mb-3">
                <div className="flex flex-wrap gap-1">
                  {solution.useCases.map((useCase, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs rounded-full"
                    >
                      {useCase}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-4">
                <p className="text-xs font-medium text-gray-600 dark:text-gray-400 mb-1">Tech Stack:</p>
                <div className="flex flex-wrap gap-1">
                  {solution.techStack.slice(0, 3).map((tech, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-xs rounded"
                    >
                      {tech}
                    </span>
                  ))}
                  {solution.techStack.length > 3 && (
                    <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 text-xs rounded">
                      +{solution.techStack.length - 3} more
                    </span>
                  )}
                </div>
              </div>

              <div className="inline-flex items-center text-[#7A7FEE] text-sm font-medium group">
                View Solution{" "}
                <ArrowUpRight className="w-4 h-4 ml-1 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-8">
        <Link href="/portfolio" className="btn-primary">
          View All AI Solutions
        </Link>
      </div>

      {selectedProject && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
          onClick={closeProjectPopup}
        >
          <div
            className="bg-white dark:bg-gray-800 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-black dark:text-white">{selectedProject.title}</h3>
                <button
                  onClick={closeProjectPopup}
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                >
                  ✕
                </button>
              </div>

              <Image
                src={selectedProject.image || "/placeholder.svg"}
                alt={selectedProject.title}
                width={600}
                height={400}
                className="w-full h-64 object-cover rounded-lg mb-4"
              />

              <p className="text-gray-700 dark:text-gray-300 mb-4">{selectedProject.description}</p>

              <div className="mb-4">
                <h4 className="font-semibold text-black dark:text-white mb-2">Use Cases:</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.useCases.map((useCase, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm rounded-full"
                    >
                      {useCase}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-black dark:text-white mb-2">Technology Stack:</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.techStack.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-sm rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

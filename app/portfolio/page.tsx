import PortfolioPage from "@/components/portfolio/portfolio-page"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "AI Solutions Portfolio | Gafah",
  description:
    "Explore our comprehensive AI solutions and case studies. From conversational AI to computer vision, discover how Gafah transforms businesses with artificial intelligence.",
}

export default async function Portfolio() {
  return <PortfolioPage />
}

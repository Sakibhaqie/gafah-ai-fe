"use client"

import { useEffect, useRef } from "react"
import ContactFormButton from "./contact-form-button"

// AI Sphere Animation Component
function AISphereAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio
      canvas.height = canvas.offsetHeight * window.devicePixelRatio
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio)
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Animation variables
    let animationId: number
    let time = 0
    const particles: Array<{
      x: number
      y: number
      z: number
      originalX: number
      originalY: number
      originalZ: number
    }> = []

    // Create sphere particles
    const createSphere = () => {
      const radius = 80
      const particleCount = 200

      for (let i = 0; i < particleCount; i++) {
        const phi = Math.acos(-1 + (2 * i) / particleCount)
        const theta = Math.sqrt(particleCount * Math.PI) * phi

        const x = radius * Math.cos(theta) * Math.sin(phi)
        const y = radius * Math.sin(theta) * Math.sin(phi)
        const z = radius * Math.cos(phi)

        particles.push({
          x,
          y,
          z,
          originalX: x,
          originalY: y,
          originalZ: z,
        })
      }
    }

    createSphere()

    // Animation loop
    const animate = () => {
      time += 0.01

      // Clear canvas
      ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight)

      const centerX = canvas.offsetWidth / 2
      const centerY = canvas.offsetHeight / 2

      // Create gradient for glow effect
      const gradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, 150)
      gradient.addColorStop(0, "rgba(122, 127, 238, 0.8)")
      gradient.addColorStop(0.5, "rgba(122, 127, 238, 0.4)")
      gradient.addColorStop(1, "rgba(122, 127, 238, 0.1)")

      // Draw particles
      particles.forEach((particle, index) => {
        // Add wave motion
        const wave = Math.sin(time * 2 + index * 0.1) * 10
        particle.x = particle.originalX + wave
        particle.y = particle.originalY + Math.cos(time * 1.5 + index * 0.1) * 8
        particle.z = particle.originalZ + Math.sin(time + index * 0.05) * 15

        // Project 3D to 2D
        const scale = 200 / (200 + particle.z)
        const x2d = centerX + particle.x * scale
        const y2d = centerY + particle.y * scale

        // Calculate opacity based on z-depth
        const opacity = (particle.z + 100) / 200

        // Draw particle
        ctx.beginPath()
        ctx.arc(x2d, y2d, 2 * scale, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(122, 127, 238, ${opacity * 0.8})`
        ctx.fill()

        // Add connecting lines for nearby particles
        particles.forEach((otherParticle, otherIndex) => {
          if (otherIndex <= index) return

          const distance = Math.sqrt(
            Math.pow(particle.x - otherParticle.x, 2) +
              Math.pow(particle.y - otherParticle.y, 2) +
              Math.pow(particle.z - otherParticle.z, 2),
          )

          if (distance < 50) {
            const otherScale = 200 / (200 + otherParticle.z)
            const otherX2d = centerX + otherParticle.x * otherScale
            const otherY2d = centerY + otherParticle.y * otherScale

            ctx.beginPath()
            ctx.moveTo(x2d, y2d)
            ctx.lineTo(otherX2d, otherY2d)
            ctx.strokeStyle = `rgba(122, 127, 238, ${(1 - distance / 50) * 0.3})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        })
      })

      animationId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" style={{ width: "100%", height: "100%" }} />
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="card my-8 relative overflow-hidden shadow-md bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-blue-950"
    >
      <div className="p-8 md:p-10 lg:p-12 flex flex-col md:flex-row items-start min-h-[500px]">
        {/* Text content - takes full width on mobile */}
        <div className="w-full md:w-3/5 z-10 relative">
          <h1 className="text-black dark:text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Transform with
            <span className="block text-[#7A7FEE] dark:text-[#7A7FEE] bg-gradient-to-r from-[#7A7FEE] to-[#9B59B6] bg-clip-text text-transparent">
              Artificial Intelligence
            </span>
            Solutions
          </h1>
          <p className="my-6 text-base md:text-lg max-w-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            Harness the power of cutting-edge AI with predictive analytics, natural language processing, and computer
            vision. We deliver intelligent solutions that drive real-world impact and business transformation.
          </p>

          <div className="flex flex-wrap gap-3 mb-8">
            <span className="px-3 py-1 bg-[#7A7FEE]/10 text-[#7A7FEE] rounded-full text-sm font-medium">
              Predictive Analytics
            </span>
            <span className="px-3 py-1 bg-[#7A7FEE]/10 text-[#7A7FEE] rounded-full text-sm font-medium">
              Natural Language Processing
            </span>
            <span className="px-3 py-1 bg-[#7A7FEE]/10 text-[#7A7FEE] rounded-full text-sm font-medium">
              Computer Vision
            </span>
            <span className="px-3 py-1 bg-[#7A7FEE]/10 text-[#7A7FEE] rounded-full text-sm font-medium">
              Intelligent Automation
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <ContactFormButton />
            <a
              href="#services"
              className="btn-secondary text-black dark:text-white hover:bg-[#7A7FEE]/10 transition-colors"
            >
              Explore AI Solutions
            </a>
          </div>
        </div>

        <div className="hidden md:block md:w-2/5 md:absolute md:right-8 md:top-8 md:bottom-8">
          <div className="relative w-full h-full">
            <AISphereAnimation />
            {/* Glow effect overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#7A7FEE]/20 to-transparent blur-xl"></div>
          </div>
        </div>
      </div>

      <div className="absolute top-4 right-4 opacity-30">
        <div className="flex items-center gap-2 text-xs text-[#7A7FEE] animate-pulse">
          <div className="w-2 h-2 bg-[#7A7FEE] rounded-full animate-ping"></div>
          Processing AI Models...
        </div>
      </div>
    </section>
  )
}

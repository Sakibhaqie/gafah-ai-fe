import ContactFormButton from "./contact-form-button"

export default function CallToAction() {
  return (
    <section id="contact" className="card my-20 relative overflow-hidden shadow-md">
      <div className="p-8 md:p-10 lg:p-12 flex flex-col md:flex-row items-start">
        {/* Text content - takes full width on mobile */}
        <div className="w-full md:w-3/5 z-10">
          <h2 className="text-black dark:text-white mb-6">
            Your Next Big Idea
            <span className="block text-[#7A7FEE] dark:text-[#7A7FEE]">Starts Here</span> 
          </h2>
          <p className="my-6 text-sm md:text-base max-w-md text-gray-700 dark:text-gray-300">
            Have an idea or a problem that needs solving?
          </p>
          <p className="mb-6 text-sm md:text-base max-w-md text-gray-700 dark:text-gray-300">
            Let's chat. We'll help you explore the best approach, map out a plan, and see if we're the right fit.
          </p>
          <div>
            <ContactFormButton />
          </div>
        </div>

        <div className="hidden md:block md:w-2/5 md:absolute md:right-0 md:top-0 md:bottom-0 md:flex md:items-center md:justify-center">
          <div className="relative w-80 h-80">
            {/* Main central orb */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full animate-pulse shadow-2xl shadow-blue-500/50"></div>

            {/* Floating orbs with different animations */}
            <div
              className="absolute top-16 left-16 w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full animate-bounce shadow-lg shadow-cyan-400/50"
              style={{ animationDelay: "0s", animationDuration: "3s" }}
            ></div>

            <div
              className="absolute top-32 right-12 w-6 h-6 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full animate-bounce shadow-lg shadow-purple-400/50"
              style={{ animationDelay: "1s", animationDuration: "4s" }}
            ></div>

            <div
              className="absolute bottom-20 left-8 w-10 h-10 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full animate-bounce shadow-lg shadow-indigo-500/50"
              style={{ animationDelay: "2s", animationDuration: "3.5s" }}
            ></div>

            <div
              className="absolute bottom-32 right-20 w-4 h-4 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full animate-bounce shadow-lg shadow-blue-400/50"
              style={{ animationDelay: "0.5s", animationDuration: "2.5s" }}
            ></div>

            <div
              className="absolute top-24 right-32 w-12 h-12 bg-gradient-to-r from-violet-500 to-purple-600 rounded-full animate-bounce shadow-lg shadow-violet-500/50"
              style={{ animationDelay: "1.5s", animationDuration: "4.5s" }}
            ></div>

            {/* Connecting lines animation */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 320 320">
              <defs>
                <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.3" />
                </linearGradient>
              </defs>

              {/* Animated connecting lines */}
              <line
                x1="160"
                y1="160"
                x2="80"
                y2="80"
                stroke="url(#lineGradient)"
                strokeWidth="2"
                className="animate-pulse"
              />
              <line
                x1="160"
                y1="160"
                x2="240"
                y2="100"
                stroke="url(#lineGradient)"
                strokeWidth="2"
                className="animate-pulse"
                style={{ animationDelay: "1s" }}
              />
              <line
                x1="160"
                y1="160"
                x2="60"
                y2="240"
                stroke="url(#lineGradient)"
                strokeWidth="2"
                className="animate-pulse"
                style={{ animationDelay: "2s" }}
              />
              <line
                x1="160"
                y1="160"
                x2="260"
                y2="220"
                stroke="url(#lineGradient)"
                strokeWidth="2"
                className="animate-pulse"
                style={{ animationDelay: "0.5s" }}
              />
              <line
                x1="160"
                y1="160"
                x2="220"
                y2="120"
                stroke="url(#lineGradient)"
                strokeWidth="2"
                className="animate-pulse"
                style={{ animationDelay: "1.5s" }}
              />
            </svg>

            {/* Outer glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-600/10 rounded-full blur-3xl animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

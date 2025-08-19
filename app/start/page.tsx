import Header from "@/components/landing-page/header";
import Footer from "@/components/landing-page/footer";

export const metadata = {
  title: "Start Your Project | Automatic",
  description:
    "Get started with your next project by answering a few questions and scheduling a call with our team.",
};

export default function StartPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-[#101112]">
      <Header />
      <div className="container mx-auto py-24 px-6 md:px-10 h-[60vh] mt-[100px]">
        <div className="max-w-5xl mx-auto w-full">
          <div className="mb-10 text-center">
            <h2 className="text-black dark:text-white text-4xl md:text-6xl font-medium">
              Ready to Start <br />
              Your Next <span className="text-[#7A7FEE]">Project</span>?
            </h2>
            <p className="mt-6 text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
              Answer some quick questions about your project and then schedule a
              call with your project manager.
            </p>
          </div>

          <div className="text-center">
            <a
              href="https://calendly.com/amiteshchd/meeting-with-amitesh"
              target="_blank"
              rel="noopener noreferrer"
              className={`bg-blue-600 dark:bg-[#121212] text-white dark:text-white rounded-full px-6 py-2 font-semibold text-sm hover:bg-blue-700 dark:hover:bg-[#2a2a2a] transition-colors shadow`}
            >
              Book a meeting
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}

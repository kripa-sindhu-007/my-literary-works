import { Linkedin, Github } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-secondary dark:border-gray-700 py-4 bg-background-secondary">
      <div className="container mx-auto px-4 text-center text-sm text-primary dark:text-gray-400">
        © {new Date().getFullYear()} Kripa Sindhu. All rights reserved.
        <div className="flex justify-center space-x-4 mt-2">
          <a
            href="https://www.linkedin.com/in/kripasindhu007/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-secondary dark:hover:text-gray-200 transition-colors"
          >
            <Linkedin
              className="h-5 w-5"
              style={{ height: "20px", width: "20px" }}
            />
            <span className="sr-only">LinkedIn</span>
          </a>
          <a
            href="https://github.com/kripa-sindhu-007"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-secondary dark:hover:text-gray-200 transition-colors"
          >
            <Github
              className="h-5 w-5"
              style={{ height: "20px", width: "20px" }}
            />
            <span className="sr-only">GitHub</span>
          </a>
        </div>
      </div>
    </footer>
  );
}


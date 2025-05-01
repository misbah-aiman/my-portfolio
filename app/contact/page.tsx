export default function ContactPage() {
    return (
      <div className="text-center mt-10 max-w-md mx-auto px-4">
        <h1 className="text-3xl font-bold mb-4">Contact Me</h1>
        <p className="mb-6 text-gray-300">Feel free to reach out via email or social platforms:</p>
        <ul className="space-y-4">
          <li>
            <a href="mailto:misbahaiman65@gmail.com" className="text-green-400 hover:underline">
              Gmail
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/MisbahAiman" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:underline">
              LinkedIn
            </a>
          </li>
          <li>
            <a href="https://github.com/misbah-aiman" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:underline">
              GitHub
            </a>
          </li>
        </ul>
      </div>
    );
  }
  
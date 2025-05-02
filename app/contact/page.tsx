import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

export default function ContactPage() {
  return (
    <div className="text-center mt-10 max-w-md mx-auto px-4">
      <h1 className="text-3xl font-bold mb-4">Contact Me</h1>
      <p className="mb-6 text-gray-300">Feel free to reach out via email or social platforms:</p>
      <div className="flex justify-center space-x-6">
        <a 
          href="mailto:misbahaiman65@gmail.com" 
          className="text-white hover:text-green-400 text-3xl transition-colors"
          aria-label="Email"
        >
          <FaEnvelope />
        </a>
        <a 
          href="https://www.linkedin.com/in/misbah-aiman-0aa354329?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-white hover:text-green-400 text-3xl transition-colors"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
        <a 
          href="https://github.com/misbah-aiman" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-white hover:text-green-400 text-3xl transition-colors"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
      </div>
    </div>
  );
}
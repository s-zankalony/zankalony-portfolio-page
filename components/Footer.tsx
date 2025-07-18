import { FaXTwitter, FaLinkedin } from 'react-icons/fa6';
import { FaFacebookSquare, FaGithubSquare } from 'react-icons/fa';
import { MdOutlineMailOutline } from 'react-icons/md';
import { CiGlobe } from 'react-icons/ci';

function Footer() {
  return (
    <footer id="contact" className="bg-gray-900 dark:bg-black text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-caveat font-bold mb-4">
            Let&apos;s Connect!
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Ready to collaborate on your next project? Let&apos;s get in touch
            and create something amazing together.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
          <a
            href="mailto:sameh@zankalony.com"
            className="flex items-center gap-4 p-4 bg-gray-800 dark:bg-gray-900 rounded-lg hover:bg-gray-700 dark:hover:bg-gray-800 transition-colors group"
          >
            <div className="p-3 bg-blue-600 rounded-lg group-hover:bg-blue-500 transition-colors">
              <MdOutlineMailOutline className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-semibold">Email</h3>
              <p className="text-gray-300">sameh@zankalony.com</p>
            </div>
          </a>

          <a
            href="https://zankalony.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-4 bg-gray-800 dark:bg-gray-900 rounded-lg hover:bg-gray-700 dark:hover:bg-gray-800 transition-colors group"
          >
            <div className="p-3 bg-green-600 rounded-lg group-hover:bg-green-500 transition-colors">
              <CiGlobe className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-semibold">Website</h3>
              <p className="text-gray-300">zankalony.com</p>
            </div>
          </a>

          <a
            href="www.linkedin.com/in/zankalony"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-4 bg-gray-800 dark:bg-gray-900 rounded-lg hover:bg-gray-700 dark:hover:bg-gray-800 transition-colors group"
          >
            <div className="p-3 bg-blue-700 rounded-lg group-hover:bg-blue-600 transition-colors">
              <FaLinkedin className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-semibold">LinkedIn</h3>
              <p className="text-gray-300">Connect with me</p>
            </div>
          </a>
        </div>

        <div className="flex justify-center space-x-6 mb-8">
          <a
            href="https://twitter.com/szankalony"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
          >
            <FaXTwitter className="w-6 h-6" />
          </a>
          <a
            href="https://www.facebook.com/sameh.zankalony77"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
          >
            <FaFacebookSquare className="w-6 h-6" />
          </a>
          <a
            href="https://github.com/s-zankalony"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
          >
            <FaGithubSquare className="w-6 h-6" />
          </a>
        </div>

        <div className="text-center text-gray-400">
          <p>&copy; 2024 Sameh El Zankalony. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
export default Footer;

import logo from "/LOGO.svg";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="p-4 sm:p-6 pb-16 shadow-[inset_0_0_100px_#7868d1] m-4 rounded-xl">
        <div className="border-3 rounded-2xl shadow-[inset_0_0_30px_#7868d1] border-[#7868d1] flex flex-col items-center py-10 sm:py-16 space-y-6">
          {/* Logo */}
          <img
            src={logo}
            className="h-20 sm:h-24 md:h-28 object-contain"
            alt="Company Logo"
          />

          {/* Email */}
          <a href="mailto:info@protonix.tech">
            <p className="text-white clash text-xl sm:text-2xl font-medium hover:underline text-center px-4">
              info@protonix.tech
            </p>
          </a>

          {/* Social Icons */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 bg-purple-200 rounded-2xl px-6 py-4 shadow-md">
            <a
              href="https://www.instagram.com/protonix_ai?igsh=MWFzZXhhbTEzNjBvdQ%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="text-pink-600 hover:scale-110 transition-transform duration-150" size={28} />
            </a>
            <a
              href="https://www.linkedin.com/company/protonix-ai/posts/?feedView=all&viewAsMember=true"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="text-blue-600 hover:scale-110 transition-transform duration-150" size={28} />
            </a>
            <a
              href="https://x.com/ProtonixAI?t=8Xv3dgYwmPq8Tj7q2X6jbg&s=08"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaXTwitter className="text-black hover:scale-110 transition-transform duration-150" size={28} />
            </a>
            <a
              href="https://github.com/Protonix-AI"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="text-black hover:scale-110 transition-transform duration-150" size={28} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="w-full py-4 px-4 text-sm bg-black border-t border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between text-center sm:text-left gap-2 sm:gap-4">
          {/* Left */}
          <div className="w-full sm:w-1/3 text-center sm:text-left">
            Made by Protonix AI | Powered by Protonix AI
          </div>

          {/* Center */}
          <div className="w-full sm:w-1/3 text-center">
            <a href="/terms" className="hover:underline">
              Terms & Conditions
            </a>{" "}
            /{" "}
            <a href="/privacy" className="hover:underline">
              Privacy Policy
            </a>
          </div>

          {/* Right */}
          <div className="w-full sm:w-1/3 text-center sm:text-right">
            © 2025 Protonix AI
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

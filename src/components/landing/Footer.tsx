import { MessageCircle, Linkedin } from "lucide-react";

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'Services', href: '#services' },
  { name: 'Work', href: '#work' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
];

export default function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-gray-200">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-3 md:gap-8 text-center md:text-left">
          {/* About Section */}
          <div className="space-y-6">
            <div className="space-y-3">
              <h3 className="text-3xl font-bold text-white bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Rijaul Sk
              </h3>
              <p className="text-base text-gray-300 font-medium">
                Digital Solutions Architect & Builder
              </p>
            </div>
            
            <div className="space-y-2 pt-2">
              <div className="flex items-center justify-center md:justify-start gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <p className="text-sm text-gray-400">Founder @ <span className="text-gray-300 font-medium">DebugSwift</span></p>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-2">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <p className="text-sm text-gray-400">Instructor @ <span className="text-gray-300 font-medium">Welearn Academy</span></p>
              </div>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="md:mx-auto">
            <h4 className="text-lg font-semibold text-white mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {navItems.map(item => (
                <li key={item.name}>
                  <a 
                    href={item.href} 
                    className="text-gray-400 hover:text-white transition-colors duration-200 inline-block"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className="md:mx-auto">
            <h4 className="text-lg font-semibold text-white mb-5">Connect With Me</h4>
            <ul className="space-y-3">
              <li>
                <a 
                  href="https://debugswift.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-400 hover:text-white transition-colors duration-200 inline-block"
                >
                  DebugSwift
                </a>
              </li>
              <li>
                <a 
                  href="https://linkedin.com/in/rijaulsk" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-400 hover:text-white transition-colors duration-200 inline-flex items-center gap-2 justify-center md:justify-start"
                >
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </a>
              </li>
              <li>
                <a 
                  href="https://wa.me/918479823836?text=Hi%20Rijaul,%20I%20want%20to%20discuss%20a%20project" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-400 hover:text-white transition-colors duration-200 inline-flex items-center gap-2 justify-center md:justify-start"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 border-t border-gray-800 pt-8 text-center">
          <p className="text-sm text-gray-400">
            Copyright © {new Date().getFullYear()} Rijaul Sk. Built with focus and honesty.
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Powered by DebugSwift
          </p>
        </div>
      </div>
    </footer>
  );
}

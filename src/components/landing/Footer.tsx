import { MessageCircle, Linkedin } from "lucide-react";

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'Services', href: '#services' },
  { name: 'Work', href: '#work' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
];

const socialLinks = [
  { name: 'DebugSwift', href: 'https://debugswift.com' },
  { name: 'LinkedIn', href: 'https://linkedin.com/in/rijaulsk', icon: Linkedin },
  { name: 'WhatsApp', href: 'https://wa.me/918479823836?text=Hi%20Rijaul,%20I%20want%20to%20discuss%20a%20project', icon: MessageCircle },
];


export default function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-gray-200">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="space-y-2">
            <h3 className="text-xl font-bold text-white">Rijaul Sk</h3>
            <p className="text-gray-400">Digital Solutions Architect & Builder</p>
          </div>
          
          <div className="md:mx-auto">
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {navItems.map(item => (
                <li key={item.name}>
                  <a href={item.href} className="text-gray-400 hover:text-white transition-colors">{item.name}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:mx-auto">
            <h4 className="font-semibold text-white mb-4">Also Find Me</h4>
             <ul className="space-y-2">
              <li><a href="https://debugswift.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">DebugSwift</a></li>
              <li><a href="https://linkedin.com/in/rijaulsk" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"><Linkedin className="w-4 h-4"/>LinkedIn</a></li>
              <li><a href="https://wa.me/918479823836?text=Hi%20Rijaul,%20I%20want%20to%20discuss%20a%20project" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"><MessageCircle className="w-4 h-4"/>WhatsApp</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Rijaul Sk. Built with focus and honesty.</p>
          <p>Powered by DebugSwift</p>
        </div>
      </div>
    </footer>
  );
}

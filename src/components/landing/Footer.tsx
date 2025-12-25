import { MessageCircle, Linkedin, Mail, Phone, ExternalLink } from "lucide-react";

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'Services', href: '#services' },
  { name: 'Work', href: '#work' },
  { name: 'Process', href: '#process' },
  { name: 'Why Me', href: '#why-me' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
];

const socialLinks = [
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/in/rijaulsk',
    icon: Linkedin,
    color: 'hover:text-blue-400'
  },
  {
    name: 'WhatsApp',
    href: 'https://wa.me/918479823836?text=Hi%20Rijaul,%20I%20want%20to%20discuss%20a%20project',
    icon: MessageCircle,
    color: 'hover:text-green-400'
  },
  {
    name: 'Email',
    href: 'mailto:rijaulsk@debugswift.com',
    icon: Mail,
    color: 'hover:text-primary'
  }
];

export default function Footer() {
  return (
    <footer className="relative w-full bg-gradient-to-b from-gray-900 to-black text-gray-200 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        <div className="absolute top-20 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-blob" />
        <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-blob animation-delay-2000" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-12 lg:py-16">
        <div className="grid gap-12 md:grid-cols-4 md:gap-8">
          {/* About Section */}
          <div className="md:col-span-2 space-y-6 text-center md:text-left">
            <div className="space-y-3">
              <h3 className="text-3xl font-bold text-white">
                Rijaul Sk
              </h3>
              <p className="text-base text-gray-400 max-w-md mx-auto md:mx-0">
                Building complete digital systems for businesses who value clarity, quality, and reliable execution.
              </p>
            </div>
            
            <div className="space-y-3 pt-2 flex flex-col items-center md:items-start">
              <div className="group flex items-center gap-3 hover:translate-x-1 transition-transform duration-300">
                <div className="w-2 h-2 bg-primary rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                <p className="text-sm text-gray-400">
                  Founder @ <span className="text-primary font-medium group-hover:text-primary/80 transition-colors">DebugSwift</span>
                </p>
              </div>
              <div className="group flex items-center gap-3 hover:translate-x-1 transition-transform duration-300">
                <div className="w-2 h-2 bg-accent rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                <p className="text-sm text-gray-400">
                  Instructor @ <span className="text-accent font-medium group-hover:text-accent/80 transition-colors">Welearn Academy</span>
                </p>
              </div>
            </div>

            {/* Contact Info */}
            <div className="pt-4 space-y-2 flex flex-col items-center md:items-start">
              <a 
                href="mailto:rijaulsk@debugswift.com"
                className="group flex items-center gap-2 text-sm text-gray-400 hover:text-primary transition-colors duration-300"
              >
                <Mail className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                rijaulsk@debugswift.com
              </a>
              <a 
                href="tel:+918479823836"
                className="group flex items-center gap-2 text-sm text-gray-400 hover:text-primary transition-colors duration-300"
              >
                <Phone className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                +91 8479823836
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-semibold text-white mb-5 relative inline-block">
              Quick Links
            </h4>
            <ul className="space-y-3 flex flex-col items-center md:items-start">
              {navItems.map(item => (
                <li key={item.name}>
                  <a 
                    href={item.href} 
                    className="group text-gray-400 hover:text-primary transition-all duration-300 inline-block relative"
                  >
                    <span className="relative">
                      {item.name}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className="text-center md:text-left flex flex-col items-center md:items-start">
            <h4 className="text-lg font-semibold text-white mb-5">Connect</h4>
            <div className="space-y-4 w-full max-w-xs md:max-w-none">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group flex items-center gap-3 p-3 rounded-lg bg-gray-800/50 border border-gray-700/50 hover:border-primary/50 hover:bg-gray-800 transition-all duration-300 ${social.color}`}
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-700/50 text-gray-400 group-hover:bg-primary/10 group-hover:text-primary transition-all duration-300 group-hover:scale-110">
                      <Icon className="h-5 w-5" strokeWidth={2} />
                    </div>
                    <div className="flex-1">
                      <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors duration-300">
                        {social.name}
                      </span>
                    </div>
                    <ExternalLink className="h-4 w-4 text-gray-600 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                  </a>
                );
              })}

              {/* DebugSwift Link */}
              <a
                href="https://debugswift.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 p-3 rounded-lg bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/30 hover:border-primary/50 hover:from-primary/20 hover:to-accent/20 transition-all duration-300"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/20 text-primary transition-all duration-300 group-hover:scale-110">
                  <span className="text-lg font-bold">D</span>
                </div>
                <div className="flex-1">
                  <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors duration-300">
                    DebugSwift
                  </span>
                  <p className="text-xs text-gray-500">Visit Website</p>
                </div>
                <ExternalLink className="h-4 w-4 text-primary opacity-0 group-hover:opacity-100 transition-all duration-300" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} Rijaul Sk. All rights reserved.
            </p>
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <span>Powered by DebugSwift</span>
              <span className="hidden md:inline">•</span>
              <span>Built with clarity and focus</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

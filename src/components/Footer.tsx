import Link from "next/link";
import { Phone, Mail, MapPin, Video, Share2 } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-neutral text-white pt-16 pb-8">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold font-serif">ANGIO</h3>
            <p className="text-white/60 text-sm leading-relaxed">
              Foaz-o-Falah Foundation is a non-governmental organization working
              for the welfare and prosperity of Pakistan.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3 text-white/60 text-sm">
              <li><Link href="/" className="hover:text-primary-container transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-primary-container transition-colors">About Us</Link></li>
              <li><Link href="/services" className="hover:text-primary-container transition-colors">Our Programs</Link></li>
              <li><Link href="/contact" className="hover:text-primary-container transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4 text-white/60 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-primary-container shrink-0 mt-1" />
                <span>Office # 40, 1st Floor, Hijvery Tower, Chouburji Chowk, Lahore</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-primary-container shrink-0" />
                <span>+92 42 37234758</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-primary-container shrink-0" />
                <span>foazofalah@gmail.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter / Social */}
          <div>
            <h4 className="text-lg font-bold mb-6">Follow Us</h4>
            <div className="flex space-x-4 mb-8">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors" title="Facebook">
                <Share2 size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors" title="YouTube">
                <Video size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 text-center text-white/40 text-xs">
          <p>© {new Date().getFullYear()} Foaz-o-Falah Foundation. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

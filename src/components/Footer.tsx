import Link from "next/link";
import { Facebook, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
      <div className="section-container py-12 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <span className="text-lg font-serif font-bold text-on-surface">
            Foaz-o-Falah Foundation
          </span>
          <p className="text-sm tracking-wide text-on-surface-variant mt-2">
            © {new Date().getFullYear()} Foaz-o-Falah Foundation. A registered humanitarian organization.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-6 text-sm tracking-wide">
          <Link href="/privacy" className="text-on-surface-variant hover:text-primary underline transition-all">
            Privacy Policy
          </Link>
          <Link href="/transparency" className="text-on-surface-variant hover:text-primary underline transition-all">
            Financial Transparency
          </Link>
          <Link href="/reports" className="text-on-surface-variant hover:text-primary underline transition-all">
            Annual Reports
          </Link>
          <Link href="/volunteer" className="text-on-surface-variant hover:text-primary underline transition-all">
            Volunteer Portal
          </Link>
        </div>
        <div className="flex items-center gap-6 mt-4 md:mt-0">
          <a 
            href="https://www.facebook.com/foazofalah" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-10 h-10 bg-surface-container-low flex items-center justify-center text-on-surface-variant hover:bg-primary hover:text-white transition-all rounded-full shadow-sm"
            aria-label="Follow us on Facebook"
          >
            <Facebook size={20} />
          </a>
          <a 
            href="https://www.youtube.com/@foazofalahfoundation" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-10 h-10 bg-surface-container-low flex items-center justify-center text-on-surface-variant hover:bg-primary hover:text-white transition-all rounded-full shadow-sm"
            aria-label="Subscribe on YouTube"
          >
            <Youtube size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}

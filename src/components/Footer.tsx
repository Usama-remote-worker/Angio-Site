import Link from "next/link";

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
      </div>
    </footer>
  );
}

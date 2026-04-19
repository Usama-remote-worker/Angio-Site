import { Heart, Landmark, Phone, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Donate() {
  return (
    <div className="pt-24 pb-24">
      <section className="section-container text-center mb-16 space-y-6">
        <span className="text-primary text-sm font-bold tracking-[0.2em] block uppercase">Support Our Cause</span>
        <h1 className="text-5xl md:text-6xl font-bold text-on-surface">Every Contribution Counts</h1>
        <p className="text-on-surface-variant text-lg max-w-2xl mx-auto leading-relaxed">
          Your donation helps us provide education, healthcare, and relief to those in need across Pakistan. 
          We guarantee 100% transparency in project utilization.
        </p>
      </section>

      <div className="section-container grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
        <div className="bg-white p-10 md:p-16 border border-outline-variant shadow-lg group hover:border-primary transition-all">
          <div className="w-16 h-16 bg-surface-container-low flex items-center justify-center text-primary mb-8 group-hover:bg-primary group-hover:text-white transition-all">
            <Landmark size={32} />
          </div>
          <h3 className="text-3xl font-bold mb-6 text-on-surface hover:text-primary transition-colors cursor-default">Bank Transfer</h3>
          <div className="space-y-6 text-on-surface-variant">
            <div className="border-b border-outline-variant pb-4">
              <p className="text-xs font-bold uppercase tracking-widest text-on-surface-variant/60 mb-1">Account Title</p>
              <p className="text-xl font-bold text-on-surface">Foaz-o-Falah Foundation</p>
            </div>
            <div className="border-b border-outline-variant pb-4">
              <p className="text-xs font-bold uppercase tracking-widest text-on-surface-variant/60 mb-1">Bank Name</p>
              <p className="text-xl font-bold text-on-surface">Placeholder Bank Ltd.</p>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-on-surface-variant/60 mb-1">Account Number (IBAN)</p>
              <p className="text-xl font-mono font-bold text-primary tracking-wider">PK00 BANK 0000 0000 0000 0000</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-10 md:p-16 border border-outline-variant shadow-lg group hover:border-secondary transition-all">
          <div className="w-16 h-16 bg-surface-container-low flex items-center justify-center text-secondary mb-8 group-hover:bg-secondary group-hover:text-white transition-all">
            <Phone size={32} />
          </div>
          <h3 className="text-3xl font-bold mb-6 text-on-surface hover:text-secondary transition-colors cursor-default">Mobile Wallets</h3>
          <div className="space-y-8 text-on-surface-variant">
             <div className="bg-surface-container-low p-8 border-l-4 border-secondary">
              <p className="text-xs font-bold uppercase tracking-widest text-on-surface-variant/60 mb-2">JazzCash / EasyPaisa</p>
              <p className="text-2xl font-bold text-on-surface">+92 344 8880442</p>
              <p className="text-on-surface-variant/70 text-sm mt-3 leading-relaxed">Transfer directly through your mobile application for instant contribution.</p>
            </div>
            <div className="pt-4">
               <Link href="/contact" className="w-full bg-secondary text-white py-5 font-bold flex items-center justify-center gap-3 hover:bg-opacity-90 transition-all shadow-md">
                 Other Methods? Contact Us <ArrowRight size={20} />
               </Link>
            </div>
          </div>
        </div>
      </div>

      <section className="section-container bg-on-background text-white p-16 relative overflow-hidden text-center">
        <div className="absolute top-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2" />
        <div className="relative z-10 space-y-8 max-w-3xl mx-auto">
          <div className="w-20 h-20 bg-primary/20 flex items-center justify-center text-primary mx-auto rounded-full">
            <Heart size={40} fill="currentColor" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">Investment in Compassion</h2>
          <p className="text-white/80 text-lg leading-relaxed">
            By donating, you are not just giving money; you are giving hope, health, and a future to a human soul. 
            Join us in our mission to uplift the underprivileged communities of Pakistan.
          </p>
          <div className="pt-4">
            <span className="inline-block border-2 border-white/20 px-8 py-3 text-sm font-bold tracking-widest uppercase">
              Registered NGO - Govt of Pakistan
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}

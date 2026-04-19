import { Heart, Landmark, Phone } from "lucide-react";
import Link from "next/link";

export default function Donate() {
  return (
    <div className="pt-32 pb-24">
      <section className="section-container text-center mb-16 space-y-4">
        <h1 className="text-5xl font-serif font-bold text-neutral">Support Our Cause</h1>
        <p className="text-neutral/60 max-w-2xl mx-auto">
          Your donation helps us provide education, healthcare, and relief to those in need across Pakistan.
        </p>
      </section>

      <div className="section-container grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <div className="bg-white p-12 rounded-[40px] shadow-sm border border-neutral-outline/5 space-y-6">
          <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
            <Landmark size={32} />
          </div>
          <h3 className="text-2xl font-serif font-bold">Bank Transfer</h3>
          <div className="space-y-4 text-neutral/70">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-neutral/40">Account Name</p>
              <p className="text-lg font-bold text-neutral">Foaz-o-Falah Foundation</p>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-neutral/40">Bank Name</p>
              <p className="text-lg font-bold text-neutral">Meezan Bank Ltd.</p>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-neutral/40">Account Number (IBAN)</p>
              <p className="text-lg font-bold text-neutral tracking-wider">PK00 MEZN 0000 0000 0000 0000</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-12 rounded-[40px] shadow-sm border border-neutral-outline/5 space-y-6">
          <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center text-secondary">
            <Phone size={32} />
          </div>
          <h3 className="text-2xl font-serif font-bold">Mobile Wallets</h3>
          <div className="space-y-4 text-neutral/70">
             <div>
              <p className="text-xs font-bold uppercase tracking-widest text-neutral/40">JazzCash / EasyPaisa</p>
              <p className="text-lg font-bold text-neutral">+92 344 8880442</p>
              <p className="text-neutral/40 text-sm">Transfer directly via mobile app</p>
            </div>
            <div className="pt-4">
               <Link href="/contact" className="btn-outline w-full block text-center">
                 Other Payment Methods? Contact Us
               </Link>
            </div>
          </div>
        </div>
      </div>

      <section className="section-container bg-neutral-surface p-12 rounded-[40px] flex flex-col items-center text-center space-y-6">
        <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center text-white">
          <Heart size={40} fill="currentColor" />
        </div>
        <h2 className="text-3xl font-serif font-bold text-neutral">Every Rupee Counts</h2>
        <p className="text-neutral/60 max-w-xl">
          By donating, you are not just giving money; you are giving hope, health, and a future to a child in need. 
          We ensure 100% transparency in our donation utilization.
        </p>
      </section>
    </div>
  );
}

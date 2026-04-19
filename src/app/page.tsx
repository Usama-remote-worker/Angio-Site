import Image from "next/image";
import Link from "next/link";
import { Heart, Users, Globe, BookOpen, ShieldCheck } from "lucide-react";

export default function Home() {
  const stats = [
    { label: "Families Helped", value: "50,000+", icon: Heart },
    { label: "Education Centers", value: "120+", icon: BookOpen },
    { label: "Clean Water Projects", value: "300+", icon: Globe },
    { label: "Legal Cases Assisted", value: "5,000+", icon: ShieldCheck },
  ];

  const programs = [
    { title: "Education for All", description: "Providing free books, uniforms, and scholarships to orphan and poor students.", color: "bg-blue-50" },
    { title: "Healthcare Services", description: "Mobile medical camps, free dispensaries, and ambulance services for the public.", color: "bg-red-50" },
    { title: "Skill Development", description: "Vocational training in engineering, plumbing, tailoring, and more for youth.", color: "bg-green-50" },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-height-[70vh] flex items-center pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary rounded-full blur-[100px]" />
        </div>
        
        <div className="section-container relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="inline-block py-1 px-4 bg-primary/10 text-primary text-sm font-bold tracking-widest uppercase rounded-full">
              Serving Humanity Since 2004
            </span>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-neutral leading-tight">
              Service <span className="text-primary italic">Without</span> Discrimination
            </h1>
            <p className="text-lg text-neutral/70 leading-relaxed font-sans max-w-lg">
              Foaz-o-Falah Foundation is dedicated to the welfare and prosperity of Pakistan, providing relief to the victims of extremism and rehabilitation for the affected.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/donate" className="btn-primary flex items-center justify-center">
                Invest in Change
              </Link>
              <Link href="/services" className="btn-outline flex items-center justify-center">
                Explore Our Programs
              </Link>
            </div>
          </div>
          
          <div className="relative aspect-square">
            <div className="absolute inset-0 bg-neutral/5 rounded-2xl rotate-3" />
            <div className="absolute inset-0 bg-white shadow-2xl rounded-2xl -rotate-2 overflow-hidden border border-neutral-outline/10">
              <div className="w-full h-full relative">
                {/* User provided Image 1 would go here */}
                <div className="bg-neutral/10 w-full h-full flex items-center justify-center text-neutral/30 font-serif italic p-12 text-center text-4xl">
                  Foaz-o-Falah <br/> Banner Image
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-neutral py-16">
        <div className="section-container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="text-center space-y-2">
                <div className="flex justify-center mb-4">
                  <stat.icon className="text-primary-container" size={32} />
                </div>
                <div className="text-3xl font-serif font-bold text-white">{stat.value}</div>
                <div className="text-white/60 text-sm uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visual Storytelling Section */}
      <section className="py-24 bg-white">
        <div className="section-container">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-neutral">Our Global Impact</h2>
            <p className="text-neutral/60">We work across various sectors to ensure that every individual has access to their basic human rights and necessities.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="group relative aspect-[3/4] overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500">
                <div className="bg-neutral-surface w-full h-full flex items-center justify-center text-neutral-outline italic">
                  Image {i} Placeholder
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-neutral/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-8 text-white">
                  <h4 className="text-xl font-bold mb-2">Empowering Communities</h4>
                  <p className="text-sm text-white/80">Bringing hope and relief where it matters most.</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-neutral-surface">
        <div className="section-container grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
           <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
             {/* User provided Image 2 (Projects Overview) would go here */}
             <div className="bg-neutral/5 w-full h-full flex items-center justify-center text-neutral/40 text-2xl italic font-serif">
               Projects Overview Poster
             </div>
           </div>
           
           <div className="space-y-8">
             <h2 className="text-4xl font-serif font-bold text-neutral leading-tight">
               Built on <span className="text-secondary text-5xl">Compassion</span> and Dedication.
             </h2>
             <div className="space-y-6">
                {programs.map((program, idx) => (
                  <div key={idx} className={`p-6 rounded-2xl ${program.color} border border-black/5 hover:translate-x-2 transition-transform cursor-pointer`}>
                    <h4 className="text-lg font-bold text-neutral flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      {program.title}
                    </h4>
                    <p className="mt-2 text-neutral/70 text-sm">{program.description}</p>
                  </div>
                ))}
             </div>
             <div className="pt-4">
               <Link href="/services" className="text-primary font-bold flex items-center gap-2 group">
                 View All 14 Core Projects 
                 <span className="group-hover:translate-x-1 transition-transform">→</span>
               </Link>
             </div>
           </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="section-container bg-primary rounded-[40px] p-12 md:p-20 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
          <div className="relative z-10 text-center space-y-8">
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-white max-w-4xl mx-auto leading-tight">
              Ready to make a real difference in Pakistan?
            </h2>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              Your contribution goes directly to those who need it most. Join our mission today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/donate" className="bg-white text-primary px-10 py-4 rounded-full font-bold hover:bg-neutral-surface hover:scale-105 transition-all">
                Donate Now
              </Link>
              <Link href="/contact" className="bg-primary-dark text-white px-10 py-4 rounded-full font-bold hover:bg-black/20 transition-all border border-white/20">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

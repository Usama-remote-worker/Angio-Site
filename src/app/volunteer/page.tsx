import { Users, Heart, GraduationCap, ShieldCheck, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Volunteer() {
  return (
    <div className="pt-24 pb-24">
      <section className="section-container mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <span className="text-primary text-sm font-bold tracking-[0.2em] block uppercase">Join the Movement</span>
            <h1 className="text-5xl md:text-6xl font-bold text-on-surface leading-tight">Become a Volunteer</h1>
            <p className="text-on-surface-variant text-lg leading-relaxed max-w-lg">
              Our volunteers are the backbone of Foaz-o-Falah Foundation. Join a community of dedicated 
              individuals working to bring positive change to Pakistan.
            </p>
            <div className="flex flex-wrap gap-4">
               <Link href="/contact" className="btn-primary flex items-center gap-2">
                 Register to Volunteer <ArrowRight size={20} />
               </Link>
            </div>
          </div>
          <div className="relative aspect-video lg:aspect-square overflow-hidden shadow-2xl">
             <Image 
               src="https://lh3.googleusercontent.com/aida-public/AB6AXuBxSgqwLOh95jJIpkmkBkncRK3uOWaDkT6gEnVoi13J8jJW8gSQZnh8KXbuHZ0l9fo_bxHZGVrVlXgBLleyJkc-6j82FcEAXtW6inFkMi_R6dE36uvnbihQw1B7KfanJVz8hjLv28cjlP-qWkSWtC4PrFMwNwLYX1WHwiOiLDiJN6kIkr4w2_ku0bLudNgErQHJ8CF1REQgpcLb1_rT1laC4-t96AF9q1r5n23a1bG2czuYCzJSpGeUWjjwQ_Q1WFhX8LXlSP1RJIU"
               alt="Volunteers in action"
               fill
               className="object-cover"
             />
          </div>
        </div>
      </section>

      <section className="bg-surface-container py-24 mb-24 shadow-inner">
        <div className="section-container text-center mb-16">
          <h2 className="text-4xl font-bold text-on-surface mb-6">Why Volunteer With Us?</h2>
          <p className="text-on-surface-variant text-lg max-w-2xl mx-auto">
            Make a direct impact on the ground and develop new skills while serving humanity.
          </p>
        </div>
        <div className="section-container grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { 
              icon: Heart, 
              title: "Direct Impact", 
              desc: "See the immediate results of your work in the smiles of the families we help." 
            },
            { 
              icon: GraduationCap, 
              title: "Skill Growth", 
              desc: "Gain experience in field operations, event management, and community outreach." 
            },
            { 
              icon: ShieldCheck, 
              title: "Join a Legacy", 
              desc: "Be part of an organization that has been serving Pakistan since 2004." 
            }
          ].map((item, i) => (
            <div key={i} className="bg-white p-10 border border-outline-variant hover:border-primary transition-all group">
              <div className="w-14 h-14 bg-surface-container-low flex items-center justify-center text-primary mb-6 transition-transform group-hover:scale-110">
                <item.icon size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
              <p className="text-on-surface-variant leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-container">
        <div className="bg-primary text-on-primary p-12 md:p-20 text-center space-y-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10 opacity-20 transform -skew-x-12 translate-x-1/2" />
          <h2 className="text-4xl md:text-5xl font-bold relative z-10">Ready to make a difference?</h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto relative z-10">
            Click the button below to send us your details via our contact form, and our volunteer coordinator will reach out to you.
          </p>
          <div className="pt-6 relative z-10">
            <Link href="/contact" className="bg-white text-primary px-12 py-5 font-bold hover:bg-surface-container transition-all inline-block shadow-xl">
              Apply via Contact Form
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

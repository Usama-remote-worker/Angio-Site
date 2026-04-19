import Image from "next/image";
import { CheckCircle2, Target, Eye, Users2 } from "lucide-react";

export default function About() {
  const aims = [
    "Providing food, shelter and medical assistance to victims of disasters.",
    "Providing first-aid training to the youth.",
    "Creation of hospitals, dispensaries, and mother/child care centers.",
    "Providing free medicines and ambulance services to the public.",
    "Establishing schools, colleges, and vocational training centers.",
    "Financial and moral assistance to orphan and poor students.",
  ];

  return (
    <div className="pt-32 pb-24">
      {/* Intro Section */}
      <section className="section-container mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h1 className="text-5xl font-serif font-bold text-neutral">Our Story & Mission</h1>
            <p className="text-neutral/70 leading-relaxed">
              We the Foaz o Falah Foundation are working for the welfare and prosperity of our beloved country of Pakistan and in this regard we are engaging our workers to give relief to the victims of extremism, and for the rehabilitation of affected peoples from unwanted disaster.
            </p>
            <p className="text-neutral/70 leading-relaxed">
              We also make efforts for the welfare of low income general public like their education, food, shelter, and clothing. The Foaz o Falah Foundation is a non government organization (NGO) which is working according to the given Laws of Government of Pakistan.
            </p>
          </div>
          <div className="relative aspect-square">
            <div className="absolute inset-0 bg-primary/5 rounded-full scale-110" />
            <div className="w-full h-full bg-neutral-surface rounded-2xl overflow-hidden shadow-2xl relative">
              {/* Introduction Poster Image (Image 3) would go here */}
              <div className="w-full h-full flex flex-col items-center justify-center p-12 text-center space-y-4">
                 <div className="text-primary font-serif italic text-3xl">Introduction & Aims</div>
                 <div className="text-neutral/40 text-sm">Poster Image 3 Placement</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-neutral-surface py-24 mb-24">
        <div className="section-container grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-white p-12 rounded-3xl shadow-sm border border-neutral-outline/5 space-y-6">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
              <Target size={32} />
            </div>
            <h3 className="text-3xl font-serif font-bold">Our Mission</h3>
            <p className="text-neutral/60 leading-relaxed">
              To empower the vulnerable and marginalized communities of Pakistan through sustainable relief, 
              healthcare, and education initiatives, fostering resilience and self-reliance.
            </p>
          </div>
          <div className="bg-white p-12 rounded-3xl shadow-sm border border-neutral-outline/5 space-y-6">
            <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center text-secondary">
              <Eye size={32} />
            </div>
            <h3 className="text-3xl font-serif font-bold">Our Vision</h3>
            <p className="text-neutral/60 leading-relaxed">
              A prosperous Pakistan where every individual, regardless of their background, has access 
              to dignity, justice, and the resources needed to thrive in peace and harmony.
            </p>
          </div>
        </div>
      </section>

      {/* Aims & Objectives */}
      <section className="section-container mb-24">
        <h2 className="text-4xl font-serif font-bold text-center mb-16">Aims & Objectives</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {aims.map((aim, i) => (
            <div key={i} className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-sm border border-neutral-outline/5">
              <CheckCircle2 className="text-accent shrink-0 mt-1" size={20} />
              <p className="text-neutral/70 text-sm leading-relaxed">{aim}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Founder's Vision (CEO Mention) */}
      <section className="bg-neutral text-white py-24 rounded-[40px] section-container">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <div className="space-y-4">
            <h2 className="text-4xl font-serif font-bold">Founder&apos;s Vision</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          </div>
          <blockquote className="text-2xl md:text-3xl font-serif italic leading-relaxed opacity-90">
            &quot;True success lies not in what we acquire, but in the lives we touch and the hope we restore to those 
            who have lost everything. Our foundation is built on the principle of service without 
            discrimination, because every human soul deserves dignity.&quot;
          </blockquote>
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 bg-primary-container rounded-full mb-4 border-2 border-white/20" />
            <h4 className="text-xl font-bold uppercase tracking-widest">Aziz-ur-Rehman</h4>
            <p className="text-primary-container font-medium text-sm">CEO & Founder, Foaz-o-Falah Foundation</p>
          </div>
        </div>
      </section>
    </div>
  );
}

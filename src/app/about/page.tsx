import Image from "next/image";
import { CheckCircle2, Target, Eye, Users2 } from "lucide-react";

export default function About() {
  const aims = [
    "Establishing modern hospitals and blood banks for accessible specialized medical treatment.",
    "Building educational institutes and technical training centers for self-reliance.",
    "Providing free legal aid and justice support for the oppressed and victims of social injustice.",
    "Promoting interfaith harmony and peaceful co-existence across all societal segments.",
    "Emergency response during natural disasters, pandemics, and civil crises.",
    "Organizing mass marriage ceremonies and dowry support for low-income families.",
    "Providing food, shelter and medical assistance to victims of disasters.",
    "Providing first-aid training to the youth.",
    "Financial and moral assistance to orphan and poor students."
  ];

  return (
    <div className="pt-24 pb-24">
      {/* Intro Section */}
      <section className="section-container mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <span className="text-primary text-sm font-bold tracking-[0.2em] block">OUR STORY</span>
            <h1 className="text-5xl md:text-6xl font-bold text-on-surface leading-tight">Upholding Humanity Since 2004</h1>
            <div className="space-y-6 text-lg text-on-surface-variant leading-relaxed">
              <p>
                We the Foaz-o-Falah Foundation are working for the welfare and prosperity of our beloved country of Pakistan and in this regard we are engaging our workers to give relief to the victims of extremism, and for the rehabilitation of affected peoples from unwanted disaster.
              </p>
              <p>
                We also make efforts for the welfare of low income general public like their education, food, shelter, and clothing. The Foaz-o-Falah Foundation is a registered humanitarian organization operating strictly under the laws of the Government of Pakistan.
              </p>
            </div>
          </div>
          <div className="relative aspect-square">
            <div className="absolute inset-0 bg-primary/5 rounded-full scale-110 blur-3xl opacity-50" />
            <div className="w-full h-full bg-surface-container-low rounded-2xl overflow-hidden shadow-2xl relative">
              <Image 
                src="/images/compassion.jpg"
                alt="Foundation worker providing relief to a child"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-surface-container py-24 mb-24 shadow-inner">
        <div className="section-container grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-white p-12 shadow-sm border border-outline-variant space-y-6 group hover:border-primary transition-colors">
            <div className="w-16 h-16 bg-primary/10 flex items-center justify-center text-primary transition-transform group-hover:scale-110">
              <Target size={32} />
            </div>
            <h3 className="text-3xl font-bold text-on-surface">Our Mission</h3>
            <p className="text-on-surface-variant text-lg leading-relaxed">
              To empower the vulnerable and marginalized communities of Pakistan through sustainable relief, 
              healthcare, and education initiatives, fostering resilience and self-reliance.
            </p>
          </div>
          <div className="bg-white p-12 shadow-sm border border-outline-variant space-y-6 group hover:border-secondary transition-colors">
            <div className="w-16 h-16 bg-secondary/10 flex items-center justify-center text-secondary transition-transform group-hover:scale-110">
              <Eye size={32} />
            </div>
            <h3 className="text-3xl font-bold text-on-surface">Our Vision</h3>
            <p className="text-on-surface-variant text-lg leading-relaxed">
              A prosperous Pakistan where every individual, regardless of their background, has access 
              to dignity, justice, and the resources needed to thrive in peace and harmony.
            </p>
          </div>
        </div>
      </section>

      {/* Aims & Objectives */}
      <section className="section-container mb-24">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-bold tracking-[0.2em] mb-4 block">GOALS</span>
          <h2 className="text-4xl md:text-5xl font-bold">Aims & Objectives</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {aims.map((aim, i) => (
            <div key={i} className="flex items-start space-x-4 p-8 bg-white border border-outline-variant hover:shadow-lg transition-all">
              <CheckCircle2 className="text-tertiary shrink-0 mt-1" size={24} />
              <p className="text-on-surface-variant text-base leading-relaxed">{aim}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Founder's Vision */}
      <section className="bg-on-background text-white py-24 section-container relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image 
            src="/images/founder-tent.jpg"
            alt="Founder in action"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="max-w-4xl mx-auto text-center space-y-12 relative z-10">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">Founder&apos;s Vision</h2>
            <div className="w-24 h-1 bg-primary mx-auto" />
          </div>
          <blockquote className="text-2xl md:text-4xl font-serif italic leading-relaxed opacity-90">
            &quot;The best of people are those that are most useful to people.&quot;
          </blockquote>
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 bg-surface-container rounded-full mb-6 border-4 border-white/20 flex items-center justify-center overflow-hidden relative">
               <Image 
                  src="/images/compassion.jpg"
                  alt="MA Raheemi, Founder of Foaz-o-Falah Foundation"
                  fill
                  className="object-cover"
               />
            </div>
            <h4 className="text-2xl font-bold tracking-widest uppercase">MA Raheemi</h4>
            <p className="text-primary font-bold mt-2">CEO & Founder, Foaz-o-Falah Foundation</p>
          </div>
        </div>
      </section>
    </div>
  );
}

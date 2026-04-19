import { 
  GraduationCap, 
  HeartPulse, 
  Utensils, 
  Droplets, 
  Hammer, 
  Briefcase, 
  Scale, 
  Ambulance, 
  Trophy, 
  Home,
  ChevronRight
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Services() {
  const categories = [
    {
      title: "Humanitarian Relief",
      services: [
        { name: "Emergency Relief", icon: Home, description: "Providing shelter, food, medicine, and clothes during disasters." },
        { name: "Food Bank", icon: Utensils, description: "Ramadan and Eid packages for the needy and deserving families." },
        { name: "Clean Water", icon: Droplets, description: "Installing water pumps in backward areas to ensure safe drinking water." },
      ]
    },
    {
      title: "Health & Care",
      services: [
        { name: "Health Projects", icon: HeartPulse, description: "Medical camps, dispensaries, and clinics across various regions." },
        { name: "Free Ambulance", icon: Ambulance, description: "24/7 emergency transportation services for the community." },
        { name: "Orphan Care", icon: HeartPulse, description: "Kafalat, shelter, education, and moral training for orphans." },
      ]
    },
    {
      title: "Education & Growth",
      services: [
        { name: "Education", icon: GraduationCap, description: "Primary to university level support including schools and libraries." },
        { name: "Skills Development", icon: Hammer, description: "Vocational training in engineering, plumbing, tailoring, and more." },
        { name: "Business Management", icon: Briefcase, description: "Empowering unemployed individuals to start small businesses." },
      ]
    },
    {
      title: "Social Empowerment",
      services: [
        { name: "Legal Advisory", icon: Scale, description: "Expert legal assistance for the poor and oppressed victims." },
        { name: "Sports", icon: Trophy, description: "Organizing tournaments in hockey, football, and cricket for the youth." },
      ]
    }
  ];

  return (
    <div className="pt-24 pb-24">
      <section className="section-container mb-20 text-center space-y-4">
        <span className="text-primary text-sm font-bold tracking-[0.2em] block">OUR IMPACT</span>
        <h1 className="text-5xl md:text-6xl font-bold text-on-surface">Core Intervention Projects</h1>
        <p className="text-on-surface-variant text-lg max-w-2xl mx-auto">
          We operate across 14 diverse core projects designed to cover every aspect of human life and community development.
        </p>
      </section>

      <div className="section-container space-y-32">
        {categories.map((category, idx) => (
          <section key={idx}>
            <div className="flex items-center gap-6 mb-12">
              <h2 className="text-3xl font-bold text-on-surface whitespace-nowrap">{category.title}</h2>
              <div className="h-[2px] bg-outline-variant w-full" />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {category.services.map((service, sIdx) => (
                <div key={sIdx} className="group bg-white p-10 border border-outline-variant hover:border-primary hover:shadow-2xl transition-all duration-500">
                  <div className="w-16 h-16 bg-surface-container-low flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 mb-8 rounded-sm">
                    <service.icon size={32} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{service.name}</h3>
                  <p className="text-on-surface-variant text-base leading-relaxed">
                    {service.description}
                  </p>
                  <div className="mt-8 pt-8 border-t border-outline-variant">
                    <Link href="/contact" className="text-sm font-bold uppercase tracking-widest text-primary flex items-center gap-2 group/link">
                      Learn More <ChevronRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* Featured Poster Section */}
      <section className="mt-32 bg-secondary text-white py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
        <div className="section-container grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold">Our Project Portfolio</h2>
            <p className="text-white/80 text-lg leading-relaxed">
              Every project is meticulously planned and executed with transparency. We provide regular updates to our donors and partners regarding the progress and impact of each initiative.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                "100% Transparency", 
                "Direct Community Impact", 
                "Regulated by Govt of Pakistan",
                "Non-Discriminatory Service"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-white shrink-0">
                    <ChevronRight size={14} />
                  </div>
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>
            <div className="pt-4">
               <Link href="/donate" className="inline-block bg-white text-secondary px-10 py-4 font-bold rounded-sm hover:bg-opacity-90 transition-all">
                 Support These Projects
               </Link>
            </div>
          </div>
          <div className="relative aspect-video shadow-2xl overflow-hidden border-8 border-white/10 group">
              <Image 
                src="/images/ambulance.jpg"
                alt="Foaz-o-Falah Foundation Ambulance Service"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-1000"
              />
          </div>
        </div>
      </section>
      {/* Impact Gallery */}
      <section className="section-container mb-24">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div className="max-w-xl">
             <h2 className="text-4xl font-bold mb-4">Our Impact in Action</h2>
             <p className="text-on-surface-variant text-lg">Real-time snapshots from our field operations across Pakistan.</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
           <div className="relative aspect-[4/3] bg-surface-container-low group overflow-hidden border border-outline-variant">
              <Image 
                src="/images/health-camp.jpg"
                alt="Medical Camp in action"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-6 flex flex-col justify-end">
                 <h4 className="text-white font-bold text-lg">Health Projects</h4>
                 <p className="text-white/80 text-sm">Providing free medicine and checkups.</p>
              </div>
           </div>
           <div className="relative aspect-[4/3] bg-surface-container-low group overflow-hidden border border-outline-variant">
              <Image 
                src="/images/disaster-site.jpg"
                alt="Disaster Management"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-6 flex flex-col justify-end">
                 <h4 className="text-white font-bold text-lg">Disaster Relief</h4>
                 <p className="text-white/80 text-sm">Ground workers planning rehabilitation.</p>
              </div>
           </div>
           <div className="relative aspect-[4/3] bg-surface-container-low group overflow-hidden border border-outline-variant hover:border-primary transition-colors flex items-center justify-center p-8 text-center">
              <div>
                 <HeartPulse className="w-12 h-12 text-primary mx-auto mb-4" />
                 <h4 className="text-xl font-bold mb-2">Join the Impact</h4>
                 <p className="text-on-surface-variant text-sm mb-6">Your contribution saves lives every single day.</p>
                 <Link href="/donate" className="text-primary font-bold hover:underline">Support Our Work</Link>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
}

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
  Home
} from "lucide-react";

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
    <div className="pt-32 pb-24">
      <section className="section-container mb-20 text-center space-y-4">
        <h1 className="text-5xl font-serif font-bold text-neutral">Our Programs</h1>
        <p className="text-neutral/60 max-w-2xl mx-auto">
          We operate across 14 diverse core projects designed to cover every aspect of human life and community development.
        </p>
      </section>

      <div className="section-container space-y-24">
        {categories.map((category, idx) => (
          <section key={idx}>
            <div className="flex items-center gap-4 mb-10">
              <h2 className="text-2xl font-bold text-neutral whitespace-nowrap">{category.title}</h2>
              <div className="h-px bg-neutral-outline/20 w-full" />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.services.map((service, sIdx) => (
                <div key={sIdx} className="group bg-white p-8 rounded-3xl border border-neutral-outline/5 hover:border-primary/20 hover:shadow-xl transition-all duration-300">
                  <div className="w-14 h-14 bg-neutral-surface rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors mb-6">
                    <service.icon size={28} />
                  </div>
                  <h3 className="text-xl font-bold mb-3 font-serif">{service.name}</h3>
                  <p className="text-neutral/60 text-sm leading-relaxed">
                    {service.description}
                  </p>
                  <div className="mt-6 pt-6 border-t border-neutral-outline/5">
                    <button className="text-xs font-bold uppercase tracking-widest text-primary hover:text-secondary transition-colors">
                      Learn More →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* Featured Poster Section */}
      <section className="mt-32 bg-secondary text-white py-24">
        <div className="section-container grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-serif font-bold">Our Project Portfolio</h2>
            <p className="text-white/70 leading-relaxed">
              Every project is meticulously planned and executed with transparency. We provide regular updates to our donors and partners regarding the progress and impact of each initiative.
            </p>
            <ul className="space-y-3">
              {["100% Transparency", "Direct Community Impact", "Regulated by Govt of Pakistan"].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center text-[10px]">✓</div>
                  <span className="text-sm font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl">
              {/* User provided Image 2 (Projects Overview) would go here again as reference */}
              <div className="bg-white/10 w-full h-full flex items-center justify-center text-white/30 text-xl italic font-serif p-10 text-center">
                Projects Overview Poster <br/> Reference Placement
              </div>
          </div>
        </div>
      </section>
    </div>
  );
}

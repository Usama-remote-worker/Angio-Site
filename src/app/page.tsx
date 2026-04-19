import Image from "next/image";
import Link from "next/link";
import { 
  Stethoscope, 
  GraduationCap, 
  Wrench, 
  Trophy, 
  Phone, 
  Mail, 
  MapPin,
  ArrowRight
} from "lucide-react";

export default function Home() {
  const stats = [
    { label: "Families Helped", value: "15k+", color: "text-primary" },
    { label: "Students Supported", value: "2500+", color: "text-primary" },
    { label: "Clean Water Projects", value: "45+", color: "text-primary" },
    { label: "Patients Treated", value: "12k+", color: "text-primary" },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[870px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBxSgqwLOh95jJIpkmkBkncRK3uOWaDkT6gEnVoi13J8jJW8gSQZnh8KXbuHZ0l9fo_bxHZGVrVlXgBLleyJkc-6j82FcEAXtW6inFkMi_R6dE36uvnbihQw1B7KfanJVz8hjLv28cjlP-qWkSWtC4PrFMwNwLYX1WHwiOiLDiJN6kIkr4w2_ku0bLudNgErQHJ8CF1REQgpcLb1_rT1laC4-t96AF9q1r5n23a1bG2czuYCzJSpGeUWjjwQ_Q1WFhX8LXlSP1RJIU"
            alt="Humanitarian aid workers distributing food"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="relative z-10 section-container">
          <div className="max-w-2xl">
            <span className="inline-block bg-primary text-on-primary px-4 py-1 text-sm font-bold tracking-widest uppercase mb-6">
              Serving All Humanity
            </span>
            <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Services Without Favoritism
            </h1>
            <p className="text-xl text-slate-100 mb-10 leading-relaxed max-w-lg">
              Committed to uplifting the underprivileged communities of Pakistan without any discrimination of religion, cast, or creed. Our mission is pure service rooted in empathy.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/donate" className="btn-primary">
                Donate Now
              </Link>
              <Link href="/volunteer" className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 font-semibold transition-all">
                Become a Volunteer
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & About Section */}
      <section className="py-24 bg-white">
        <div className="section-container">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-primary text-sm font-bold tracking-[0.2em] mb-4 block">WHO WE ARE</span>
              <h2 className="text-4xl md:text-5xl font-bold text-on-surface mb-6">Upholding Humanity Under the Law</h2>
              <p className="text-lg text-on-surface-variant mb-6 leading-relaxed">
                Foaz-o-Falah Foundation is a registered humanitarian organization operating strictly under the laws of the Government of Pakistan. We bridge the gap between resources and those in desperate need.
              </p>
              <div className="grid grid-cols-3 gap-6 pt-6">
                <div className="text-center p-4 bg-surface-container-low border-b-4 border-primary">
                  <span className="block text-2xl font-bold text-primary mb-1">Khidmat</span>
                  <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-wider">SERVICE</span>
                </div>
                <div className="text-center p-4 bg-surface-container-low border-b-4 border-secondary">
                  <span className="block text-2xl font-bold text-secondary mb-1">Amanat</span>
                  <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-wider">INTEGRITY</span>
                </div>
                <div className="text-center p-4 bg-surface-container-low border-b-4 border-tertiary">
                  <span className="block text-2xl font-bold text-tertiary mb-1">Ibadat</span>
                  <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-wider">DEVOTION</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative aspect-[4/3] w-full overflow-hidden shadow-2xl">
                <Image 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAm4eb_ELTZY2eQ4uPd3Of0WHcyOlfoayd2YKDp7wOksTvzrH_dMkyBrx9oUjXmu521lL32AvpllWyobekQ_3Y32HjQ9OlUFfTCnZskAE2LaRa7sqZN0Ap8sT-sqjs01DPcYzVKTFFew0s5CoPtYGi8rhireDCm0N9Xcey3poZSCO8QM8iUbO3iIWJQBLshLfx9IeB_BKJ--yI251dgHdh5uHmSRA1GGFjOfIl47AHW0jLq0ePwR3NDqmdXXmHubnvUbw3DNgehSdo"
                  alt="Growth and nurturing mission"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-secondary p-8 text-white hidden lg:block max-w-xs shadow-xl">
                <p className="italic text-lg font-serif">"The best of people are those that are most useful to people."</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-20 bg-on-background text-white">
        <div className="section-container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, i) => (
              <div key={i}>
                <span className={`block text-5xl font-bold ${stat.color} mb-2`}>{stat.value}</span>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Bento Grid */}
      <section className="py-24 bg-surface-container-low">
        <div className="section-container">
          <div className="text-center mb-16">
            <span className="text-primary text-sm font-bold tracking-[0.2em] mb-4 block">OUR CORE SECTORS</span>
            <h2 className="text-4xl md:text-5xl font-bold">Building a Resilient Society</h2>
          </div>
          <div className="bento-grid">
            {/* Sector 1 */}
            <div className="col-span-12 md:col-span-8 bg-white p-8 group overflow-hidden relative min-h-[300px] flex flex-col justify-end">
              <div className="absolute inset-0 opacity-20">
                <Image 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCa9nE6GKXOGUJtW3Wl-hefudJOjPa4nMXSPw1Zw7iUcN2389GpLVbvT_g1NaxfY-aJ5JvkfhC3_5giC-Lfu7bc4qXAdOw_q82Zqh4B6lqdOAiOMyiylq_ETPfnzhtiSrO3LfLDyGPiOy-0vWLSPlnby-hMAKnc0WzrDiOJbLY2yu0SjIX_Fb3zToz364KFOqFg6WqZ5veLOu8-55veisl2IIFE_gj30mqjlPDh3dYkR1aanmNEUPdYi_aYHyr06HQ9iRhArjHCSdU"
                  alt="Healthcare excellence"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="relative z-10">
                <Stethoscope className="text-primary w-12 h-12 mb-4" />
                <h3 className="text-3xl font-bold mb-2">Healthcare Excellence</h3>
                <p className="text-on-surface-variant max-w-md">Establishing free clinics and specialized hospitals for those who cannot afford basic medical care.</p>
              </div>
            </div>
            {/* Sector 2 */}
            <div className="col-span-12 md:col-span-4 bg-secondary p-8 text-white flex flex-col justify-between min-h-[300px] relative overflow-hidden group">
              <div className="absolute inset-0 opacity-20 transition-transform duration-500 group-hover:scale-110">
                <Image 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAm4eb_ELTZY2eQ4uPd3Of0WHcyOlfoayd2YKDp7wOksTvzrH_dMkyBrx9oUjXmu521lL32AvpllWyobekQ_3Y32HjQ9OlUFfTCnZskAE2LaRa7sqZN0Ap8sT-sqjs01DPcYzVKTFFew0s5CoPtYGi8rhireDCm0N9Xcey3poZSCO8QM8iUbO3iIWJQBLshLfx9IeB_BKJ--yI251dgHdh5uHmSRA1GGFjOfIl47AHW0jLq0ePwR3NDqmdXXmHubnvUbw3DNgehSdo"
                  alt="Education for all"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative z-10">
                <GraduationCap className="w-12 h-12 mb-4" />
                <h3 className="text-3xl font-bold mb-2">Education</h3>
                <p className="opacity-90 leading-relaxed">Providing school supplies and scholarships to bright minds in need.</p>
              </div>
            </div>
            {/* Sector 3 */}
            <div className="col-span-12 md:col-span-4 bg-white p-8 border-t-4 border-tertiary shadow-sm relative overflow-hidden group">
              <div className="absolute inset-0 opacity-10 transition-transform duration-500 group-hover:scale-110">
                <Image 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCa9nE6GKXOGUJtW3Wl-hefudJOjPa4nMXSPw1Zw7iUcN2389GpLVbvT_g1NaxfY-aJ5JvkfhC3_5giC-Lfu7bc4qXAdOw_q82Zqh4B6lqdOAiOMyiylq_ETPfnzhtiSrO3LfLDyGPiOy-0vWLSPlnby-hMAKnc0WzrDiOJbLY2yu0SjIX_Fb3zToz364KFOqFg6WqZ5veLOu8-55veisl2IIFE_gj30mqjlPDh3dYkR1aanmNEUPdYi_aYHyr06HQ9iRhArjHCSdU"
                  alt="Technical Training"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative z-10">
                <Wrench className="text-tertiary w-12 h-12 mb-4" />
                <h3 className="text-3xl font-bold mb-2">Technical Training</h3>
                <p className="text-on-surface-variant">Vocational centers empowering youth with modern employability skills.</p>
              </div>
            </div>
            {/* Sector 4 */}
            <div className="col-span-12 md:col-span-8 bg-white p-8 group relative overflow-hidden flex items-center shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full relative z-10">
                <div>
                  <Trophy className="text-primary w-12 h-12 mb-4" />
                  <h3 className="text-3xl font-bold mb-2">Youth Sports</h3>
                  <p className="text-on-surface-variant">Promoting healthy lifestyles and teamwork through community sports leagues.</p>
                </div>
                <div className="relative h-48 md:h-full min-h-[200px]">
                  <Image 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCfsgQM3v0raKlsEyHbFN-3EpuaDTJjjmhSimJa02es9z5BJpuWyevQ_LKnyJf8ewtAEEa1Xr3NIxcynuMnO5R2hYFxQZ6jX5jl3opnTwpx8clKzLo4gnfSj3a7apYREvOfsJ0fU5gqibA5sKo9Hp9uBWmVpFOFJZZaBaGmUuqXcIdOZYUArVM58Ef8eWCooQETusx0GIGxK69eEswa2I3zXU9pKhjxcBP-rE-qt3NNu-5z_dS2N12QbLOm4Pso1R2OPUvVzsRB3ec"
                    alt="Youth sports"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Programs */}
      <section className="py-24 bg-white">
        <div className="section-container">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div className="max-w-xl">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Key Intervention Programs</h2>
              <p className="text-on-surface-variant text-lg">Targeted relief and development initiatives designed to create sustainable community impact.</p>
            </div>
            <Link href="/services" className="text-secondary font-bold flex items-center gap-2 hover:underline mt-4 md:mt-0 group">
              View All Programs <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Program Card 1 */}
            <div className="border border-outline-variant hover:border-primary transition-colors group">
              <div className="h-56 overflow-hidden relative">
                <Image 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDr9gjXsCrI3xbK08FGa5I-EKiZ9SVsGlZY2_Sw84ZN5JW_z6ap0cRagC4lzkYQRjvEMg_6NeTGqShQ2Rhgl3u2Sv0cOr-nLP8zJ10Ls1210KWFfuKniuIrP6Uhq8RfCNQxKJ8kuG6M4WrRS7IiXt7rmCBqiT73x0ohUBz7q_96ZRAMEaeXGJNKHa7EfEuRmkOGYtWJnYBoqQwNwHjYrRESurso1R-ut1V4GAAijiGSy28fZKQw62_XgWXgJTXhShzRAVlYoMpfizU"
                  alt="Food & Ration"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8">
                <h4 className="text-2xl font-bold mb-3">Food & Ration</h4>
                <p className="text-on-surface-variant mb-6">Monthly distribution of nutritious food packets to widowed and low-income households.</p>
                <div className="bg-surface-container-low h-2 w-full mb-3 rounded-full overflow-hidden">
                  <div className="bg-tertiary h-full w-[75%] rounded-full"></div>
                </div>
                <div className="flex justify-between text-xs font-bold text-on-surface-variant">
                  <span className="uppercase">Target: 1,000 Families</span>
                  <span className="text-tertiary">75% Funded</span>
                </div>
              </div>
            </div>
            {/* Program Card 2 */}
            <div className="border border-outline-variant hover:border-primary transition-colors group">
              <div className="h-56 overflow-hidden relative">
                <Image 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBSV3OcmFcan7tCpDgYERock7sjN8u218CNE4SmrYmivMfuDpWKMF9CIeJ94xFSelQADryeyZVnpc-iGoB3vC1p12ciI5Q9kJHMVXI4KiMt9xnmPPnELTR7FSc3qOHs8WLB5mXZNg12yJ8RBFP2dA5AkdpwzaK_7EwlluQ4cZshiS-xnHaZ0wal6bgumb8mLzIP1CCXmjpQzWvQb5SWBenoVcmQJaO4w_6H3LJKcFz8dgFr3p1I1wx5k1W33ULT1SWz6SeychGh5dk"
                  alt="Clean Water"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8">
                <h4 className="text-2xl font-bold mb-3">Clean Water</h4>
                <p className="text-on-surface-variant mb-6">Installing solar-powered wells and manual pumps in drought-affected regions of Pakistan.</p>
                <div className="bg-surface-container-low h-2 w-full mb-3 rounded-full overflow-hidden">
                  <div className="bg-tertiary h-full w-[40%] rounded-full"></div>
                </div>
                <div className="flex justify-between text-xs font-bold text-on-surface-variant">
                  <span className="uppercase">Target: 20 New Wells</span>
                  <span className="text-tertiary">40% Funded</span>
                </div>
              </div>
            </div>
            {/* Program Card 3 */}
            <div className="border border-outline-variant hover:border-primary transition-colors group">
              <div className="h-56 overflow-hidden relative">
                <Image 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCqQ818gfek3OOnRbCdbUPtMOa2bMKUbDAYJL2_nbH0KS2qdMIn8XJ-25nfIZawbmXqJlZhTc98GJudWGkrepviMcJu30UizH4qM-o2zRh1Kr97uklobERJDIF5QNB5SfzxOKmsRNXCzBhfMR5vT8cqse-Z1dpdOn4OelSNeqGdIGmhzOy0F-GJcHfHbSy2Ri1zcgyIupqodlavAeHfwFlNfDbX-LmuXfgEH1HP-vJRrVz4N-V7p4R9ADjxsBqvK2Ers6T_psc_9Kw"
                  alt="Orphan Support"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8">
                <h4 className="text-2xl font-bold mb-3">Orphan Support</h4>
                <p className="text-on-surface-variant mb-6">Providing comprehensive care including housing, education, and health for orphans.</p>
                <div className="bg-surface-container-low h-2 w-full mb-3 rounded-full overflow-hidden">
                  <div className="bg-tertiary h-full w-[90%] rounded-full"></div>
                </div>
                <div className="flex justify-between text-xs font-bold text-on-surface-variant">
                  <span className="uppercase">Sponsorships: 500 children</span>
                  <span className="text-tertiary">90% Funded</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Aims & Objectives */}
      <section className="py-24 bg-surface-container shadow-inner">
        <div className="section-container">
          <div className="max-w-3xl mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Aims & Objectives</h2>
            <p className="text-on-surface-variant text-lg leading-relaxed">A roadmap toward a more equitable society where basic rights are guaranteed for all citizens.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
            {[
              "Establishing modern hospitals and blood banks for accessible specialized medical treatment.",
              "Building educational institutes and technical training centers for self-reliance.",
              "Providing free legal aid and justice support for the oppressed and victims of social injustice.",
              "Promoting interfaith harmony and peaceful co-existence across all societal segments.",
              "Emergency response during natural disasters, pandemics, and civil crises.",
              "Organizing mass marriage ceremonies and dowry support for low-income families."
            ].map((text, i) => (
              <div key={i} className="flex gap-6 p-6 hover:bg-white transition-all shadow-sm hover:shadow-md border border-transparent hover:border-outline-variant">
                <span className="text-primary text-3xl font-bold opacity-50">0{i+1}.</span>
                <p className="text-lg leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Donation Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="section-container relative z-10">
          <div className="bg-secondary shadow-2xl flex flex-col lg:flex-row overflow-hidden rounded-sm">
            <div className="p-12 text-white lg:w-2/3">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Transparent Giving</h2>
              <p className="text-xl mb-12 opacity-90 leading-relaxed">Every penny you donate is used to serve humanity. Choose a category below to contribute to our ongoing projects.</p>
              <div className="grid sm:grid-cols-3 gap-6 mb-12">
                {["ZAKAT", "SADAQAH", "GENERAL"].map((type) => (
                  <button key={type} className="bg-white/10 hover:bg-white/20 border border-white/30 p-8 text-center transition-all group">
                    <span className="block text-lg font-bold mb-2 tracking-widest">{type}</span>
                    <span className="text-xs opacity-60 uppercase tracking-tighter">
                      {type === "ZAKAT" ? "Cleansing Wealth" : type === "SADAQAH" ? "Voluntary Charity" : "Operational Fund"}
                    </span>
                  </button>
                ))}
              </div>
              <div className="bg-black/20 p-8 border border-white/10">
                <h4 className="font-bold mb-6 uppercase text-sm tracking-widest opacity-70">Official Bank Details</h4>
                <div className="space-y-4 font-mono text-sm sm:text-base">
                  <p className="flex justify-between border-b border-white/10 pb-2">
                    <span className="opacity-60">Bank Name</span>
                    <span>Placeholder Bank of Pakistan</span>
                  </p>
                  <p className="flex justify-between border-b border-white/10 pb-2">
                    <span className="opacity-60">Account Title</span>
                    <span>Foaz-o-Falah Foundation</span>
                  </p>
                  <p className="flex justify-between">
                    <span className="opacity-60">IBAN</span>
                    <span>PK00 BANK 0000 1234 5678 9012</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white p-12 lg:w-1/3 flex flex-col items-center justify-center text-center">
              <div className="w-64 h-64 bg-slate-50 mb-8 flex items-center justify-center border-2 border-dashed border-slate-200">
                 <div className="text-slate-200 flex flex-col items-center">
                   <div className="w-32 h-32 border-4 border-current mb-4 opacity-20"></div>
                   <span className="text-xs font-bold uppercase tracking-widest">QR CODE PLACEHOLDER</span>
                 </div>
              </div>
              <p className="text-on-surface font-bold text-xl mb-2">Scan to Donate</p>
              <p className="text-on-surface-variant text-sm mb-8">Use any mobile banking app for instant contribution.</p>
              <button className="w-full bg-primary text-white py-4 font-bold rounded-sm hover:bg-primary-container transition-colors shadow-lg">
                Download QR Code
              </button>
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50 -z-0 transform skew-x-12 translate-x-24"></div>
      </section>

      {/* Contact & Location */}
      <section className="py-24 bg-surface-container-low">
        <div className="section-container">
          <div className="grid lg:grid-cols-3 gap-16">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-12">Get In Touch</h2>
              <div className="space-y-10">
                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                    <Phone className="text-primary w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-bold text-xl mb-2">Phone Support</p>
                    <p className="text-on-surface-variant">+92 42 37234758</p>
                    <p className="text-on-surface-variant">+92 345 0011161</p>
                    <p className="text-on-surface-variant">+92 344 8880442</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                    <Mail className="text-primary w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-bold text-xl mb-2">Email Us</p>
                    <p className="text-on-surface-variant">foazofalah@gmail.com</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                    <MapPin className="text-primary w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-bold text-xl mb-2">Head Office</p>
                    <p className="text-on-surface-variant">Lahore, Pakistan</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-2 h-[500px] border border-outline-variant grayscale hover:grayscale-0 transition-all duration-1000 overflow-hidden relative group">
              <Image 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuADO4vMzcqfZ_rlEOyw-UyJNyuPYU42UZw8cftHWfmDaNHA0ELVsup5Sf2VfYkGa4z6XKLOXpB9W8qR7zroBkiiSwPeQ2ChOnSAT5JQzLtnapjN3FVLyJP0vfe4yTvFKpnoDEpmF_OdGdgSD1rfa0OFCI5uBH_0PW-qTi9JLw0IJqiKNDZYHxm4sb9TDstVm6VOGOvGjxaBcKUySOs69g9rOg_MSIYZD8BAzAIRz2lwg3xhUKYyN8WrR22NLpeK2yweblzAhv2TiqQ"
                alt="Lahore Head Office Location"
                fill
                className="object-cover transition-transform duration-[2000ms] group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-primary/10 mix-blend-multiply opacity-30"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

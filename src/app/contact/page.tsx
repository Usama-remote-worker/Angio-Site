"use client";

import { useState } from "react";
import { Send, Phone, Mail, MapPin, Clock } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: { "Content-Type": "application/json" },
      });

      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <div className="pt-24 pb-24">
      <section className="section-container mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div className="space-y-16">
            <div className="space-y-6">
              <span className="text-primary text-sm font-bold tracking-[0.2em] block">CONTACT US</span>
              <h1 className="text-5xl md:text-6xl font-bold text-on-surface leading-tight">We&apos;re Here to Listen</h1>
              <p className="text-on-surface-variant text-lg leading-relaxed max-w-md">
                Have questions about our projects or want to collaborate? Reach out to us through any of these channels.
              </p>
            </div>

            <div className="space-y-12">
              {[
                { icon: MapPin, title: "Our Office", detail: "Office # 40, 1st Floor, Hijvery Tower, Chouburji Chowk, Lahore, Pakistan" },
                { icon: Phone, title: "Call Us", detail: "+92 42 37234758, +92 345 0011161" },
                { icon: Mail, title: "Email Us", detail: "foazofalah@gmail.com" },
                { icon: Clock, title: "Working Hours", detail: "Mon - Sat, 9:00 AM - 6:00 PM" },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-6 group">
                  <div className="w-14 h-14 bg-surface-container-low flex items-center justify-center text-primary shrink-0 transition-colors group-hover:bg-primary group-hover:text-on-primary">
                    <item.icon size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-on-surface text-xl">{item.title}</h4>
                    <p className="text-on-surface-variant text-base mt-2 leading-relaxed">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-10 md:p-16 border border-outline-variant shadow-2xl">
            <h3 className="text-3xl font-bold mb-10 text-on-surface">Send us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant/70">Full Name</label>
                  <input
                    type="text"
                    required
                    className="w-full bg-surface-container-lowest border border-outline-variant px-6 py-4 focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all text-on-surface"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant/70">Email Address</label>
                  <input
                    type="email"
                    required
                    className="w-full bg-surface-container-lowest border border-outline-variant px-6 py-4 focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all text-on-surface"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
              </div>
              <div className="space-y-3">
                <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant/70">Subject</label>
                <input
                  type="text"
                  required
                  className="w-full bg-surface-container-lowest border border-outline-variant px-6 py-4 focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all text-on-surface"
                  placeholder="How can we help?"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                />
              </div>
              <div className="space-y-3">
                <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant/70">Message</label>
                <textarea
                  required
                  rows={6}
                  className="w-full bg-surface-container-lowest border border-outline-variant px-6 py-4 focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all text-on-surface resize-none"
                  placeholder="Tell us more about your inquiry..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>

              <button
                type="submit"
                disabled={status === "loading"}
                className={`w-full py-5 font-bold flex items-center justify-center gap-3 transition-all shadow-lg ${
                  status === "success" 
                    ? "bg-tertiary text-on-tertiary" 
                    : "bg-primary text-on-primary hover:bg-primary-container"
                }`}
              >
                {status === "loading" ? "Sending..." : status === "success" ? "Message Sent!" : "Send Message"}
                <Send size={20} />
              </button>

              {status === "error" && (
                <p className="text-error text-sm text-center font-bold">Something went wrong. Please try again.</p>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section-container mb-24">
        <div className="w-full h-[500px] border border-outline-variant grayscale hover:grayscale-0 transition-all duration-1000 overflow-hidden relative group">
          <div className="absolute inset-0 bg-surface-container-low flex items-center justify-center text-on-surface-variant/30 font-bold tracking-widest text-2xl z-0">
             LOADING INTERACTIVE MAP...
          </div>
          {/* We'll use the placeholder image for map as well for now */}
          <div className="absolute inset-0">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuADO4vMzcqfZ_rlEOyw-UyJNyuPYU42UZw8cftHWfmDaNHA0ELVsup5Sf2VfYkGa4z6XKLOXpB9W8qR7zroBkiiSwPeQ2ChOnSAT5JQzLtnapjN3FVLyJP0vfe4yTvFKpnoDEpmF_OdGdgSD1rfa0OFCI5uBH_0PW-qTi9JLw0IJqiKNDZYHxm4sb9TDstVm6VOGOvGjxaBcKUySOs69g9rOg_MSIYZD8BAzAIRz2lwg3xhUKYyN8WrR22NLpeK2yweblzAhv2TiqQ"
              alt="Lahore Head Office Map"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

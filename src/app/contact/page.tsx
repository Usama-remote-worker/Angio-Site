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
    <div className="pt-32 pb-24">
      <section className="section-container mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-12">
            <div className="space-y-4">
              <h1 className="text-5xl font-serif font-bold text-neutral">Get in Touch</h1>
              <p className="text-neutral/60 max-w-md">
                Have questions about our projects or want to collaborate? Reach out to us through any of these channels.
              </p>
            </div>

            <div className="space-y-8">
              {[
                { icon: MapPin, title: "Our Office", detail: "Office # 40, 1st Floor, Hijvery Tower, Chouburji Chowk, Lahore, Pakistan" },
                { icon: Phone, title: "Call Us", detail: "+92 42 37234758, +92 345 0011161" },
                { icon: Mail, title: "Email Us", detail: "foazofalah@gmail.com" },
                { icon: Clock, title: "Working Hours", detail: "Mon - Sat, 9:00 AM - 6:00 PM" },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/5 rounded-xl flex items-center justify-center text-primary shrink-0">
                    <item.icon size={22} />
                  </div>
                  <div>
                    <h4 className="font-bold text-neutral">{item.title}</h4>
                    <p className="text-neutral/60 text-sm mt-1">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-8 md:p-12 rounded-[40px] shadow-2xl shadow-primary/5 border border-neutral-outline/5">
            <h3 className="text-2xl font-serif font-bold mb-8 text-neutral">Send us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-neutral/50 ml-1">Full Name</label>
                  <input
                    type="text"
                    required
                    className="w-full bg-neutral-surface border-none rounded-2xl p-4 focus:ring-2 focus:ring-primary transition-all text-neutral"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-neutral/50 ml-1">Email Address</label>
                  <input
                    type="email"
                    required
                    className="w-full bg-neutral-surface border-none rounded-2xl p-4 focus:ring-2 focus:ring-primary transition-all text-neutral"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-neutral/50 ml-1">Subject</label>
                <input
                  type="text"
                  required
                  className="w-full bg-neutral-surface border-none rounded-2xl p-4 focus:ring-2 focus:ring-primary transition-all text-neutral"
                  placeholder="How can we help?"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-neutral/50 ml-1">Message</label>
                <textarea
                  required
                  rows={5}
                  className="w-full bg-neutral-surface border-none rounded-2xl p-4 focus:ring-2 focus:ring-primary transition-all text-neutral"
                  placeholder="Tell us more about your inquiry..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>

              <button
                type="submit"
                disabled={status === "loading"}
                className={`w-full py-5 rounded-2xl font-bold text-white flex items-center justify-center gap-2 transition-all shadow-xl shadow-primary/20 ${
                  status === "success" ? "bg-accent" : "bg-primary hover:bg-primary-dark"
                }`}
              >
                {status === "loading" ? "Sending..." : status === "success" ? "Message Sent!" : "Send Message"}
                <Send size={18} />
              </button>

              {status === "error" && (
                <p className="text-red-500 text-sm text-center">Something went wrong. Please try again.</p>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="section-container">
        <div className="w-full h-[400px] bg-neutral-surface rounded-[40px] overflow-hidden grayscale contrast-125 border border-neutral-outline/5 relative">
           <div className="absolute inset-0 flex items-center justify-center text-neutral/30 font-serif italic text-xl">
             Map View - Lahore Office
           </div>
        </div>
      </section>
    </div>
  );
}

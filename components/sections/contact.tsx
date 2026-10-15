"use client";

import * as React from "react";
import { Phone, Mail, Globe, MapPin, ArrowRight, CheckCircle2 } from "lucide-react";
import { site } from "@/lib/constants";

export function Contact() {
  const [submitted, setSubmitted] = React.useState(false);
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    phone: "",
    service: "Hardware Troubleshooting",
    country: "Indonesia",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // trigger mailto
    const subject = encodeURIComponent(`Project Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nService: ${formData.service}\nLocation: ${formData.country}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-24 sm:py-36 bg-[#1E3A2B] text-white relative overflow-hidden">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Column: Contact Thesis & Info Pills */}
          <div className="flex flex-col justify-between gap-8 lg:col-span-5">
            <div>
              {/* Micro-pill eyebrow tag */}
              <div className="inline-flex items-center gap-2 rounded-full px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#F59E0B] bg-[#F59E0B]/10 ring-1 ring-[#F59E0B]/20 mb-4">
                <span className="h-1.5 w-1.5 rounded-full bg-[#F59E0B] animate-pulse" />
                <span>Contact Us</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
                Let&apos;s Talk for{" "}
                <span className="text-[#F59E0B]">Your Next Projects</span>
              </h2>
              <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#C6D8CD]">
                Whether you need enterprise IT infrastructure setup, network cabling, CCTV
                surveillance troubleshooting, or an on-demand IT specialist, I&apos;m ready to help.
              </p>
            </div>

            {/* Direct Contact Info Items in Double-Bezel Containers */}
            <div className="flex flex-col gap-4">
              {/* Phone */}
              <a
                href={`tel:${site.phone}`}
                className="group rounded-2xl p-1.5 ring-1 ring-white/10 bg-white/5 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:ring-[#F59E0B]/40 hover:bg-white/10 hover:-translate-y-0.5"
              >
                <div className="rounded-[calc(1rem-0.125rem)] bg-[#254636] p-4 flex items-center gap-4 shadow-[inset_0_1px_1px_rgba(255,255,255,0.12)]">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#F59E0B] text-black shadow-sm transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-105">
                    <Phone className="h-5 w-5" strokeWidth={1.25} />
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold uppercase text-[#9EB3A6]">Call Anytime</p>
                    <p className="text-sm font-bold text-white">{site.phone}</p>
                  </div>
                </div>
              </a>

              {/* Email */}
              <a
                href={`mailto:${site.email}`}
                className="group rounded-2xl p-1.5 ring-1 ring-white/10 bg-white/5 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:ring-[#F59E0B]/40 hover:bg-white/10 hover:-translate-y-0.5"
              >
                <div className="rounded-[calc(1rem-0.125rem)] bg-[#254636] p-4 flex items-center gap-4 shadow-[inset_0_1px_1px_rgba(255,255,255,0.12)]">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#F59E0B] text-black shadow-sm transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-105">
                    <Mail className="h-5 w-5" strokeWidth={1.25} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[11px] font-semibold uppercase text-[#9EB3A6]">Send an Email</p>
                    <p className="text-sm font-bold text-white break-all sm:break-normal">{site.email}</p>
                  </div>
                </div>
              </a>

              {/* LinkedIn Profile */}
              <a
                href={site.linkedin}
                target="_blank"
                rel="noreferrer"
                className="group rounded-2xl p-1.5 ring-1 ring-white/10 bg-white/5 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:ring-[#F59E0B]/40 hover:bg-white/10 hover:-translate-y-0.5"
              >
                <div className="rounded-[calc(1rem-0.125rem)] bg-[#254636] p-4 flex items-center gap-4 shadow-[inset_0_1px_1px_rgba(255,255,255,0.12)]">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#F59E0B] text-black shadow-sm transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-105">
                    <Globe className="h-5 w-5" strokeWidth={1.25} />
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold uppercase text-[#9EB3A6]">LinkedIn Profile</p>
                    <p className="text-sm font-bold text-white">m-mayo-shaquille</p>
                  </div>
                </div>
              </a>

              {/* Location */}
              <div className="rounded-2xl p-1.5 ring-1 ring-white/10 bg-white/5">
                <div className="rounded-[calc(1rem-0.125rem)] bg-[#254636] p-4 flex items-center gap-4 shadow-[inset_0_1px_1px_rgba(255,255,255,0.12)]">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#F59E0B] text-black shadow-sm">
                    <MapPin className="h-5 w-5" strokeWidth={1.25} />
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold uppercase text-[#9EB3A6]">Base Location</p>
                    <p className="text-sm font-bold text-white">{site.location}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form in Double-Bezel Frame */}
          <div className="lg:col-span-7">
            <div className="rounded-[2rem] p-1.5 ring-1 ring-white/10 bg-white/5 shadow-2xl">
              <div className="rounded-[calc(2rem-0.375rem)] bg-[#254636] p-4 sm:p-6 md:p-8 shadow-[inset_0_1px_1px_rgba(255,255,255,0.12)]">
                {submitted ? (
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#F59E0B] text-black mb-4 shadow-md">
                      <CheckCircle2 className="h-8 w-8" strokeWidth={1.25} />
                    </div>
                    <h3 className="text-2xl font-bold text-white">Inquiry Received!</h3>
                    <p className="mt-2 text-sm text-[#C6D8CD] max-w-md">
                      Thank you, {formData.name}. Your email client has been prompted with your message details. I will respond to your inquiry within 24 hours.
                    </p>
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="mt-6 rounded-full bg-[#162C21] ring-1 ring-white/10 px-6 py-2.5 text-xs font-bold text-white hover:bg-[#F59E0B] hover:text-black transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-4 sm:gap-5">
                    <div className="grid gap-4 sm:gap-5 sm:grid-cols-2">
                      {/* Your Name */}
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-[#C6D8CD] mb-2">
                          Your Name *
                        </label>
                        <div className="rounded-2xl p-1 ring-1 ring-white/10 bg-white/5 focus-within:ring-[#F59E0B]/50 focus-within:bg-[#F59E0B]/5 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]">
                          <input
                            type="text"
                            required
                            placeholder="Ex. John Doe"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="w-full rounded-[calc(1rem-0.25rem)] bg-[#1D372B] px-3.5 py-2.5 sm:px-4 sm:py-3 text-sm text-white placeholder-[#778F82] shadow-[inset_0_1px_1px_rgba(255,255,255,0.06)] focus:outline-none transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]"
                          />
                        </div>
                      </div>

                      {/* Email */}
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-[#C6D8CD] mb-2">
                          Email Address *
                        </label>
                        <div className="rounded-2xl p-1 ring-1 ring-white/10 bg-white/5 focus-within:ring-[#F59E0B]/50 focus-within:bg-[#F59E0B]/5 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]">
                          <input
                            type="email"
                            required
                            placeholder="example@gmail.com"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full rounded-[calc(1rem-0.25rem)] bg-[#1D372B] px-3.5 py-2.5 sm:px-4 sm:py-3 text-sm text-white placeholder-[#778F82] shadow-[inset_0_1px_1px_rgba(255,255,255,0.06)] focus:outline-none transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="grid gap-4 sm:gap-5 sm:grid-cols-2">
                      {/* Phone */}
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-[#C6D8CD] mb-2">
                          Phone Number *
                        </label>
                        <div className="rounded-2xl p-1 ring-1 ring-white/10 bg-white/5 focus-within:ring-[#F59E0B]/50 focus-within:bg-[#F59E0B]/5 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]">
                          <input
                            type="tel"
                            required
                            placeholder="+62 899-8164-856"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            className="w-full rounded-[calc(1rem-0.25rem)] bg-[#1D372B] px-3.5 py-2.5 sm:px-4 sm:py-3 text-sm text-white placeholder-[#778F82] shadow-[inset_0_1px_1px_rgba(255,255,255,0.06)] focus:outline-none transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]"
                          />
                        </div>
                      </div>

                      {/* Country / City */}
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-[#C6D8CD] mb-2">
                          City / Location *
                        </label>
                        <div className="rounded-2xl p-1 ring-1 ring-white/10 bg-white/5 focus-within:ring-[#F59E0B]/50 focus-within:bg-[#F59E0B]/5 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]">
                          <input
                            type="text"
                            required
                            placeholder="Riau, Indonesia"
                            value={formData.country}
                            onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                            className="w-full rounded-[calc(1rem-0.25rem)] bg-[#1D372B] px-3.5 py-2.5 sm:px-4 sm:py-3 text-sm text-white placeholder-[#778F82] shadow-[inset_0_1px_1px_rgba(255,255,255,0.06)] focus:outline-none transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]"
                          />
                        </div>
                      </div>
                    </div>

                    {/* I'm Interested In */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#C6D8CD] mb-2">
                        I&apos;m Interested in *
                      </label>
                      <div className="rounded-2xl p-1 ring-1 ring-white/10 bg-white/5 focus-within:ring-[#F59E0B]/50 focus-within:bg-[#F59E0B]/5 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]">
                        <select
                          value={formData.service}
                          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                          className="w-full rounded-[calc(1rem-0.25rem)] bg-[#1D372B] px-3.5 py-2.5 sm:px-4 sm:py-3 text-sm text-white shadow-[inset_0_1px_1px_rgba(255,255,255,0.06)] focus:outline-none transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]"
                        >
                          <option value="Hardware Troubleshooting">Hardware & OS Diagnostics</option>
                          <option value="Network Infrastructure">Network Infrastructure & Cabling</option>
                          <option value="CCTV & Digital Signage">CCTV & Digital Info Display</option>
                          <option value="User Helpdesk Support">User Helpdesk & Onboarding</option>
                          <option value="Full-time IT Support Role">Full-time / Contract IT Support Role</option>
                        </select>
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#C6D8CD] mb-2">
                        Your Message *
                      </label>
                      <div className="rounded-2xl p-1 ring-1 ring-white/10 bg-white/5 focus-within:ring-[#F59E0B]/50 focus-within:bg-[#F59E0B]/5 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]">
                        <textarea
                          rows={4}
                          required
                          placeholder="Tell me about your technical requirements or system challenges..."
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          className="w-full rounded-[calc(1rem-0.25rem)] bg-[#1D372B] px-3.5 py-2.5 sm:px-4 sm:py-3 text-sm text-white placeholder-[#778F82] shadow-[inset_0_1px_1px_rgba(255,255,255,0.06)] focus:outline-none transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] resize-none"
                        />
                      </div>
                    </div>

                    {/* Button-in-button Submit CTA with kinetic tension */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        className="group relative inline-flex items-center gap-3 rounded-full bg-[#162C21] pl-7 pr-2 py-2 text-sm font-bold text-white shadow-xl ring-1 ring-white/10 hover:ring-[#F59E0B]/40 hover:bg-[#1E3A2B] transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]"
                      >
                        <span>Submit Inquiry</span>
                        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#F59E0B] text-black shadow-sm transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-1 group-hover:-translate-y-[0.5px]">
                          <ArrowRight className="h-4 w-4" strokeWidth={1.25} />
                        </span>
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

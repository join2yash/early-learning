import React, { useState } from "react";
import { PhoneIcon, PinIcon } from "../Components/Icons.jsx";

export default function Contact() {
  const [form, setForm] = useState({
    parentName: "",
    phone: "",
    email: "",
    childAge: "",
    message: "",
  });

  function update(field, value) {
    setForm((current) => ({
      ...current,
      [field]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    const message = `
Hello Early Learning Point,

Name: ${form.parentName}
Phone: ${form.phone}
Child's age: ${form.childAge || "Not provided"}
Email: ${form.email || "Not provided"}

Message:
${form.message}
    `.trim();

    const whatsappNumber = "917838553575";

    const whatsappUrl =
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, "_blank");
  }

  return (
    <div className="max-w-6xl mx-auto px-6 pt-16 pb-24 grid md:grid-cols-2 gap-14">

      {/* Left Section */}
      <div>
        <p className="text-coral font-semibold mb-3">
          Get in touch
        </p>

        <h1 className="font-display text-4xl text-indigo mb-5">
          Let's talk about your child
        </h1>

        <p className="text-ink/70 leading-relaxed mb-10 max-w-md">
          Share a little about what's on your mind, and we'll get back
          to you to set up a first conversation. No pressure, just a
          starting point.
        </p>

        <ul className="space-y-4">

          {/* Phone */}
          <li className="flex items-center gap-3">
            <span className="w-11 h-11 rounded-full bg-sky flex items-center justify-center text-indigo">
              <PhoneIcon className="w-5 h-5" />
            </span>

            <div>
              <p className="text-sm text-ink/50">
                Call us
              </p>

              <a
                href="tel:+917838553575"
                className="font-semibold text-indigo"
              >
                78385 53575
              </a>
            </div>
          </li>

          {/* Location */}
          <li className="flex items-center gap-3">
            <span className="w-11 h-11 rounded-full bg-sky flex items-center justify-center text-indigo">
              <PinIcon className="w-5 h-5" />
            </span>

            <div>
              <p className="text-sm text-ink/50">
                Visit us
              </p>

              <p className="font-semibold text-indigo">
                Naveen Shahdara, Delhi
              </p>
            </div>
          </li>

        </ul>
      </div>

      {/* Contact Form */}
      <form
        onSubmit={handleSubmit}
        className="bg-sky rounded-2xl p-8 space-y-5"
      >

        {/* Name */}
        <div>
          <label
            className="block text-sm font-medium text-indigo mb-1.5"
            htmlFor="parentName"
          >
            Your name
          </label>

          <input
            id="parentName"
            type="text"
            required
            value={form.parentName}
            onChange={(e) => update("parentName", e.target.value)}
            className="w-full rounded-lg border border-sky-deep px-4 py-2.5 bg-white focus:outline-none focus:ring-2 focus:ring-indigo"
            placeholder="Enter your name"
          />
        </div>

        {/* Phone + Child Age */}
        <div className="grid sm:grid-cols-2 gap-5">

          {/* Phone */}
          <div>
            <label
              className="block text-sm font-medium text-indigo mb-1.5"
              htmlFor="phone"
            >
              Phone number
            </label>

            <input
              id="phone"
              type="tel"
              required
              value={form.phone}
              onChange={(e) => update("phone", e.target.value)}
              className="w-full rounded-lg border border-sky-deep px-4 py-2.5 bg-white focus:outline-none focus:ring-2 focus:ring-indigo"
              placeholder="Your phone number"
            />
          </div>

          {/* Child Age */}
          <div>
            <label
              className="block text-sm font-medium text-indigo mb-1.5"
              htmlFor="childAge"
            >
              Child's age{" "}
              <span className="text-ink/40 font-normal">
                (optional)
              </span>
            </label>

            <input
              id="childAge"
              type="text"
              value={form.childAge}
              onChange={(e) => update("childAge", e.target.value)}
              className="w-full rounded-lg border border-sky-deep px-4 py-2.5 bg-white focus:outline-none focus:ring-2 focus:ring-indigo"
              placeholder="e.g. 4 years"
            />
          </div>

        </div>

        {/* Email */}
        <div>
          <label
            className="block text-sm font-medium text-indigo mb-1.5"
            htmlFor="email"
          >
            Email{" "}
            <span className="text-ink/40 font-normal">
              (optional)
            </span>
          </label>

          <input
            id="email"
            type="email"
            value={form.email}
            onChange={(e) => update("email", e.target.value)}
            className="w-full rounded-lg border border-sky-deep px-4 py-2.5 bg-white focus:outline-none focus:ring-2 focus:ring-indigo"
            placeholder="you@example.com"
          />
        </div>

        {/* Message */}
        <div>
          <label
            className="block text-sm font-medium text-indigo mb-1.5"
            htmlFor="message"
          >
            What would you like to share?
          </label>

          <textarea
            id="message"
            required
            rows={5}
            value={form.message}
            onChange={(e) => update("message", e.target.value)}
            className="w-full rounded-lg border border-sky-deep px-4 py-2.5 bg-white focus:outline-none focus:ring-2 focus:ring-indigo resize-none"
            placeholder="Tell us how we can help..."
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-gold hover:bg-gold-dark text-indigo font-semibold px-6 py-3 rounded-full transition-colors"
        >
          Send message on WhatsApp
        </button>

        {/* Helper Text */}
        <p className="text-ink/50 text-xs text-center">
          WhatsApp will open with your message ready to send.
        </p>

      </form>
    </div>
  );
}

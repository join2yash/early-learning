import { useState } from "react";
import { PhoneIcon, PinIcon } from "../components/icons.jsx";

// Contact form submissions with no backend/database:
// 1. Sign up free at https://formspree.io, create a form, and copy its ID.
// 2. Put that ID in frontend/.env as VITE_FORMSPREE_ID=your_id_here.
// Until that's set, the form falls back to opening the visitor's email app instead.
const FORMSPREE_ID = import.meta.env.VITE_FORMSPREE_ID;
const FORM_ENDPOINT = FORMSPREE_ID ? `https://formspree.io/f/${FORMSPREE_ID}` : null;

export default function Contact() {
  const [form, setForm] = useState({
    parentName: "",
    phone: "",
    email: "",
    childAge: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  function update(field, value) {
    setForm((f) => ({ ...f, [field]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (!FORM_ENDPOINT) {
      // No Formspree ID configured yet — open a pre-filled email instead.
      const body = encodeURIComponent(
        `Name: ${form.parentName}\nPhone: ${form.phone}\nChild's age: ${form.childAge}\n\n${form.message}`
      );
      window.location.href = `mailto:?subject=New enquiry from the website&body=${body}`;
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json", "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("sent");
      setForm({ parentName: "", phone: "", email: "", childAge: "", message: "" });
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="max-w-6xl mx-auto px-6 pt-16 pb-24 grid md:grid-cols-2 gap-14">
      <div>
        <p className="text-coral font-semibold mb-3">Get in touch</p>
        <h1 className="font-display text-4xl text-indigo mb-5">
          Let's talk about your child
        </h1>
        <p className="text-ink/70 leading-relaxed mb-10 max-w-md">
          Share a little about what's on your mind, and we'll get back to you to set
          up a first conversation. No pressure, just a starting point.
        </p>

        <ul className="space-y-4">
          <li className="flex items-center gap-3">
            <span className="w-11 h-11 rounded-full bg-sky flex items-center justify-center text-indigo">
              <PhoneIcon className="w-5 h-5" />
            </span>
            <div>
              <p className="text-sm text-ink/50">Call us</p>
              <a href="tel:+917838553575" className="font-semibold text-indigo">78385 53575</a>
            </div>
          </li>
          <li className="flex items-center gap-3">
            <span className="w-11 h-11 rounded-full bg-sky flex items-center justify-center text-indigo">
              <PinIcon className="w-5 h-5" />
            </span>
            <div>
              <p className="text-sm text-ink/50">Visit us</p>
              <p className="font-semibold text-indigo">Naveen Shahdara, Delhi</p>
            </div>
          </li>
        </ul>
      </div>

      <form onSubmit={handleSubmit} className="bg-sky rounded-2xl p-8 space-y-5">
        <div>
          <label className="block text-sm font-medium text-indigo mb-1.5" htmlFor="parentName">
            Your name
          </label>
          <input
            id="parentName"
            required
            value={form.parentName}
            onChange={(e) => update("parentName", e.target.value)}
            className="w-full rounded-lg border border-sky-deep px-4 py-2.5 bg-white focus:outline-none focus:ring-2 focus:ring-indigo"
          />
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-sm font-medium text-indigo mb-1.5" htmlFor="phone">
              Phone number
            </label>
            <input
              id="phone"
              required
              type="tel"
              value={form.phone}
              onChange={(e) => update("phone", e.target.value)}
              className="w-full rounded-lg border border-sky-deep px-4 py-2.5 bg-white focus:outline-none focus:ring-2 focus:ring-indigo"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-indigo mb-1.5" htmlFor="childAge">
              Child's age (optional)
            </label>
            <input
              id="childAge"
              value={form.childAge}
              onChange={(e) => update("childAge", e.target.value)}
              className="w-full rounded-lg border border-sky-deep px-4 py-2.5 bg-white focus:outline-none focus:ring-2 focus:ring-indigo"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-indigo mb-1.5" htmlFor="email">
            Email (optional)
          </label>
          <input
            id="email"
            type="email"
            value={form.email}
            onChange={(e) => update("email", e.target.value)}
            className="w-full rounded-lg border border-sky-deep px-4 py-2.5 bg-white focus:outline-none focus:ring-2 focus:ring-indigo"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-indigo mb-1.5" htmlFor="message">
            What would you like to share?
          </label>
          <textarea
            id="message"
            required
            rows={4}
            value={form.message}
            onChange={(e) => update("message", e.target.value)}
            className="w-full rounded-lg border border-sky-deep px-4 py-2.5 bg-white focus:outline-none focus:ring-2 focus:ring-indigo"
          />
        </div>

        <button
          type="submit"
          disabled={status === "sending"}
          className="w-full bg-gold hover:bg-gold-dark disabled:opacity-60 text-indigo font-semibold px-6 py-3 rounded-full transition-colors"
        >
          {status === "sending" ? "Sending…" : "Send message"}
        </button>

        {status === "sent" && (
          <p className="text-indigo font-medium text-sm">
            Thank you — we've received your message and will be in touch soon.
          </p>
        )}
        {status === "error" && (
          <p className="text-coral font-medium text-sm">
            Couldn't send that. Please call us directly at 78385 53575.
          </p>
        )}
        {!FORM_ENDPOINT && (
          <p className="text-ink/50 text-xs">
            Note: form delivery isn't configured yet — this will open an email draft instead.
            See the README to connect it to Formspree for free.
          </p>
        )}
      </form>
    </div>
  );
}

import { Section } from "@/components/Section";
import { profile } from "@/data/portfolio";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";
import { useState, FormEvent } from "react";
import { Send } from "lucide-react";
import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast({ title: "Missing info", description: "Name, email and message are required.", variant: "destructive" });
      return;
    }
    const subject = encodeURIComponent(form.subject || `New project enquiry from ${form.name}`);
    const body = encodeURIComponent(
      `Hi Zubair,\n\n${form.message}\n\n— ${form.name}\n${form.email}`
    );
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    toast({ title: "Opening your email app", description: "Your message has been pre-filled — just hit send." });
  };

  return (
    <Section
      eyebrow="Contact"
      title={<>Let's build something <span className="gradient-text">people love</span>.</>}
      description="Tell me about your project — I usually reply within 24 hours."
    >
      <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr]">
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          onSubmit={onSubmit}
          className="rounded-3xl border border-border bg-card p-6 shadow-soft sm:p-8"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Your name" value={form.name} onChange={(v) => setForm({ ...form, name: v })} placeholder="Jane Doe" />
            <Field label="Email" type="email" value={form.email} onChange={(v) => setForm({ ...form, email: v })} placeholder="jane@company.com" />
          </div>
          <div className="mt-4">
            <Field label="Subject" value={form.subject} onChange={(v) => setForm({ ...form, subject: v })} placeholder="MERN web app for my startup" />
          </div>
          <div className="mt-4">
            <label className="mb-1.5 block text-xs font-medium uppercase tracking-wide text-muted-foreground">
              Message
            </label>
            <textarea
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              rows={6}
              placeholder="Tell me about your project, timeline and budget..."
              className="w-full resize-none rounded-2xl border border-border bg-background px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-foreground"
            />
          </div>
          <button
            type="submit"
            className="group mt-6 inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-transform hover:scale-[1.03]"
          >
            Send message <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </button>
          <p className="mt-3 text-xs text-muted-foreground">
            This will open your email client with your message pre-filled.
          </p>
        </motion.form>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="space-y-4"
        >
          <a
            href={`mailto:${profile.email}`}
            className="flex items-start gap-4 rounded-3xl border border-border bg-card p-6 shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-elegant"
          >
            <span className="grid h-12 w-12 flex-none place-items-center rounded-2xl bg-secondary">
              <FaEnvelope className="h-5 w-5" />
            </span>
            <div>
              <p className="text-xs uppercase tracking-wide text-muted-foreground">Email</p>
              <p className="mt-1 font-display text-lg font-semibold">{profile.email}</p>
            </div>
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="flex items-start gap-4 rounded-3xl border border-border bg-card p-6 shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-elegant"
          >
            <span className="grid h-12 w-12 flex-none place-items-center rounded-2xl bg-secondary">
              <FaLinkedin className="h-5 w-5" />
            </span>
            <div>
              <p className="text-xs uppercase tracking-wide text-muted-foreground">LinkedIn</p>
              <p className="mt-1 font-display text-lg font-semibold">Muhammad Zubair Shehzad</p>
            </div>
          </a>
          <div className="rounded-3xl border border-border bg-gradient-soft p-6 shadow-soft">
            <p className="text-xs uppercase tracking-wide text-muted-foreground">Based in</p>
            <p className="mt-1 font-display text-lg font-semibold">{profile.location}</p>
            <p className="mt-2 text-sm text-muted-foreground">Working with clients globally — Fiverr & direct.</p>
          </div>
        </motion.div>
      </div>
    </Section>
  );
};

const Field = ({
  label, value, onChange, placeholder, type = "text",
}: { label: string; value: string; onChange: (v: string) => void; placeholder?: string; type?: string }) => (
  <div>
    <label className="mb-1.5 block text-xs font-medium uppercase tracking-wide text-muted-foreground">{label}</label>
    <input
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-foreground"
    />
  </div>
);

export default Contact;

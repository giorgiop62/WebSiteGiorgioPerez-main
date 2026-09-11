import { useState } from "react";
import { useReveal } from "@/hooks/useReveal";
import { useToast } from "@/hooks/use-toast";
import { Send } from "lucide-react";
import { useI18n } from "@/lib/i18n";

export const Contact = () => {
  const ref = useReveal<HTMLDivElement>();
  const { toast } = useToast();
  const { t } = useI18n();
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
  });
  const [sending, setSending] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !form.name.trim() ||
      !form.email.trim() ||
      !form.company.trim() ||
      !form.subject.trim() ||
      !form.message.trim()
    ) {
      toast({ title: t.contact.missingFields, variant: "destructive" });
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      toast({ title: t.contact.invalidEmail, variant: "destructive" });
      return;
    }

    setSending(true);

    const text = t.contact.whatsAppMessage(form);
    const encodedText = encodeURIComponent(text);
    const phone = "393926137642";
    const url = `https://wa.me/${phone}?text=${encodedText}`;

    window.open(url, "_blank");

    toast({ title: t.contact.redirecting });
    setForm({ name: "", email: "", company: "", subject: "", message: "" });
    setSending(false);
  };

  return (
    <section id="contact" className="py-32 md:py-48 bg-secondary/30">
      <div
        ref={ref}
        className="reveal container mx-auto grid md:grid-cols-2 gap-16 md:gap-24"
      >
        <div>
          <p className="section-label mb-6">
            <span className="hairline mr-4 align-middle" /> {t.contact.label}
          </p>
          <h2 className="font-display text-4xl md:text-6xl leading-[1.05] text-balance">
            {t.contact.titleStart} <br />
            <span className="italic text-vesuvio">{t.contact.titleHighlight}</span>.
          </h2>
          <p className="mt-8 text-muted-foreground max-w-md">
            {t.contact.intro}
          </p>
          <div className="mt-12 space-y-3 text-sm">
            <p className="text-muted-foreground">{t.contact.email}</p>
            <a
              href="mailto:giorgiop62@gmail.com"
              className="font-display text-2xl hover:text-vesuvio transition-colors block"
            >
              giorgiop62@gmail.com
            </a>
            <p className="text-muted-foreground pt-4">{t.contact.phone}</p>
            <a
              href="tel:+393926137642"
              className="font-display text-2xl hover:text-vesuvio transition-colors block"
            >
              +39 392 613 7642
            </a>
            <p className="text-muted-foreground pt-4 text-xs uppercase tracking-[0.25em]">
              {t.contact.location}
            </p>
          </div>
        </div>

        <form onSubmit={onSubmit} className="space-y-8">
          <Field
            label={t.contact.fields.name}
            value={form.name}
            onChange={(v) => setForm({ ...form, name: v })}
          />
          <Field
            label={t.contact.fields.email}
            type="email"
            value={form.email}
            onChange={(v) => setForm({ ...form, email: v })}
          />
          <Field
            label={t.contact.fields.company}
            value={form.company}
            onChange={(v) => setForm({ ...form, company: v })}
          />
          <Field
            label={t.contact.fields.subject}
            value={form.subject}
            onChange={(v) => setForm({ ...form, subject: v })}
          />
          <Field
            label={t.contact.fields.message}
            textarea
            value={form.message}
            onChange={(v) => setForm({ ...form, message: v })}
          />

          <button
            type="submit"
            disabled={sending}
            className="group inline-flex items-center gap-3 bg-vesuvio text-primary-foreground px-8 py-4 text-sm tracking-wider uppercase hover:bg-vesuvio/90 transition-all duration-500 disabled:opacity-60"
          >
            {sending ? t.contact.sending : t.contact.submit}
            <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </form>
      </div>
    </section>
  );
};

const Field = ({
  label,
  value,
  onChange,
  type = "text",
  textarea = false,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  textarea?: boolean;
}) => (
  <label className="block group">
    <span className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
      {label}
    </span>
    {textarea ? (
      <textarea
        rows={4}
        value={value}
        maxLength={1000}
        onChange={(e) => onChange(e.target.value)}
        className="mt-3 w-full bg-transparent border-b border-border focus:border-vesuvio outline-none py-3 resize-none transition-colors text-foreground"
      />
    ) : (
      <input
        type={type}
        value={value}
        maxLength={type === "email" ? 255 : 100}
        onChange={(e) => onChange(e.target.value)}
        className="mt-3 w-full bg-transparent border-b border-border focus:border-vesuvio outline-none py-3 transition-colors text-foreground"
      />
    )}
  </label>
);

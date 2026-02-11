import { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="pt-24">
      <section className="py-24 px-6 md:px-12">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <p className="text-[10px] tracking-ultra-wide font-mono text-muted-foreground uppercase mb-6">
              Inquiries
            </p>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h1 className="text-4xl md:text-6xl font-serif font-medium mb-8">
              Contact
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <div className="w-12 h-px bg-accent" />
          </ScrollReveal>
        </div>
      </section>

      <section className="py-16 px-6 md:px-12 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <ScrollReveal>
                <p className="text-[10px] tracking-fashion font-mono text-muted-foreground uppercase mb-6">
                  Details
                </p>
              </ScrollReveal>
              <ScrollReveal delay={100}>
                <p className="text-sm font-light text-muted-foreground mb-2">
                  contact@sayanifashion.com
                </p>
              </ScrollReveal>
              <ScrollReveal delay={150}>
                <p className="text-sm font-light text-muted-foreground">
                  India
                </p>
              </ScrollReveal>
            </div>

            <div>
              {submitted ? (
                <ScrollReveal>
                  <p className="text-sm font-light text-muted-foreground">
                    Message received. We'll respond with precision.
                  </p>
                </ScrollReveal>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  <ScrollReveal>
                    <input
                      type="text"
                      placeholder="Name"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      required
                      className="w-full bg-transparent border-b border-border text-sm font-light py-3 px-0 placeholder:text-muted-foreground/50 focus:outline-none focus:border-accent transition-colors duration-500"
                    />
                  </ScrollReveal>
                  <ScrollReveal delay={80}>
                    <input
                      type="email"
                      placeholder="Email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      required
                      className="w-full bg-transparent border-b border-border text-sm font-light py-3 px-0 placeholder:text-muted-foreground/50 focus:outline-none focus:border-accent transition-colors duration-500"
                    />
                  </ScrollReveal>
                  <ScrollReveal delay={160}>
                    <textarea
                      placeholder="Message"
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      required
                      rows={4}
                      className="w-full bg-transparent border-b border-border text-sm font-light py-3 px-0 placeholder:text-muted-foreground/50 focus:outline-none focus:border-accent transition-colors duration-500 resize-none"
                    />
                  </ScrollReveal>
                  <ScrollReveal delay={240}>
                    <button
                      type="submit"
                      className="self-start text-[10px] tracking-fashion font-mono uppercase py-3 px-6 border border-foreground text-foreground hover:bg-foreground hover:text-background transition-all duration-500"
                    >
                      Send
                    </button>
                  </ScrollReveal>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;

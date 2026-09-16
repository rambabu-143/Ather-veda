import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { StubForm } from "@/components/StubForm";

export const metadata: Metadata = {
  title: "Contact | The AetherVeda Foundation",
  description: "Get in touch with The AetherVeda Foundation.",
};

const inputClass =
  "w-full rounded-md border border-line-soft bg-paper px-4 py-3 text-sm outline-none focus-visible:border-ember";

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Reach the foundation"
        breadcrumb={[{ href: "/", label: "Home" }, { href: "/contact", label: "Contact" }]}
      />
      <section className="mx-auto max-w-5xl px-5 py-20">
        <div className="grid gap-12 md:grid-cols-2">
          <Reveal className="flex flex-col gap-6">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-ember">Address</span>
              <p className="mt-2 text-sm leading-relaxed text-muted-on-paper">[ Registered office / shelter address ]</p>
            </div>
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-ember">Phone</span>
              <p className="mt-2 text-sm text-muted-on-paper">[ Phone number ]</p>
            </div>
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-ember">Email</span>
              <p className="mt-2 text-sm text-muted-on-paper">[ Email address ]</p>
            </div>
            <div className="aspect-video rounded-lg border border-line-soft bg-[repeating-linear-gradient(135deg,var(--color-line-soft)_0_1px,transparent_1px_10px)]" />
          </Reveal>

          <Reveal delay={0.1}>
            <StubForm submitLabel="Send message">
              <div className="grid gap-4 sm:grid-cols-2">
                <input id="contact-name" required placeholder="Full name" className={inputClass} />
                <input id="contact-email" type="email" required placeholder="Email" className={inputClass} />
              </div>
              <input id="contact-subject" required placeholder="Subject" className={inputClass} />
              <textarea id="contact-message" required rows={5} placeholder="Message" className={inputClass} />
            </StubForm>
          </Reveal>
        </div>
      </section>
    </>
  );
}

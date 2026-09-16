import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/Button";
import { StubForm } from "@/components/StubForm";

export const metadata: Metadata = {
  title: "Get Involved | The AetherVeda Foundation",
  description: "Volunteer or partner with The AetherVeda Foundation.",
};

const inputClass =
  "w-full rounded-md border border-line-soft bg-paper px-4 py-3 text-sm outline-none focus-visible:border-ember";

export default function GetInvolvedPage() {
  return (
    <>
      <PageHero
        eyebrow="Get Involved"
        title="Time, skills, or a partnership"
        lede="Donations aren't the only way to help. Shelters, camps, and restoration drives all run on people showing up."
        breadcrumb={[{ href: "/", label: "Home" }, { href: "/get-involved", label: "Get Involved" }]}
      >
        <Button href="/donate">Prefer to donate instead →</Button>
      </PageHero>

      <section id="volunteer" className="mx-auto max-w-3xl scroll-mt-24 px-5 py-20">
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-ember">
            Volunteer
          </span>
          <h2 className="mt-2 font-display text-3xl font-bold text-ink-on-paper">
            Show up where it's needed
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-on-paper">
            Shelter care shifts, medical camp support, and restoration-site labour are ongoing needs.
            No long-term commitment is required, though regulars are always welcome.
          </p>
          <div className="mt-8">
            <StubForm submitLabel="Send interest" successMessage="Thanks! A coordinator will reach out within a few days.">
              <div className="grid gap-4 sm:grid-cols-2">
                <input id="vol-name" required placeholder="Full name" className={inputClass} />
                <input id="vol-phone" required placeholder="Phone number" className={inputClass} />
              </div>
              <input id="vol-email" type="email" required placeholder="Email" className={inputClass} />
              <select id="vol-area" defaultValue="" className={inputClass}>
                <option value="" disabled>
                  Where would you like to help?
                </option>
                <option>Animal shelter care</option>
                <option>Medical camps</option>
                <option>Heritage restoration</option>
                <option>Events &amp; fundraising</option>
              </select>
              <textarea
                id="vol-message"
                rows={3}
                placeholder="Anything else we should know?"
                className={inputClass}
              />
            </StubForm>
          </div>
        </Reveal>
      </section>

      <section id="partner" className="scroll-mt-24 border-t border-line-soft bg-paper-2">
        <div className="mx-auto max-w-3xl px-5 py-20">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-ember">
              Partner / CSR
            </span>
            <h2 className="mt-2 font-display text-3xl font-bold text-ink-on-paper">
              Fund a shelter, a camp, or a restoration
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-on-paper">
              Corporate CSR budgets under Schedule VII can sponsor a project outright: a fully-funded
              gaushala, a season of medical camps, or a temple restoration, with impact reporting
              built in.
            </p>
            <div className="mt-8">
              <StubForm submitLabel="Start a conversation" successMessage="Thanks! Our partnerships team will follow up shortly.">
                <div className="grid gap-4 sm:grid-cols-2">
                  <input id="csr-org" required placeholder="Organisation name" className={inputClass} />
                  <input id="csr-contact" required placeholder="Contact person" className={inputClass} />
                </div>
                <input id="csr-email" type="email" required placeholder="Work email" className={inputClass} />
                <textarea
                  id="csr-interest"
                  rows={3}
                  placeholder="What are you looking to support?"
                  className={inputClass}
                />
              </StubForm>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

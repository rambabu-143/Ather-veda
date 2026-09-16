import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { DonatePanel } from "@/components/DonatePanel";
import { FaqAccordion } from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "Donate | The AetherVeda Foundation",
  description: "Support animal welfare, poverty relief, heritage restoration, and sustainability.",
};

const faqs = [
  {
    q: "Is my donation tax-exempt?",
    a: "Yes. The AetherVeda Foundation is registered under Section 80G, so Indian donors can claim a tax deduction. A receipt with our 80G registration number is emailed automatically after payment.",
  },
  {
    q: "When will I get my receipt?",
    a: "Immediately after a successful payment, and again as a consolidated statement at the end of the financial year for recurring donors.",
  },
  {
    q: "Can I cancel a monthly donation?",
    a: "Yes, any time. A cancel link is included in every monthly receipt email, and it takes effect from the next billing cycle.",
  },
  {
    q: "Can I choose exactly which program my gift supports?",
    a: "Yes, use the allocation dropdown above. Unallocated gifts go wherever the need is most urgent that month.",
  },
];

export default async function DonatePage(props: PageProps<"/donate">) {
  const sp = await props.searchParams;
  const program = typeof sp.program === "string" ? sp.program : undefined;

  return (
    <>
      <PageHero
        eyebrow="Get Involved"
        title="Support our work"
        lede="Every rupee is tracked back to a program below. See exactly where it goes on the Impact page."
        breadcrumb={[{ href: "/", label: "Home" }, { href: "/donate", label: "Donate" }]}
      >
        <div className="flex flex-wrap justify-center gap-2 text-xs">
          <span className="rounded-full border border-brass/50 px-3 py-1 text-brass">80G registered</span>
          <span className="rounded-full border border-brass/50 px-3 py-1 text-brass">Reg. No. [ ]</span>
          <span className="rounded-full border border-brass/50 px-3 py-1 text-brass">Est. [ ]</span>
        </div>
      </PageHero>

      <section className="mx-auto max-w-5xl px-5 py-20">
        <div className="grid gap-10 md:grid-cols-[1fr_360px]">
          <div className="flex flex-col gap-12 md:order-2">
            <Reveal>
              <DonatePanel initialProgram={program} />
            </Reveal>
          </div>

          <div className="flex flex-col gap-10 md:order-1">
            <Reveal>
              <h2 className="font-display text-xl font-bold text-ink-on-paper">Other ways to give</h2>
              <div className="mt-4 space-y-4 text-sm text-muted-on-paper">
                <div>
                  <p className="font-medium text-ink-on-paper">Bank transfer / NEFT</p>
                  <p>A/c name: [ ], A/c No: [ ], IFSC: [ ]</p>
                </div>
                <div>
                  <p className="font-medium text-ink-on-paper">Cheque</p>
                  <p>Payable to &quot;The AetherVeda Foundation&quot;, mailed to [ registered office ].</p>
                </div>
                <div>
                  <p className="font-medium text-ink-on-paper">In-kind donations</p>
                  <p>Fodder, medical supplies, and building material. Contact us to coordinate delivery.</p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <h2 className="font-display text-xl font-bold text-ink-on-paper">CSR &amp; partnerships</h2>
              <p className="mt-3 text-sm text-muted-on-paper">
                Corporate CSR funds can sponsor an entire shelter, medical camp series, or restoration
                project under Schedule VII.{" "}
                <a href="/get-involved#partner" className="text-ember underline underline-offset-2">
                  See partnership options →
                </a>
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="border-t border-line-soft bg-paper-2">
        <div className="mx-auto max-w-2xl px-5 py-20">
          <Reveal className="mb-8">
            <h2 className="text-center font-display text-2xl font-bold text-ink-on-paper">
              Frequently asked
            </h2>
          </Reveal>
          <Reveal delay={0.05}>
            <FaqAccordion items={faqs} />
          </Reveal>
        </div>
      </section>
    </>
  );
}

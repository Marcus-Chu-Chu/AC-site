import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import { profile } from "@/lib/content";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Campaign, brand, and research work from Ashley Chiang — case studies in production.",
};

/**
 * Placeholder shell for future case studies. Each card names a real body of
 * work from the journey, so the page is a promise with specifics rather than
 * an empty "coming soon".
 */
const PLANNED = [
  {
    ink: "magenta",
    num: "01",
    title: "Influencer campaign, BrightWorks",
    note: "Creator partnerships that lifted engagement 5% and reached 3,000+ accounts.",
  },
  {
    ink: "violet",
    num: "02",
    title: "Skincare brand launch",
    note: "Go-to-market strategy, positioning, and retail execution — co-led end to end.",
  },
  {
    ink: "cyan",
    num: "03",
    title: "Competitor benchmarking, Shummi",
    note: "The research that guided entry into a new market segment.",
  },
  {
    ink: "citrus",
    num: "04",
    title: "Knottybear Crochet",
    note: "Founding a handmade-goods business: pricing, budgets, and $1,000+ net profit.",
  },
  {
    ink: "magenta",
    num: "05",
    title: "Amazon listing optimization",
    note: "Keyword research and customer-feedback insights that raised product visibility.",
  },
  {
    ink: "violet",
    num: "06",
    title: "CRM rebuild, IMS",
    note: "Streamlined contact records and asset systems that marketing actually uses.",
  },
] as const;

export default function PortfolioPage() {
  return (
    <>
      <Nav />
      <main id="main">
        <section className="pf-hero">
          <div className="shell">
            <Link className="pf-back" href="/">
              <span aria-hidden="true">←</span> Back to home
            </Link>

            <p className="pf-status">
              <span className="hero-meta-dot" aria-hidden="true" />
              In production
            </p>

            <h1 className="pf-title">Case studies, currently being written.</h1>

            <p className="lede">
              These are the projects going into the portfolio. Until the full write-ups are
              ready, I&rsquo;m happy to walk through any of them directly.
            </p>

            <div className="hero-actions">
              <a
                className="btn btn-primary"
                href={`mailto:${profile.email}?subject=Walk%20me%20through%20your%20work`}
              >
                Ask about any project
                <span className="btn-arrow" aria-hidden="true">
                  →
                </span>
              </a>
              <a
                className="btn btn-ghost"
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer noopener"
              >
                View LinkedIn
              </a>
            </div>

            <div className="pf-grid">
              {PLANNED.map((item) => (
                <article key={item.num} className={`pf-card ink-${item.ink}`}>
                  <p className="pf-card-num">{item.num}</p>
                  <h2 className="pf-card-title">{item.title}</h2>
                  <p className="pf-card-note">{item.note}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

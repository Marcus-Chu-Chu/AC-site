import Link from "next/link";
import { profile } from "@/lib/content";

const PLATES = [
  { ink: "magenta", label: "Campaign", title: "Influencer program, BrightWorks" },
  { ink: "violet", label: "Brand", title: "Skincare brand launch" },
  { ink: "cyan", label: "Insights", title: "Competitor benchmarking, Shummi" },
  { ink: "citrus", label: "Founder", title: "Knottybear Crochet" },
] as const;

export default function PortfolioTeaser() {
  return (
    <section className="section" id="portfolio">
      <div className="shell">
        <div className="teaser reveal">
          <div className="teaser-grid">
            <div>
              <p className="teaser-eyebrow">Portfolio</p>
              <h2 className="teaser-title">Selected work, in production.</h2>
              <p className="teaser-copy">
                A curated set of campaigns, brand work, and data-driven projects is on the way.
                Want an early look before it ships? Ask me and I&rsquo;ll walk you through it.
              </p>
              <div className="teaser-actions">
                <Link className="btn btn-on-dark" href="/portfolio">
                  Preview the portfolio
                  <span className="btn-arrow" aria-hidden="true">
                    →
                  </span>
                </Link>
                <a
                  className="btn btn-outline-dark"
                  href={`mailto:${profile.email}?subject=Early%20look%20at%20your%20portfolio`}
                >
                  Request early access
                </a>
              </div>
            </div>

            <ul className="teaser-plates">
              {PLATES.map((plate) => (
                <li key={plate.label} className={`plate ink-${plate.ink}`}>
                  <span className="plate-dot" aria-hidden="true" />
                  <span className="plate-label">{plate.label}</span>
                  <span className="plate-title">{plate.title}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

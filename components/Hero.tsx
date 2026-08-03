import { inkBar, profile } from "@/lib/content";

/** Registration crosshair — the alignment mark printed on every press sheet. */
function RegMark() {
  return (
    <svg className="inkbar-reg" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <circle cx="8" cy="8" r="4.4" stroke="currentColor" strokeWidth="1" />
      <path d="M8 0v4.2M8 11.8V16M0 8h4.2M11.8 8H16" stroke="currentColor" strokeWidth="1" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section className="hero">
      <div className="shell hero-inner">
        <p className="hero-meta reveal">
          <span className="hero-meta-dot" aria-hidden="true" />
          {profile.role}
          <span aria-hidden="true">·</span>
          {profile.location}
          <span aria-hidden="true">·</span>
          UIUC Gies
        </p>

        <h1 className="hero-title reveal" style={{ "--reveal-delay": "90ms" } as React.CSSProperties}>
          <span className="hero-line">
            <span>{profile.thesis[0]}</span>
          </span>
          <span className="hero-line">
            <span className="hero-word-creativity">{profile.thesis[1]}</span>
          </span>
          <span className="hero-line">
            <span>
              meets data<span className="hero-period">.</span>
            </span>
          </span>
        </h1>

        <div className="hero-lower reveal" style={{ "--reveal-delay": "180ms" } as React.CSSProperties}>
          <div>
            <p className="hero-intro">{profile.intro}</p>
            <div className="hero-actions">
              <a className="btn btn-primary" href={`mailto:${profile.email}`}>
                Get in touch
                <span className="btn-arrow" aria-hidden="true">
                  →
                </span>
              </a>
              <a className="btn btn-ghost" href="#journey">
                See the journey
              </a>
            </div>
          </div>
        </div>

        {/* The signature: a press control bar where every patch is a result. */}
        <div className="inkbar reveal" style={{ "--reveal-delay": "260ms" } as React.CSSProperties}>
          <div className="inkbar-rail">
            <RegMark />
            <span>Results, measured</span>
            <span className="inkbar-rail-line" aria-hidden="true" />
            <RegMark />
          </div>

          <div className="inkbar-grid">
            {inkBar.map((patch) => (
              <article key={patch.label} className={`inkpatch ink-${patch.ink}`}>
                <div className="inkpatch-swatch" aria-hidden="true" />
                <div className="inkpatch-body">
                  <p className="inkpatch-value">{patch.value}</p>
                  <p className="inkpatch-label">{patch.label}</p>
                  <p className="inkpatch-source">{patch.source}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import { roles } from "@/lib/content";

/**
 * The timeline spine is the ink bar stood on end: every role carries its own
 * patch, so the palette itself encodes the chronology.
 */
export default function Journey() {
  return (
    <section className="section section-sunk" id="journey">
      <div className="shell">
        <div className="section-head reveal">
          <p className="eyebrow ink-violet">Career journey</p>
          {/* Non-breaking hyphen (U+2011) keeps "e-commerce" whole on narrow screens. */}
          <h2 className="h-section">
            Six roles across brand, retail, e{"‑"}commerce, and research.
          </h2>
          <p className="lede">
            Founder-built range, applied — from optimizing Amazon listings to running my own
            product business end to end.
          </p>
        </div>

        <ol className="journey-list">
          {roles.map((role, i) => (
            <li
              key={`${role.company}-${role.title}-${role.start}`}
              className={`role ink-${role.ink} reveal`}
              style={{ "--reveal-delay": `${Math.min(i, 4) * 70}ms` } as React.CSSProperties}
            >
              <div className="role-when">
                <p className="role-dates">
                  {role.start} — {role.end}
                </p>
                <p className="role-duration">{role.duration}</p>
                <p className="role-location">{role.location}</p>
              </div>

              <div className="role-spine" aria-hidden="true">
                <span className="role-patch" />
              </div>

              <div className="role-body">
                <div className="role-heading">
                  <h3 className="role-title">{role.title}</h3>
                  <span className="role-tag">{role.current ? "Current" : role.kind}</span>
                </div>
                <p className="role-company">{role.company}</p>

                {role.summary && <p className="role-summary">{role.summary}</p>}

                {role.bullets.length > 0 && (
                  <ul className="role-bullets">
                    {role.bullets.map((bullet) => (
                      <li key={bullet.slice(0, 40)}>{bullet}</li>
                    ))}
                  </ul>
                )}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

import { certifications, languages, pillars } from "@/lib/content";

export default function Expertise() {
  return (
    <section className="section" id="expertise">
      <div className="shell">
        <div className="section-head reveal">
          <p className="eyebrow ink-cyan">What I bring</p>
          <h2 className="h-section">Creative, analytical, and digital — in one toolkit.</h2>
        </div>

        <div className="pillars">
          {pillars.map((pillar, i) => (
            <article
              key={pillar.name}
              className={`pillar ink-${pillar.ink} reveal`}
              style={{ "--reveal-delay": `${i * 90}ms` } as React.CSSProperties}
            >
              <h3 className="pillar-name">{pillar.name}</h3>
              <p className="pillar-note">{pillar.note}</p>
              <ul className="pillar-items">
                {pillar.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="credentials reveal">
          <div>
            <h3 className="cred-title">Certifications</h3>
            <ul className="cred-list">
              {certifications.map((cert) => (
                <li key={cert}>{cert}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="cred-title">Languages</h3>
            <ul className="lang-list">
              {languages.map((lang) => (
                <li key={lang.name} className="lang-row">
                  <span className="lang-name">{lang.name}</span>
                  <span className="lang-level">{lang.level}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

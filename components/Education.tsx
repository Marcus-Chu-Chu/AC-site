import { education } from "@/lib/content";

export default function Education() {
  return (
    <section className="section section-sunk" id="education">
      <div className="shell">
        <div className="section-head reveal">
          <p className="eyebrow ink-citrus">Education</p>
          <h2 className="h-section">Grounded at Gies.</h2>
          <p className="lede">
            A double major in Marketing and Information Systems — the creative and the technical,
            from the start.
          </p>
        </div>

        <ul className="edu-list">
          {education.map((item, i) => (
            <li
              key={item.school}
              className={`edu-row ink-${item.ink} reveal`}
              style={{ "--reveal-delay": `${i * 90}ms` } as React.CSSProperties}
            >
              <span className="edu-badge" aria-hidden="true">
                {item.badge}
              </span>
              <div>
                <h3 className="edu-school">{item.school}</h3>
                <p className="edu-detail">{item.detail}</p>
                {item.tag && <span className="chip edu-tag">{item.tag}</span>}
              </div>
              <p className="edu-dates">{item.dates}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

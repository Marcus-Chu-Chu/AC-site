import { about, profile } from "@/lib/content";

export default function About() {
  return (
    <section className="section" id="about">
      <div className="shell">
        <div className="about-grid">
          <div className="reveal">
            <figure className="pcard">
              <div className="pcard-face">
                <span className="pcard-monogram" aria-hidden="true">
                  {profile.initials}
                </span>
              </div>
              <figcaption className="pcard-meta">
                <p className="pcard-name">{profile.name}</p>
                <p className="pcard-role">Marketing × Information Systems</p>
                <div className="pcard-skills">
                  {about.topSkills.map((skill) => (
                    <span key={skill} className="chip">
                      {skill}
                    </span>
                  ))}
                </div>
              </figcaption>
            </figure>
          </div>

          <div className="reveal" style={{ "--reveal-delay": "110ms" } as React.CSSProperties}>
            <p className="eyebrow ink-magenta">{about.eyebrow}</p>
            <h2 className="h-section">{about.heading}</h2>
            <div className="about-body">
              {about.paragraphs.map((text) => (
                <p key={text.slice(0, 32)}>{text}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

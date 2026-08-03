import Link from "next/link";
import { profile } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="shell">
        <div className="footer-top">
          <div>
            <p className="footer-kicker">Let&rsquo;s work together</p>
            <h2 className="footer-title">
              Have a role or project
              <br />
              in mind? Say hello.
            </h2>
            <a className="footer-mail" href={`mailto:${profile.email}`}>
              {profile.email}
            </a>
          </div>

          <nav className="footer-links" aria-label="Elsewhere">
            <a
              className="footer-link"
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer noopener"
            >
              LinkedIn
            </a>
            <Link className="footer-link" href="/portfolio">
              Portfolio
            </Link>
          </nav>
        </div>

        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} {profile.name} · {profile.location}
          </span>
          <span className="footer-inks" aria-hidden="true">
            <i style={{ background: "var(--magenta)" }} />
            <i style={{ background: "var(--violet)" }} />
            <i style={{ background: "var(--cyan)" }} />
            <i style={{ background: "var(--citrus)" }} />
          </span>
        </div>
      </div>
    </footer>
  );
}

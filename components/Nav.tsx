"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { nav, profile } from "@/lib/content";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [stuck, setStuck] = useState(false);

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };

    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <header className={stuck ? "nav nav-stuck" : "nav"}>
        {/* Four-ink control strip — the brand device, always present. */}
        <div className="nav-inkstrip" aria-hidden="true">
          <span />
          <span />
          <span />
          <span />
        </div>

        <div className="shell nav-inner">
          <Link href="/" className="nav-brand">
            <span className="nav-mark" aria-hidden="true">
              {profile.initials}
            </span>
            <span className="nav-name">{profile.name}</span>
          </Link>

          <nav className="nav-links nav-desktop" aria-label="Primary">
            {nav.map((item) => (
              <Link key={item.href} href={item.href} className="nav-link">
                {item.label}
              </Link>
            ))}
            <a className="btn btn-primary nav-cta" href={`mailto:${profile.email}`}>
              Email me
            </a>
          </nav>

          <button
            type="button"
            className="nav-toggle"
            aria-expanded={open}
            aria-label="Open menu"
            onClick={() => setOpen(true)}
          >
            <span className="nav-toggle-bars" aria-hidden="true">
              <i />
              <i />
              <i />
            </span>
          </button>
        </div>
      </header>

      {/*
        Sibling of <header>, not a child: the header's backdrop-filter would
        otherwise become the containing block for this fixed element and clip
        the drawer to the height of the header.
      */}
      {open && (
        <div className="nav-drawer" role="dialog" aria-modal="true" aria-label="Menu">
          <div className="nav-drawer-top">
            <Link href="/" className="nav-brand" onClick={() => setOpen(false)}>
              <span className="nav-mark" aria-hidden="true">
                {profile.initials}
              </span>
              <span className="nav-name">{profile.name}</span>
            </Link>
            <button
              type="button"
              className="nav-drawer-close"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              autoFocus
            >
              ✕
            </button>
          </div>

          <nav className="nav-drawer-list" aria-label="Primary">
            {nav.map((item, i) => (
              <Link
                key={item.href}
                href={item.href}
                className="nav-drawer-link"
                onClick={() => setOpen(false)}
              >
                <span className="nav-drawer-num">{String(i + 1).padStart(2, "0")}</span>
                {item.label}
              </Link>
            ))}
            <a
              href={`mailto:${profile.email}`}
              className="nav-drawer-link"
              onClick={() => setOpen(false)}
            >
              <span className="nav-drawer-num">{String(nav.length + 1).padStart(2, "0")}</span>
              Email
            </a>
          </nav>
        </div>
      )}
    </>
  );
}

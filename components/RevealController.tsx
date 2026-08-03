"use client";

import { useEffect } from "react";

/**
 * Scroll reveals as progressive enhancement.
 *
 * The `reveal-ready` class is what arms the hidden state in CSS, and it is only
 * ever added from here — so if JS never runs, every `.reveal` element stays
 * visible instead of leaving a blank page.
 */
export default function RevealController() {
  useEffect(() => {
    const root = document.documentElement;
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced) {
      // Nothing to arm; content is already visible.
      return;
    }

    root.classList.add("reveal-ready");

    const targets = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.06 },
    );

    for (const el of targets) {
      // Anything already on screen at load reveals immediately.
      const box = el.getBoundingClientRect();
      if (box.top < window.innerHeight * 0.92) {
        el.classList.add("is-visible");
      } else {
        observer.observe(el);
      }
    }

    return () => {
      observer.disconnect();
      root.classList.remove("reveal-ready");
    };
  }, []);

  return null;
}

import { marqueeSkills } from "@/lib/content";

const INKS = ["magenta", "violet", "cyan", "citrus"] as const;

/**
 * Two identical tracks scrolling as one loop — when the first has travelled its
 * full width the second sits exactly in its place, so the seam never shows.
 *
 * Decorative: every skill here is also listed in Expertise, so the whole strip
 * is hidden from assistive tech rather than read out twice.
 */
export default function Marquee() {
  const track = (
    <div className="marquee-track">
      {marqueeSkills.map((skill, i) => (
        <span key={skill} className={`marquee-item ink-${INKS[i % INKS.length]}`}>
          {skill}
        </span>
      ))}
    </div>
  );

  return (
    <div className="marquee" aria-hidden="true">
      {track}
      {track}
    </div>
  );
}

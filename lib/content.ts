/**
 * Single source of truth for site content.
 * Sourced from Profile.pdf (LinkedIn export) — keep facts here, not in components.
 */

export type InkName = "magenta" | "violet" | "cyan" | "citrus";

export const profile = {
  name: "Ashley Chiang",
  initials: "AC",
  headline: "Marketing Coordinator @ IMS · UIUC Gies Alum",
  role: "Marketing Coordinator",
  location: "Greater Chicago Area",
  email: "ashleychiang04@gmail.com",
  linkedin: "https://www.linkedin.com/in/ashley--chiang",
  /** The page thesis, split so the display type can be set line by line. */
  thesis: ["Where", "creativity", "meets data."],
  intro:
    "I pair creative instinct with evidence — building marketing that connects with people and holds up to measurement.",
} as const;

/**
 * The ink bar: a press color-control strip where every patch carries a real
 * result. Order is deliberate — reach, lift, revenue, audience.
 */
export const inkBar: {
  ink: InkName;
  value: string;
  label: string;
  source: string;
}[] = [
  {
    ink: "magenta",
    value: "3,000+",
    label: "Accounts reached",
    source: "Influencer-led Instagram campaigns at BrightWorks",
  },
  {
    ink: "violet",
    value: "+5%",
    label: "Engagement lift",
    source: "Social content and creator partnerships",
  },
  {
    ink: "cyan",
    value: "$1,000+",
    label: "Net profit",
    source: "Knottybear Crochet, founded and run solo",
  },
  {
    ink: "citrus",
    value: "1,000+",
    label: "Audience built",
    source: "Grown from zero on Instagram",
  },
];

export const marqueeSkills = [
  "Brand Strategy",
  "Social Media",
  "Amazon Seller Central",
  "Market Research",
  "Shopify",
  "CRM Management",
  "Tableau",
  "Go-to-Market",
  "Campaign Execution",
  "Competitor Benchmarking",
  "Google Ads",
  "Consumer Insights",
];

export const about = {
  eyebrow: "About",
  heading: "Creative instinct, backed by evidence.",
  paragraphs: [
    "I recently graduated from the University of Illinois Urbana-Champaign with a double major in Marketing and Information Systems. I'm drawn to the places where creativity, data, and technology overlap — and to marketing strategies that connect with people while helping a business grow.",
    "Across internships, class projects, and my current role I've worked in digital marketing, social media strategy, CRM management, market research, and campaign execution. Those experiences showed me how much I enjoy balancing creative thinking with data-driven decision-making: uncovering insights, solving problems, and building better customer experiences.",
    "I'm continuing to grow across digital strategy, brand management, and account management — contributing to collaborative teams and creating meaningful business impact.",
  ],
  topSkills: ["Shopify", "Amazon Seller Central", "Tableau"],
};

export type Role = {
  title: string;
  company: string;
  kind: string;
  start: string;
  end: string;
  duration: string;
  location: string;
  summary?: string;
  bullets: string[];
  ink: InkName;
  current?: boolean;
};

/** Reverse-chronological, matching the LinkedIn export. */
export const roles: Role[] = [
  {
    title: "Marketing Coordinator",
    company: "Integrated Medical Systems, Inc.",
    kind: "Full-time",
    start: "Jul 2026",
    end: "Present",
    duration: "1 mo",
    location: "Bolingbrook, IL",
    summary:
      "Stepping up from intern to coordinator — owning marketing execution for a medical systems company.",
    bullets: [],
    ink: "magenta",
    current: true,
  },
  {
    title: "Sales & Marketing Intern",
    company: "BrightWorks Products",
    kind: "Internship",
    start: "Jun 2024",
    end: "Jan 2026",
    duration: "1 yr 8 mos",
    location: "Elk Grove Village, IL",
    bullets: [
      "Increased product visibility by optimizing Amazon listings through targeted keyword research, competitive benchmarking, and insights drawn from customer feedback.",
      "Led Instagram marketing initiatives, teaming with influencers on promotional content to lift engagement 5% and reach 3,000+ accounts.",
      "Oversaw rebranding of new and existing product lines, partnering with a Creative Director on product design strategy and reviewing digital and physical print proofs.",
      "Informed product development through market research and consumer surveys, analyzing trends, customer preferences, and competitor strategy.",
      "Co-led the launch of a new skincare brand — go-to-market strategy, positioning, and execution across key retail channels.",
      "Presented research findings to leadership and collaborated with designers on consumer-informed skincare packaging.",
    ],
    ink: "violet",
  },
  {
    title: "Marketing Intern",
    company: "Shummi US LLC",
    kind: "Internship",
    start: "Jun 2025",
    end: "Dec 2025",
    duration: "7 mos",
    location: "Elk Grove Village, IL",
    bullets: [
      "Built competitor benchmarking reports that guided the company's entry into a new market segment, shaping product development and positioning.",
      "Coordinated new-product sample distribution for high-profile retail launches at Target, CVS, and Walgreens.",
      "Advanced the brand by aligning visuals and messaging alongside the Creative Director.",
      "Led product updates and uploads across digital platforms, keeping information current and new launches live promptly.",
    ],
    ink: "cyan",
  },
  {
    title: "Founder",
    company: "Knottybear Crochet",
    kind: "Founder",
    start: "May 2024",
    end: "Oct 2025",
    duration: "1 yr 6 mos",
    location: "Champaign, IL",
    summary: "A handmade-goods business I built and ran end to end.",
    bullets: [
      "Ran a crochet business specializing in handmade goods — pricing strategy, budgets, and representing the brand at vendor events.",
      "Achieved over $1,000 in net profit by optimizing cost efficiency, tracking expenses, and scaling with consistent online demand.",
      "Designed and executed Instagram campaigns that drove sales and grew an audience of 1,000+.",
    ],
    ink: "citrus",
  },
  {
    title: "Marketing Intern",
    company: "Integrated Medical Systems, Inc.",
    kind: "Internship",
    start: "Jun 2025",
    end: "Aug 2025",
    duration: "3 mos",
    location: "Bolingbrook, IL",
    bullets: [
      "Optimized the CRM to support marketing and sales — streamlining contact records and ensuring data accuracy.",
      "Designed a structured folder system and naming conventions to organize marketing assets in Google Drive.",
      "Contributed ideas and presented findings in team marketing-planning meetings.",
    ],
    ink: "magenta",
  },
  {
    title: "Student Employee",
    company: "Illini Union Bookstore",
    kind: "Part-time",
    start: "Jan 2024",
    end: "Apr 2024",
    duration: "4 mos",
    location: "Urbana, IL",
    bullets: [
      "Ran the register and arranged and packaged online orders.",
      "Sold general merchandise and restocked items.",
      "Delivered efficient, professional customer service.",
    ],
    ink: "violet",
  },
];

export const pillars: { ink: InkName; name: string; note: string; items: string[] }[] = [
  {
    ink: "magenta",
    name: "Creative",
    note: "Making the thing people actually remember.",
    items: ["Brand & rebranding", "Social media strategy", "Campaign execution", "Go-to-market"],
  },
  {
    ink: "violet",
    name: "Analytical",
    note: "Checking whether it worked, honestly.",
    items: ["Market research", "Competitor benchmarking", "CRM management", "Consumer surveys"],
  },
  {
    ink: "cyan",
    name: "Digital",
    note: "The platforms where both of those meet.",
    items: ["Amazon Seller Central", "Shopify", "Tableau", "Google Ads"],
  },
];

export const certifications = [
  "Business Analytics",
  "Google Ads Search Certification",
  "Heartsaver CPR & AED",
  "Workplace Hazardous Materials Information System (WHMIS) Training",
  "Bloodborne and Airborne Pathogens",
];

export const languages = [
  { name: "English", level: "Native or bilingual" },
  { name: "Chinese (Traditional)", level: "Limited working" },
];

export const education = [
  {
    badge: "UI",
    school: "University of Illinois Urbana-Champaign",
    detail: "B.S. Marketing & Information Systems — Gies College of Business",
    tag: "Double major",
    dates: "Aug 2022 — May 2026",
    ink: "magenta" as InkName,
  },
  {
    badge: "BG",
    school: "Buffalo Grove High School",
    detail: "High School Diploma",
    tag: "",
    dates: "Aug 2018 — May 2022",
    ink: "violet" as InkName,
  },
];

export const nav = [
  { href: "/#about", label: "About" },
  { href: "/#journey", label: "Journey" },
  { href: "/#expertise", label: "Expertise" },
  { href: "/portfolio", label: "Portfolio" },
];

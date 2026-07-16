import type { SocialLink } from "../types/socialLink";
import { site } from "./site";

export const socialLinks: SocialLink[] = [
  {
    label: "GitHub",
    href: site.githubUrl,
    ariaLabel: "Visit GitHub profile",
  },
  {
    label: "LinkedIn",
    href: site.linkedInUrl,
    ariaLabel: "Visit LinkedIn profile",
  },
  {
    label: "Email",
    href: `mailto:${site.email}`,
    ariaLabel: `Email ${site.fullName}`,
  },
];

import Container from "../ui/Container";
import { site } from "../../constants/site";
import { socialLinks } from "../../constants/socialLinks";
import { typography } from "../../constants/typography";
import { cn } from "../../utils/cn";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-slate-800 bg-slate-950">
      <Container>
        <div
          className="w-full flex flex-col md:flex-row md:items-center md:justify-between gap-6 py-10"
        >
          {/* Left Section: Name & Title */}
          <div className="flex flex-col items-center md:items-start gap-1">
            <h2
              className={cn("font-semibold text-white", "text-lg md:text-base")}
            >
              {site.fullName}
            </h2>
            <p className={cn(typography.caption, "text-slate-500")}>
              {site.professionalTitle}
            </p>
          </div>

          {/* Right Section: Social Links */}
          <nav
            className="flex items-center gap-6 justify-center md:justify-end"
            aria-label="Social media links"
          >
            {socialLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target={link.label !== "Email" ? "_blank" : undefined}
                rel={link.label !== "Email" ? "noreferrer" : undefined}
                aria-label={link.ariaLabel || link.label}
                className={cn(
                  "text-sm font-medium text-slate-400",
                  "transition-all duration-200 ease-out",
                  "hover:text-cyan-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 rounded px-1 py-0.5",
                )}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Divider */}
        <div className="w-full border-t border-slate-800/50" />

        {/* Copyright */}
        <div className="w-full py-4 flex justify-center">
          <p
            className={cn(
              "text-xs text-slate-500",
              "transition-colors duration-200 ease-out",
            )}
          >
            © {year} {site.copyrightName}. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}

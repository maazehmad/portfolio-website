import { useEffect, useId, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Container from "../ui/Container";
import { site } from "../../constants/site";
import { navigation } from "../../constants/navigation";
import { cn } from "../../utils/cn";

const cvButtonClass =
  "rounded-full bg-cyan-500 px-4 py-2 text-sm font-medium text-slate-950 transition-all duration-200 ease-out hover:bg-cyan-400 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300";

const cvMenuItemClass =
  "block w-full px-4 py-2 text-left text-sm text-slate-200 transition-colors duration-200 ease-out hover:bg-slate-800 hover:text-slate-100 focus:outline-none focus-visible:bg-slate-800 focus-visible:text-slate-100";

type CvDropdownProps = {
  menuId: string;
  buttonClassName?: string;
  align?: "left" | "right";
  /** Renders the menu in-flow (avoids clipping inside overflow-hidden mobile panel). */
  inline?: boolean;
};

function CvDropdown({
  menuId,
  buttonClassName,
  align = "right",
  inline = false,
}: CvDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const handlePointerDown = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const menu = isOpen ? (
    <div
      id={menuId}
      role="menu"
      aria-label="CV options"
      className={cn(
        "min-w-[10rem] overflow-hidden rounded-xl border border-slate-700 bg-slate-900 shadow-xl shadow-slate-950/40",
        inline
          ? "relative mt-2 w-full"
          : cn(
              "absolute top-full z-50 mt-2",
              align === "right" ? "right-0" : "left-0",
            ),
      )}
    >
      <a
        role="menuitem"
        href={site.resumeUrl}
        target="_blank"
        rel="noreferrer"
        className={cvMenuItemClass}
        onClick={() => setIsOpen(false)}
      >
        View CV
      </a>
      <a
        role="menuitem"
        href={site.resumeUrl}
        download
        className={cvMenuItemClass}
        onClick={() => setIsOpen(false)}
      >
        Download CV
      </a>
    </div>
  ) : null;

  return (
    <div
      ref={containerRef}
      className={cn("relative inline-flex", inline && "w-full flex-col")}
    >
      <button
        type="button"
        className={cn(cvButtonClass, buttonClassName)}
        aria-haspopup="menu"
        aria-expanded={isOpen}
        aria-controls={menuId}
        onClick={() => setIsOpen((current) => !current)}
      >
        CV
      </button>
      {menu}
    </div>
  );
}

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const desktopCvMenuId = useId();
  const mobileCvMenuId = useId();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-slate-950 shadow-xl shadow-slate-950/30"
          : "bg-slate-950/80",
      )}
    >
      <Container>
        <div className="flex w-full items-center justify-between min-h-[72px] md:min-h-[76px] gap-4">
          <Link
            to="/"
            className="text-lg font-semibold text-white hover:text-slate-200 transition-colors duration-200 ease-out"
          >
            {site.fullName}
          </Link>

          <nav
            className="hidden md:flex items-center gap-10"
            aria-label="Primary navigation"
          >
            <ul className="flex items-center gap-10 text-base font-medium text-slate-200">
              {navigation.map((item) => (
                <li key={item.href}>
                  <NavLink
                    to={item.href}
                    className={({ isActive }) =>
                      cn(
                        "transition-all duration-200 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 rounded",
                        isActive
                          ? "text-cyan-300 font-medium"
                          : "text-slate-200 hover:text-slate-100",
                      )
                    }
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
            <CvDropdown menuId={desktopCvMenuId} align="right" />
          </nav>

          <button
            type="button"
            aria-label={isMobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileOpen}
            aria-controls="mobile-navigation"
            className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-slate-700 bg-slate-900 text-slate-200 md:hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 transition-all duration-200 ease-out hover:bg-slate-800 hover:border-slate-600"
            onClick={() => setIsMobileOpen((current) => !current)}
          >
            <span className="sr-only">Toggle navigation</span>
            <div className="flex flex-col gap-1">
              <span className="h-0.5 w-5 bg-current" />
              <span className="h-0.5 w-5 bg-current" />
              <span className="h-0.5 w-5 bg-current" />
            </div>
          </button>
        </div>

        <div
          id="mobile-navigation"
          className={cn(
            "w-full overflow-hidden transition-[max-height] duration-300 md:hidden",
            isMobileOpen ? "max-h-96" : "max-h-0",
          )}
        >
          <div className="mt-4 flex flex-col gap-4 border-t border-slate-800 pt-4 pb-5">
            {navigation.map((item) => (
              <NavLink
                key={item.href}
                to={item.href}
                className={({ isActive }) =>
                  cn(
                    "block rounded-md px-4 py-3 text-sm transition-all duration-200 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500",
                    isActive
                      ? "bg-slate-800 text-slate-100"
                      : "text-slate-200 hover:bg-slate-800 hover:text-slate-100",
                  )
                }
                onClick={() => setIsMobileOpen(false)}
              >
                {item.label}
              </NavLink>
            ))}
            <CvDropdown
              menuId={mobileCvMenuId}
              buttonClassName="w-full px-4 py-3"
              inline
            />
          </div>
        </div>
      </Container>
    </header>
  );
}

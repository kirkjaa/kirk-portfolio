import { Link, useLocation } from "wouter";
import { useState } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { Language, useLanguage } from "@/contexts/LanguageContext";
import { getStrings } from "@/content/strings";

interface NavItem {
  label: string;
  href: string;
}

export function Header() {
  const [location, navigate] = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const { resolvedTheme, toggleTheme } = useTheme();
  const { language, setLanguage } = useLanguage();
  const strings = getStrings(language);

  const navItems: NavItem[] = [
    { label: strings.navigation.home, href: "/" },
    { label: strings.navigation.about, href: "/about" },
    { label: strings.navigation.ventures, href: "/ventures" },
    { label: strings.navigation.publications, href: "/publications" },
    { label: strings.navigation.profile, href: "/profile" },
    { label: strings.navigation.contact, href: "/#contact" },
  ];

  const languages: Language[] = ["en", "th", "ko"];

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleLinkClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (href === "/#contact") {
      event.preventDefault();
      setIsOpen(false);
      if (location !== "/") {
        navigate("/");
        requestAnimationFrame(() => {
          setTimeout(() => scrollToContact(), 150);
        });
      } else {
        scrollToContact();
      }
      return;
    }

    setIsOpen(false);
  };

  const isActive = (href: string) => {
    if (href === "/#contact") return false;
    return location === href;
  };

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b border-gray-200 dark:bg-slate-900/80 dark:border-slate-700">
      <div className="container flex items-center justify-between py-4 gap-4">
        <Link href="/">
          <a
            className="font-bold text-lg md:text-xl gradient-text"
            onClick={(event) => handleLinkClick(event, "/")}
          >
            {strings.siteTitle}
          </a>
        </Link>

        <nav className="hidden lg:flex items-center gap-6">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              <a
                className={`text-sm font-semibold transition-colors hover:text-blue-600 dark:hover:text-blue-400 ${
                  isActive(item.href)
                    ? "text-blue-600 dark:text-blue-400"
                    : "text-gray-700 dark:text-slate-300"
                }`}
                onClick={(event) => handleLinkClick(event, item.href)}
              >
                {item.label}
              </a>
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <button
            type="button"
            onClick={toggleTheme}
            className="flex items-center justify-center rounded-full border border-gray-200 dark:border-slate-700 p-2 text-gray-700 hover:bg-gray-100 dark:text-slate-200 dark:hover:bg-slate-800 transition"
            aria-label={strings.header.themeToggle.aria}
            title={
              resolvedTheme === "dark"
                ? strings.header.themeToggle.light
                : strings.header.themeToggle.dark
            }
          >
            {resolvedTheme === "dark" ? (
              <Sun className="w-5 h-5" />
            ) : (
              <Moon className="w-5 h-5" />
            )}
          </button>
          <label className="sr-only" htmlFor="language-select-desktop">
            {strings.header.language.label}
          </label>
          <select
            id="language-select-desktop"
            className="rounded-lg border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-900 px-2.5 py-1.5 text-sm font-medium text-gray-700 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={language}
            onChange={(event) => setLanguage(event.target.value as Language)}
          >
            {languages.map((lang) => (
              <option key={lang} value={lang}>
                {strings.header.language.options[lang]}
              </option>
            ))}
          </select>
        </div>

        <button
          className="lg:hidden p-2 rounded-md border border-gray-200 text-gray-700 hover:bg-gray-100 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800 transition"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {isOpen && (
        <div className="lg:hidden border-t border-gray-200 bg-white/90 dark:bg-slate-900/95 dark:border-slate-700 backdrop-blur">
          <div className="container py-4 flex flex-col gap-3">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <a
                  className={`text-base font-semibold transition-colors hover:text-blue-600 dark:hover:text-blue-400 ${
                    isActive(item.href)
                      ? "text-blue-600 dark:text-blue-400"
                      : "text-gray-700 dark:text-slate-300"
                  }`}
                  onClick={(event) => handleLinkClick(event, item.href)}
                >
                  {item.label}
                </a>
              </Link>
            ))}
            <div className="flex items-center justify-between pt-3">
              <button
                type="button"
                onClick={() => {
                  toggleTheme();
                }}
                className="flex items-center gap-2 rounded-full border border-gray-200 dark:border-slate-700 px-3 py-2 text-sm font-medium text-gray-700 dark:text-slate-200"
              >
                {resolvedTheme === "dark" ? (
                  <Sun className="w-4 h-4" />
                ) : (
                  <Moon className="w-4 h-4" />
                )}
                <span>
                  {resolvedTheme === "dark"
                    ? strings.header.themeToggle.light
                    : strings.header.themeToggle.dark}
                </span>
              </button>
              <select
                className="rounded-lg border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-900 px-2.5 py-1.5 text-sm font-medium text-gray-700 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={language}
                onChange={(event) => setLanguage(event.target.value as Language)}
                aria-label={strings.header.language.label}
              >
                {languages.map((lang) => (
                  <option key={lang} value={lang}>
                    {strings.header.language.options[lang]}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

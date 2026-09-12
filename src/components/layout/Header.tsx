import { Link, useLocation } from "wouter";
import { useEffect, useState } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { Language, useLanguage } from "@/contexts/LanguageContext";
import { getStrings } from "@/content/strings";

const LANGUAGES: Language[] = ["en", "th", "ko"];

function scrollToContact() {
  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function Header() {
  const [location, navigate] = useLocation();
  const [open, setOpen] = useState(false);
  const { resolvedTheme, toggleTheme } = useTheme();
  const { language, setLanguage } = useLanguage();
  const s = getStrings(language);

  const nav = [
    { label: s.navigation.home, href: "/" },
    { label: s.navigation.about, href: "/about" },
    { label: s.navigation.ventures, href: "/ventures" },
    { label: s.navigation.writing, href: "/publications" },
    { label: s.navigation.profile, href: "/profile" },
  ];

  useEffect(() => {
    setOpen(false);
  }, [location]);

  const handleContact = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    setOpen(false);
    if (location !== "/") {
      navigate("/");
      window.setTimeout(scrollToContact, 150);
    } else {
      scrollToContact();
    }
  };

  const linkClass = (href: string, size: "sm" | "base" = "sm") =>
    [
      size === "sm" ? "text-sm" : "text-base py-2",
      "font-medium transition-colors",
      location === href
        ? "text-fg underline decoration-accent decoration-2 underline-offset-8"
        : "text-fg-muted hover:text-fg",
    ].join(" ");

  const themeTitle = resolvedTheme === "dark" ? s.header.themeToggle.light : s.header.themeToggle.dark;

  const LanguageSwitch = ({ className = "" }: { className?: string }) => (
    <div role="group" aria-label={s.header.language.label} className={`flex border border-line ${className}`}>
      {LANGUAGES.map((lang) => (
        <button
          key={lang}
          type="button"
          onClick={() => setLanguage(lang)}
          aria-pressed={lang === language}
          className={`px-2.5 py-1.5 font-mono text-[11px] tracking-[0.12em] transition-colors ${
            lang === language ? "bg-fg text-surface" : "text-fg-muted hover:text-fg"
          }`}
        >
          {s.header.language.options[lang]}
        </button>
      ))}
    </div>
  );

  const ThemeButton = ({ className = "" }: { className?: string }) => (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={s.header.themeToggle.aria}
      title={themeTitle}
      className={`flex h-9 w-9 items-center justify-center border border-line text-fg-muted transition-colors hover:border-line-strong hover:text-fg ${className}`}
    >
      {resolvedTheme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </button>
  );

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-surface/90 backdrop-blur">
      <div className="container flex h-16 items-center justify-between gap-6">
        <Link href="/" className="font-display text-[1.05rem] font-bold tracking-tight text-fg">
          {s.wordmark}
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className={linkClass(item.href)}>
              {item.label}
            </Link>
          ))}
          <a href="/#contact" onClick={handleContact} className="text-sm font-medium text-fg-muted transition-colors hover:text-fg">
            {s.navigation.contact}
          </a>
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <LanguageSwitch />
          <ThemeButton />
        </div>

        <button
          type="button"
          className="flex h-9 w-9 items-center justify-center border border-line text-fg lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-label={s.header.menu}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-line bg-surface lg:hidden">
          <div className="container flex flex-col py-4">
            {nav.map((item) => (
              <Link key={item.href} href={item.href} className={linkClass(item.href, "base")}>
                {item.label}
              </Link>
            ))}
            <a href="/#contact" onClick={handleContact} className="py-2 text-base font-medium text-fg-muted hover:text-fg">
              {s.navigation.contact}
            </a>
            <div className="mt-4 flex items-center justify-between border-t border-line pt-4">
              <LanguageSwitch />
              <ThemeButton />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

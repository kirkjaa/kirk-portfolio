import { Link, useLocation } from "wouter";
import { useState } from "react";
import { Menu, X } from "lucide-react";

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Ventures", href: "/ventures" },
  { label: "Publications", href: "/publications" },
  { label: "Full Profile", href: "/profile" },
  { label: "Contact", href: "/#contact" },
];

export function Header() {
  const [location, navigate] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

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
    <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b border-gray-200">
      <div className="container flex items-center justify-between py-4">
        <Link href="/">
          <a
            className="font-bold text-lg md:text-xl gradient-text"
            onClick={(event) => handleLinkClick(event, "/")}
          >
            Kirk Pathumanun
          </a>
        </Link>

        <nav className="hidden lg:flex items-center gap-6">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              <a
                className={`text-sm font-semibold transition-colors hover:text-blue-600 ${
                  isActive(item.href) ? "text-blue-600" : "text-gray-700"
                }`}
                onClick={(event) => handleLinkClick(event, item.href)}
              >
                {item.label}
              </a>
            </Link>
          ))}
        </nav>

        <button
          className="lg:hidden p-2 rounded-md border border-gray-200 text-gray-700 hover:bg-gray-100 transition"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {isOpen && (
        <div className="lg:hidden border-t border-gray-200 bg-white/90 backdrop-blur">
          <div className="container py-4 flex flex-col gap-3">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <a
                  className={`text-base font-semibold transition-colors hover:text-blue-600 ${
                    isActive(item.href) ? "text-blue-600" : "text-gray-700"
                  }`}
                  onClick={(event) => handleLinkClick(event, item.href)}
                >
                  {item.label}
                </a>
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

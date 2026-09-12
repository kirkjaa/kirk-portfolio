import { Link } from "wouter";
import { useLanguage } from "@/contexts/LanguageContext";
import { getStrings } from "@/content/strings";

export default function NotFound() {
  const { language } = useLanguage();
  const s = getStrings(language);

  return (
    <div className="container py-32">
      <p className="eyebrow eyebrow-accent">404</p>
      <h1 className="display-lg mt-5">{s.pages.notFound.title}</h1>
      <p className="lede mt-4">{s.pages.notFound.body}</p>
      <Link href="/" className="btn btn-primary mt-8">{s.pages.notFound.cta}</Link>
    </div>
  );
}

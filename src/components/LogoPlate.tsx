import { ImageWithFallback } from "@/components/ImageWithFallback";

interface LogoPlateProps {
  src?: string;
  /** Used for the monogram when there is no logo file, and as the image's alt-adjacent label. */
  name: string;
  className?: string;
  imageClassName?: string;
}

/** Initials, at most two: "KOI Sport Management" → "KS", "NODAL" → "NO". */
function monogram(name: string): string {
  const words = name.replace(/[^\p{L}\p{N}\s]/gu, " ").split(/\s+/).filter(Boolean);
  if (words.length === 0) return "?";
  if (words.length === 1) return words[0].length <= 7 ? words[0].toUpperCase() : words[0].slice(0, 2).toUpperCase();
  return (words[0][0] + words[1][0]).toUpperCase();
}

/** A logo on a white plate — or the company's initials, when we hold no logo for it. */
export function LogoPlate({ src, name, className = "", imageClassName = "max-h-10 max-w-full object-contain" }: LogoPlateProps) {
  return (
    <div className={`logo-plate ${className}`}>
      {src ? (
        <ImageWithFallback src={src} alt="" className={imageClassName} loading="lazy" />
      ) : (
        <span
          aria-hidden="true"
          className={`font-display font-bold tracking-tight text-navy ${
            monogram(name).length > 2 ? "text-[0.78rem] tracking-[0.08em]" : "text-lg"
          }`}
        >
          {monogram(name)}
        </span>
      )}
    </div>
  );
}

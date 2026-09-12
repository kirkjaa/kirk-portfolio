interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  lede?: string;
  inverse?: boolean;
}

export function SectionHeading({ eyebrow, title, lede, inverse = false }: SectionHeadingProps) {
  return (
    <div className="max-w-3xl">
      <p className={`eyebrow eyebrow-accent ${inverse ? "text-mist" : ""}`}>{eyebrow}</p>
      <h2 className={`display-lg mt-5 ${inverse ? "text-paper" : ""}`}>{title}</h2>
      {lede && <p className={`lede mt-4 ${inverse ? "text-paper/75" : ""}`}>{lede}</p>}
    </div>
  );
}

interface PageHeaderProps {
  eyebrow: string;
  title: string;
  lede?: string;
}

export function PageHeader({ eyebrow, title, lede }: PageHeaderProps) {
  return (
    <header className="border-b border-line">
      <div className="container pb-12 pt-14 md:pb-16 md:pt-20">
        <p className="eyebrow eyebrow-accent">{eyebrow}</p>
        <h1 className="display-lg mt-5 max-w-4xl">{title}</h1>
        {lede && <p className="lede mt-5">{lede}</p>}
      </div>
    </header>
  );
}

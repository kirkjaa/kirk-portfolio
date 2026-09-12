import { TrackItem } from "@/content/homeContent";
import { useLanguage } from "@/contexts/LanguageContext";
import { getStrings } from "@/content/strings";

function groupByYear(items: TrackItem[]): [string, TrackItem[]][] {
  const map = new Map<string, TrackItem[]>();
  for (const item of items) {
    const list = map.get(item.year) ?? [];
    list.push(item);
    map.set(item.year, list);
  }
  return Array.from(map.entries());
}

interface TrackLedgerProps {
  items: TrackItem[];
  /** Narrower type scale when the ledger sits inside a prose column rather than full width. */
  compact?: boolean;
}

export function TrackLedger({ items, compact = false }: TrackLedgerProps) {
  const { language } = useLanguage();
  const s = getStrings(language);

  return (
    <div className={compact ? "border-t border-line-strong" : "border-t-2 border-line-strong"}>
      {groupByYear(items).map(([year, rows]) => (
        <div
          key={year}
          className={`grid gap-3 border-b border-line md:grid-cols-12 ${compact ? "py-6 md:gap-6" : "py-8 md:gap-8"}`}
        >
          <div className="md:col-span-2">
            <span className={`numeral ${compact ? "text-[1.75rem] md:text-[2rem]" : "text-[2.25rem] md:text-[2.75rem]"}`}>
              {year}
            </span>
          </div>
          <ul className="divide-y divide-line md:col-span-10">
            {rows.map((item) => (
              <li key={item.title} className="grid gap-1 py-3 md:grid-cols-[7.5rem_1fr] md:gap-6">
                <span className="caption md:pt-1">{s.labels.kinds[item.kind]}</span>
                <div>
                  <p className="font-medium text-fg">{item.title}</p>
                  {item.detail && <p className="mt-0.5 text-sm text-fg-muted">{item.detail}</p>}
                </div>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

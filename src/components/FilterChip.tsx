import { X } from "lucide-react";

type Props = {
  label: string;
  onRemove?: () => void;
  onClick?: () => void;            
  className?: string;
};

export default function FilterChip({ label, onRemove, onClick, className = "" }: Props) {
  return (
    <div
      className={`inline-flex items-center justify-center gap-[6px] rounded-full border border-slate-300 bg-white pl-4 pr-[10px] py-2 text-sm text-slate-800 shadow-sm max-w-[115px]
                  hover:border-slate-400 ${onClick ? "cursor-pointer" : ""} ${className}`}
      role="button"
      tabIndex={0}
      onClick={onClick}
      onKeyDown={(e) => {
        if ((e.key === "Enter" || e.key === " ") && onClick) { e.preventDefault(); onClick(); }
        if ((e.key === "Backspace" || e.key === "Delete") && onRemove) { e.preventDefault(); onRemove(); }
      }}
      aria-label={onClick ? `Filter: ${label}` : undefined}
    >
      <span className="select-none">{label}</span>
      {onRemove && (
        <button
          type="button"
          onClick={(e) => { e.stopPropagation(); onRemove(); }}
          className="ml-1 inline-flex h-5 w-5 items-center justify-center rounded-full hover:bg-slate-100"
          aria-label={`Remove ${label}`}
        >
          <X className="h-3.5 w-3.5 text-slate-600" />
        </button>
      )}
    </div>
  );
}

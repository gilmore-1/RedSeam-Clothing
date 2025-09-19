import { useEffect, useMemo, useRef, useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

export type SortOption = { value: string; label: string };

type Props = {
  value: string;                        
  onChange: (value: string) => void;   
  options: SortOption[];                
  className?: string;                   
  align?: "left" | "right";             
};

export default function SortBy({
  value,
  onChange,
  options,
  className = "",
  align = "right",
}: Props) {
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number>(-1);

  const btnRef = useRef<HTMLButtonElement | null>(null);
  const panelRef = useRef<HTMLDivElement | null>(null);

  const selected = useMemo(
    () => options.find((o) => o.value === value) ?? options[0],
    [options, value]
  );

  // Close on outside click
  useEffect(() => {
    const onDocClick = (e: MouseEvent) => {
      if (!open) return;
      const target = e.target as Node;
      if (
        panelRef.current?.contains(target) ||
        btnRef.current?.contains(target)
      ) {
        return;
      }
      setOpen(false);
    };
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, [open]);

  // Keyboard navigation
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (!open) return;
      if (e.key === "Escape") {
        setOpen(false);
        btnRef.current?.focus();
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        setActiveIndex((i) => (i + 1) % options.length);
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setActiveIndex((i) => (i - 1 + options.length) % options.length);
      } else if (e.key === "Enter") {
        e.preventDefault();
        const opt = options[activeIndex >= 0 ? activeIndex : 0];
        if (opt) {
          onChange(opt.value);
          setOpen(false);
          btnRef.current?.focus();
        }
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, options, activeIndex, onChange]);

  return (
    <div className="w-full flex justify-end">
    <div className={`relative inline-block ${className}`}>
      <button
        ref={btnRef}
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => {
          setOpen((o) => !o);
          // set initial highlighted index to current selected
          const idx = options.findIndex((o) => o.value === value);
          setActiveIndex(Math.max(0, idx));
        }}
        className="flex items-center gap-1 text-base text-darkblue"
      >
        <span>Sort by</span>
        <MdKeyboardArrowDown
          className={`w-5 h-5 text-darkblue-2 transition-transform ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {open && (
        <div
          ref={panelRef}
          role="listbox"
          tabIndex={-1}
          className={`absolute z-50 mt-2 w-64 rounded-2xl border border-slate-200 bg-white shadow-md p-3 ${
            align === "right" ? "right-0" : "left-0"
          }`}
        >

          <ul className="flex flex-col">
            {options.map((opt, i) => {
              const isSelected = opt.value === selected.value;
              const isActive = i === activeIndex;
              return (
                <li key={opt.value} className="px-2">
                  <button
                    role="option"
                    aria-selected={isSelected}
                    onMouseEnter={() => setActiveIndex(i)}
                    onClick={() => {
                      onChange(opt.value);
                      setOpen(false);
                      btnRef.current?.focus();
                    }}
                    className={`w-full text-left rounded-lg py-2 text-[15px] transition
                    ${isActive ? "bg-slate-100" : ""}
                    ${isSelected ? "font-medium text-slate-900" : "text-slate-700"}
                  `}
                  >
                    {opt.label}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
    </div>
  );
}

import { useState } from "react";

type Props = {
  onApply: (min?: number, max?: number) => void;
};

export default function PriceRange({ onApply }: Props) {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [err, setErr] = useState("");

  const apply = () => {
    setErr("");
    const min = from === "" ? undefined : Number(from);
    const max = to === "" ? undefined : Number(to);

    if ((from !== "" && isNaN(min!)) || (to !== "" && isNaN(max!))) {
      setErr("Use numbers only.");
      return;
    }
    if (min !== undefined && max !== undefined && min > max) {
      setErr("“From” cannot be greater than “To”.");
      return;
    }
    onApply(min, max);
  };

  return (
    <div className="w-full flex justify-end">
    <section className="w-full max-w-[392px]">
      <h3 className="text-xl sm:text-2xl font-semibold text-darkblue mb-3">
        Select price
      </h3>

      {/* ჩარჩო */}
      <div className="relative rounded-xl border border-slate-300 bg-white p-3 sm:p-4 shadow-sm">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pr-0 sm:pr-36">
          {/* From */}
          <label className="block">
            <span className="block text-slate-700 mb-1">
              From <span className="text-red-500">*</span>
            </span>
            <input
              type="number"
              min={0}
              placeholder="0"
              value={from}
              onChange={(e) => setFrom(e.target.value)}
              className="w-full h-12 rounded-xl border border-slate-300 px-4 outline-none focus:border-slate-400"
            />
          </label>

          {/* To */}
          <label className="block">
            <span className="block text-slate-700 mb-1">
              To <span className="text-red-500">*</span>
            </span>
            <input
              type="number"
              min={0}
              placeholder="1000"
              value={to}
              onChange={(e) => setTo(e.target.value)}
              className="w-full h-12 rounded-xl border border-slate-300 px-4 outline-none focus:border-slate-400"
            />
          </label>
        </div>

        {/* Apply – ჩარჩოს შიგნით, ქვედა-მარჯვენა */}
        <button
          type="button"
          onClick={apply}
          className="absolute right-3 bottom-3 h-10 sm:h-12 px-4 sm:px-6 rounded-xl bg-orange-600 text-white font-semibold shadow-md active:translate-y-px hover:bg-orange-700 text-sm sm:text-base"
        >
          Apply
        </button>
      </div>

      {err && <p className="mt-2 text-sm text-red-600">{err}</p>}
    </section>
    </div>
  );
}

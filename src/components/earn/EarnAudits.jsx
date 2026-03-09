import { FileText, ScanSearch, ShieldAlert } from "lucide-react";

const items = [
  {
    title: "50%",
    description: "of FNX tokens are burned.",
    Icon: ScanSearch,
  },
  {
    title: "50%",
    description: "of FNX tokens return to supply.",
    Icon: ShieldAlert,
  },
  {
    title: "Documentation",
    description:
      "Read official guides for safe earning and approved interaction flows.",
    Icon: FileText,
  },
];

const EarnAudits = () => {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 pb-14 sm:px-6 lg:px-8">
      <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_18px_50px_rgba(0,0,0,0.55)] sm:p-8">
        <p className="text-xs font-semibold tracking-[0.24em] text-orange-300/80">
          AUDITS
        </p>
        <h2 className="mt-3 text-2xl font-semibold text-white sm:text-3xl">
          Ecosystem Stability Measures
        </h2>
        <p className="mt-3 max-w-2xl text-sm leading-6 text-white/70 sm:text-base">
          FINUX implements mechanisms to maintain token sustainability.
        </p>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {items.map(({ title, description, Icon }) => (
            <article
              key={title}
              className="rounded-3xl border border-white/10 bg-[#140a03]/60 p-5"
            >
              <span className="grid h-11 w-11 place-items-center rounded-2xl border border-orange-500/20 bg-orange-500/10 text-orange-300">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-sm font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-white/65">
                {description}
              </p>
            </article>
          ))}
        </div>

        <button
          type="button"
          className="mt-8 inline-flex items-center justify-center rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold text-black shadow-[0_12px_32px_rgba(249,115,22,0.35)] transition hover:bg-orange-400"
        >
          View audit reports
        </button>
      </div>
    </section>
  );
};

export default EarnAudits;

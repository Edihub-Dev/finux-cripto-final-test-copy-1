import { Code2, GitBranch, Puzzle } from "lucide-react";

const items = [
  {
    title: "SDK & APIs",
    description:
      "Integrate staking, swaps, and portfolio data using consistent endpoints.",
    Icon: Code2,
  },
  {
    title: "Open Contributions",
    description:
      "Propose improvements, review changes, and help validate ecosystem upgrades.",
    Icon: GitBranch,
  },
  {
    title: "Composable Modules",
    description:
      "Build apps on top of FINUX primitives with predictable and auditable behavior.",
    Icon: Puzzle,
  },
];

const EarnDeveloper = () => {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 pb-14 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-semibold leading-tight text-white sm:text-4xl">
        Build With FINUX
      </h2>
      <p className="mt-4 max-w-3xl text-sm leading-6 text-white/75 sm:text-base">
        Tools and primitives designed for developers who need secure, composable
        building blocks.
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {items.map(({ title, description, Icon }) => (
          <article
            key={title}
            className="rounded-3xl border border-white/10 bg-[#120802]/70 p-6 shadow-[0_18px_50px_rgba(0,0,0,0.55)] transition duration-300 hover:border-orange-500/25"
          >
            <span className="grid h-10 w-10 place-items-center rounded-full border border-orange-500/20 bg-orange-500/10 text-orange-300">
              <Icon className="h-5 w-5" />
            </span>
            <h3 className="mt-4 text-sm font-semibold text-white">{title}</h3>
            <p className="mt-3 text-sm leading-6 text-white/70">
              {description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default EarnDeveloper;

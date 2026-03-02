import { Github, Twitter } from "lucide-react";

const CommunityFooter = () => {
  return (
    <footer className="w-full border-t border-white/10 bg-[#0b0604]">
      <div className="mx-auto flex w-full max-w-7xl flex-row flex-nowrap items-center justify-between gap-4 px-6 py-6 text-[11px] text-white/55">
        <p className="min-w-0 truncate whitespace-nowrap">
          © 2026 Finux.online. All rights reserved.
        </p>

        <div className="flex shrink-0 items-center gap-3">
          <button
            type="button"
            aria-label="Twitter"
            className="grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-white/5 text-white/70 transition duration-300 hover:border-orange-500/30 hover:text-white"
          >
            <Twitter className="h-4 w-4" />
          </button>
          <button
            type="button"
            aria-label="GitHub"
            className="grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-white/5 text-white/70 transition duration-300 hover:border-orange-500/30 hover:text-white"
          >
            <Github className="h-4 w-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default CommunityFooter;

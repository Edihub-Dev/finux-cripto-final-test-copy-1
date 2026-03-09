import { Github, Twitter } from "lucide-react";

const ResourcesFooter = () => {
  return (
    <footer className="bg-[#201810]">
      <div className="h-px w-full bg-orange-500/15" />
      <div className="mx-auto w-full max-w-6xl px-4 py-4 sm:px-6 sm:py-6 lg:px-8">
        <div className="flex items-center justify-between gap-3">
          <p className="text-xs text-[#CBAD90]/70">
            © 2026 Finux.online. All rights reserved.
          </p>

          <div className="flex items-center gap-3">
            <button
              type="button"
              aria-label="Twitter"
              className="grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-transparent text-[#CBAD90] transition hover:border-orange-500/25 hover:bg-white/5 hover:text-[#CBAD90]"
            >
              <Twitter className="h-4 w-4" />
            </button>
            <button
              type="button"
              aria-label="GitHub"
              className="grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-transparent text-[#CBAD90] transition hover:border-orange-500/25 hover:bg-white/5 hover:text-[#CBAD90]"
            >
              <Github className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ResourcesFooter;

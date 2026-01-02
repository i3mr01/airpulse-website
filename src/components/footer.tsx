import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-black/40 px-4 py-6 text-xs text-zinc-500 backdrop-blur-sm sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 sm:flex-row">
        <p className="text-[0.7rem] text-zinc-500">
          AirPulse - crafted by{" "}
          <Link
            href="https://www.amrkhaled.dev"
            target="_blank"
            rel="noreferrer"
            className="font-medium text-zinc-300 hover:text-airpulse-300"
          >
            amrkhaled.dev
          </Link>
          .
        </p>
        <div className="flex items-center gap-4">
          <Link
            href="/privacy"
            className="text-[0.7rem] font-medium text-zinc-300 hover:text-airpulse-300"
          >
            Privacy Policy
          </Link>
          <span className="h-1 w-1 rounded-full bg-zinc-600" />
          <Link
            href="https://www.linkedin.com/in/i3mr01/"
            target="_blank"
            rel="noreferrer"
            className="text-[0.7rem] font-medium text-zinc-300 hover:text-airpulse-300"
          >
            LinkedIn
          </Link>
        </div>
      </div>
    </footer>
  );
}


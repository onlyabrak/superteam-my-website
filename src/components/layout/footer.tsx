import Link from "next/link";
import { SITE_NAME, NAV_LINKS, SOCIAL_LINKS } from "@/lib/utils/constants";

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg gradient-sol flex items-center justify-center">
                <span className="text-white font-bold text-sm">ST</span>
              </div>
              <span className="font-semibold text-white">{SITE_NAME}</span>
            </div>
            <p className="text-sm text-white/40 max-w-xs leading-relaxed">
              Malaysia&apos;s premier Solana community — connecting builders, creators, and innovators.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-medium text-white/60 mb-4">Navigation</h3>
            <nav className="flex flex-col gap-2">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-white/40 hover:text-white/70 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-sm font-medium text-white/60 mb-4">Connect</h3>
            <div className="flex flex-col gap-2">
              <a
                href={SOCIAL_LINKS.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-white/40 hover:text-white/70 transition-colors"
              >
                Twitter / X
              </a>
              <a
                href={SOCIAL_LINKS.discord}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-white/40 hover:text-white/70 transition-colors"
              >
                Discord
              </a>
              <a
                href={SOCIAL_LINKS.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-white/40 hover:text-white/70 transition-colors"
              >
                Telegram
              </a>
              <a
                href={SOCIAL_LINKS.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-white/40 hover:text-white/70 transition-colors"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/5">
          <p className="text-center text-xs text-white/30">
            &copy; {new Date().getFullYear()} {SITE_NAME}. Built on Solana.
          </p>
        </div>
      </div>
    </footer>
  );
}

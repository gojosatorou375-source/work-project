import './globals.css';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SISU | Reimagine Performance',
  description: 'Premium mentorship platform for founders and operators.'
};

const nav = [
  ['Methodology', '/methodology'],
  ['Workshops', '/workshops'],
  ['Book', '/book'],
  ['Client', '/client'],
  ['RATS', '/rats']
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-obsidian/80 backdrop-blur">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
            <Link href="/" className="text-sm font-semibold tracking-[0.2em]">
              SISU
            </Link>
            <nav className="flex gap-4 text-sm text-white/80">
              {nav.map(([label, href]) => (
                <Link className="transition hover:text-white" key={href} href={href}>
                  {label}
                </Link>
              ))}
            </nav>
          </div>
        </header>
        <main className="pt-20">{children}</main>
      </body>
    </html>
  );
}

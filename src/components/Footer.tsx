export default function Footer() {
  return (
    <footer className="bg-background border-t border-white/5 py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-[family-name:var(--font-playfair)] text-accent text-lg font-bold tracking-widest">
          LUMENS
        </p>
        <p className="text-text-muted text-sm">
          &copy; {new Date().getFullYear()} Ovation Residences Limited. All
          rights reserved.
        </p>
      </div>
    </footer>
  );
}

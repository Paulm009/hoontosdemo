export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto flex h-16 items-center gap-4">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-md bg-gradient-to-br from-blue-600 to-indigo-500" />
          <span className="text-lg font-bold tracking-tight">ConectaPro</span>
        </div>
        <div className="ml-auto flex-1 max-w-2xl">
          <input
            placeholder="Buscar…"
            className="w-full rounded-md border border-[hsl(var(--input))] bg-[hsl(var(--accent))] px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[hsl(var(--ring))]"
          />
        </div>
        <div className="ml-auto flex items-center gap-2">
          <button className="h-10 w-10 rounded-md hover:bg-[hsl(var(--accent))]">🔔</button>
          <button className="h-10 w-10 rounded-md hover:bg-[hsl(var(--accent))]">👤</button>
        </div>
      </div>
    </header>
  );
}

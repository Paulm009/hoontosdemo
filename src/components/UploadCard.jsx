import Badge from "./Badge.jsx";

export default function UploadCard() {
  const perfilUrl = "https://app.talentsc.co/u/paul";

  const copy = () => navigator.clipboard && navigator.clipboard.writeText(perfilUrl);

  return (
    <div className="overflow-hidden rounded-lg border bg-white shadow-sm">
      <div className="flex items-center justify-between p-6">
        <div>
          <h2 className="text-xl font-semibold">Mi sinopsis</h2>
          <p className="mt-1 text-sm text-gray-500"></p>
        </div>
      </div>
      <div className="space-y-6 p-6 pt-0">
        <div>
          
          <p className="mt-2 text-gray-600 leading-relaxed">
          <Badge />
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          {[{
            t1: "Perfil visible para todos",
            t2: "Aparece en resultados de búsqueda"
          },{
            t1: "Abierto a networking",
            t2: "Otros pueden contactarte"
          },{
            t1: "Enlace activo",
            t2: "Comparte tu perfil público"
          }].map((o) => (
            <div key={o.t1} className="flex items-center justify-between rounded-lg border p-4">
              <div>
                <p className="text-sm font-medium">{o.t1}</p>
                <p className="mt-1 text-xs text-gray-500">{o.t2}</p>
              </div>
              <label className="relative inline-flex cursor-pointer items-center">
                <input type="checkbox" defaultChecked className="peer sr-only" />
                <div className="h-6 w-11 rounded-full bg-[hsl(var(--input))] transition-colors peer-checked:bg-[hsl(var(--primary))]"></div>
                <div className="-ml-8 h-5 w-5 translate-x-0 rounded-full bg-white shadow transition-transform peer-checked:translate-x-5" />
              </label>
            </div>
          ))}
        </div>

        <div className="space-y-3">
          <label className="text-sm font-medium flex items-center gap-2">
            <span>🔗</span>
            Link de mi perfil profesional
          </label>
          <div className="flex flex-col gap-2 sm:flex-row">
            <input readOnly value={perfilUrl} className="w-full rounded-md border px-3 py-2 font-mono" />
            <div className="flex gap-2">
              <button onClick={copy} className="rounded-md border bg-[hsl(var(--secondary))] px-3 py-2 text-sm hover:bg-[hsl(var(--accent))]">Copiar link</button>
              <a href={`mailto:?subject=Mi%20perfil&body=${encodeURIComponent(perfilUrl)}`} className="rounded-md bg-[hsl(var(--primary))] px-3 py-2 text-sm text-white hover:opacity-90">Compartir por email</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

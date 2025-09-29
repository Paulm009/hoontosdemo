const mensajes = [
  { nombre: "Michael Scott", preview: "¿Puedes revisar el doc?", fecha: "ago 29" },
  { nombre: "Jake Baeber", preview: "Consulta rápida…", fecha: "ago 27" },
  { nombre: "Angie Laurel", preview: "¡Entendido, gracias!", fecha: "ago 21" },
  { nombre: "Victoria Mensch", preview: "Gracias por contactar…", fecha: "ago 19" },
  { nombre: "Inzam Rehman", preview: "Hola! ¿Cómo vas?", fecha: "ago 17" },
  { nombre: "Michelle Morris", preview: "Compartí el archivo", fecha: "ago 14" },
];

export default function Sidebar() {
  return (
    <aside>
      <div className="rounded-lg border bg-white p-3 shadow-sm">
        <h3 className="px-2 pb-2 text-sm font-semibold text-gray-500">Mensajes</h3>
        <ul className="space-y-1">
          {mensajes.map((m) => (
            <li key={m.nombre}>
              <button className="w-full rounded-md px-2 py-2 text-left hover:bg-[hsl(var(--accent))]">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-indigo-400 to-blue-600 text-xs font-bold text-white">
                    {m.nombre.split(" ").map((p) => p[0]).slice(0,2).join("")}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <p className="truncate text-sm font-medium">{m.nombre}</p>
                      <span className="shrink-0 text-xs text-gray-500">{m.fecha}</span>
                    </div>
                    <p className="truncate text-xs text-gray-500">{m.preview}</p>
                  </div>
                </div>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}

const usuarios = [
  { nombre: "Cristian Bocanegra", rol: "Ing. Electrónico" },
  { nombre: "Adolfo Forero", rol: "CISO • Ciberseguridad" },
  { nombre: "Juan Camilo", rol: "Full‑Stack" },
  { nombre: "Ximena Maria Soria", rol: "UI/UX Designer" },
  { nombre: "Diana Salazar", rol: "Talento Humano" },
  { nombre: "Peter Papanik", rol: "Product Manager" },
  { nombre: "John Jacobs", rol: "Innovation Manager" },
  { nombre: "Candace Johnson", rol: "Customer Success" },
  { nombre: "Claire Thompson", rol: "Database Admin" },
];

export default function NetworkingList() {
  return (
    <aside>
      <div className="rounded-lg border bg-white p-3 shadow-sm">
       {/* Tu comentario va aquí  <h3 className="px-2 pb-2 text-sm font-semibold text-gray-500">Usuarios: Abiertos a networking</h3>
        <ul className="space-y-1">
          {usuarios.map((u) => (
            <li key={u.nombre}>
              <div className="flex items-center gap-3 rounded-md px-2 py-2 hover:bg-[hsl(var(--accent))]">
                <div className="relative">
                  <div className="h-9 w-9 rounded-full bg-gradient-to-br from-emerald-400 to-cyan-500" />
                  <span className="absolute -bottom-1 -right-1 h-3 w-3 rounded-full border-2 border-white bg-emerald-500" />
                </div>
                <div className="min-w-0">
                  <p className="truncate text-sm font-medium">{u.nombre}</p>
                  <p className="truncate text-xs text-gray-500">{u.rol}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>*/}
      </div>
    </aside>
  );
}

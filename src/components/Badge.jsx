export default function Badge() {
  return (
    <a
      href="http://localhost:8080/linkprofesional"
      className="w-96 block rounded-xl border border-slate-200 bg-white shadow-md transition hover:shadow-lg hover:scale-[1.02]"
    >
      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-200 px-6 py-3">
        <span className="text-base font-semibold text-slate-800">
          Junior Developer
        </span>
        <span className="h-3 w-3 rounded-full bg-purple-600"></span>
      </div>

      {/* Body */}
      <div className="rounded-b-xl bg-gradient-to-r from-teal-700 to-teal-400 p-6 text-white">
        <div className="flex justify-between items-start">
          {/* Contenido principal a la izquierda */}
          <div className="flex-1">
            <h2 className="text-2xl font-extrabold leading-tight">
              PAUL RODRIGO <br /> MARTINEZ FLORES
            </h2>
            
            <hr className="my-3 border-slate-200/50" />

            <p className="text-sm font-medium">Junior Developer</p>
          </div>

          {/* Logo a la derecha */}
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-900 ml-4">
            <span className="text-xl font-bold">∞</span>
          </div>
        </div>
      </div>
    </a>
  );
}
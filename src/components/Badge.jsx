export default function Badge() {
  return (
    <a
      href="http://localhost:8080/linkprofesional"
      className="max-w-sm block rounded-xl border border-slate-200 bg-white shadow-md transition hover:shadow-lg hover:scale-[1.02]"
    >
      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-200 px-4 py-2">
        <span className="text-sm font-semibold text-slate-800">
          Junior Developer
        </span>
        <span className="h-3 w-3 rounded-full bg-purple-600"></span>
      </div>

      {/* Body */}
      <div className="rounded-b-xl bg-gradient-to-r from-teal-700 to-teal-400 p-6 text-white">
        <div className="flex justify-end">
          {/* Logo */}
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-900">
            <span className="text-xl font-bold">∞</span>
          </div>
        </div>

        <h2 className="mt-4 text-2xl font-extrabold leading-tight">
          PAUL RODRIGO <br /> MARTINEZ FLORES
        </h2>
                                                                                                                                                                                                                                                                                                                                                                                                                                            
        <hr className="my-3 border-slate-200/50" />

        <p className="text-sm font-medium">Junior Developer</p>
      </div>
    </a>
  );
}

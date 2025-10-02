import Badge from "./Badge.jsx";
import { useState } from "react";
import { Copy, Share2, Eye, Users, Link as LinkIcon } from "lucide-react";

export default function UploadCard() {
  const perfilUrl = "https://app.talentsc.co/u/paul";
  const [copyButtonText, setCopyButtonText] = useState("Copiar link");
  const [toggleStates, setToggleStates] = useState({
    perfilVisible: true,
    networking: true,
    enlaceActivo: true
  });

  const copy = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(perfilUrl);
      setCopyButtonText("¡Copiado!");
      setTimeout(() => setCopyButtonText("Copiar link"), 2000);
    }
  };

  const handleToggleChange = (toggleName) => {
    setToggleStates(prev => ({
      ...prev,
      [toggleName]: !prev[toggleName]
    }));
  };

  const options = [
    {
      t1: "Perfil visible para todos",
      t2: "Aparece en resultados de búsqueda",
      key: "perfilVisible",
      icon: <Eye className="w-4 h-4" />
    },
    {
      t1: "Abierto a networking",
      t2: "Otros pueden contactarte",
      key: "networking",
      icon: <Users className="w-4 h-4" />
    },
    {
      t1: "Enlace activo",
      t2: "Comparte tu perfil público",
      key: "enlaceActivo",
      icon: <LinkIcon className="w-4 h-4" />
    },
  ];

  return (
    <div className="overflow-hidden rounded-2xl border border-gray-700 bg-gradient-to-br from-gray-900 to-gray-800 shadow-2xl shadow-blue-900/20 max-h-[600px]">
      {/* Header con gradiente - más compacto */}
      <div className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 p-4 border-b border-gray-700">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-blue-600 rounded-lg">
            <Eye className="w-4 h-4 text-white" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-white">
              Mi sinopsis
            </h2>
            <p className="text-xs text-blue-200 mt-0.5">
              Configura tu visibilidad y conexiones
            </p>
          </div>
        </div>
      </div>

      {/* Body más compacto */}
      <div className="space-y-4 p-4">
        {/* Badge o tarjeta - más pequeño */}
        <div className="flex items-center justify-center scale-90">
          <div className="relative">
            <Badge />
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
              <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Opciones más compactas */}
        <div className="grid gap-3">
          {options.map((o) => (
            <div
              key={o.t1}
              className="flex items-center justify-between rounded-lg border border-gray-700 bg-gray-800/50 p-3 hover:bg-gray-800/70 transition-all duration-200 hover:border-blue-500/30"
            >
              <div className="flex items-center gap-2">
                <div className="p-1.5 bg-blue-900/30 rounded-md">
                  {o.icon}
                </div>
                <div>
                  <p className="text-xs font-semibold text-white">
                    {o.t1}
                  </p>
                  <p className="mt-0.5 text-[10px] text-gray-400">
                    {o.t2}
                  </p>
                </div>
              </div>
              <label className="relative inline-flex cursor-pointer items-center">
                <input 
                  type="checkbox" 
                  checked={toggleStates[o.key]}
                  onChange={() => handleToggleChange(o.key)}
                  className="peer sr-only" 
                />
                {/* Track más pequeño */}
                <div className="h-5 w-9 rounded-full bg-gray-700 peer-checked:bg-gradient-to-r peer-checked:from-blue-600 peer-checked:to-purple-600 transition-all duration-200 shadow-inner" />
                {/* Thumb más pequeño */}
                <div className="absolute left-0.5 top-0.5 h-4 w-4 rounded-full bg-white shadow-md transition-transform duration-200 peer-checked:translate-x-4 peer-checked:shadow-blue-200/50" />
              </label>
            </div>
          ))}
        </div>

        {/* Sección de link más compacta */}
        <div className="space-y-3 p-3 rounded-lg bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-blue-500/20">
          <label className="text-xs font-semibold flex items-center gap-2 text-white">
            <div className="p-1 bg-blue-600 rounded-md">
              <LinkIcon className="w-3 h-3" />
            </div>
            Link de mi perfil profesional
          </label>
          
          <div className="flex flex-col gap-2">
            <div className="relative">
              <input
                readOnly
                value={perfilUrl}
                className="w-full rounded-md border border-gray-600 bg-gray-800 px-3 py-2 font-mono text-xs text-white focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-transparent pr-24"
              />
              <div className="absolute right-1 top-1/2 transform -translate-y-1/2">
                <button
                  onClick={copy}
                  className="flex items-center gap-1 rounded-md bg-blue-600 hover:bg-blue-700 px-2 py-1 text-[10px] text-white transition-all duration-200 hover:scale-105 active:scale-95"
                >
                  <Copy className="w-2.5 h-2.5" />
                  {copyButtonText}
                </button>
              </div>
            </div>
            
            <a
              href={`mailto:?subject=Mi%20perfil%20ConectaPro&body=${encodeURIComponent(
                `Te comparto mi perfil profesional: ${perfilUrl}`
              )}`}
              className="flex items-center justify-center gap-1 rounded-md bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-3 py-2 text-xs text-white transition-all duration-200 hover:scale-105 active:scale-95"
            >
              <Share2 className="w-3 h-3" />
              Compartir por email
            </a>
          </div>
        </div>

        {/* Stats más compactos */}
        <div className="grid grid-cols-3 gap-3 text-center">
          <div className="p-2 rounded-lg bg-gray-800/50 border border-gray-700">
            <p className="text-lg font-bold text-blue-400">12</p>
            <p className="text-[10px] text-gray-400">Visitas</p>
          </div>
          <div className="p-2 rounded-lg bg-gray-800/50 border border-gray-700">
            <p className="text-lg font-bold text-green-400">8</p>
            <p className="text-[10px] text-gray-400">Conexiones</p>
          </div>
          <div className="p-2 rounded-lg bg-gray-800/50 border border-gray-700">
            <p className="text-lg font-bold text-purple-400">95%</p>
            <p className="text-[10px] text-gray-400">Completado</p>
          </div>
        </div>
      </div>
    </div>
  );
}
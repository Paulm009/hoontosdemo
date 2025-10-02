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
    <div className="rounded-2xl border border-gray-700 bg-gray-900 shadow-lg">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-900 to-purple-900 p-4 border-b border-gray-700">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-blue-600 rounded-lg">
            <Eye className="w-5 h-5 text-white" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-white">Mi sinopsis</h2>
            <p className="text-sm text-blue-200">Configura tu visibilidad</p>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="p-4 space-y-4">
        {/* Badge */}
        <div className="flex justify-center">
          <Badge />
        </div>

        {/* Options - CORREGIDO */}
        <div className="space-y-3">
          {options.map((o) => (
            <div key={o.t1} className="flex items-center justify-between p-3 bg-gray-800 rounded-lg border border-gray-700">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-900 rounded-lg">
                  {o.icon}
                </div>
                <div>
                  <p className="text-sm font-medium text-white">{o.t1}</p>
                  <p className="text-xs text-gray-400">{o.t2}</p>
                </div>
              </div>
              
              {/* Toggle Switch Funcional */}
              <label className="relative inline-flex items-center cursor-pointer">
                <input 
                  type="checkbox" 
                  checked={toggleStates[o.key]}
                  onChange={() => handleToggleChange(o.key)}
                  className="sr-only peer" 
                />
                <div className="w-11 h-6 bg-gray-700 rounded-full peer peer-checked:bg-blue-600 transition-colors duration-300"></div>
                <div className="absolute left-1 top-1 bg-white border border-gray-300 rounded-full h-4 w-4 transition-transform duration-300 peer-checked:translate-x-5"></div>
              </label>
            </div>
          ))}
        </div>

        {/* Link Section */}
        <div className="p-3 bg-blue-900/20 rounded-lg border border-blue-500/30">
          <div className="flex items-center gap-2 mb-3">
            <LinkIcon className="w-4 h-4 text-blue-400" />
            <span className="text-sm font-medium text-white">Link de mi perfil profesional</span>
          </div>
          
          <div className="space-y-2">
            <div className="flex gap-2">
              <input
                readOnly
                value={perfilUrl}
                className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded text-sm text-white"
              />
              <button
                onClick={copy}
                className="px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded transition-colors"
              >
                {copyButtonText}
              </button>
            </div>
            
            <a
              href={`mailto:?subject=Mi perfil&body=${perfilUrl}`}
              className="flex items-center justify-center gap-2 w-full py-2 bg-purple-600 hover:bg-purple-700 text-white text-sm rounded transition-colors"
            >
              <Share2 className="w-4 h-4" />
              Compartir por email
            </a>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-3 text-center">
          <div className="p-2 bg-gray-800 rounded border border-gray-700">
            <p className="text-lg font-bold text-blue-400">12</p>
            <p className="text-xs text-gray-400">Visitas</p>
          </div>
          <div className="p-2 bg-gray-800 rounded border border-gray-700">
            <p className="text-lg font-bold text-green-400">8</p>
            <p className="text-xs text-gray-400">Conexiones</p>
          </div>
          <div className="p-2 bg-gray-800 rounded border border-gray-700">
            <p className="text-lg font-bold text-purple-400">95%</p>
            <p className="text-xs text-gray-400">Completado</p>
          </div>
        </div>
      </div>
    </div>
  );
}
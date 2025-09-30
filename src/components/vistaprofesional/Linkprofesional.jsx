// components/vistaprofesional/LinkProfesional.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function Linkprofesional() {
  return (
    <div className="min-h-screen bg-gray-900 text-white py-10 font-sans flex justify-center">
      <div className="w-full max-w-6xl px-6 md:px-12">
        
        {/* FILA SUPERIOR: Imagen + Nombre  |  Botones */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-6">
          {/* Izquierda: Imagen + Nombre */}
          <div className="flex items-center gap-6">
            <img
              src="./src/assets/paul.png"
              alt="Paul Martinez"
              className="w-36 h-36 md:w-40 md:h-40 rounded-full border-4 border-gray-600"
            />
            <div className="flex flex-col">
              <h1 className="text-[36px] font-bold text-white">PAUL MARTINEZ</h1>
              <p className="text-gray-400 text-lg">Backend Developer</p>
              
              {/* Botones movidos aquí - debajo del nombre */}
              <div className="flex gap-2 mt-4">
                <button className="bg-blue-600 px-4 py-2 rounded text-white hover:bg-blue-700 transition-colors">
                  View Résumé
                </button>
                <button className="bg-gray-700 px-4 py-2 rounded text-white hover:bg-gray-600 transition-colors">
                  Contact
                </button>
              </div>
            </div>
          </div>

          {/* Espacio derecho eliminado ya que los botones se movieron */}
        </div>

        {/* TRAITS */}
        <div className="space-y-6">
          {/* Dominant Traits */}
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-white">Dominant Traits</h2>
            <div className="flex flex-wrap gap-4">
              <span className="flex items-center bg-[#5BC659] text-white px-4 py-3 rounded-lg text-lg font-medium">
                <img src="./src/assets/Flecha.svg" alt="Analytical" className="w-6 h-6 mr-3" />
                ANALYTICAL-AUTONOMOUS 
              </span>
            </div>
            
            <div className="flex flex-wrap gap-4 mt-4">
              <span className="flex items-center bg-orange-500 text-white px-4 py-3 rounded-lg text-lg font-medium">
                <img src="./src/assets/bandera.svg" alt="Directive" className="w-6 h-6 mr-3" />
                ASSERTIVE-DIRECTIVE
              </span>
            </div>
          </div>

          {/* Supportive Traits */}
          <div>
            <h2 className="text-2xl font-semibold mb-6 text-white">Supportive Traits</h2>
            <div className="grid grid-cols-2 gap-8">
              {/* Columna 1 */}
              <div className="space-y-6">
                {/* Ethical-Leader */}
                <div>
                  <div className="flex justify-between mb-3">
                    <span className="text-gray-300 text-lg font-medium">Ethical-Leader</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-lg h-4">
                    <div
                      className="bg-gray-400 h-4 rounded-lg"
                      style={{ width: "50%" }}
                    ></div>
                  </div>
                </div>

                {/* Creative-Innovative */}
                <div>
                  <div className="flex justify-between mb-3">
                    <span className="text-gray-300 text-lg font-medium">Creative-Innovative</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-lg h-4">
                    <div
                      className="bg-yellow-500 h-4 rounded-lg"
                      style={{ width: "60%" }}
                    ></div>
                  </div>
                </div>
              </div>

              {/* Columna 2 */}
              <div className="space-y-6">
                {/* Resilient-Adaptive */}
                <div>
                  <div className="flex justify-between mb-3">
                    <span className="text-gray-300 text-lg font-medium">Resilient-Adaptive</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-lg h-4">
                    <div
                      className="bg-blue-500 h-4 rounded-lg"
                      style={{ width: "70%" }}
                    ></div>
                  </div>
                </div>

                {/* Altruistic-Creator */}
                <div>
                  <div className="flex justify-between mb-3">
                    <span className="text-gray-300 text-lg font-medium">Altruistic-Creator</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-lg h-4">
                    <div
                      className="bg-purple-500 h-4 rounded-lg"
                      style={{ width: "45%" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Synopsis */}
        <div className="mt-10">
          <h2 className="text-2xl font-semibold mb-2 text-white">Synopsis</h2>
          <p className="text-[19px] text-gray-300 max-w-9xl leading-relaxed">
            Paul es un emprendedor con experiencia en liderazgo y desarrollo de
            empresas emergentes, con un profundo conocimiento en ingeniería
            informática, desarrollo de soluciones digitales como chatbots y
            aplicaciones web, y administración de redes (certificación CCNA).
            Domina metodologías ágiles como Scrum y tener habilidades en
            desarrollo empresarial, enfocándose en crear herramientas
            innovadoras que optimicen procesos. Es esencial que demuestre
            liderazgo estratégico, visión para alinear soluciones tecnológicas
            con objetivos comerciales, y capacidad para construir y dirigir
            equipos en entornos dinámicos, con un historial en la fundación y
            crecimiento de iniciativas tecnológicas.
          </p>
        </div>

        {/* Key Competencies */}
        <div className="mt-10">
          <h2 className="text-2xl font-semibold mb-4 text-white">Key Competencies</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 max-w-9xl">
            <div className="flex items-center p-4 bg-gray-800 rounded-lg border border-gray-700 hover:bg-gray-750 transition-colors">
              <img src="./src/assets/download1.svg" alt="Next.js" className="w-10 h-10 mr-3" />
              <span className="text-[18px] text-gray-200">Full-stack apps with Next.js</span>
            </div>
            <div className="flex items-center p-4 bg-gray-800 rounded-lg border border-gray-700 hover:bg-gray-750 transition-colors">
              <img src="./src/assets/download2.svg" alt="Linux" className="w-10 h-10 mr-3" />
              <span className="text-[18px] text-gray-200">Linux Administration</span>
            </div>
            <div className="flex items-center p-4 bg-gray-800 rounded-lg border border-gray-700 hover:bg-gray-750 transition-colors">
              <img src="./src/assets/download3.svg" alt="SQL" className="w-10 h-10 mr-3" />
              <span className="text-[18px] text-gray-200">Back-end data modeling & SQL</span>
            </div>
            <div className="flex items-center p-4 bg-gray-800 rounded-lg border border-gray-700 hover:bg-gray-750 transition-colors">
              <img src="./src/assets/download4.svg" alt="Leadership" className="w-10 h-10 mr-3" />
              <span className="text-[18px] text-gray-200">Technical leadership & optimization</span>
            </div>
          </div>
        </div>

        {/* Generate Button */}
        <div className="mt-12 text-center">
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 rounded-lg text-white text-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105">
            Generate 1 For Me
          </button>
          <p className="text-gray-400 text-sm mt-3">
            Turn your resume into a shareable synopsis in 20 seconds
          </p>
        </div>
      </div>
    </div>
  );
}
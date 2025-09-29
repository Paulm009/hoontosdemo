// components/vistaprofesional/LinkProfesional.jsx
import React from 'react';
import { Link } from 'react-router-dom';
// import paulImg from '../../assets/paul.png'; // usa esto si prefieres importar

export default function Linkprofesional() {
  return (
    <div className="min-h-screen bg-white text-black py-10 font-sans flex justify-center">
      <div className="w-full max-w-6xl px-6 md:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div className="relative">
 <div className="relative w-full">
  {/* Botones arriba a la derecha */}
  <div className="absolute top-0 right-0 flex gap-3">
    <button className="bg-blue-600 px-4 py-2 rounded text-white hover:bg-blue-700">
      View Résumé
    </button>
    <button className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300">
      Contact
    </button>
  </div>
</div>

</div>

        </div>

        {/* Top Section: Image + Traits */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-start">
          {/* Profile Picture */}
       <div className="flex justify-center md:justify-start items-center gap-8 mb-8">
  <img
    src="./src/assets/paul.png"
    alt="Paul Martinez"
    className="w-36 h-36 md:w-40 md:h-40 rounded-full border-4 border-gray-300"
  />
  
  <div className="flex flex-col">
    <h1 className="text-4xl font-bold">PAUL MARTINEZ</h1>
    <p className="text-gray-600 text-lg">Backend Developer</p>
  </div>
</div>

<br />
          {/* Traits */}
          <div className="md:col-span-3 space-y-6">
            {/* Dominant Traits */}
            <div>
              <h2 className="text-xl font-semibold mb-2">Dominant Traits</h2>
              <div className="flex flex-wrap gap-3">
                <span className="bg-green-600 text-white px-3 py-1 rounded">
                  📈 Analytical-Autonomous
                </span>
                <span className="bg-orange-500 text-white px-3 py-1 rounded">
                  📢 Assertive-Directive
                </span>
              </div>
            </div>

            {/* Supportive Traits */}
            <div>
              <h2 className="text-xl font-semibold mb-4">Supportive Traits</h2>
              <div className="space-y-4 max-w-2xl">
                {/* Trait: Creative-Innovative */}
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-yellow-600">Creative-Innovative</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded h-2">
                    <div
                      className="bg-yellow-500 h-2 rounded"
                      style={{ width: '60%' }}
                    ></div>
                  </div>
                </div>

                {/* Trait: Altruistic-Creator */}
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-purple-600">Altruistic-Creator</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded h-2">
                    <div
                      className="bg-purple-500 h-2 rounded"
                      style={{ width: '45%' }}
                    ></div>
                  </div>
                </div>

                {/* Trait: Resilient-Adaptive */}
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-blue-600">Resilient-Adaptive</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded h-2">
                    <div
                      className="bg-blue-500 h-2 rounded"
                      style={{ width: '70%' }}
                    ></div>
                  </div>
                </div>

                {/* Trait: Ethical-Leader */}
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-700">Ethical-Leader</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded h-2">
                    <div
                      className="bg-gray-500 h-2 rounded"
                      style={{ width: '50%' }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Synopsis */}
        <div className="mt-10">
          <h2 className="text-xl font-semibold mb-2">Synopsis</h2>
          <p className="text-gray-700 max-w-4xl">
           Paul es un emprendedor con experiencia en liderazgo y desarrollo de empresas emergentes, con un profundo conocimiento en ingeniería informática, desarrollo de soluciones digitales como chatbots y aplicaciones web, y administración de redes (certificación CCNA). Domina metodologías ágiles como Scrum y tener habilidades en desarrollo empresarial, enfocándose en crear herramientas innovadoras que optimicen procesos. Es esencial que demuestre liderazgo estratégico, visión para alinear soluciones tecnológicas con objetivos comerciales, y capacidad para construir y dirigir equipos en entornos dinámicos, con un historial en la fundación y crecimiento de iniciativas tecnológicas.
          </p>
        </div>

        {/* Key Competencies */}
        <div className="mt-10">
          <h2 className="text-xl font-semibold mb-4">Key Competencies</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 max-w-4xl">
            <div className="bg-gray-100 p-4 rounded border border-gray-300">
              ✅ Full-stack apps with Next.js
            </div>
            <div className="bg-gray-100 p-4 rounded border border-gray-300">
              ✅ Linux Administration
            </div>
            <div className="bg-gray-100 p-4 rounded border border-gray-300">
              ✅ Back-end data modeling & SQL
            </div>
            <div className="bg-gray-100 p-4 rounded border border-gray-300">
              ✅ Technical leadership & optimization
            </div>
          </div>
        </div>

        {/* Generate Button */}
        <div className="mt-12 text-center">
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 rounded text-white text-lg font-semibold">
            Generate 1 For Me
          </button>
          <p className="text-sm text-gray-500 mt-2">
            Turn your resume into a shareable synopsis in 20 seconds
          </p>
        </div>
      </div>
    </div>
  );
}

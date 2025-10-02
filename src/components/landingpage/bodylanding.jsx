// components/ProfessionalSynopsis.jsx
import { useState } from 'react';
import { CloudUpload, ChartLine, Download, Share2 } from 'lucide-react';

const ProfessionalSynopsis = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [email, setEmail] = useState('');

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    // Aquí manejarías la subida del archivo
    console.log('Archivo subido');
  };

  const handleGenerate = () => {
    // Lógica para generar la sinopsis
    console.log('Generando sinopsis...');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-gray-100 py-8 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">
            Your Professional Story, <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Amplified</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Upload your resume and transform it into a professional digital synopsis 
            that highlights your traits, skills, and strengths in 20 seconds.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Upload Form */}
          <div className="space-y-8">
            {/* Upload Card */}
            <div className="bg-slate-800/70 backdrop-blur-sm rounded-2xl p-8 border border-slate-700 shadow-2xl">
              <div 
                className={`rounded-xl p-8 text-center cursor-pointer mb-6 transition-all duration-300 ${
                  isDragging 
                    ? 'border-2 border-blue-400 bg-blue-500/10' 
                    : 'border-2 border-dashed border-slate-600 hover:border-blue-400 hover:bg-blue-500/5'
                }`}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
              >
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-blue-900/30 flex items-center justify-center">
                    <CloudUpload className="w-8 h-8 text-blue-400" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">Upload your resume</h3>
                <p className="text-gray-400 mb-4">PDF, DOC or DOCX (max. 5MB)</p>
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105">
                  Select File
                </button>
              </div>
              
              {/* Email Input */}
              <div className="mb-6">
                <label className="block text-gray-300 mb-2 font-medium">Your email</label>
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  placeholder="you@example.com"
                />
              </div>
              
              {/* Generate Button */}
              <button 
                onClick={handleGenerate}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
              >
                Generate Synopsis
              </button>
            </div>
            
            {/* Stats */}
            <div className="bg-slate-800/70 backdrop-blur-sm rounded-2xl p-6 border border-slate-700">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-2xl font-bold">150,599</p>
                  <p className="text-gray-400 text-sm">Professionals amplified</p>
                </div>
                <div className="w-16 h-16 rounded-full bg-green-900/30 flex items-center justify-center">
                  <ChartLine className="w-8 h-8 text-green-400" />
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Column - Profile Card */}
          <div className="relative">
            <div className="bg-slate-800/70 backdrop-blur-sm rounded-2xl p-8 border border-slate-700 shadow-2xl transform perspective-1000 rotate-y-[-5deg] hover:rotate-y-0 transition-transform duration-500">
              {/* Profile Header */}
              <div className="flex items-center mb-8">
                <div className="w-20 h-20 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-2xl mr-4">
                  PM
                </div>
                <div>
                  <h2 className="text-2xl font-bold">PAUL MARTINEZ</h2>
                  <p className="text-blue-400 font-medium">BACKEND EXPLORER</p>
                </div>
              </div>
              
              {/* Dominant Traits */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3 text-white">Dominant Traits</h3>
                <div className="flex flex-wrap gap-2">
                  {['ANALYTICAL', 'AUTONOMOUS', 'ASSERTIVE', 'DIRECTIVE'].map((trait) => (
                    <span 
                      key={trait}
                      className="bg-gradient-to-r from-blue-700 to-indigo-700 text-white py-1 px-3 rounded-full text-sm font-medium transition-transform duration-300 hover:scale-105"
                    >
                      {trait}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Supportive Traits */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3 text-white">Supportive Traits</h3>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    'Creative Innovation',
                    'Resistant Adaptive', 
                    'Attractive Creator',
                    'Ethical Leader'
                  ].map((trait) => (
                    <div 
                      key={trait}
                      className="bg-gradient-to-r from-indigo-700 to-purple-700 text-white p-3 rounded-lg transition-transform duration-300 hover:scale-105"
                    >
                      <p className="font-medium text-sm">{trait}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Synopsis */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3 text-white">Synopsis</h3>
                <p className="text-gray-300 leading-relaxed">
                  Entrepreneur & backward engineer focused on building an extension and new agent. 
                  A new practitioner (Scrum), CCMA, certifiable, and experienced in optimizing processes 
                  with agile methodologies and technical leadership.
                </p>
              </div>
              
              {/* Key Competencies */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-3 text-white">Key Competencies</h3>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    'Full-stack apps with Next.js',
                    'Linux Administration',
                    'Creative',
                    'Back-end data modeling & SQL',
                    'Technical leadership & optimization'
                  ].map((competency, index) => (
                    <div 
                      key={competency}
                      className={`bg-slate-900/50 p-2 rounded-lg text-center text-sm transition-all duration-300 hover:bg-slate-900/70 ${
                        index === 4 ? 'col-span-2' : ''
                      }`}
                    >
                      {competency}
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Action Buttons */}
              <div className="flex justify-between">
                <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition-all duration-300 transform hover:scale-105">
                  <Download className="w-4 h-4" />
                  Generate
                </button>
                <button className="flex items-center gap-2 border border-blue-500 text-blue-400 hover:bg-blue-500/10 font-medium py-2 px-6 rounded-lg transition-all duration-300 transform hover:scale-105">
                  <Share2 className="w-4 h-4" />
                  For Use
                </button>
              </div>
              
              {/* Footer Note */}
              <div className="mt-6 pt-4 border-t border-slate-700 text-center text-sm text-gray-400">
                You may return from Adversity Investors 2019 month.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalSynopsis;
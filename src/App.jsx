// App.jsx
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import UploadCard from "./components/UploadCard.jsx";
import LinkProfesional from "./components/vistaprofesional/Linkprofesional.jsx";
import BodyLanding from "./components/landingpage/bodylanding.jsx"; // Cambiado a mayúscula

function HomePage() {
  return (
    <div className="min-h-screen dark bg-gray-900 text-gray-100">
      <Header />
      <main className="max-w-[1600px] mx-auto px-4 py-6">
  <div className="grid gap-4 md:grid-cols-2">
    <UploadCard />
    <div className="h-full md:max-h-[80vh] overflow-y-auto">
      <LinkProfesional />
    </div>
  </div>
</main>


      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/inicio" element={<HomePage />} />
      <Route path="/linkprofesional" element={<LinkProfesional />} />
      <Route path="/" element={<BodyLanding />} /> {/* Cambiado a mayúscula */}
    </Routes>
  );
}
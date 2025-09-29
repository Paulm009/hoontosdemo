// App.jsx
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import UploadCard from "./components/UploadCard.jsx";
import Sidebar from "./components/Sidebar.jsx";
import NetworkingList from "./components/NetworkingList.jsx";
import LinkProfesional from "./components/vistaprofesional/Linkprofesional.jsx";

function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto py-6">
        <div className="grid gap-6 md:grid-cols-[300px_1fr_320px]">
          <Sidebar />
          <UploadCard />
          <NetworkingList />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/linkprofesional" element={<LinkProfesional />} />
    </Routes>
  );
}
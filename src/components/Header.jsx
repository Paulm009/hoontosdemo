import { Bell, User } from "lucide-react";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <header className="w-full border-b border-[hsl(217.2,32.6%,17.5%)] px-6 py-3 flex justify-between items-center bg-[hsl(222.2,84%,4.9%)]">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <img 
          src="./src/assets/twintro-Photoroom.png" 
          alt="ConectaPro Logo" 
          className="w-8 h-8 object-contain"
        />
        <Link to="/" className="font-bold text-lg">
  Twintro
</Link>
      </div>

      {/* Buscador */}
      <div className="flex-1 max-w-lg mx-8">
        <input
          type="text"
          placeholder="Buscar..."
          className="w-full px-4 py-2 rounded-full bg-[hsl(217.2,32.6%,17.5%)] text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
      </div>

      {/* Iconos */}
      <div className="flex items-center gap-4">
        <Bell className="w-5 h-5 text-yellow-400" />
        <User className="w-5 h-5" />
      </div>
    </header>
  );
}
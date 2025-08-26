import { Bars3Icon } from "@heroicons/react/24/outline";

const Navbar = ({ onToggleSidebar }) => {
  return (
    <nav className=" shadow-sm bg-[#043345] fixed w-full z-30 top-0">
      <div className="px-3 py-3 lg:px-5 lg:pl-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-start">
            {/* Botão para abrir/fechar sidebar no mobile */}
            <button
              onClick={onToggleSidebar}
              className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            >
              <span className="sr-only">Abrir sidebar</span>
              <Bars3Icon className="w-6 h-6" />
            </button>

            {/* Logo da empresa */}
            <a href="#" className="flex ml-2 md:mr-24">
              <img
                src="/Logo-Color-Verde.png"
                alt="SEC365 Logo"
                className="h-10 mr-3"
              />
            </a>
          </div>

          {/* Área do usuário (opcional) */}
          <div className="flex items-center">
            <div className="flex items-center ml-3">
              <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                <span className="text-sm font-medium text-gray-700">U</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

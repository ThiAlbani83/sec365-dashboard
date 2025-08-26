import {
  HomeIcon,
  ChartBarIcon,
  UsersIcon,
  CogIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

const Sidebar = ({ isOpen, onClose, activeItem, setActiveItem }) => {
  const menuItems = [
    {
      id: "dashboard",
      name: "Dashboard",
      icon: HomeIcon,
      href: "#dashboard",
    },
    {
      id: "analytics",
      name: "Analytics",
      icon: ChartBarIcon,
      href: "#analytics",
    },
    {
      id: "usuarios",
      name: "Usuários",
      icon: UsersIcon,
      href: "#usuarios",
    },
    {
      id: "configuracoes",
      name: "Configurações",
      icon: CogIcon,
      href: "#configuracoes",
    },
  ];

  const handleItemClick = (itemId) => {
    setActiveItem(itemId);
    // Fechar sidebar no mobile após clicar
    if (window.innerWidth < 640) {
      onClose();
    }
  };

  return (
    <>
      {/* Overlay para mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 bg-gray-900 bg-opacity-50 sm:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-50 w-64 h-screen pt-20 transition-transform bg-[#043345] border-r border-gray-200 sm:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } sm:block`}
      >
        {/* Botão fechar para mobile */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 p-2 text-white rounded-lg sm:hidden hover:bg-[#054455] focus:outline-none focus:ring-2 focus:ring-white"
        >
          <XMarkIcon className="w-6 h-6" />
        </button>

        <div className="h-full px-3 pb-4 overflow-y-auto">
          <img
            src="/logo.png"
            alt="Logo"
            className="w-32 h-auto mx-auto mb-4"
          />
          <ul className="space-y-2 font-medium">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeItem === item.id;

              return (
                <li key={item.id}>
                  <a
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleItemClick(item.id);
                    }}
                    className={`flex items-center p-2 rounded-lg transition-colors duration-200 group ${
                      isActive
                        ? "bg-white text-[#043345]"
                        : "text-white hover:bg-[#054455]"
                    }`}
                  >
                    <Icon
                      className={`w-5 h-5 transition duration-75 ${
                        isActive
                          ? "text-[#043345]"
                          : "text-gray-300 group-hover:text-white"
                      }`}
                    />
                    <span className="ml-3">{item.name}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;

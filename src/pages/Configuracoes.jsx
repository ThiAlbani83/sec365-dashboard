const Configuracoes = () => {
  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Configurações</h1>
        <p className="text-gray-600 mt-2">Configurações do sistema</p>
      </div>

      <div className="space-y-6">
        {/* Configurações gerais */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Configurações Gerais
          </h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Nome da Empresa
              </label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#043345] focus:border-transparent"
                defaultValue="SEC365"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email de Contato
              </label>
              <input
                type="email"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#043345] focus:border-transparent"
                defaultValue="contato@sec365.com"
              />
            </div>
          </div>
        </div>

        {/* Configurações de segurança */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Segurança
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-sm font-medium text-gray-900">
                  Autenticação de dois fatores
                </h3>
                <p className="text-sm text-gray-500">
                  Adicione uma camada extra de segurança
                </p>
              </div>
              <button className="bg-[#043345] text-white px-4 py-2 rounded-md hover:bg-[#054455] transition-colors">
                Ativar
              </button>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-sm font-medium text-gray-900">
                  Notificações de login
                </h3>
                <p className="text-sm text-gray-500">
                  Receba alertas sobre novos logins
                </p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  defaultChecked
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#043345]"></div>
              </label>
            </div>
          </div>
        </div>

        <div className="flex justify-end">
          <button className="bg-[#043345] text-white px-6 py-2 rounded-md hover:bg-[#054455] transition-colors">
            Salvar Configurações
          </button>
        </div>
      </div>
    </div>
  );
};

export default Configuracoes;

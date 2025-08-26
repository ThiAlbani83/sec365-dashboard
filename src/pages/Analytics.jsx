const Analytics = () => {
  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Analytics</h1>
        <p className="text-gray-600 mt-2">Análise detalhada dos dados</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Gráfico de Vendas
          </h2>
          <div className="h-64 bg-blue-50 rounded-lg flex items-center justify-center">
            <p className="text-blue-600">Gráfico de vendas mensais</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Métricas de Usuários
          </h2>
          <div className="h-64 bg-green-50 rounded-lg flex items-center justify-center">
            <p className="text-green-600">Gráfico de usuários ativos</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;

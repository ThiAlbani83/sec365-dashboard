import CircularKPI from "../components/CircularKPI";
import SimpleKPI from "../components/SimpleKPI";
import HeatMap from "../components/HeatMap";

const Dashboard = () => {
  // Dados dos incidentes de segurança
  const securityMetrics = {
    totalCases: 156,
    newCases: 24,
    inProgress: 18,
    highSeverity: 8,
    mediumSeverity: 32,
  };

  // Dados dos novos KPIs
  const additionalMetrics = {
    uptime: 99.7,
    responseTime: 234,
    activeUsers: 1247,
    completedTasks: 89,
    efficiency: 94.3,
  };

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Security Dashboard</h1>
        <p className="text-gray-600 mt-2">
          Monitoramento de Incidentes de Segurança Eletrônica - SEC365
        </p>
      </div>

      {/* KPIs de Segurança Principais - Compactos */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <CircularKPI
          title="New Cases"
          value={securityMetrics.newCases}
          total={securityMetrics.totalCases}
          color="blue"
        />

        <CircularKPI
          title="In Progress"
          value={securityMetrics.inProgress}
          total={securityMetrics.totalCases}
          color="green"
        />

        <CircularKPI
          title="High Severity"
          value={securityMetrics.highSeverity}
          total={securityMetrics.totalCases}
          color="red"
        />

        <CircularKPI
          title="Medium Severity"
          value={securityMetrics.mediumSeverity}
          total={securityMetrics.totalCases}
          color="orange"
        />
      </div>

      {/* Nova seção: KPIs Laterais + Radar Central Expandido */}
      <div className="grid grid-cols-12 gap-6 mb-8 min-h-[500px]">
        {/* KPIs do lado esquerdo */}
        <div className="col-span-12 lg:col-span-2 space-y-4">
          <SimpleKPI
            title="System Uptime"
            value={`${additionalMetrics.uptime}%`}
            subtitle="Últimas 24 horas"
            color="green"
            trend={{ type: "up", value: "+0.2%" }}
          />

          <SimpleKPI
            title="Response Time"
            value={`${additionalMetrics.responseTime}ms`}
            subtitle="Tempo médio de resposta"
            color="blue"
            trend={{ type: "down", value: "-15ms" }}
          />

          <SimpleKPI
            title="Active Users"
            value={additionalMetrics.activeUsers.toLocaleString()}
            subtitle="Usuários online agora"
            color="purple"
            trend={{ type: "up", value: "+47" }}
          />
        </div>

        {/* Mapa de Calor Central Expandido */}
        <div className="col-span-12 lg:col-span-8 flex items-center justify-center">
          <div className="w-full h-full">
            <HeatMap />
          </div>
        </div>

        {/* KPIs do lado direito */}
        <div className="col-span-12 lg:col-span-2 space-y-4">
          <SimpleKPI
            title="Tasks Completed"
            value={`${additionalMetrics.completedTasks}%`}
            subtitle="Taxa de conclusão hoje"
            color="orange"
            trend={{ type: "up", value: "+3%" }}
          />

          <SimpleKPI
            title="System Efficiency"
            value={`${additionalMetrics.efficiency}%`}
            subtitle="Performance geral"
            color="red"
            trend={{ type: "up", value: "+1.2%" }}
          />
        </div>
      </div>

      {/* Tabela de Chamados */}
      <div className="bg-white rounded-lg shadow p-6 mb-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">
          Lista de Chamados
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  ID
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Nome
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  SLA
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Respostas
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Visualizações
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Nível
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Avaliação
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Último Log
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr className="hover:bg-gray-50">
                <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900">
                  #CHM-001
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                  Falha no Sistema de Alarme
                </td>
                <td className="px-4 py-3 whitespace-nowrap">
                  <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                    No Prazo
                  </span>
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500 text-center">
                  3
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500 text-center">
                  127
                </td>
                <td className="px-4 py-3 whitespace-nowrap">
                  <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-red-100 text-red-800">
                    Crítico
                  </span>
                </td>
                <td className="px-4 py-3 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="flex text-yellow-400">★★★★☆</div>
                    <span className="ml-2 text-sm text-gray-500">4.0</span>
                  </div>
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                  26/08 14:30
                </td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900">
                  #CHM-002
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                  Câmera de Segurança Offline
                </td>
                <td className="px-4 py-3 whitespace-nowrap">
                  <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-yellow-100 text-yellow-800">
                    Atenção
                  </span>
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500 text-center">
                  1
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500 text-center">
                  45
                </td>
                <td className="px-4 py-3 whitespace-nowrap">
                  <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-orange-100 text-orange-800">
                    Alto
                  </span>
                </td>
                <td className="px-4 py-3 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="flex text-yellow-400">★★★☆☆</div>
                    <span className="ml-2 text-sm text-gray-500">3.0</span>
                  </div>
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                  26/08 12:15
                </td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900">
                  #CHM-003
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                  Sensor de Movimento Irregular
                </td>
                <td className="px-4 py-3 whitespace-nowrap">
                  <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                    No Prazo
                  </span>
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500 text-center">
                  5
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500 text-center">
                  89
                </td>
                <td className="px-4 py-3 whitespace-nowrap">
                  <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800">
                    Médio
                  </span>
                </td>
                <td className="px-4 py-3 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="flex text-yellow-400">★★★★★</div>
                    <span className="ml-2 text-sm text-gray-500">5.0</span>
                  </div>
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                  26/08 10:45
                </td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900">
                  #CHM-004
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                  Atualização de Firmware
                </td>
                <td className="px-4 py-3 whitespace-nowrap">
                  <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-red-100 text-red-800">
                    Atrasado
                  </span>
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500 text-center">
                  2
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500 text-center">
                  234
                </td>
                <td className="px-4 py-3 whitespace-nowrap">
                  <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-gray-100 text-gray-800">
                    Baixo
                  </span>
                </td>
                <td className="px-4 py-3 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="flex text-yellow-400">★★☆☆☆</div>
                    <span className="ml-2 text-sm text-gray-500">2.0</span>
                  </div>
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                  25/08 16:20
                </td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900">
                  #CHM-005
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                  Configuração de Acesso
                </td>
                <td className="px-4 py-3 whitespace-nowrap">
                  <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                    No Prazo
                  </span>
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500 text-center">
                  7
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500 text-center">
                  156
                </td>
                <td className="px-4 py-3 whitespace-nowrap">
                  <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800">
                    Médio
                  </span>
                </td>
                <td className="px-4 py-3 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="flex text-yellow-400">★★★★☆</div>
                    <span className="ml-2 text-sm text-gray-500">4.5</span>
                  </div>
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                  25/08 09:30
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Resumos Compactos */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow p-4">
          <h2 className="text-lg font-semibold text-gray-900 mb-3">
            Incidentes por Severidade
          </h2>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-red-50 p-3 rounded-lg text-center">
              <div className="text-red-600 font-bold text-xl">
                {securityMetrics.highSeverity}
              </div>
              <div className="text-red-800 text-sm">Alto Risco</div>
            </div>
            <div className="bg-orange-50 p-3 rounded-lg text-center">
              <div className="text-orange-600 font-bold text-xl">
                {securityMetrics.mediumSeverity}
              </div>
              <div className="text-orange-800 text-sm">Médio Risco</div>
            </div>
            <div className="bg-yellow-50 p-3 rounded-lg text-center">
              <div className="text-yellow-600 font-bold text-xl">48</div>
              <div className="text-yellow-800 text-sm">Baixo Risco</div>
            </div>
            <div className="bg-green-50 p-3 rounded-lg text-center">
              <div className="text-green-600 font-bold text-xl">68</div>
              <div className="text-green-800 text-sm">Resolvidos</div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-4">
          <h2 className="text-lg font-semibold text-gray-900 mb-3">
            Status dos Casos
          </h2>
          <div className="space-y-2">
            <div className="flex items-center justify-between bg-blue-50 p-2 rounded">
              <span className="text-blue-800 text-sm">Novos Casos</span>
              <span className="text-blue-600 font-bold">
                {securityMetrics.newCases}
              </span>
            </div>
            <div className="flex items-center justify-between bg-green-50 p-2 rounded">
              <span className="text-green-800 text-sm">Em Progresso</span>
              <span className="text-green-600 font-bold">
                {securityMetrics.inProgress}
              </span>
            </div>
            <div className="flex items-center justify-between bg-purple-50 p-2 rounded">
              <span className="text-purple-800 text-sm">Aguardando</span>
              <span className="text-purple-600 font-bold">12</span>
            </div>
            <div className="flex items-center justify-between bg-gray-50 p-2 rounded">
              <span className="text-gray-800 text-sm">Finalizados</span>
              <span className="text-gray-600 font-bold">94</span>
            </div>
          </div>
        </div>
      </div>

      {/* Atividade Recente dos Sistemas */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">
          Atividade Recente dos Sistemas
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  ID
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Tipo de Evento
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Sistema
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Severidade
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Data/Hora
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr className="hover:bg-gray-50">
                <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900">
                  #EVT-001
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                  Tentativa de Invasão
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                  Firewall Principal
                </td>
                <td className="px-4 py-3 whitespace-nowrap">
                  <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-red-100 text-red-800">
                    Crítica
                  </span>
                </td>
                <td className="px-4 py-3 whitespace-nowrap">
                  <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                    Bloqueado
                  </span>
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                  26/08/2025 14:30
                </td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900">
                  #EVT-002
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                  Malware Detectado
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                  Antivírus Endpoint
                </td>
                <td className="px-4 py-3 whitespace-nowrap">
                  <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-orange-100 text-orange-800">
                    Alta
                  </span>
                </td>
                <td className="px-4 py-3 whitespace-nowrap">
                  <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800">
                    Em Análise
                  </span>
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                  26/08/2025 13:15
                </td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900">
                  #EVT-003
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                  Login Suspeito
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                  Sistema de Acesso
                </td>
                <td className="px-4 py-3 whitespace-nowrap">
                  <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-yellow-100 text-yellow-800">
                    Média
                  </span>
                </td>
                <td className="px-4 py-3 whitespace-nowrap">
                  <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-purple-100 text-purple-800">
                    Monitorando
                  </span>
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                  26/08/2025 12:45
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

import { useState, useEffect } from "react";
import {
  ShieldExclamationIcon,
  FireIcon,
  ExclamationTriangleIcon,
} from "@heroicons/react/24/outline";

const HeatMap = () => {
  const [attackPoints, setAttackPoints] = useState([]);
  const [attackCount, setAttackCount] = useState(0);
  const [maxIntensity, setMaxIntensity] = useState(0);

  // Gerar pontos de ataque aleatórios em círculo
  const generateAttackPoint = () => {
    const angle = Math.random() * 2 * Math.PI;
    const radius = Math.random() * 150; // Raio máximo do círculo
    const centerX = 200; // Centro do círculo
    const centerY = 200;

    const x = centerX + radius * Math.cos(angle);
    const y = centerY + radius * Math.sin(angle);

    return {
      id: Date.now() + Math.random(),
      x,
      y,
      intensity: Math.random() * 100 + 10, // Intensidade entre 10-110
      timestamp: Date.now(),
      type: Math.random() > 0.5 ? "ddos" : "intrusion",
    };
  };

  // Simular ataques em tempo real
  useEffect(() => {
    const interval = setInterval(() => {
      // Adicionar novos ataques
      if (Math.random() > 0.3) {
        const newAttack = generateAttackPoint();

        setAttackPoints((prev) => {
          const updated = [...prev, newAttack];
          return updated.slice(-30); // Manter apenas os últimos 30 ataques
        });

        setAttackCount((prev) => prev + 1);
      }

      // Diminuir intensidade dos ataques existentes
      setAttackPoints((prev) => {
        const updated = prev
          .map((attack) => ({
            ...attack,
            intensity: Math.max(0, attack.intensity - 2),
          }))
          .filter((attack) => attack.intensity > 0);

        // Calcular intensidade máxima
        const max = Math.max(...updated.map((a) => a.intensity), 0);
        setMaxIntensity(max);

        return updated;
      });
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  // Função para calcular a cor baseada na intensidade
  const getHeatColor = (intensity) => {
    const normalizedIntensity = Math.min(intensity / 100, 1);

    if (normalizedIntensity > 0.8) {
      // Vermelho escuro para alta intensidade
      return `rgba(139, 0, 0, ${0.6 + normalizedIntensity * 0.4})`;
    } else if (normalizedIntensity > 0.6) {
      // Vermelho
      return `rgba(220, 20, 60, ${0.5 + normalizedIntensity * 0.4})`;
    } else if (normalizedIntensity > 0.4) {
      // Laranja avermelhado
      return `rgba(255, 69, 0, ${0.4 + normalizedIntensity * 0.4})`;
    } else if (normalizedIntensity > 0.2) {
      // Laranja
      return `rgba(255, 140, 0, ${0.3 + normalizedIntensity * 0.4})`;
    } else {
      // Verde/amarelo para baixa intensidade
      return `rgba(154, 205, 50, ${0.2 + normalizedIntensity * 0.4})`;
    }
  };

  // Obter status geral
  const getOverallStatus = () => {
    if (maxIntensity > 80)
      return { level: "Crítico", color: "#8B0000", icon: FireIcon };
    if (maxIntensity > 60)
      return { level: "Alto", color: "#DC143C", icon: ExclamationTriangleIcon };
    if (maxIntensity > 40)
      return {
        level: "Médio",
        color: "#FF4500",
        icon: ExclamationTriangleIcon,
      };
    if (maxIntensity > 20)
      return { level: "Baixo", color: "#FF8C00", icon: ShieldExclamationIcon };
    return { level: "Seguro", color: "#9ACD32", icon: ShieldExclamationIcon };
  };

  const status = getOverallStatus();

  return (
    <div className="h-full flex flex-col items-center justify-center">
      <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">
        Mapa de Calor de Ameaças - Densidade de Ataques
      </h3>

      <div className="relative w-96 h-96 mx-auto">
        {/* Container circular do mapa de calor */}
        <div className="w-full h-full relative">
          <svg width="400" height="400" className="absolute inset-0">
            {/* Definir gradientes para o efeito de calor */}
            <defs>
              {attackPoints.map((attack) => (
                <radialGradient
                  key={attack.id}
                  id={`gradient-${attack.id}`}
                  cx="50%"
                  cy="50%"
                  r="50%"
                >
                  <stop
                    offset="0%"
                    stopColor={getHeatColor(attack.intensity)}
                  />
                  <stop
                    offset="70%"
                    stopColor={getHeatColor(attack.intensity * 0.5)}
                  />
                  <stop offset="100%" stopColor="transparent" />
                </radialGradient>
              ))}

              {/* Máscara circular */}
              <mask id="circleMask">
                <circle cx="200" cy="200" r="180" fill="white" />
              </mask>
            </defs>

            {/* Fundo do círculo */}
            <circle
              cx="200"
              cy="200"
              r="180"
              fill="#f8f9fa"
              stroke="#e9ecef"
              strokeWidth="2"
            />

            {/* Grade circular para referência */}
            <g opacity="0.1">
              {[60, 120, 180].map((radius) => (
                <circle
                  key={radius}
                  cx="200"
                  cy="200"
                  r={radius}
                  fill="none"
                  stroke="#6c757d"
                  strokeWidth="1"
                />
              ))}
              {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => {
                const radian = (angle * Math.PI) / 180;
                const x2 = 200 + 180 * Math.cos(radian);
                const y2 = 200 + 180 * Math.sin(radian);
                return (
                  <line
                    key={angle}
                    x1="200"
                    y1="200"
                    x2={x2}
                    y2={y2}
                    stroke="#6c757d"
                    strokeWidth="1"
                  />
                );
              })}
            </g>

            {/* Pontos de calor */}
            <g mask="url(#circleMask)">
              {attackPoints.map((attack) => (
                <g key={attack.id}>
                  {/* Círculo de calor principal */}
                  <circle
                    cx={attack.x}
                    cy={attack.y}
                    r={Math.max(20, attack.intensity * 0.8)}
                    fill={`url(#gradient-${attack.id})`}
                    opacity="0.8"
                  />

                  {/* Ponto central */}
                  <circle
                    cx={attack.x}
                    cy={attack.y}
                    r="3"
                    fill={attack.type === "ddos" ? "#8B0000" : "#DC143C"}
                    opacity="0.9"
                  />

                  {/* Pulso para ataques recentes */}
                  {Date.now() - attack.timestamp < 5000 && (
                    <circle
                      cx={attack.x}
                      cy={attack.y}
                      r="5"
                      fill="none"
                      stroke={attack.type === "ddos" ? "#8B0000" : "#DC143C"}
                      strokeWidth="2"
                      opacity="0.7"
                    >
                      <animate
                        attributeName="r"
                        values="5;15;5"
                        dur="2s"
                        repeatCount="indefinite"
                      />
                      <animate
                        attributeName="opacity"
                        values="0.7;0;0.7"
                        dur="2s"
                        repeatCount="indefinite"
                      />
                    </circle>
                  )}
                </g>
              ))}
            </g>

            {/* Borda do círculo */}
            <circle
              cx="200"
              cy="200"
              r="180"
              fill="none"
              stroke="#6c757d"
              strokeWidth="3"
            />
          </svg>

          {/* Status central */}
          {/* <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div
              className="bg-white bg-opacity-95 rounded-full p-6 shadow-lg border-2"
              style={{ borderColor: status.color }}
            >
              <div className="text-center">
                <div
                  className="flex justify-center mb-2"
                  style={{ color: status.color }}
                >
                  <status.icon className="w-8 h-8" />
                </div>
                <div
                  className="text-lg font-bold"
                  style={{ color: status.color }}
                >
                  {status.level}
                </div>
                <div className="text-sm text-gray-600">
                  Max: {Math.round(maxIntensity)}
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>

      {/* Estatísticas */}
      <div className="mt-6 grid grid-cols-3 gap-6 w-full max-w-md">
        <div className="bg-white p-4 rounded-lg shadow-sm text-center">
          <div className="text-2xl font-bold text-blue-600">{attackCount}</div>
          <div className="text-sm text-gray-500">Ataques Totais</div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm text-center">
          <div className="text-2xl font-bold text-orange-600">
            {attackPoints.length}
          </div>
          <div className="text-sm text-gray-500">Ameaças Ativas</div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm text-center">
          <div className="text-2xl font-bold" style={{ color: status.color }}>
            {Math.round(maxIntensity)}
          </div>
          <div className="text-sm text-gray-500">Intensidade Máx</div>
        </div>
      </div>

      {/* Legenda de cores */}
      <div className="mt-4 flex items-center justify-center space-x-4 text-sm">
        <div className="flex items-center space-x-2">
          <div
            className="w-4 h-4 rounded-full"
            style={{ backgroundColor: "rgba(139, 0, 0, 0.8)" }}
          ></div>
          <span>Crítico</span>
        </div>
        <div className="flex items-center space-x-2">
          <div
            className="w-4 h-4 rounded-full"
            style={{ backgroundColor: "rgba(220, 20, 60, 0.8)" }}
          ></div>
          <span>Alto</span>
        </div>
        <div className="flex items-center space-x-2">
          <div
            className="w-4 h-4 rounded-full"
            style={{ backgroundColor: "rgba(255, 69, 0, 0.8)" }}
          ></div>
          <span>Médio</span>
        </div>
        <div className="flex items-center space-x-2">
          <div
            className="w-4 h-4 rounded-full"
            style={{ backgroundColor: "rgba(255, 140, 0, 0.8)" }}
          ></div>
          <span>Baixo</span>
        </div>
        <div className="flex items-center space-x-2">
          <div
            className="w-4 h-4 rounded-full"
            style={{ backgroundColor: "rgba(154, 205, 50, 0.8)" }}
          ></div>
          <span>Seguro</span>
        </div>
      </div>
    </div>
  );
};

export default HeatMap;

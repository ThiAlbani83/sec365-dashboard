import {
  CheckCircleIcon,
  ExclamationTriangleIcon,
  XCircleIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";

const SystemRadar = () => {
  const [hoveredSystem, setHoveredSystem] = useState(null);

  const systemStatus = [
    { name: "Firewall", status: "online", angle: 45 },
    { name: "Network", status: "online", angle: 135 },
    { name: "Backup", status: "warning", angle: 225 },
    { name: "Sensors", status: "offline", angle: 315 },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "online":
        return { color: "#10B981", bg: "#ECFDF5", label: "Online" };
      case "warning":
        return { color: "#F59E0B", bg: "#FFFBEB", label: "Warning" };
      case "offline":
        return { color: "#EF4444", bg: "#FEF2F2", label: "Offline" };
      default:
        return { color: "#6B7280", bg: "#F9FAFB", label: "Unknown" };
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case "online":
        return <CheckCircleIcon className="w-4 h-4" />;
      case "warning":
        return <ExclamationTriangleIcon className="w-4 h-4" />;
      case "offline":
        return <XCircleIcon className="w-4 h-4" />;
      default:
        return <ClockIcon className="w-4 h-4" />;
    }
  };

  return (
    <div className="h-full flex flex-col items-center justify-center">
      <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">
        System Status Radar
      </h3>

      <div className="relative w-96 h-96 mx-auto">
        {/* Aumentado de w-80 h-80 para w-96 h-96 */}
        {/* Círculos concêntricos */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 200">
          {/* Grid circles */}
          <circle
            cx="100"
            cy="100"
            r="85"
            fill="none"
            stroke="#E5E7EB"
            strokeWidth="1.5"
          />
          <circle
            cx="100"
            cy="100"
            r="65"
            fill="none"
            stroke="#E5E7EB"
            strokeWidth="1.5"
          />
          <circle
            cx="100"
            cy="100"
            r="45"
            fill="none"
            stroke="#E5E7EB"
            strokeWidth="1.5"
          />
          <circle
            cx="100"
            cy="100"
            r="25"
            fill="none"
            stroke="#E5E7EB"
            strokeWidth="1.5"
          />

          {/* Grid lines */}
          <line
            x1="100"
            y1="15"
            x2="100"
            y2="185"
            stroke="#E5E7EB"
            strokeWidth="1.5"
          />
          <line
            x1="15"
            y1="100"
            x2="185"
            y2="100"
            stroke="#E5E7EB"
            strokeWidth="1.5"
          />
          <line
            x1="30"
            y1="30"
            x2="170"
            y2="170"
            stroke="#E5E7EB"
            strokeWidth="1.5"
          />
          <line
            x1="170"
            y1="30"
            x2="30"
            y2="170"
            stroke="#E5E7EB"
            strokeWidth="1.5"
          />

          {/* Efeito de radar circular rotativo - linha que gira 360 graus */}
          <defs>
            <linearGradient
              id="radarGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop
                offset="0%"
                style={{ stopColor: "#10B981", stopOpacity: 0.1 }}
              />
              <stop
                offset="50%"
                style={{ stopColor: "#10B981", stopOpacity: 0.6 }}
              />
              <stop
                offset="100%"
                style={{ stopColor: "#10B981", stopOpacity: 1 }}
              />
            </linearGradient>
          </defs>

          <g>
            {/* Área de sweep do radar - 360 graus completo */}
            <defs>
              <linearGradient
                id="sweepGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop
                  offset="0%"
                  style={{ stopColor: "#10B981", stopOpacity: 0 }}
                />
                <stop
                  offset="80%"
                  style={{ stopColor: "#10B981", stopOpacity: 0.1 }}
                />
                <stop
                  offset="90%"
                  style={{ stopColor: "#10B981", stopOpacity: 0.3 }}
                />
                <stop
                  offset="95%"
                  style={{ stopColor: "#10B981", stopOpacity: 0.5 }}
                />
                <stop
                  offset="100%"
                  style={{ stopColor: "#10B981", stopOpacity: 0.8 }}
                />
              </linearGradient>

              <mask id="radarMask">
                <circle cx="100" cy="100" r="85" fill="white" />
                <circle cx="100" cy="100" r="18" fill="black" />
              </mask>
            </defs>

            {/* Sweep contínuo - path que fica girando sem estado inicial */}
            <defs>
              <linearGradient
                id="continuousSweep"
                gradientUnits="userSpaceOnUse"
              >
                <stop
                  offset="0%"
                  style={{ stopColor: "#10B981", stopOpacity: 0 }}
                />
                <stop
                  offset="85%"
                  style={{ stopColor: "#10B981", stopOpacity: 0 }}
                />
                <stop
                  offset="95%"
                  style={{ stopColor: "#10B981", stopOpacity: 0.4 }}
                />
                <stop
                  offset="98%"
                  style={{ stopColor: "#10B981", stopOpacity: 0.6 }}
                />
                <stop
                  offset="100%"
                  style={{ stopColor: "#10B981", stopOpacity: 0.9 }}
                />

                <animateTransform
                  attributeName="gradientTransform"
                  attributeType="XML"
                  type="rotate"
                  from="0 100 100"
                  to="720 100 100"
                  dur="16s"
                  repeatCount="indefinite"
                />
              </linearGradient>

              <mask id="radarMask">
                <circle cx="100" cy="100" r="85" fill="white" />
                <circle cx="100" cy="100" r="18" fill="black" />
              </mask>
            </defs>

            {/* Círculo completo que simula o sweep contínuo */}
            <circle
              cx="100"
              cy="100"
              r="85"
              fill="url(#continuousSweep)"
              mask="url(#radarMask)"
              opacity="0.8"
            />

            {/* Linha do radar que gira independentemente */}
            {/* <line
              x1="100"
              y1="100"
              x2="100"
              y2="15"
              stroke="#10B981"
              strokeWidth="2"
              strokeLinecap="round"
              opacity="0.9"
            >
              <animateTransform
                attributeName="transform"
                attributeType="XML"
                type="rotate"
                from="0 100 100"
                to="360 100 100"
                dur="5s"
                repeatCount="indefinite"
              />
            </line> */}

            {/* Círculo de sweep adicional para efeito mais visível */}
            <circle
              cx="100"
              cy="100"
              r="85"
              fill="none"
              stroke="#10B981"
              strokeWidth="1"
              opacity="0.15"
              strokeDasharray="2,12"
            >
              <animateTransform
                attributeName="transform"
                attributeType="XML"
                type="rotate"
                from="360 100 100"
                to="0 100 100"
                dur="8s"
                repeatCount="indefinite"
              />
            </circle>
          </g>

          {/* Status points sem efeitos */}
          {systemStatus.map((system, index) => {
            const angleRad = (system.angle * Math.PI) / 180;
            const radius = 75;
            const x = 100 + radius * Math.cos(angleRad - Math.PI / 2);
            const y = 100 + radius * Math.sin(angleRad - Math.PI / 2);
            const statusConfig = getStatusColor(system.status);

            return (
              <g key={system.name}>
                <circle
                  cx={x}
                  cy={y}
                  r="8"
                  fill={statusConfig.color}
                  stroke="white"
                  strokeWidth="2"
                  style={{ cursor: "pointer" }}
                  onMouseEnter={() => setHoveredSystem(system)}
                  onMouseLeave={() => setHoveredSystem(null)}
                />
              </g>
            );
          })}

          {/* Center circle */}
          <circle cx="100" cy="100" r="18" fill="#043345" />
        </svg>

        {/* System labels - posicionados fora do radar */}
        {systemStatus.map((system) => {
          const angleRad = (system.angle * Math.PI) / 180;
          const radius = 110; // Aumentado para posicionar fora do radar
          const x = 100 + radius * Math.cos(angleRad - Math.PI / 2);
          const y = 100 + radius * Math.sin(angleRad - Math.PI / 2);
          const statusConfig = getStatusColor(system.status);

          return (
            <div
              key={system.name}
              className="absolute transform -translate-x-1/2 -translate-y-1/2"
              style={{
                left: `${(x / 200) * 100}%`,
                top: `${(y / 200) * 100}%`,
              }}
            >
              <div
                className="px-3 py-2 rounded-full text-sm font-medium flex items-center gap-2 shadow-lg border-2 border-white backdrop-blur-sm"
                style={{
                  backgroundColor: statusConfig.bg,
                  color: statusConfig.color,
                }}
              >
                {getStatusIcon(system.status)}
                {system.name}
              </div>
            </div>
          );
        })}

        {/* Tooltip */}
        {hoveredSystem && (
          <div
            className="absolute z-10 bg-gray-900 text-white px-3 py-2 rounded-lg shadow-lg text-sm pointer-events-none transform -translate-x-1/2 -translate-y-full"
            style={{
              left: "50%",
              top: "20%",
            }}
          >
            <div className="font-medium">{hoveredSystem.name}</div>
            <div className="text-xs opacity-75">
              {getStatusColor(hoveredSystem.status).label}
            </div>
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SystemRadar;

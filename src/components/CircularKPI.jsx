const CircularKPI = ({ title, value, total, color, icon }) => {
  const percentage = (value / total) * 100;
  const strokeDasharray = 2 * Math.PI * 45; // raio de 45
  const strokeDashoffset =
    strokeDasharray - (strokeDasharray * percentage) / 100;

  const getColorClasses = (color) => {
    switch (color) {
      case "blue":
        return {
          stroke: "stroke-blue-500",
          bg: "bg-blue-50",
          text: "text-blue-600",
          iconBg: "bg-blue-100",
        };
      case "green":
        return {
          stroke: "stroke-green-500",
          bg: "bg-green-50",
          text: "text-green-600",
          iconBg: "bg-green-100",
        };
      case "orange":
        return {
          stroke: "stroke-orange-500",
          bg: "bg-orange-50",
          text: "text-orange-600",
          iconBg: "bg-orange-100",
        };
      case "red":
        return {
          stroke: "stroke-red-500",
          bg: "bg-red-50",
          text: "text-red-600",
          iconBg: "bg-red-100",
        };
      default:
        return {
          stroke: "stroke-gray-500",
          bg: "bg-gray-50",
          text: "text-gray-600",
          iconBg: "bg-gray-100",
        };
    }
  };

  const colors = getColorClasses(color);

  return (
    <div
      className={`${colors.bg} rounded-xl p-6 shadow-lg border border-gray-100`}
    >
      <div className="flex flex-col items-center">
        {/* Ícone */}
        <div className={`${colors.iconBg} p-3 rounded-full mb-4`}>{icon}</div>

        {/* Círculo de progresso */}
        <div className="relative w-24 h-24 mb-4">
          <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 100 100">
            {/* Círculo de fundo */}
            <circle
              cx="50"
              cy="50"
              r="45"
              stroke="currentColor"
              strokeWidth="8"
              fill="none"
              className="text-gray-200"
            />
            {/* Círculo de progresso */}
            <circle
              cx="50"
              cy="50"
              r="45"
              stroke="currentColor"
              strokeWidth="8"
              fill="none"
              strokeLinecap="round"
              className={colors.stroke}
              style={{
                strokeDasharray: strokeDasharray,
                strokeDashoffset: strokeDashoffset,
              }}
            />
          </svg>

          {/* Número no centro */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className={`text-2xl font-bold ${colors.text}`}>{value}</span>
          </div>
        </div>

        {/* Título e porcentagem */}
        <div className="text-center">
          <h3 className="font-semibold text-gray-900 mb-1">{title}</h3>
          <p className="text-sm text-gray-500">
            {percentage.toFixed(1)}% do total
          </p>
          <p className="text-xs text-gray-400 mt-1">
            {value} de {total}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CircularKPI;

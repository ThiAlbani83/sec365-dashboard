const CircularKPI = ({ title, value, total, color }) => {
  const percentage = (value / total) * 100;
  const strokeDasharray = 2 * Math.PI * 35; // raio reduzido para 35
  const strokeDashoffset =
    strokeDasharray - (strokeDasharray * percentage) / 100;

  const getColorClasses = (color) => {
    switch (color) {
      case "blue":
        return {
          stroke: "stroke-blue-500",
          bg: "bg-blue-50",
          text: "text-blue-600",
        };
      case "green":
        return {
          stroke: "stroke-green-500",
          bg: "bg-green-50",
          text: "text-green-600",
        };
      case "orange":
        return {
          stroke: "stroke-orange-500",
          bg: "bg-orange-50",
          text: "text-orange-600",
        };
      case "red":
        return {
          stroke: "stroke-red-500",
          bg: "bg-red-50",
          text: "text-red-600",
        };
      default:
        return {
          stroke: "stroke-gray-500",
          bg: "bg-gray-50",
          text: "text-gray-600",
        };
    }
  };

  const colors = getColorClasses(color);

  return (
    <div
      className={`${colors.bg} rounded-xl p-4 shadow-lg border border-gray-100`}
    >
      <div className="flex flex-col items-center">
        {/* Título acima */}
        <h3 className="font-medium text-gray-900 mb-3 text-sm text-center">
          {title}
        </h3>

        {/* Círculo de progresso */}
        <div className="relative w-16 h-16 mb-2">
          <svg className="w-16 h-16 transform -rotate-90" viewBox="0 0 100 100">
            {/* Círculo de fundo */}
            <circle
              cx="50"
              cy="50"
              r="35"
              stroke="currentColor"
              strokeWidth="6"
              fill="none"
              className="text-gray-200"
            />
            {/* Círculo de progresso */}
            <circle
              cx="50"
              cy="50"
              r="35"
              stroke="currentColor"
              strokeWidth="6"
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
            <span className={`text-lg font-bold ${colors.text}`}>{value}</span>
          </div>
        </div>

        {/* Porcentagem abaixo */}
        <div className="text-center">
          <p className="text-xs text-gray-500">
            {percentage.toFixed(1)}% do total
          </p>
        </div>
      </div>
    </div>
  );
};

export default CircularKPI;

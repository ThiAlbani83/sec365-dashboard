const SimpleKPI = ({ title, value, subtitle, color, trend }) => {
  const getColorClasses = (color) => {
    switch (color) {
      case "blue":
        return {
          bg: "bg-blue-50",
          text: "text-blue-600",
          border: "border-blue-200",
        };
      case "green":
        return {
          bg: "bg-green-50",
          text: "text-green-600",
          border: "border-green-200",
        };
      case "orange":
        return {
          bg: "bg-orange-50",
          text: "text-orange-600",
          border: "border-orange-200",
        };
      case "red":
        return {
          bg: "bg-red-50",
          text: "text-red-600",
          border: "border-red-200",
        };
      case "purple":
        return {
          bg: "bg-purple-50",
          text: "text-purple-600",
          border: "border-purple-200",
        };
      default:
        return {
          bg: "bg-gray-50",
          text: "text-gray-600",
          border: "border-gray-200",
        };
    }
  };

  const colors = getColorClasses(color);

  return (
    <div
      className={`${colors.bg} rounded-xl p-4 shadow-lg border ${colors.border}`}
    >
      {/* Título no topo */}
      <div className="mb-3">
        <div className="text-sm font-medium text-gray-900">{title}</div>
        {trend && (
          <div
            className={`text-xs px-2 py-1 rounded-full mt-1 inline-block ${
              trend.type === "up"
                ? "bg-green-100 text-green-800"
                : trend.type === "down"
                ? "bg-red-100 text-red-800"
                : "bg-gray-100 text-gray-800"
            }`}
          >
            {trend.type === "up" ? "↗" : trend.type === "down" ? "↘" : "→"}{" "}
            {trend.value}
          </div>
        )}
      </div>

      {/* Dados principais */}
      <div className="space-y-1">
        <div className={`text-2xl font-bold ${colors.text}`}>{value}</div>
        <div className="text-xs text-gray-500">{subtitle}</div>
      </div>
    </div>
  );
};

export default SimpleKPI;

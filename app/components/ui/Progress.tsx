interface ProgressProps {
    value: number;
    max?: number;
    color?: 'blue' | 'green' | 'yellow' | 'red';
    showLabel?: boolean;
  }
  
  export function Progress({ value, max = 100, color = 'blue', showLabel = false }: ProgressProps) {
    const percentage = Math.min(100, (value / max) * 100);
    
    const colors = {
      blue: 'bg-blue-600',
      green: 'bg-green-600',
      yellow: 'bg-yellow-600',
      red: 'bg-red-600',
    };
  
    return (
      <div className="space-y-1">
        <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
          <div
            className={`h-full ${colors[color]} transition-all duration-300 rounded-full`}
            style={{ width: `${percentage}%` }}
          />
        </div>
        {showLabel && (
          <div className="flex justify-between text-xs text-gray-500">
            <span>{value.toFixed(2)}</span>
            <span>{max}</span>
          </div>
        )}
      </div>
    );
  }
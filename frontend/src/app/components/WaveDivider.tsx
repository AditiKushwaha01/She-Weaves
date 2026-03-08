export function WaveDivider({ flip = false, color = "rose" }: { flip?: boolean; color?: string }) {
  const colors = {
    rose: '#fff1f2',
    white: '#ffffff',
    purple: '#faf5ff',
  };

  return (
    <div className={`w-full ${flip ? 'rotate-180' : ''}`}>
      <svg
        viewBox="0 0 1440 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto"
      >
        <path
          d="M0,64 C360,20 720,20 1080,64 C1260,86 1350,96 1440,96 L1440,120 L0,120 Z"
          fill={colors[color as keyof typeof colors] || colors.rose}
        />
      </svg>
    </div>
  );
}

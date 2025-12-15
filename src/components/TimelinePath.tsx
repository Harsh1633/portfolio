const TimelinePath = () => {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      viewBox="0 0 1000 800"
      fill="none"
    >
      <defs>
        <filter id="glow">
          <feGaussianBlur stdDeviation="4" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <path
        d="
          M 500 0
          V 150
          C 500 220, 750 220, 750 300
          V 420
          C 750 520, 250 520, 250 600
          V 760
        "
        stroke="#00ff9c"
        strokeWidth="6"
        strokeLinecap="round"
        filter="url(#glow)"
      />
    </svg>
  );
};

export default TimelinePath;

interface Props {
  title: string;
  subtitle: string;
  description: string;
  side: "left" | "right";
  y: string;
}

const TimelineCard = ({ title, subtitle, description, side, y }: Props) => {
  return (
    <div
      style={{ top: y }}
      className={`
        absolute z-10 max-w-xs p-4
        rounded-xl bg-black/80
        border border-[#00ff9c]/40
        shadow-[0_0_20px_rgba(0,255,156,0.15)]
        text-green-400 font-mono
        ${side === "left" ? "right-[58%]" : "left-[58%]"}
      `}
    >
      <p className="text-xs opacity-70">{subtitle}</p>
      <h3 className="font-semibold text-green-300">{title}</h3>
      <p className="text-sm mt-1 opacity-80">{description}</p>
    </div>
  );
};

export default TimelineCard;

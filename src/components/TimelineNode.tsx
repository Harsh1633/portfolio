import { useNavigate } from "react-router-dom";

interface TimelineNodeProps {
  id: string;
  logo: string;
  x: string;
  y: string;
}

const TimelineNode = ({ id, logo, x, y }: TimelineNodeProps) => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(`/projects/${id}`)}
      style={{ left: x, top: y }}
      className="absolute w-14 h-14 rounded-full
                 bg-black border-2 border-green-400
                 shadow-[0_0_15px_rgba(34,197,94,0.7)]
                 flex items-center justify-center
                 hover:scale-110 transition"
    >
      <img src={logo} className="w-7 h-7 object-contain" />
    </button>
  );
};

export default TimelineNode;

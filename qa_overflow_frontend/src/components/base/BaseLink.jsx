import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { nativeColors } from "../../recoil_state/state";

export default function BaseLink({ to, icon, text, active }) {
  const native_colors = useRecoilValue(nativeColors);
  return (
    <Link
      style={{
        backgroundColor: active && native_colors['gray']['1'],
        fontWeight: active && "bold",
      }}
      to={to}
      className="px-2 p-1 w-full hover:bg-gray-100 rounded"
    >
      {icon} {text}
    </Link>
  );
}

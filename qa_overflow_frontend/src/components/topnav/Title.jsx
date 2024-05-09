import { useRecoilValue } from "recoil";
import { nativeColors } from "../../recoil_state/state";

export default function Title() {
  const native_colors = useRecoilValue(nativeColors);
  return (
    <span
      style={{ color: native_colors["teal"]["3"] }}
      className="w-fit border py-2 px-2 rounded-lg shadow-lg font-mono font-medium text-lg text-teal-600"
    >
      Q&A Overflow
    </span>
  );
}

import { useRecoilState, useRecoilValue } from "recoil";
import AuthButtons from "./AuthButtons";
import SearchBar from "./SearchBar";
import Title from "./Title";
import { nativeColors } from "../../recoil_state/state";

const Topnav = () => {
  const native_colors = useRecoilValue(nativeColors);

  return (
    <header className="px-[6%] sticky top-0 left-0 right-0 bg-white py-2 border flex flex-row justify-between items-center space-x-10">
      <div
        style={{ borderColor: native_colors["teal"]["1"] }}
        className="w-[20%] bg-white"
      >
        <Title />
      </div>
      <div className="w-[80%] flex flex-row items-center justify-end space-x-3">
        <SearchBar />
        <AuthButtons />
      </div>
    </header>
  );
};

export default Topnav;

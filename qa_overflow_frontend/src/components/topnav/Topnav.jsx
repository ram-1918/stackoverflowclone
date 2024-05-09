import { useRecoilState } from "recoil";
import AuthButtons from "./AuthButtons";
import SearchBar from "./SearchBar";
import Title from "./Title";

const Topnav = () => {
    return (
        <header 
        className="px-[8%] py-2 border-b-2 border-teal-200 flex flex-row justify-between items-center space-x-10">
            <div className="bg-white border border-teal-600 p-1 px-2 rounded-lg shadow-lg">
                <Title />
            </div>
            <div className="flex flex-row items-center justify-between space-x-2">
                <SearchBar />
                <AuthButtons />
            </div>
        </header>
    );
};

export default Topnav;
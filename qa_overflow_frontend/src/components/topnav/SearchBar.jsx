import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { nativeColors } from "../../recoil_state/state";
import { useRecoilValue } from "recoil";

export default function SearchBar() {
    const [, setSearchText] = useState('');
    return (
        <>
            <SearchInput 
            setSearchText={setSearchText} 
            />
        </>
    )
}

const SearchIcon = ({color}) => (
    <div className="flex justify-center items-center w-10 h-full rounded-bl-lg rounded-tl-lg cursor-pointer hover:opacity-70">
        <FontAwesomeIcon style={{color:color}} icon={faSearch} className={`text-lg`} />
    </div>
);

const SearchInput = ({setSearchText}) => {
    const native_colors = useRecoilValue(nativeColors);
    /*
        Process search text and set resultant data
    */
    return (
        <div style={{borderColor: native_colors["gray"]["1"]}} className="w-[65%] h-8 flex flex-row justify-start items-center space-x-2 rounded-lg  border shadow">
            <SearchIcon color={native_colors['teal']['3']} />
            <input 
            type="text" 
            placeholder="Search for any question..." 
            className="outline-none border-none  w-full h-full px-2 rounded-lg text-[1.1rem]"
            onChange={e => setSearchText(e.target.value)}
            />
        </div>
    )
}
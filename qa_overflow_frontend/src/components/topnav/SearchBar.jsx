import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default function SearchBar() {
    const [searchText, setSearchText] = useState('');
    console.log(searchText);
    return (
        <>
            <SearchInput 
            setSearchText={setSearchText} 
            />
        </>
    )
}

const SearchIcon = () => (
    <div className="flex justify-center items-center w-10 h-full rounded-bl-lg rounded-tl-lg cursor-pointer hover:opacity-70">
        <FontAwesomeIcon icon={faSearch} className="text-lg" />
    </div>
);

const SearchInput = ({setSearchText}) => {
    /*
        Process search text and set resultant data
    */
    return (
        <div className="w-[35rem] h-8 flex flex-row justify-start items-center space-x-2 rounded-lg  border border-teal-400 bg-white">
            <SearchIcon />
            <input 
            type="text" 
            placeholder="Search any question..." 
            className="outline-none border-none  w-full h-full rounded-tr-full rounded-br-full"
            onChange={e => setSearchText(e.target.value)}
            />
        </div>
    )
}
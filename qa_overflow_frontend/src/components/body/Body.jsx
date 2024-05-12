import Menu from "./Menu";
import { Outlet } from 'react-router-dom';
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { votesData } from "../../recoil_state/state";
import { useFetchDataHook } from "../../hooks/GetDataHook";
import { APIURL } from "../../hooks/UpdateDataHook";

const votesurl = `${APIURL}questions/votes`;

export default function Body() {
  /*
  -- API call to get all the votes data of the current user
  -- Store that data in the local state, so it can be used in child components
  */

  const [, setVotesData] = useRecoilState(votesData);
  const { data: votesDataLocal, isLoading: votesLoading } =
    useFetchDataHook(votesurl);

    useEffect(() => {
      // We observe the votesDataLocal variable until it receives API data
      setVotesData(votesDataLocal);
    }, [votesDataLocal]);

    console.log("Body", votesDataLocal);
  
  // if (votesLoading) {
  //   return <Loading />;
  // }

    return (
        <div className="px-[6%] w-full h-full flex flex-row justify-start items-start">
            <Menu />
            <Outlet />
        </div>
    )
}
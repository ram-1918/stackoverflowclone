import Topnav from '../components/topnav/Topnav';
import { Outlet } from 'react-router-dom';
import { nativeColors, questionsData, votesData } from '../recoil_state/state';
import { useRecoilState, useRecoilValue } from 'recoil';
import { useFetchDataHook } from '../hooks/GetDataHook';
import { APIURL } from '../hooks/UpdateDataHook';
import { useEffect } from 'react';
import { Loading } from '../components/base/Base';
// import { Loading } from '../components/base/Loading';

const questionsurl = `${APIURL}questions`;

export default function Main() {    
    const native_colors = useRecoilValue(nativeColors);
    const [, setQuestions] = useRecoilState(questionsData);
    
    const { data:queData, isLoading:queLoading } = useFetchDataHook(questionsurl);

    useEffect(() => {
        setQuestions(queData);
      }, [queData, setQuestions]);    

    if(queLoading) {
        return <Loading />
    };

    // console.log(votesDataState);
    
    return (
        <div style={{color: native_colors['gray']['4']}} className="h-full mb-20 box-border font-sans text-[0.9rem] block">
            <Topnav />
            <Outlet />
            {/* <Footer /> */}
        </div>
    )
}
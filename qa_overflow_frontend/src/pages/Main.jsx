import Topnav from '../components/topnav/Topnav';
import Body from '../components/body/Body';
import Footer from '../components/footer/Footer';
import { Outlet } from 'react-router-dom';
import { nativeColors, questionsData } from '../recoil_state/state';
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
    
    const { data, isLoading } = useFetchDataHook(questionsurl);

    useEffect(() => {
        setQuestions(data);
      }, [data, setQuestions]);

    if(isLoading) {
        return <Loading />
    }

    return (
        <div style={{color: native_colors['gray']['4']}} className="h-full mb-20 box-border font-sans text-[0.9rem] block">
            <Topnav />
            <Outlet />
            {/* <Footer /> */}
        </div>
    )
}
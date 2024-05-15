import Topnav from '../components/topnav/Topnav';
import { Outlet } from 'react-router-dom';
import { currentUser, nativeColors, questionsData } from '../recoil_state/state';
import { useRecoilState, useRecoilValue } from 'recoil';
import { useFetchDataHook } from '../hooks/GetDataHook';
import { APIURL } from '../hooks/UpdateDataHook';
import { Loading } from '../components/base/Base';

const questionsurl = `${APIURL}questions`;
const userurl = `${APIURL}users/${2}`;

export default function Main() {    
    const native_colors = useRecoilValue(nativeColors);
    const [, setCurrentUser] = useRecoilState(currentUser);
    const [, setQuestions] = useRecoilState(questionsData);

    const { error:questionDetailsError } = useFetchDataHook(questionsurl, setQuestions);
    const { error:userDetailsError } = useFetchDataHook(userurl, setCurrentUser);

    if(questionDetailsError){
        return <Loading text={questionDetailsError.code} />
    }
    if(userDetailsError){
        return <Loading text={userDetailsError.code} />
    }
    return (
        <div style={{color: native_colors['gray']['4']}} className="h-full mb-20 box-border font-sans text-[0.9rem] block">
            <Topnav />
            <Outlet />
        </div>
    )
}
import Topnav from '../components/topnav/Topnav';
import Body from '../components/body/Body';
import Footer from '../components/footer/Footer';
import { Outlet } from 'react-router-dom';
import { nativeColors } from '../recoil_state/state';
import { useRecoilValue } from 'recoil';

export default function Main() {    
    const native_colors = useRecoilValue(nativeColors);
    return (
        <div style={{color: native_colors['gray']['4']}} className="h-screen mb-20 box-border font-sans text-[0.9rem] block">
            <Topnav />
            <Outlet />
            {/* <Footer /> */}
        </div>
    )
}
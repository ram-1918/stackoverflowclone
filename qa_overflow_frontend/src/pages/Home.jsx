import Topnav from '../components/topnav/Topnav';
import Body from '../components/body/Body';
import Footer from '../components/footer/Footer';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { activeItem } from '../recoil_state/state';

export default function Home() {
    const [, setActiveItem] = useRecoilState(activeItem);
    useEffect(() => {setActiveItem('home')}, [])
    return (
        <div className="h-screen box-border font-sans text-[0.9rem] block">
            <p>HOME</p>
            {/* <Topnav /> */}
            {/* <Body /> */}
            {/* <Footer /> */}
        </div>
    );
};
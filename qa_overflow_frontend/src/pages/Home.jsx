import Topnav from '../components/topnav/Topnav';
import Body from '../components/body/Body';
import Footer from '../components/footer/Footer';

export default function Home() {    
    return (
        <div className="h-screen box-border font-sans text-[0.9rem] block">
            <Topnav />
            <Body />
            {/* <Footer /> */}
        </div>
    )
}
import Topnav from '../components/topnav/Topnav';
import Body from '../components/body/Body';

export default function Home() {
    return (
        <div className="box-border font-sans text-[0.9rem] block">
            <Topnav />
            <Body />
        </div>
    )
}
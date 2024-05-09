import Menu from "./Menu";
import { Outlet } from 'react-router-dom';

export default function Home() {
    return (
        <div className="px-[8%] w-full h-full flex flex-row justify-start items-start">
            <Menu />
            <Outlet />
        </div>
    )
}
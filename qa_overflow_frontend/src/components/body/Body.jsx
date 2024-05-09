import Menu from "./Menu";
import { Outlet } from 'react-router-dom';

export default function Body() {
    return (
        <div className="px-[6%] w-full h-full flex flex-row justify-start items-start">
            <Menu />
            <Outlet />
        </div>
    )
}
import { Link } from "react-router-dom";

export default function BaseLink({to, icon, text}) {
    return (
        <Link to={to} className="px-2 p-1 w-full hover:bg-gray-100">{icon} {text}</Link>
    )
}
import { useRecoilState } from "recoil";
import { activeItem } from "../recoil_state/state";
import { useEffect } from "react";

export default function UsersList() {
    const [, setActiveItem] = useRecoilState(activeItem);
    useEffect(() => {setActiveItem('users')}, [])

    return (
        <div>Users Grid</div>
    )
}
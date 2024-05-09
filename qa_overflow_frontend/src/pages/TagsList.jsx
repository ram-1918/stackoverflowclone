import { useRecoilState } from "recoil";
import { activeItem } from "../recoil_state/state";
import { useEffect } from "react";

export default function TagsList() {
    const [, setActiveItem] = useRecoilState(activeItem);
    useEffect(() => {setActiveItem('tags')}, [])

    return (
        <div>Tags Grid</div>
    )
}
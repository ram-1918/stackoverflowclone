import { useRecoilValue } from "recoil";
import { currentUser, nativeColors } from "../../recoil_state/state";
import BaseButton from "../base/BaseButtons";

export default function AuthButtons() {
    const native_colors = useRecoilValue(nativeColors);
    const current_user = useRecoilValue(currentUser);
    const buttons = (
        <>
            <BaseButton content="Log in" bg="white" border={native_colors['teal']['3']} text={native_colors['teal']['3']} />
            <BaseButton content="Sign up" bg={native_colors['teal']['3']} border="" text="white" />
        </>
    );
    return current_user ? `${current_user.displayname}(${current_user.id})` : buttons;
}
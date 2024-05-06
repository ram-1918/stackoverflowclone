import BaseButton from "../base/BaseButtons";

export default function AuthButtons() {
    return (
        <>
            <BaseButton content="Log in" bg="white" border="teal" text="teal" />
            <BaseButton content="Sign up" bg="teal" border="teal" text="white" />
        </>
    )
}
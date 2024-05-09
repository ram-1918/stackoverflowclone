import BaseLink from "../base/BaseLink";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faMessage,
  faTag,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { useRecoilValue } from "recoil";
import { activeItem } from "../../recoil_state/state";

const HomeIcon = () => <FontAwesomeIcon icon={faHome} />;
const QuestionsIcon = () => <FontAwesomeIcon icon={faMessage} />;
const TagIcon = () => <FontAwesomeIcon icon={faTag} />;
const UserIcon = () => <FontAwesomeIcon icon={faUser} />;

export default function Menu() {
  const activeItemFromState = useRecoilValue(activeItem);
  return (
    <div className="w-[15%] py-[2%] sticky top-[7%]">
      <div className="flex flex-col justify-start items-start">
        <BaseLink
          to="/home"
          text="Home"
          icon={<HomeIcon />}
          active={activeItemFromState === "home"}
        />
        <BaseLink
          to="/features/questions"
          text="Questions"
          icon={<QuestionsIcon />}
          active={activeItemFromState === "questions"}
        />
        <BaseLink
          to="/features/tags"
          text="tags"
          icon={<TagIcon />}
          active={activeItemFromState === "tags"}
        />
        <br></br>
        <BaseLink
          to="/features/users"
          text="Users"
          icon={<UserIcon />}
          active={activeItemFromState === "users"}
        />
      </div>
    </div>
  );
}

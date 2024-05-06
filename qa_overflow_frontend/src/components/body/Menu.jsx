import BaseLink from "../base/BaseLink";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faMessage, faTag, faUser } from "@fortawesome/free-solid-svg-icons";

const HomeIcon = () => <FontAwesomeIcon icon={faHome} />;
const QuestionsIcon = () => <FontAwesomeIcon icon={faMessage} />;
const TagIcon = () => <FontAwesomeIcon icon={faTag} />;
const UserIcon = () => <FontAwesomeIcon icon={faUser} />;

export default function Menu() {
    return (
        <div className="py-[1%] w-[12%] h-full border-r border-gray-100">
              <div className="h-full flex flex-col justify-start items-start">
                <BaseLink to="/home" text="Home" icon={<HomeIcon />} />
                <BaseLink to="/questions" text="Questions" icon={<QuestionsIcon />} />
                <BaseLink to="/tags" text="tags" icon={<TagIcon />} />
                <br></br>
                <BaseLink to="/users" text="Users" icon={<UserIcon />} />
              </div>
        </div>
    )
}
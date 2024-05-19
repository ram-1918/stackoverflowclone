import { useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { questionsData } from "../../../recoil_state/state";
import { BaseTagListDisplay, BaseUserInfoCard, BaseUtilLinks, Loading } from "../../base/Base";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faPlus, faShare } from "@fortawesome/free-solid-svg-icons";

export default function DetailsPanel() {
    const { qid } = useParams();
  
    const question = useRecoilValue(questionsData).items.filter(
      (item) => item.id === parseInt(qid)
    )?.[0];
  
    if (!question) {
      return <Loading text="Loading more details" />;
    }
    const { body, tags, ...rest } = question;
  
    return (
      <div className="w-[90%] h-full flex flex-col justify-start items-start space-y-0 border-b ">
        <div className="w-full flex flex-col space-y-4 p-2">
          <span className="w-full p-2 leading-6 tracking-wide text-wrap whitespace-pre-wrap pb-2">
            {body}
          </span>
          {tags && <BaseTagListDisplay tags={tags} />}
        </div>
        <div className="w-full flex flex-row justify-between items-center p-2">
          <div className="flex flex-row justify-around items-center space-x-4">
            <BaseUtilLinks
              text="Share"
              to="/share"
              icon={<FontAwesomeIcon icon={faShare} />}
            />
            <BaseUtilLinks
              text="Edit"
              to="/features/questions/:qid/edit"
              icon={<FontAwesomeIcon icon={faEdit} />}
            />
            <BaseUtilLinks
              text="Follow"
              to="/follow"
              icon={<FontAwesomeIcon icon={faPlus} />}
            />
          </div>
          {rest.owner && <BaseUserInfoCard {...rest} />}
        </div>
      </div>
    );
  };
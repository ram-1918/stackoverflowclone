import { faEye, faEyeSlash, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { nativeColors } from "../../recoil_state/state";
import { useRecoilValue } from "recoil";
import { Link } from "react-router-dom";
import { CaretDownIcon, CaretUpIcon } from "./BaseIcons";

const OpenEye = () => (
  <FontAwesomeIcon icon={faEye} />
);
const CloseEye = () => (
  <FontAwesomeIcon icon={faEyeSlash} />
);

export const Loading = ({text}) => <div>{text}...</div>;

export const BaseDisplayName = ({ displayname }) => {
  // Dispalyname ~ Username
  return <span className="text-green-700 font-medium">{displayname}</span>;
};

export const BaseDisplayDate = ({ date }) => {
  return <span className="font-light">{date}</span>;
};

const BaseTagStyle = ({ tag }) => {
  const native_colors = useRecoilValue(nativeColors);
  return (
    <span
      style={{ backgroundColor: native_colors["teal"]["2"] }}
      className="px-2 text-sm text-teal-700 bg-teal-100"
    >
      {tag}
    </span>
  );
};

export const BaseTagListDisplay = ({ tags }) => {
  return (
    <div className="flex flex-row space-x-2 flex-grow flex-wrap">
      {tags.map((tag, idx) => (
        <BaseTagStyle key={idx} tag={tag} />
      ))}
    </div>
  );
};

export const BaseAskedBy = ({ displayname, date }) => {
  return (
    <span className="w-fit float-right text-xs font-extralight">
      <BaseDisplayName displayname={displayname} /> asked on{" "}
      <BaseDisplayDate date={date} />
    </span>
  );
};

export const BaseUserInfoCard = ({ owner: { displayname }, created_at }) => {
  const native_colors = useRecoilValue(nativeColors);
  return (
    <div
      style={{ backgroundColor: native_colors["teal"]["1"] }}
      className="flex flex-col justify-start items-start p-2 rounded-lg shadow"
    >
      <span className="text-[0.8rem]">asked {created_at}</span>
      <div className="flex justify-start items-center space-x-2">
        <span className="bg-red-400 flex justify-center items-center rounded-full w-8 h-8">
          <FontAwesomeIcon icon={faUser} className="text-lg" />
        </span>
        <div className="flex flex-col justify-start items-start">
          <BaseDisplayName displayname={displayname} />
          <span>500k - 53 - 501 - 548</span>
        </div>
      </div>
    </div>
  );
};

const activeColor = "rgb(243 244 246)";

const caretStyle =
  "w-10 h-10 rounded-full shadow border cursor-pointer border-gray-200 flex justify-center items-center text-xl";

export const CaretUpSpan = ({ voted, ...rest }) => {
    return (
      <span
        {...rest}
        style={{ backgroundColor: voted === "upvote" && activeColor }}
        className={caretStyle}
      >
        {<CaretUpIcon />}
      </span>
    );
  };
  
export const CaretDownSpan = ({ voted, ...rest }) => {
    return (
      <span
        {...rest}
        style={{ backgroundColor: voted === "downvote" && activeColor }}
        className={caretStyle}
      >
        {<CaretDownIcon />}
      </span>
    );
  };

export const BaseGreenTick = ({ size, color }) => (
  <span>
    <i
      style={{ fontSize: size, color: color }}
      className={`fa fa-check text-green-700`}
    ></i>
  </span>
);

export const BaseVisiblityToggle = ({visibleMode, ...others}) => {
  return (
    <span
    {...others}
      style={{
        backgroundColor: visibleMode ? "lightgray" : "lightpink",
      }}
      className="select-none text-[0.7rem] rounded-full px-2 py-1 cursor-pointer"
    >
      {visibleMode ? <OpenEye /> : <CloseEye />}{" "}
      {visibleMode ? "Public" : "Private"}
    </span>
  );
};

export const BaseDiscardDraft = ({draft_key, template, setFunc}) => {
  const deleteFromDraft = () => {
    localStorage.removeItem(draft_key);
    setFunc(template);
  };
  return (
    <span 
    className="text-red-500 text-md underline cursor-pointer hover:opacity-80"
    onClick={() => deleteFromDraft()}>
      Discard Draft
    </span>
  )
};

export const BaseUtilLinks = ({text, to, icon}) => {
  return (
    <Link to={to} className="text-blue-500 cursor-pointer hover:opacity-80 text-xs">{icon} {text}</Link>
  )
}
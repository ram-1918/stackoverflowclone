import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { nativeColors } from "../../recoil_state/state";
import { useRecoilValue } from "recoil";
import { Link } from "react-router-dom";

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
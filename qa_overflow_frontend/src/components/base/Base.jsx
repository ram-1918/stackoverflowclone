import { faListCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export const BaseDisplayName = ({ displayname }) => {
  // Dispalyname ~ Username
  return <span className="text-green-700 font-medium">{displayname}</span>;
};

export const BaseDisplayDate = ({ date }) => {
  return <span className="font-light">{date}</span>;
};

const BaseTagStyle = ({ tag }) => (
  <span className="p-1 text-sm rounded-md bg-green-100">{tag}</span>
);

export const BaseTagListDisplay = ({ tags }) => {
  return (
    <div className="flex flex-row space-x-2 flex-grow flex-wrap">
      {tags.map((tag, idx) => (
        <BaseTagStyle key={idx} tag={tag} />
      ))}
    </div>
  );
};

export const BaseAskedBy = ({displayname, date}) => {
    return (
        <span className="w-fit float-right text-xs font-extralight">
            <BaseDisplayName displayname={displayname} /> asked on{" "}
            <BaseDisplayDate date={date} />
        </span>
    );
};

export const BaseGreenTick = ({size, color}) => (
    <span><i style={{fontSize:size, color: color}} className={`fa fa-check text-green-700`}></i></span>
)
import { faCaretDown, faCaretUp, faEdit, faHistory, faPlus, faShare, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { nativeColors } from "../../../recoil_state/state";
import { useRecoilValue } from "recoil";
import { BaseDisplayName, BaseTagListDisplay, BaseUtilLinks, BaseVisiblityToggle, Loading } from "../../base/Base";
import { useUpdateDataHook } from "../../../hooks/UpdateDataHook";
import ToggleMode from "../questions/support/ToggleMode";

const CaretUpIcon = () => <FontAwesomeIcon icon={faCaretUp} />;
const CaretDownIcon = () => <FontAwesomeIcon icon={faCaretDown} />;
const BookmarkIcon = () => <i className="fa fa-bookmark-o text-xl"></i>
const ActivityIcon = () => <FontAwesomeIcon icon={faHistory} />;

const CaretUpSpan = () => {
    return (
        <span className="w-10 h-10 rounded-full border border-gray-500 flex justify-center items-center text-xl">
            {<CaretUpIcon />}
        </span>
    );
};

const CaretDownSpan = () => {
    return (
        <span className="w-10 h-10 rounded-full border border-gray-500 flex justify-center items-center text-xl">
            {<CaretDownIcon />}
        </span> 
    );
};

const LeftDiv = ({id, owner, score, visibility}) => {
    if(!owner) {
        return <Loading />;
    }
    return (
            <div className="w-[12%] h-full px-2 flex flex-col justify-start items-center space-y-2">
                {/* Public/Private can only be applicable for questions */}
                {owner.id === 2 && <ToggleMode qid={id} visibility={visibility} />}
                <CaretUpSpan />
                <span className="text-lg font-semibold">{score}</span>
                <CaretDownSpan />
                <BookmarkIcon />
                <ActivityIcon />
            </div>
    );
};

const InfoBox = ({owner:{displayname}, created_at}) => {
    const native_colors = useRecoilValue(nativeColors);
    return (
        <div style={{backgroundColor: native_colors['teal']['1']}} className="flex flex-col justify-start items-start p-2 rounded-lg shadow">
            <span className="text-[0.8rem]">asked {created_at}</span>
            <div className="flex justify-start items-center space-x-2">
                <span className="bg-red-400 flex justify-center items-center rounded-full w-8 h-8"><FontAwesomeIcon icon={faUser} className="text-lg" /></span>
                <div className="flex flex-col justify-start items-start">
                    <BaseDisplayName displayname={displayname}/>
                    <span>500k - 53 - 501 - 548</span>
                </div>
            </div>
        </div>
    );
};

const RightDiv = ({body, ...rest}) => {
    if(!rest.owner || !rest.tags) {
        // Inorder to use nested data, we should let it load first.
        return <div><Loading /></div>
    }
    return (
        <div className="w-[90%] h-full flex flex-col justify-start items-start space-y-0 border-b ">
            <div className="w-full flex flex-col space-y-4 p-2">
                <span className="w-full p-2 leading-6 tracking-wide text-wrap whitespace-pre-wrap pb-2">
                    {body}
                </span>
                <BaseTagListDisplay tags={rest.tags} />
            </div>
            <div className="w-full flex flex-row justify-between items-center p-2">
                <div className="flex flex-row justify-around items-center space-x-4">
                    <BaseUtilLinks text="Share" to="/share" icon={<FontAwesomeIcon icon={faShare} />} />
                    <BaseUtilLinks text="Edit" to="/features/questions/:qid/edit" icon={<FontAwesomeIcon icon={faEdit} />} />
                    <BaseUtilLinks text="Follow" to="/follow" icon={<FontAwesomeIcon icon={faPlus} />} />
                </div>
                <InfoBox {...rest} />
            </div>
        </div>
    );
};

export default function Description({...props}) {
    return (
        <div className="w-full h-fit flex flex-row justify-center items-start py-1 ">
            <LeftDiv {...props} />
            <RightDiv {...props} />
        </div>
    )
}
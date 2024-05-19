import { faCaretDown, faCaretUp, faHistory } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const CaretUpIcon = () => <FontAwesomeIcon icon={faCaretUp} />;
export const CaretDownIcon = () => <FontAwesomeIcon icon={faCaretDown} />;
export const ActivityIcon = () => <FontAwesomeIcon icon={faHistory} />;
export const BookmarkIcon = () => <i className="fa fa-bookmark-o text-xl"></i>;
import { useState } from "react";
import { APIURL, useUpdateDataHook } from "../../../../hooks/UpdateDataHook";
import { BaseVisiblityToggle } from "../../../base/Base";


const ToggleMode = ({ qid, visibility }) => {
    const [visibleMode, setVisibleMode] = useState(visibility);
    const {updateData} = useUpdateDataHook();
    const url = `${APIURL}questions/${qid}`;

    const handleVisibility = () => {
        // Make an API call to update visibility status
        setVisibleMode(prev => !prev);
        updateData(url, {"visibility": !visibleMode})
    }

  return <BaseVisiblityToggle visibleMode={visibleMode} onClick={() => handleVisibility()} />
};

export default ToggleMode;

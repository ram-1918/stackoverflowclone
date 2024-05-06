import { questionData } from "../../../data";
import Description from "./Description";

export default function FollowUp() {
    const id = 1;    // Answers based on the Question ID.
    let data = questionData.filter(q => q.id === id);
    if (data.length === 0) {
        return <div>invalid Question id</div>
    }
    data = data[0];
    return (
        <div className="bg-red-200">
            {data.description.length} Answers
            <Description description={data.description} />
        </div>
    );
};
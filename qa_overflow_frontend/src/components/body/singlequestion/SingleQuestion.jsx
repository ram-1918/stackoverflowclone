import { questionData } from "../../../data"
import Description from "./Description";
import FollowUp from "./FollowUp";
import Title from "./Title";

export default function SingleQuestion() {
    const id = 1;
    let data = questionData.filter(q => q.id === id);
    if (data.length === 0) {
        return <div>invalid Question id</div>
    }
    data = data[0];
    return (
        <div className="border-l border-gray-200 w-full h-full p-4">
            <Title title={data.title} />
            <Description description={data.description} />
            <FollowUp />
        </div>
    )
}
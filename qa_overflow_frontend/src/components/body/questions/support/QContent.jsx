import OneQuestion from "./OneQuestion";
import { questionData } from '../../../../data';

const QContent = () => {
    return (
        <div className="w-full flex flex-col">
            {questionData.map(que => <OneQuestion key={que.id} que={que} />)}
        </div>
    );
};

export default QContent;
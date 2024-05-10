// import { questionData } from "../../../data";
import Description from "./Description";
import FollowUp from "./FollowUp";
import Title from "./Title";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { activeItem, questionsData } from "../../../recoil_state/state";

export default function SingleQuestion() {
    const [, setActiveItem] = useRecoilState(activeItem);
    const {qid} = useParams();
    const [currentQuestion, setCurrentQuestion] = useState({});
    const data = useRecoilValue(questionsData);
    
    useEffect(() => {setActiveItem('questions')}, []);     // Active Menu Item
    useEffect(() => {
        // useEffect observes data until it is available
        if(data) {
            const question = data.items.filter(item => item.id === parseInt(qid));
            setCurrentQuestion(question[0]);
        }
    }, [data]);

    return (
        <div className="border-l border-gray-200 w-full h-full p-4">>
            <Title {...currentQuestion} />
            <Description {...currentQuestion} />
            {/* <FollowUp /> */}
        </div>
    );
};